import { useState, useEffect } from 'react';
import { X, Save, BookOpen } from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const CourseModal = ({ isOpen, onClose, course, onSuccess }) => {
  const [formData, setFormData] = useState({
    courseCode: '',
    courseName: '',
    department: '',
    semester: '',
    credits: '',
    academicYear: '',
    instructor: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (course) {
      setFormData({
        courseCode: course.courseCode || '',
        courseName: course.courseName || '',
        department: course.department || '',
        semester: course.semester?.toString() || '',
        credits: course.credits?.toString() || '',
        academicYear: course.academicYear || '',
        instructor: course.instructor || '',
        description: course.description || ''
      });
    } else {
      setFormData({
        courseCode: '',
        courseName: '',
        department: '',
        semester: '1',
        credits: '3',
        academicYear: new Date().getFullYear() + '-' + (new Date().getFullYear() + 1),
        instructor: '',
        description: ''
      });
    }
    setErrors({});
  }, [course]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.courseCode.trim()) {
      newErrors.courseCode = 'Course code is required';
    }

    if (!formData.courseName.trim()) {
      newErrors.courseName = 'Course name is required';
    }

    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }

    if (!formData.semester) {
      newErrors.semester = 'Semester is required';
    }

    if (!formData.credits) {
      newErrors.credits = 'Credits is required';
    } else if (parseInt(formData.credits) < 1 || parseInt(formData.credits) > 6) {
      newErrors.credits = 'Credits must be between 1 and 6';
    }

    if (!formData.academicYear.trim()) {
      newErrors.academicYear = 'Academic year is required';
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
        credits: parseInt(formData.credits)
      };

      let response;
      if (course) {
        response = await api.put(`/courses/${course._id}`, data);
      } else {
        response = await api.post('/courses', data);
      }

      if (response.data.success) {
        toast.success(`Course ${course ? 'updated' : 'created'} successfully`);
        onSuccess();
      }
    } catch (error) {
      console.error('Error saving course:', error);
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
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {course ? 'Edit Course' : 'Add New Course'}
              </h2>
              <p className="text-sm text-gray-600">
                {course ? 'Update course information' : 'Create a new course'}
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
                  Course Code *
                </label>
                <input
                  type="text"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleInputChange}
                  className={`form-input ${errors.courseCode ? 'border-red-500' : ''}`}
                  placeholder="e.g., 19ECY07"
                  disabled={!!course} // Disable editing for existing courses
                />
                {errors.courseCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.courseCode}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name *
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.courseName ? 'border-red-500' : ''}`}
                  placeholder="Enter course name"
                />
                {errors.courseName && (
                  <p className="mt-1 text-sm text-red-600">{errors.courseName}</p>
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
                  Instructor
                </label>
                <input
                  type="text"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter instructor name"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
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
                  Credits *
                </label>
                <select
                  name="credits"
                  value={formData.credits}
                  onChange={handleInputChange}
                  className={`form-input ${errors.credits ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Credits</option>
                  {[1, 2, 3, 4, 5, 6].map(credit => (
                    <option key={credit} value={credit}>{credit} Credit{credit > 1 ? 's' : ''}</option>
                  ))}
                </select>
                {errors.credits && (
                  <p className="mt-1 text-sm text-red-600">{errors.credits}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Year *
                </label>
                <input
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  className={`form-input ${errors.academicYear ? 'border-red-500' : ''}`}
                  placeholder="2024-2025"
                />
                {errors.academicYear && (
                  <p className="mt-1 text-sm text-red-600">{errors.academicYear}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="form-input"
              placeholder="Enter course description (optional)"
            />
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
              {loading ? 'Saving...' : (course ? 'Update Course' : 'Create Course')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
