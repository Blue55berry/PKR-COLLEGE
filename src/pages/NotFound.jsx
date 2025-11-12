import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-slate-700 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-slate-600 mb-8">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mx-auto mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/"
        className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-8 rounded-lg text-lg inline-block"
      >
        Return to Homepage
      </Link>
      
      <div className="mt-16">
        <h3 className="text-lg font-medium text-slate-600 mb-4">You might be looking for:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="text-blue-600 hover:text-blue-800">Admissions</Link>
          <Link to="/departments" className="text-blue-600 hover:text-blue-800">Departments</Link>
          <Link to="/research" className="text-blue-600 hover:text-blue-800">Research</Link>
          <Link to="/campus-life" className="text-blue-600 hover:text-blue-800">Campus Life</Link>
          <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
