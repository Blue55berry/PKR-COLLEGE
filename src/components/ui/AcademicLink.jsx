import React from 'react';

const AcademicLink = ({ icon, title, description, url }) => {
  return (
    <a href={url} className="mb-4 border rounded p-3 hover:bg-gray-100 block">
      <h4 className="font-bold flex items-center">
        <span className="mr-2">{icon}</span>
        {title}
      </h4>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};

export default AcademicLink;
