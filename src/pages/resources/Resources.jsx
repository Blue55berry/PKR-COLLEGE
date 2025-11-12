import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Resources & Facilities</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          P.K.R. Arts College for Women provides extensive resources and facilities to support student learning, research, and overall development. Our well-maintained infrastructure creates an ideal environment for academic and personal growth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">Library</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <img src="/images/library.jpg" alt="College Library" className="w-full h-60 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art library houses over 50,000 books, journals, magazines, and e-resources. It provides a peaceful environment for reading and research.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>50,000+ Books and Reference Materials</li>
                  <li>Digital Repository of Academic Resources</li>
                  <li>Subscription to Leading Journals</li>
                  <li>Reading Rooms and Discussion Areas</li>
                  <li>Online Public Access Catalogue (OPAC)</li>
                </ul>
                <Link to="/resources/library" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more about our Library →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">E-Resources</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <img src="/images/e-resources.jpg" alt="E-Resources" className="w-full h-60 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">
                  P.K.R. Arts College provides access to a wide range of electronic resources to support academic research and learning.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>INFLIBNET and N-LIST Access</li>
                  <li>E-journals from DELNET</li>
                  <li>Digital Library with E-books</li>
                  <li>Access to Research Databases</li>
                  <li>Online Learning Management System</li>
                </ul>
                <Link to="/resources/e-resources" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more about our E-Resources →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">Laboratories</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <img src="/images/laboratory.jpg" alt="Laboratory" className="w-full h-60 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">
                  Our college is equipped with modern laboratories for various disciplines, ensuring hands-on learning and practical experience.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Computer Labs with Latest Hardware and Software</li>
                  <li>Science Labs for Physics, Chemistry, and Life Sciences</li>
                  <li>Language Lab for Communication Skills</li>
                  <li>Psychology Lab with Advanced Equipment</li>
                  <li>Electronics and Instrumentation Lab</li>
                </ul>
                <Link to="/resources/laboratory" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more about our Laboratories →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">ICT Infrastructure</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <img src="/images/ict.jpg" alt="ICT Facilities" className="w-full h-60 object-cover rounded mb-4" />
                <p className="text-gray-600 mb-4">
                  The college has invested in modern Information and Communication Technology infrastructure to enhance teaching and learning.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Smart Classrooms with Interactive Displays</li>
                  <li>Wi-Fi Enabled Campus</li>
                  <li>Digital Teaching Aids</li>
                  <li>Video Conferencing Facilities</li>
                  <li>Online Student Information System</li>
                </ul>
                <Link to="/resources/ict" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more about our ICT Infrastructure →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
