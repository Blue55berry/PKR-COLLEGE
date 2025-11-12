import { useState, useEffect } from 'react';
import { X, Save, Calculator } from 'lucide-react';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const MarksModal = ({ student, onClose, onSuccess }) => {
  const [marks, setMarks] = useState({
    test1: '',
    test2: '',
    assignment1: '',
    assignment2: '',
    semesterExam: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load existing marks if available
    loadExistingMarks();
  }, [student]);

  const loadExistingMarks = async () => {
    try {
      const response = await api.get('/student-marks');
      if (response.data.success) {
        const studentMark = response.data.data.find(mark => mark.rollNumber === student.rollNumber);
        if (studentMark) {
          setMarks({
            test1: studentMark.marks.test1.toString(),
            test2: studentMark.marks.test2.toString(),
            assignment1: studentMark.marks.assignment1.toString(),
            assignment2: studentMark.marks.assignment2.toString(),
            semesterExam: studentMark.marks.semesterExam.toString()
          });
        }
      }
    } catch (error) {
      console.error('Error loading existing marks:', error);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const maxMarks = {
      test1: 100,
      test2: 100,
      assignment1: 100,
      assignment2: 100,
      semesterExam: 100
    };

    Object.keys(marks).forEach(key => {
      const value = parseFloat(marks[key]);
      if (marks[key] !== '' && (isNaN(value) || value < 0 || value > maxMarks[key])) {
        newErrors[key] = `Invalid marks (0-${maxMarks[key]})`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await api.post('/student-marks', {
        studentId: student._id,
        rollNumber: student.rollNumber,
        name: student.name,
        marks: {
          test1: parseFloat(marks.test1) || 0,
          test2: parseFloat(marks.test2) || 0,
          assignment1: parseFloat(marks.assignment1) || 0,
          assignment2: parseFloat(marks.assignment2) || 0,
          semesterExam: parseFloat(marks.semesterExam) || 0
        }
      });

      if (response.data.success) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error saving marks:', error);
      toast.error('Failed to save marks');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setMarks(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const calculateTotal = () => {
    return Object.values(marks).reduce((sum, mark) => {
      return sum + (parseFloat(mark) || 0);
    }, 0);
  };

  const calculatePercentage = () => {
    return ((calculateTotal() / 500) * 100).toFixed(2);
  };

  const calculateGrade = () => {
    const percentage = parseFloat(calculatePercentage());
    if (percentage >= 90) return 'A+';
    else if (percentage >= 80) return 'A';
    else if (percentage >= 70) return 'B+';
    else if (percentage >= 60) return 'B';
    else if (percentage >= 50) return 'C';
    else if (percentage >= 40) return 'D';
    else return 'F';
  };

  const markFields = [
    { key: 'test1', label: 'Test 1', max: 100 },
    { key: 'test2', label: 'Test 2', max: 100 },
    { key: 'assignment1', label: 'Assignment 1', max: 100 },
    { key: 'assignment2', label: 'Assignment 2', max: 100 },
    { key: 'semesterExam', label: 'Semester Exam', max: 100 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Student Marks Entry
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              <strong>{student.name}</strong> ({student.rollNumber})
            </p>
            <p className="text-xs text-gray-500">
              {student.course} - {student.department} - Semester {student.semester}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markFields.map(({ key, label, max }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {label} <span className="text-gray-500">(Max: {max})</span>
                </label>
                <input
                  type="number"
                  value={marks[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className={`form-input ${errors[key] ? 'border-red-500' : ''}`}
                  placeholder={`Enter marks out of ${max}`}
                  min="0"
                  max={max}
                  step="0.5"
                />
                {errors[key] && (
                  <p className="mt-1 text-sm text-red-600">{errors[key]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Marks Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm font-medium text-gray-600">Total Marks</p>
                <p className="text-2xl font-bold text-gray-900">{calculateTotal()}/500</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm font-medium text-gray-600">Percentage</p>
                <p className="text-2xl font-bold text-blue-600">{calculatePercentage()}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm font-medium text-gray-600">Grade</p>
                <p className={`text-2xl font-bold ${
                  calculateGrade() === 'A+' || calculateGrade() === 'A' ? 'text-green-600' :
                  calculateGrade() === 'B+' || calculateGrade() === 'B' ? 'text-blue-600' :
                  calculateGrade() === 'C' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {calculateGrade()}
                </p>
              </div>
            </div>
          </div>

          {/* Individual Marks Breakdown */}
          <div className="mt-4 bg-white border rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-gray-50 border-b">
              <h4 className="font-medium text-gray-900">Marks Breakdown</h4>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {markFields.map(({ key, label }) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-600">{label}</span>
                    <span className="font-medium">
                      {marks[key] ? `${marks[key]}/100` : '0/100'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 mt-6">
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
              {loading ? 'Saving...' : 'Save Marks'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarksModal;
