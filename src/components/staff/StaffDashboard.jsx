import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  BookOpen, 
  BarChart3,
  Upload,
  Download,
  Database,
  Search,
  Edit,
  Eye,
  LogOut,
  Home,
  GraduationCap,
  FileSpreadsheet,
  Plus,
  Save,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';
import MarksModal from './MarksModal';

const StaffDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({});
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentMarks, setStudentMarks] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [uploadStep, setUploadStep] = useState('upload');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showMarksModal, setShowMarksModal] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadDashboardStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'students') {
      loadStudents();
      loadStudentMarks();
    } else if (activeTab === 'courses') {
      loadCourses();
    }
  }, [activeTab]);

  const loadDashboardStats = async () => {
    try {
      const response = await api.get('/dashboard/stats');
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const loadStudents = async () => {
    try {
      setLoading(true);
      const response = await api.get('/students');
      if (response.data.success) {
        setStudents(response.data.data);
      }
    } catch (error) {
      console.error('Error loading students:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCourses = async () => {
    try {
      setLoading(true);
      const response = await api.get('/courses');
      if (response.data.success) {
        setCourses(response.data.data);
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStudentMarks = async () => {
    try {
      const response = await api.get('/student-marks');
      if (response.data.success) {
        setStudentMarks(response.data.data);
      }
    } catch (error) {
      console.error('Error loading student marks:', error);
    }
  };

  const handleExcelUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      setLoading(true);
      const response = await api.post('/excel/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setExcelData(response.data.data);
        setUploadStep('preview');
        toast.success('Excel file uploaded and parsed successfully!');
      }
    } catch (error) {
      console.error('Excel upload error:', error);
      toast.error('Failed to upload Excel file');
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSaveToDatabase = async () => {
    try {
      setLoading(true);
      const response = await api.post('/excel/save-to-database', {
        students: excelData
      });

      if (response.data.success) {
        setUploadStep('saved');
        toast.success(`Successfully saved ${response.data.data.savedCount} students to database`);
        
        if (response.data.data.errorCount > 0) {
          toast.error(`${response.data.data.errorCount} students had errors`);
        }
        
        loadStudents();
        loadDashboardStats();
      }
    } catch (error) {
      console.error('Save to database error:', error);
      toast.error('Failed to save to database');
    } finally {
      setLoading(false);
    }
  };

  const handleAddMarks = (student) => {
    setSelectedStudent(student);
    setShowMarksModal(true);
  };

  const handleExportMarks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/excel/export-marks', {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `student-marks-${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      toast.success('Marks exported successfully!');
    } catch (error) {
      console.error('Export error:', error);
      toast.error('Failed to export marks');
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value || 0}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="bg-slate-800 text-white w-64 min-h-screen p-4 relative">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8" />
        <h1 className="text-xl font-bold">PKR Portal</h1>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'dashboard' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <Home className="w-5 h-5" />
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab('students')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'students' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <Users className="w-5 h-5" />
          Students
        </button>

        <button
          onClick={() => setActiveTab('courses')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'courses' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Courses
        </button>

        <button
          onClick={() => setActiveTab('attainment')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'attainment' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          Attainment
        </button>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {activeTab === 'dashboard' && 'Staff Dashboard'}
            {activeTab === 'students' && 'Student Management'}
            {activeTab === 'courses' && 'Course Management'}
            {activeTab === 'attainment' && 'Attainment Management'}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Welcome, {user?.fullName}</span>
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user?.fullName?.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardContent = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={Users}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={BookOpen}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />
        <StatCard
          title="Student Marks"
          value={stats.totalMarks}
          icon={BarChart3}
          color="bg-gradient-to-r from-orange-500 to-orange-600"
        />
      </div>

      {/* Welcome Message */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to Staff Dashboard</h3>
        <p className="text-gray-600">
          You're logged in as <strong>{user?.fullName}</strong> from {user?.department} department. 
          Use the sidebar to manage student details, upload Excel files, and handle course information.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('students')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Upload Student Data</p>
          </button>
          
          <button
            onClick={() => setActiveTab('students')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            <Edit className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Add Student Marks</p>
          </button>
          
          <button
            onClick={handleExportMarks}
            disabled={loading || studentMarks.length === 0}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors disabled:opacity-50"
          >
            <Download className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Export Marks</p>
          </button>
        </div>
      </div>

      {/* Sample Course */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sample Course</h3>
        <div className="border rounded-lg p-4">
          <h4 className="text-lg font-medium text-gray-900">19ECY07 - SENSORS FOR ENGINEERING APPLICATIONS</h4>
          <p className="text-gray-600 text-sm mt-1">2022 - 2026</p>
          <button className="mt-3 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            View Course
          </button>
        </div>
      </div>
    </div>
  );

  const StudentsContent = () => (
    <div className="space-y-6">
      {/* Excel Upload Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          <FileSpreadsheet className="inline w-5 h-5 mr-2" />
          Student Data Management
        </h3>
        
        {uploadStep === 'upload' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FileSpreadsheet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">Upload Excel File</h4>
              <p className="text-gray-600 mb-6">
                Upload an Excel file containing student data (Roll Number, Name, Email, Course, Department, etc.)
              </p>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleExcelUpload}
                accept=".xlsx,.xls,.csv"
                className="hidden"
              />
              
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className="btn btn-primary flex items-center gap-2 mx-auto"
              >
                <Upload className="w-5 h-5" />
                {loading ? 'Uploading...' : 'Choose Excel File'}
              </button>
              
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: .xlsx, .xls, .csv (Max size: 5MB)
              </p>
            </div>
          </div>
        )}

        {uploadStep === 'preview' && excelData.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900">Preview Excel Data</h4>
                <p className="text-sm text-gray-600">{excelData.length} students found in the file</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setUploadStep('upload');
                    setExcelData([]);
                  }}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={handleSaveToDatabase}
                  disabled={loading}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <Database className="w-4 h-4" />
                  {loading ? 'Saving...' : 'Save to Database'}
                </button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="overflow-x-auto max-h-96">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Roll Number
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Course
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Department
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Semester
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {excelData.slice(0, 10).map((student, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.rollNumber || 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.name || 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.email || 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.course || 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.department || 'N/A'}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {student.semester || 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {excelData.length > 10 && (
                <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600 border-t">
                  Showing 10 of {excelData.length} records. All records will be processed when saved.
                </div>
              )}
            </div>
          </div>
        )}

        {uploadStep === 'saved' && (
          <div className="text-center py-8">
            <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-medium text-gray-900 mb-2">Data Saved Successfully!</h4>
            <p className="text-gray-600 mb-6">Student data has been saved to the database. You can now add marks for students.</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => {
                  setUploadStep('upload');
                  setExcelData([]);
                }}
                className="btn btn-secondary"
              >
                Upload Another File
              </button>
              <button
                onClick={() => {
                  setUploadStep('upload');
                  setExcelData([]);
                }}
                className="btn btn-primary"
              >
                Continue to Students
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search and Export */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10"
            />
          </div>
        </div>
        
        {studentMarks.length > 0 && (
          <button
            onClick={handleExportMarks}
            disabled={loading}
            className="btn btn-primary flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {loading ? 'Exporting...' : 'Export All Marks'}
          </button>
        )}
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading && uploadStep === 'upload' ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course & Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Semester & CGPA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marks Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students
                  .filter(student => 
                    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((student) => {
                    const hasMarks = studentMarks.some(mark => mark.rollNumber === student.rollNumber);
                    const studentMark = studentMarks.find(mark => mark.rollNumber === student.rollNumber);
                    
                    return (
                      <tr key={student._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.rollNumber}</div>
                            <div className="text-xs text-gray-400">{student.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{student.course}</div>
                          <div className="text-sm text-gray-500">{student.department}</div>
                          <div className="text-xs text-gray-400">Batch: {student.batch}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Semester {student.semester}</div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                            student.cgpa >= 8 ? 'bg-green-100 text-green-800' :
                            student.cgpa >= 6 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            CGPA: {student.cgpa}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="space-y-1">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              hasMarks ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {hasMarks ? 'Marks Added' : 'No Marks'}
                            </span>
                            {hasMarks && studentMark && (
                              <div className="text-xs text-gray-600">
                                Total: {studentMark.marks.totalMarks}/500 ({studentMark.marks.grade})
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleAddMarks(student)}
                              className="text-blue-600 hover:text-blue-900 p-1 rounded"
                              title={hasMarks ? "Edit Marks" : "Add Marks"}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              className="text-green-600 hover:text-green-900 p-1 rounded" 
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            
            {students.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Students Found</h3>
                <p className="text-gray-600">Upload an Excel file to add students to the database.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const CoursesContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Courses</h3>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Semester
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Academic Year
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{course.courseName}</div>
                        <div className="text-sm text-gray-500">{course.courseCode}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.semester}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.credits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.academicYear}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'students':
        return <StudentsContent />;
      case 'courses':
        return <CoursesContent />;
      case 'attainment':
        return <DashboardContent />; // Placeholder for now
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Marks Modal */}
      {showMarksModal && selectedStudent && (
        <MarksModal
          student={selectedStudent}
          onClose={() => {
            setShowMarksModal(false);
            setSelectedStudent(null);
          }}
          onSuccess={() => {
            loadStudentMarks();
            setShowMarksModal(false);
            setSelectedStudent(null);
            toast.success('Marks saved successfully!');
          }}
        />
      )}
    </div>
  );
};

export default StaffDashboard;
