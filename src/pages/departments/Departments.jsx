import React from 'react';
import { Link } from 'react-router-dom';

const Departments = () => {
  const departmentSections = [
    { name: "Arts", path: "/departments/arts", description: "Explore programs in English and Tamil literature." },
    { name: "Commerce", path: "/departments/commerce", description: "Programs in commerce, business, and finance." },
    { name: "Science", path: "/departments/science", description: "Discover our programs in Mathematics, Physics, and Chemistry." }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Departments</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {departmentSections.map(section => (
          <Link to={section.path} key={section.name} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.name}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Departments;
