import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Calendar = ({ month = "November", year = "2025" }) => {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  // Calendar days - in a real app you would generate this dynamically
  const days = [
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 29],
    [30, 1, 2, 3, 4, 5, 6]
  ];

  return (
    <div className="bg-gray-50 p-4">
      <div className="text-center mb-4">
        <div className="flex justify-between items-center mb-2">
          <button className="text-gray-600" aria-label="Previous month">
            <FaChevronLeft />
          </button>
          <h4 className="font-medium">{month} {year}</h4>
          <button className="text-gray-600" aria-label="Next month">
            <FaChevronRight />
          </button>
        </div>
        
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {daysOfWeek.map((day, index) => (
                <th key={index} className="py-2">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td 
                    key={dayIndex} 
                    className={`py-2 text-center ${day === 11 ? 'bg-blue-600 text-white rounded-full' : ''} 
                               ${weekIndex === 0 && day > 7 ? 'text-gray-400' : ''}
                               ${weekIndex >= 4 && day < 15 ? 'text-gray-400' : ''}`}
                  >
                    {day}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
