import React from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const admissionSections = [
    { name: "How to Apply", path: "/admissions/how-to-apply", description: "Step-by-step guide for the application process." },
    { name: "Eligibility Criteria", path: "/admissions/eligibility", description: "Check the requirements for our programs." },
    { name: "Fee Structure", path: "/admissions/fee-structure", description: "Detailed information about fees for all courses." },
    { name: "Scholarships", path: "/admissions/scholarships", description: "Explore available scholarships and financial aid." }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Admissions</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {admissionSections.map(section => (
          <Link to={section.path} key={section.name} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.name}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Admissions;
