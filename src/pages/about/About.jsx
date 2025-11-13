import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const aboutSections = [
    { name: "Our History", path: "/about/history", description: "Journey of the college since its inception." },
    { name: "Vision & Mission", path: "/about/vision", description: "Our guiding principles and future direction." },
    { name: "Management", path: "/about/management", description: "Meet the leaders of our institution." },
    { name: "Principal's Desk", path: "/about/principals-desk", description: "A message from our esteemed Principal." }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">About P.K.R. Arts College</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {aboutSections.map(section => (
          <Link to={section.path} key={section.name} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.name}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
