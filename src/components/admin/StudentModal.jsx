import { useState, useEffect } from 'react';
import { X, Save, User } from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const StudentModal = ({ isOpen, onClose, student, onSuccess }) => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    email: '',
    course: '',
    batch: '',
    department: '',
    semester: '',
    cgpa: '',
    phoneNumber: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (student) {
      setFormData({
        rollNumber: student.rollNumber || '',
        name: student.name || '',
        email: student.email || '',
        course: student.course || '',
        batch: student.batch || '',
        department: student.department || '',
        semester: student.semester?.toString() || '',
        cgpa: student.cgpa?.toString() || '',
        phoneNumber: student.phoneNumber || '',
        address: student.address || ''
      });
    } else {
      setFormData({
        rollNumber: '',
        name: '',
        email: '',
        course: '',
        batch: new Date().getFullYear() + '-' + (new Date().getFullYear() + 3),
        department: '',
        semester: '1',
        cgpa: '0',
        phoneNumber: '',
        address: ''
      });
    }
    setErrors({});
  }, [student]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll number is required';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Course is required';
    }

    if (!formData.batch.trim()) {
      newErrors.batch = 'Batch is required';
    }

    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }

    if (!formData.semester) {
      newErrors.semester = 'Semester is required';
    } else if (parseInt(formData.semester) < 1 || parseInt(formData.semester) > 6) {
      newErrors.semester = 'Semester must be between 1 and 6';
    }

    if (formData.cgpa && (parseFloat(formData.cgpa) < 0 || parseFloat(formData.cgpa) > 10)) {
      newErrors.cgpa = 'CGPA must be between 0 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = {
        ...formData,
        semester: parseInt(formData.semester),
        cgpa: parseFloat(formData.cgpa) || 0
      };

      let response;
      if (student) {
        response = await api.put(`/students/${student._id}`, data);
      } else {
        response = await api.post('/students', data);
      }

      if (response.data.success) {
        toast.success(`Student ${student ? 'updated' : 'created'} successfully`);
        onSuccess();
      }
    } catch (error) {
      console.error('Error saving student:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {student ? 'Edit Student' : 'Add New Student'}
              </h2>
              <p className="text-sm text-gray-600">
                {student ? 'Update student information' : 'Create a new student record'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roll Number *
                </label>
                <input
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                  className={`form-input ${errors.rollNumber ? 'border-red-500' : ''}`}
                  placeholder="Enter roll number"
                  disabled={!!student} // Disable editing for existing students
                />
                {errors.rollNumber && (
                  <p className="mt-1 text-sm text-red-600">{errors.rollNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="form-input"
                  placeholder="Enter full address"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className={`form-input ${errors.course ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Course</option>
                  <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                  <option value="B.Sc Electronics">B.Sc Electronics</option>
                  <option value="B.Sc Mathematics">B.Sc Mathematics</option>
                  <option value="B.Sc Physics">B.Sc Physics</option>
                  <option value="B.Sc Chemistry">B.Sc Chemistry</option>
                  <option value="B.A English">B.A English</option>
                  <option value="B.A Tamil">B.A Tamil</option>
                  <option value="B.Com Commerce">B.Com Commerce</option>
                </select>
                {errors.course && (
                  <p className="mt-1 text-sm text-red-600">{errors.course}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`form-input ${errors.department ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Commerce">Commerce</option>
                </select>
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600">{errors.department}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batch *
                </label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  className={`form-input ${errors.batch ? 'border-red-500' : ''}`}
                  placeholder="e.g., 2024-2027"
                />
                {errors.batch && (
                  <p className="mt-1 text-sm text-red-600">{errors.batch}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Semester *
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className={`form-input ${errors.semester ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Semester</option>
                  {[1, 2, 3, 4, 5, 6].map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
                {errors.semester && (
                  <p className="mt-1 text-sm text-red-600">{errors.semester}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CGPA
                </label>
                <input
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleInputChange}
                  className={`form-input ${errors.cgpa ? 'border-red-500' : ''}`}
                  placeholder="0.00"
                  min="0"
                  max="10"
                  step="0.01"
                />
                {errors.cgpa && (
                  <p className="mt-1 text-sm text-red-600">{errors.cgpa}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Saving...' : (student ? 'Update Student' : 'Create Student')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentModal;
