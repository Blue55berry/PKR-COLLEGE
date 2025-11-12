const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

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
const Attainment = mongoose.model('Attainment', attainmentSchema);

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
    
    res.json({
      success: true,
      data: {
        totalStudents,
        totalCourses,
        totalStaff,
        totalAttainments
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
    const limit = parseInt(req.query.limit) || 10;
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDefaultUsers();
});
