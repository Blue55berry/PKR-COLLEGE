import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
  const researchSections = [
    { name: "Research Cell", path: "/research/cell", description: "The nodal center for all research activities." },
    { name: "Research Projects", path: "/research/projects", description: "Explore ongoing and completed research projects." },
    { name: "Research Advisory", path: "/research/advisory", description: "Meet the members of our Research Advisory Committee." }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Research</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {researchSections.map(section => (
          <Link to={section.path} key={section.name} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.name}</h2>
            <p className="text-gray-600">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Research;
