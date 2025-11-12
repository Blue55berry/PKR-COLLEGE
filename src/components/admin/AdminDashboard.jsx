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
  X
} from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';

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
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadDashboardStats();
  }, []);

  useEffect(() => {
    if (activeTab === 'students') loadStudents();
    else if (activeTab === 'courses') loadCourses();
    else if (activeTab === 'staff') loadStaff();
  }, [activeTab]);

  const loadDashboardStats = async () => {
    try {
      const response = await api.get('/dashboard/stats');
      if (response.data.success) setStats(response.data.data);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const loadData = async (endpoint, setter) => {
    try {
      setLoading(true);
      const response = await api.get(endpoint);
      if (response.data.success) setter(response.data.data);
    } catch (error) {
      console.error(`Error loading ${endpoint}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const loadStudents = () => loadData('/students', setStudents);
  const loadCourses = () => loadData('/courses', setCourses);
  const loadStaff = () => loadData('/staff', setStaff);

  const handleOpenModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentItem(null);
    setModalType('');
  };

  const handleDelete = async (type, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await api.delete(`/${type}/${id}`);
        toast.success('Item deleted successfully');
        if (type === 'students') loadStudents();
        else if (type === 'courses') loadCourses();
        else if (type === 'staff') loadStaff();
      } catch (error) {
        console.error(`Error deleting item:`, error);
      }
    }
  };

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardContent />;
      case 'students': return <StudentsContent />;
      case 'courses': return <CoursesContent />;
      case 'staff': return <StaffContent />;
      default: return null;
    }
  };

  const DashboardContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, {user?.fullName}!</h2>
        <p className="text-gray-600">Here's an overview of your system</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Students" value={stats.totalStudents} icon={Users} color="bg-gradient-to-r from-blue-500 to-blue-600" />
        <StatCard title="Total Courses" value={stats.totalCourses} icon={BookOpen} color="bg-gradient-to-r from-green-500 to-green-600" />
        <StatCard title="Total Staff" value={stats.totalStaff} icon={UserCheck} color="bg-gradient-to-r from-purple-500 to-purple-600" />
        <StatCard title="Attainments" value={stats.totalAttainments} icon={BarChart3} color="bg-gradient-to-r from-orange-500 to-orange-600" />
      </div>
    </div>
  );

  const TableActions = ({ onEdit, onDelete }) => (
    <div className="flex items-center justify-end gap-2">
      <button onClick={onEdit} className="text-blue-600 hover:text-blue-800 p-1"><Edit className="w-4 h-4" /></button>
      <button onClick={onDelete} className="text-red-600 hover:text-red-800 p-1"><Trash2 className="w-4 h-4" /></button>
    </div>
  );

  const StudentsContent = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
        <button onClick={() => handleOpenModal('student')} className="btn btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />Add Student</button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="th">Student</th>
                <th className="th">Course</th>
                <th className="th">Department</th>
                <th className="th text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student._id} className="hover:bg-gray-50">
                  <td className="td">
                    <div className="font-medium text-gray-900">{student.name}</div>
                    <div className="text-sm text-gray-500">{student.rollNumber}</div>
                  </td>
                  <td className="td">{student.course}</td>
                  <td className="td">{student.department}</td>
                  <td className="td text-right">
                    <TableActions onEdit={() => handleOpenModal('student', student)} onDelete={() => handleDelete('students', student._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CoursesContent = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
            <button onClick={() => handleOpenModal('course')} className="btn btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />Add Course</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="th">Course Name</th>
                            <th className="th">Course Code</th>
                            <th className="th">Department</th>
                            <th className="th text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {courses.map((course) => (
                            <tr key={course._id} className="hover:bg-gray-50">
                                <td className="td font-medium">{course.name}</td>
                                <td className="td">{course.code}</td>
                                <td className="td">{course.department}</td>
                                <td className="td text-right">
                                    <TableActions onEdit={() => handleOpenModal('course', course)} onDelete={() => handleDelete('courses', course._id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );

  const StaffContent = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Staff Management</h2>
            <button onClick={() => handleOpenModal('staff')} className="btn btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />Add Staff</button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="th">Name</th>
                            <th className="th">Email</th>
                            <th className="th">Role</th>
                            <th className="th text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {staff.map((staffMember) => (
                            <tr key={staffMember._id} className="hover:bg-gray-50">
                                <td className="td font-medium">{staffMember.fullName}</td>
                                <td className="td">{staffMember.email}</td>
                                <td className="td">{staffMember.role}</td>
                                <td className="td text-right">
                                    <TableActions onEdit={() => handleOpenModal('staff', staffMember)} onDelete={() => handleDelete('staff', staffMember._id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-20">
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <NavItem icon={BarChart3} text="Dashboard" name="dashboard" />
          <NavItem icon={Users} text="Students" name="students" />
          <NavItem icon={BookOpen} text="Courses" name="courses" />
          <NavItem icon={UserCheck} text="Staff" name="staff" />
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button onClick={logout} className="w-full btn btn-secondary">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {renderContent()}
      </main>

      {showModal && <FormModal type={modalType} item={currentItem} onClose={handleCloseModal} />}
    </div>
  );

  function NavItem({ icon: Icon, text, name }) {
    const isActive = activeTab === name;
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab(name);
        }}
        className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 transition-colors ${isActive ? 'bg-gray-100 text-blue-600' : ''}`}
      >
        <Icon className="w-5 h-5" />
        <span className="ml-4 font-medium">{text}</span>
      </a>
    );
  }
};

const FormModal = ({ type, item, onClose }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setFormData(item || {});
    }, [item]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = `/${type}s${item ? `/${item._id}` : ''}`;
        const method = item ? 'put' : 'post';
        try {
            await api[method](endpoint, formData);
            toast.success(`'${type}' saved successfully`);
            onClose();
            // NOTE: We need a way to trigger a reload of the data in the parent
        } catch (error) {
            console.error(`Error saving ${type}`, error);
        }
    };

    const renderFormFields = () => {
        switch (type) {
            case 'student':
                return (
                    <>
                        <InputField name="name" label="Student Name" value={formData.name} onChange={handleInputChange} />
                        <InputField name="rollNumber" label="Roll Number" value={formData.rollNumber} onChange={handleInputChange} />
                        <InputField name="course" label="Course" value={formData.course} onChange={handleInputChange} />
                        <InputField name="department" label="Department" value={formData.department} onChange={handleInputChange} />
                    </>
                );
            case 'course':
                return (
                    <>
                        <InputField name="name" label="Course Name" value={formData.name} onChange={handleInputChange} />
                        <InputField name="code" label="Course Code" value={formData.code} onChange={handleInputChange} />
                        <InputField name="department" label="Department" value={formData.department} onChange={handleInputChange} />
                    </>
                );
            case 'staff':
                return (
                    <>
                        <InputField name="fullName" label="Full Name" value={formData.fullName} onChange={handleInputChange} />
                        <InputField name="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} />
                        <InputField name="role" label="Role" value={formData.role} onChange={handleInputChange} />
                        <InputField name="password" label="Password" type="password" placeholder="Leave blank to keep unchanged" onChange={handleInputChange} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-xl font-bold">{item ? 'Edit' : 'Add'} {type}</h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X className="w-5 h-5" /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        {renderFormFields()}
                    </div>
                    <div className="p-6 bg-gray-50 flex justify-end gap-4 rounded-b-xl">
                        <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ name, label, value, onChange, type = 'text', placeholder = '' }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            className="form-input"
        />
    </div>
);

export default AdminDashboard;