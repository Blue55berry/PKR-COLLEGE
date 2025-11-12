import React from 'react';

const CampusLife = () => {
  const lifeSections = [
    { name: "Student Clubs", description: "Explore a variety of clubs for academic, cultural, and social interests.", icon: "🎉" },
    { name: "Sports Facilities", description: "State-of-the-art facilities for indoor and outdoor sports.", icon: "🏀" },
    { name: "Hostel Life", description: "A home away from home with all necessary amenities.", icon: "🏠" },
    { name: "Campus Events", description: "Vibrant cultural festivals, tech fests, and celebrations.", icon: "🎊" },
    { name: "Student Support", description: "Counseling, mentorship, and support services for students.", icon: "🤝" },
    { name: "Campus Safety", description: "A safe and secure environment for all students.", icon: "🛡️" }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Campus Life</h1>
      <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
        At P.K.R. Arts College, we believe in holistic development. Our vibrant campus life offers numerous opportunities for students to grow, learn, and engage beyond the classroom.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {lifeSections.map(section => (
          <div key={section.name} className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{section.name}</h2>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
