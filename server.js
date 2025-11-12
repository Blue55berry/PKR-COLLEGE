const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean); // Removes falsy values if FRONTEND_URL is not set

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
  },
  credentials: true
}));
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pkr_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff'], required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Student Schema
const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, required: true },
  batch: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: Number, required: true },
  cgpa: { type: Number, default: 0 },
  phoneNumber: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Course Schema
const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: Number, required: true },
  credits: { type: Number, required: true },
  academicYear: { type: String, required: true },
  instructor: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Student Marks Schema
const studentMarksSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  marks: {
    test1: { type: Number, default: 0 },
    test2: { type: Number, default: 0 },
    assignment1: { type: Number, default: 0 },
    assignment2: { type: Number, default: 0 },
    semesterExam: { type: Number, default: 0 },
    totalMarks: { type: Number, default: 0 },
    grade: { type: String, default: 'F' }
  },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Attainment Schema
const attainmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  co1: { type: Number, default: 0 },
  co2: { type: Number, default: 0 },
  co3: { type: Number, default: 0 },
  co4: { type: Number, default: 0 },
  co5: { type: Number, default: 0 },
  po1: { type: Number, default: 0 },
  po2: { type: Number, default: 0 },
  po3: { type: Number, default: 0 },
  overallAttainment: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
const StudentMarks = mongoose.model('StudentMarks', studentMarksSchema);
const Attainment = mongoose.model('Attainment', attainmentSchema);

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /xlsx|xls|csv/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    
    if (extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only Excel files are allowed'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};

// Routes

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { 
        userId: user._id, 
        role: user.role, 
        username: user.username,
        fullName: user.fullName 
      },
      process.env.JWT_SECRET || 'your_jwt_secret_key',
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        fullName: user.fullName,
        email: user.email,
        department: user.department
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Dashboard Stats
app.get('/api/dashboard/stats', verifyToken, async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalStaff = await User.countDocuments({ role: 'staff' });
    const totalAttainments = await Attainment.countDocuments();
    const totalMarks = await StudentMarks.countDocuments();
    
    res.json({
      success: true,
      data: {
        totalStudents,
        totalCourses,
        totalStaff,
        totalAttainments,
        totalMarks
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Student Routes
app.get('/api/students', verifyToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;
    
    const students = await Student.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await Student.countDocuments();
    
    res.json({
      success: true,
      data: students,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/students', verifyToken, async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: 'Roll number already exists' });
    } else {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
});

app.put('/api/students/:id', verifyToken, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id, 
      { ...req.body, updatedAt: new Date() }, 
      { new: true }
    );
    
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.delete('/api/students/:id', verifyToken, async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Course Routes
app.get('/api/courses', verifyToken, async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/courses', verifyToken, async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: 'Course code already exists' });
    } else {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
});

app.put('/api/courses/:id', verifyToken, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.delete('/api/courses/:id', verifyToken, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    
    res.json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Staff Management Routes (Admin only)
app.get('/api/staff', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }
    
    const staff = await User.find({ role: 'staff' }, '-password');
    res.json({ success: true, data: staff });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/staff', verifyToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }
    
    const { username, password, fullName, email, department } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const staff = new User({
      username,
      password: hashedPassword,
      role: 'staff',
      fullName,
      email,
      department
    });
    
    await staff.save();
    res.status(201).json({ success: true, message: 'Staff created successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: 'Username already exists' });
    } else {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
});

// Excel Upload and Parse Route
app.post('/api/excel/upload', verifyToken, upload.single('excelFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Clean up the uploaded file
    fs.unlinkSync(req.file.path);

    // Map Excel columns to our schema
    const mappedData = jsonData.map(row => ({
      rollNumber: row['Roll Number'] || row['rollNumber'] || row['RollNumber'] || '',
      name: row['Name'] || row['Student Name'] || row['name'] || '',
      email: row['Email'] || row['email'] || `${row['Roll Number'] || 'student'}@pkr.edu`,
      course: row['Course'] || row['course'] || 'Not specified',
      batch: row['Batch'] || row['batch'] || new Date().getFullYear() + '-' + (new Date().getFullYear() + 4),
      department: row['Department'] || row['department'] || 'General',
      semester: parseInt(row['Semester'] || row['semester']) || 1,
      cgpa: parseFloat(row['CGPA'] || row['cgpa']) || 0,
      phoneNumber: row['Phone'] || row['phoneNumber'] || '',
      address: row['Address'] || row['address'] || ''
    }));

    res.json({
      success: true,
      data: mappedData,
      message: 'Excel file parsed successfully'
    });
  } catch (error) {
    console.error('Excel upload error:', error);
    res.status(500).json({ success: false, message: 'Failed to parse Excel file' });
  }
});

// Save Excel Data to Database
app.post('/api/excel/save-to-database', verifyToken, async (req, res) => {
  try {
    const { students } = req.body;

    const savedStudents = [];
    const errors = [];

    for (let studentData of students) {
      try {
        // Check if student exists
        const existingStudent = await Student.findOne({ 
          rollNumber: studentData.rollNumber 
        });

        if (!existingStudent) {
          // Create new student
          const newStudent = new Student({
            rollNumber: studentData.rollNumber,
            name: studentData.name,
            email: studentData.email,
            course: studentData.course,
            batch: studentData.batch,
            department: studentData.department,
            semester: studentData.semester,
            cgpa: studentData.cgpa || 0,
            phoneNumber: studentData.phoneNumber || '',
            address: studentData.address || ''
          });

          await newStudent.save();
          savedStudents.push(newStudent);
        } else {
          // Update existing student
          existingStudent.name = studentData.name;
          existingStudent.email = studentData.email;
          existingStudent.course = studentData.course;
          existingStudent.batch = studentData.batch;
          existingStudent.department = studentData.department;
          existingStudent.semester = studentData.semester;
          existingStudent.cgpa = studentData.cgpa || 0;
          existingStudent.phoneNumber = studentData.phoneNumber || '';
          existingStudent.address = studentData.address || '';
          existingStudent.updatedAt = new Date();

          await existingStudent.save();
          savedStudents.push(existingStudent);
        }
      } catch (error) {
        errors.push({
          rollNumber: studentData.rollNumber,
          error: error.message
        });
      }
    }

    res.json({
      success: true,
      data: {
        savedCount: savedStudents.length,
        errorCount: errors.length,
        savedStudents,
        errors
      },
      message: `Successfully processed ${savedStudents.length} students`
    });
  } catch (error) {
    console.error('Save to database error:', error);
    res.status(500).json({ success: false, message: 'Failed to save to database' });
  }
});

// Save Student Marks
app.post('/api/student-marks', verifyToken, async (req, res) => {
  try {
    const { studentId, rollNumber, name, marks, courseId } = req.body;

    // Check if marks already exist for this student
    const existingMarks = await StudentMarks.findOne({ 
      studentId: studentId,
      rollNumber: rollNumber 
    });

    // Calculate total marks and grade
    const totalMarks = Object.values(marks).reduce((sum, mark) => sum + (parseFloat(mark) || 0), 0);
    const percentage = (totalMarks / 500) * 100; // Assuming total is 500
    
    let grade = 'F';
    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B+';
    else if (percentage >= 60) grade = 'B';
    else if (percentage >= 50) grade = 'C';
    else if (percentage >= 40) grade = 'D';

    const marksData = {
      studentId,
      rollNumber,
      name,
      courseId,
      marks: {
        ...marks,
        totalMarks,
        grade
      },
      uploadedBy: req.user.userId,
      updatedAt: new Date()
    };

    let studentMarks;
    if (existingMarks) {
      studentMarks = await StudentMarks.findByIdAndUpdate(
        existingMarks._id,
        marksData,
        { new: true }
      );
    } else {
      studentMarks = new StudentMarks(marksData);
      await studentMarks.save();
    }

    res.json({
      success: true,
      data: studentMarks,
      message: 'Marks saved successfully'
    });
  } catch (error) {
    console.error('Save marks error:', error);
    res.status(500).json({ success: false, message: 'Failed to save marks' });
  }
});

// Get Student Marks
app.get('/api/student-marks', verifyToken, async (req, res) => {
  try {
    const marks = await StudentMarks.find()
      .populate('studentId', 'rollNumber name')
      .populate('courseId', 'courseCode courseName')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: marks
    });
  } catch (error) {
    console.error('Get marks error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch marks' });
  }
});

// Export Marks to Excel
app.get('/api/excel/export-marks', verifyToken, async (req, res) => {
  try {
    const marks = await StudentMarks.find()
      .populate('studentId', 'rollNumber name course department')
      .populate('courseId', 'courseCode courseName');

    const exportData = marks.map(mark => ({
      'Roll Number': mark.rollNumber,
      'Student Name': mark.name,
      'Course': mark.studentId?.course || 'N/A',
      'Department': mark.studentId?.department || 'N/A',
      'Test 1 (100)': mark.marks.test1,
      'Test 2 (100)': mark.marks.test2,
      'Assignment 1 (100)': mark.marks.assignment1,
      'Assignment 2 (100)': mark.marks.assignment2,
      'Semester Exam (100)': mark.marks.semesterExam,
      'Total Marks (500)': mark.marks.totalMarks,
      'Percentage': ((mark.marks.totalMarks / 500) * 100).toFixed(2) + '%',
      'Grade': mark.marks.grade,
      'Created Date': mark.createdAt.toISOString().split('T')[0],
      'Updated Date': mark.updatedAt.toISOString().split('T')[0]
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    
    // Set column widths
    const maxWidth = 20;
    const cols = Object.keys(exportData[0] || {}).map(() => ({ wch: maxWidth }));
    worksheet['!cols'] = cols;
    
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Student Marks');

    const fileName = `student-marks-${Date.now()}.xlsx`;
    const filePath = path.join('uploads', fileName);

    XLSX.writeFile(workbook, filePath);

    res.download(filePath, `student-marks-${new Date().toISOString().split('T')[0]}.xlsx`, (err) => {
      if (err) {
        console.error('Download error:', err);
      }
      // Clean up the file after download
      setTimeout(() => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }, 30000); // Delete after 30 seconds
    });
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ success: false, message: 'Failed to export marks' });
  }
});

// Attainment Routes
app.get('/api/attainments', verifyToken, async (req, res) => {
  try {
    const attainments = await Attainment.find()
      .populate('courseId', 'courseCode courseName')
      .populate('studentId', 'rollNumber name')
      .sort({ createdAt: -1 });
    
    res.json({ success: true, data: attainments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/attainments', verifyToken, async (req, res) => {
  try {
    const attainment = new Attainment(req.body);
    await attainment.save();
    
    const populatedAttainment = await Attainment.findById(attainment._id)
      .populate('courseId', 'courseCode courseName')
      .populate('studentId', 'rollNumber name');
    
    res.status(201).json({ success: true, data: populatedAttainment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Initialize default users
const initializeDefaultUsers = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      const admin = new User({
        username: 'admin',
        password: hashedPassword,
        role: 'admin',
        fullName: 'System Administrator',
        email: 'admin@pkr.edu',
        department: 'Administration'
      });
      await admin.save();
      console.log('Default admin user created: admin/admin123');
    }
    
    const staffExists = await User.findOne({ role: 'staff' });
    if (!staffExists) {
      const hashedPassword = await bcrypt.hash('staff123', 12);
      const staff = new User({
        username: 'staff',
        password: hashedPassword,
        role: 'staff',
        fullName: 'Staff User',
        email: 'staff@pkr.edu',
        department: 'Computer Science'
      });
      await staff.save();
      console.log('Default staff user created: staff/staff123');
    }
  } catch (error) {
    console.error('Error initializing users:', error);
  }
};

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, message: 'File too large' });
    }
  }
  res.status(500).json({ success: false, message: error.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDefaultUsers();
});
