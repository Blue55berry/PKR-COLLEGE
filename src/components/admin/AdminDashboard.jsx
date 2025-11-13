import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Users, 
  BookOpen, 
  UserCheck, 
  BarChart3,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Home,
  GraduationCap
} from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';
import StudentModal from './StudentModal';
import CourseModal from './CourseModal';
import StaffModal from './StaffModal';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({});
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadDashboardStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'students') {
      loadStudents();
    } else if (activeTab === 'courses') {
      loadCourses();
    } else if (activeTab === 'staff') {
      loadStaff();
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

  const loadStaff = async () => {
    try {
      setLoading(true);
      const response = await api.get('/staff');
      if (response.data.success) {
        setStaff(response.data.data);
      }
    } catch (error) {
      console.error('Error loading staff:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const endpoint = type === 'student' ? '/students' : type === 'course' ? '/courses' : '/staff';
      const response = await api.delete(`${endpoint}/${id}`);
      
      if (response.data.success) {
        toast.success(`${type} deleted successfully`);
        
        if (type === 'student') {
          loadStudents();
        } else if (type === 'course') {
          loadCourses();
        } else if (type === 'staff') {
          loadStaff();
        }
        
        loadDashboardStats();
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, description }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value || 0}</p>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
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
        <div>
          <h1 className="text-xl font-bold">PKR Portal</h1>
          <p className="text-xs text-slate-300">Admin Panel</p>
        </div>
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
          {stats.totalStudents > 0 && (
            <span className="ml-auto bg-blue-600 text-xs px-2 py-1 rounded-full">
              {stats.totalStudents}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('courses')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'courses' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Courses
          {stats.totalCourses > 0 && (
            <span className="ml-auto bg-green-600 text-xs px-2 py-1 rounded-full">
              {stats.totalCourses}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('staff')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'staff' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <UserCheck className="w-5 h-5" />
          Staff Management
          {stats.totalStaff > 0 && (
            <span className="ml-auto bg-purple-600 text-xs px-2 py-1 rounded-full">
              {stats.totalStaff}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('attainment')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === 'attainment' ? 'bg-slate-700' : 'hover:bg-slate-700'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          Attainment
          {stats.totalAttainments > 0 && (
            <span className="ml-auto bg-orange-600 text-xs px-2 py-1 rounded-full">
              {stats.totalAttainments}
            </span>
          )}
        </button>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-slate-700 p-3 rounded-lg mb-4">
          <p className="text-xs text-slate-300">Logged in as</p>
          <p className="text-sm font-medium">{user?.fullName}</p>
          <p className="text-xs text-slate-400">{user?.email}</p>
        </div>
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
            {activeTab === 'dashboard' && 'Admin Dashboard'}
            {activeTab === 'students' && 'Student Management'}
            {activeTab === 'courses' && 'Course Management'}
            {activeTab === 'staff' && 'Staff Management'}
            {activeTab === 'attainment' && 'Attainment Management'}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {activeTab === 'dashboard' && 'Overview of system statistics and quick actions'}
            {activeTab === 'students' && 'Manage student information and records'}
            {activeTab === 'courses' && 'Manage course information and curriculum'}
            {activeTab === 'staff' && 'Manage staff accounts and permissions'}
            {activeTab === 'attainment' && 'Manage course outcome attainment data'}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user?.fullName}</p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            {user?.fullName?.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardContent = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={Users}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
          description="Active student records"
        />
        <StatCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={BookOpen}
          color="bg-gradient-to-r from-green-500 to-green-600"
          description="Available courses"
        />
        <StatCard
          title="Total Staff"
          value={stats.totalStaff}
          icon={UserCheck}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
          description="Staff members"
        />
        <StatCard
          title="Marks Entries"
          value={stats.totalMarks}
          icon={BarChart3}
          color="bg-gradient-to-r from-orange-500 to-orange-600"
          description="Student marks recorded"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => {
              setModalType('student');
              setSelectedItem(null);
              setShowModal(true);
            }}
            className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
          >
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h4 className="font-medium text-gray-900 mb-1">Add New Student</h4>
            <p className="text-sm text-gray-600">Create a new student record</p>
          </button>
          
          <button
            onClick={() => {
              setModalType('course');
              setSelectedItem(null);
              setShowModal(true);
            }}
            className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200"
          >
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h4 className="font-medium text-gray-900 mb-1">Add New Course</h4>
            <p className="text-sm text-gray-600">Create a new course</p>
          </button>
          
          <button
            onClick={() => {
              setModalType('staff');
              setSelectedItem(null);
              setShowModal(true);
            }}
            className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all duration-200"
          >
            <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h4 className="font-medium text-gray-900 mb-1">Add New Staff</h4>
            <p className="text-sm text-gray-600">Create a staff account</p>
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Database Status</span>
              <span className="text-green-600 font-medium">● Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Backup</span>
              <span className="text-gray-900">Today, 2:00 AM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Sessions</span>
              <span className="text-gray-900">1</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">Admin logged in</p>
                <p className="text-xs text-gray-500">Just now</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm text-gray-900">System started</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentsContent = () => (
    <div className="space-y-6">
      {/* Header with Add Button and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 pr-4"
            />
          </div>
          <button className="btn btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
        <button
          onClick={() => {
            setModalType('student');
            setSelectedItem(null);
            setShowModal(true);
          }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center py-16">
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
                    Semester
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CGPA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
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
                    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    student.email.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.rollNumber}</div>
                          <div className="text-xs text-gray-400">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.course}</div>
                      <div className="text-sm text-gray-500">{student.department}</div>
                      <div className="text-xs text-gray-400">Batch: {student.batch}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Semester {student.semester}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                        student.cgpa >= 8 ? 'bg-green-100 text-green-800' :
                        student.cgpa >= 6 ? 'bg-yellow-100 text-yellow-800' :
                        student.cgpa >= 4 ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.cgpa.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="text-gray-600 hover:text-gray-900 p-1 rounded"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setModalType('student');
                            setSelectedItem(student);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                          title="Edit Student"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete('student', student._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded"
                          title="Delete Student"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {students.length === 0 && (
              <div className="text-center py-16">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Students Found</h3>
                <p className="text-gray-600 mb-4">Get started by adding your first student.</p>
                <button
                  onClick={() => {
                    setModalType('student');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="btn btn-primary"
                >
                  Add Student
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const CoursesContent = () => (
    <div className="space-y-6">
      {/* Header with Add Button and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 pr-4"
            />
          </div>
        </div>
        <button
          onClick={() => {
            setModalType('course');
            setSelectedItem(null);
            setShowModal(true);
          }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Course
        </button>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center py-16">
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
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses
                  .filter(course => 
                    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    course.department.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{course.courseName}</div>
                        <div className="text-sm text-gray-500">{course.courseCode}</div>
                        {course.instructor && (
                          <div className="text-xs text-gray-400">Instructor: {course.instructor}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Semester {course.semester}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {course.credits} Credits
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.academicYear}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="text-gray-600 hover:text-gray-900 p-1 rounded"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setModalType('course');
                            setSelectedItem(course);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                          title="Edit Course"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete('course', course._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded"
                          title="Delete Course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {courses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Courses Found</h3>
                <p className="text-gray-600 mb-4">Get started by adding your first course.</p>
                <button
                  onClick={() => {
                    setModalType('course');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="btn btn-primary"
                >
                  Add Course
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const StaffContent = () => (
    <div className="space-y-6">
      {/* Header with Add Button and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search staff..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10 pr-4"
            />
          </div>
        </div>
        <button
          onClick={() => {
            setModalType('staff');
            setSelectedItem(null);
            setShowModal(true);
          }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Staff
        </button>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Staff Member
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {staff
                  .filter(member => 
                    member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    member.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    member.email.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((member) => (
                  <tr key={member._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                          {member.fullName.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{member.fullName}</div>
                          <div className="text-sm text-gray-500">@{member.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{member.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {member.department || 'Not specified'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(member.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="text-gray-600 hover:text-gray-900 p-1 rounded"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setModalType('staff');
                            setSelectedItem(member);
                            setShowModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                          title="Edit Staff"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete('staff', member._id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded"
                          title="Delete Staff"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {staff.length === 0 && (
              <div className="text-center py-16">
                <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Staff Found</h3>
                <p className="text-gray-600 mb-4">Get started by adding your first staff member.</p>
                <button
                  onClick={() => {
                    setModalType('staff');
                    setSelectedItem(null);
                    setShowModal(true);
                  }}
                  className="btn btn-primary"
                >
                  Add Staff
                </button>
              </div>
            )}
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
      case 'staff':
        return <StaffContent />;
      default:
        return <DashboardContent />;
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItem(null);
    setModalType('');
  };

  const handleModalSuccess = () => {
    handleModalClose();
    
    // Refresh data based on modal type
    if (modalType === 'student') {
      loadStudents();
    } else if (modalType === 'course') {
      loadCourses();
    } else if (modalType === 'staff') {
      loadStaff();
    }
    
    loadDashboardStats();
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

      {/* Modals */}
      {showModal && modalType === 'student' && (
        <StudentModal
          isOpen={showModal}
          onClose={handleModalClose}
          student={selectedItem}
          onSuccess={handleModalSuccess}
        />
      )}

      {showModal && modalType === 'course' && (
        <CourseModal
          isOpen={showModal}
          onClose={handleModalClose}
          course={selectedItem}
          onSuccess={handleModalSuccess}
        />
      )}

      {showModal && modalType === 'staff' && (
        <StaffModal
          isOpen={showModal}
          onClose={handleModalClose}
          staff={selectedItem}
          onSuccess={handleModalSuccess}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
