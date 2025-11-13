import React from 'react';

const Management = () => {
  const governingBody = [
    {
      name: "Sri P.K. Ramasamy",
      position: "Chairman",
      qualification: "Founder & Visionary",
      image: "/images/management/chairman.jpg"
    },
    {
      name: "Sri P.R. Krishnamurthy",
      position: "Secretary",
      qualification: "MBA",
      image: "/images/management/secretary.jpg"
    },
    {
      name: "Dr. R. Mallika",
      position: "Principal",
      qualification: "Ph.D., M.Phil., M.A.",
      image: "/images/management/principal.jpg"
    },
    {
      name: "Dr. S. Veeramani",
      position: "Vice Principal",
      qualification: "Ph.D., M.Sc., B.Ed.",
      image: "/images/management/vice-principal.jpg"
    }
  ];
  
  const committees = [
    {
      name: "Academic Council",
      description: "Oversees academic policies, curriculum development, and educational standards",
      members: [
        { name: "Dr. R. Mallika", role: "Chairperson" },
        { name: "Dr. S. Veeramani", role: "Member" },
        { name: "Dr. P. Sumathi", role: "Member" },
        { name: "Dr. K. Rajalakshmi", role: "Member" }
      ]
    },
    {
      name: "IQAC",
      description: "Ensures quality enhancement and sustenance in academic and administrative processes",
      members: [
        { name: "Dr. K. Rajalakshmi", role: "Coordinator" },
        { name: "Dr. M. Priya", role: "Member" },
        { name: "Prof. K. Vijayalakshmi", role: "Member" },
        { name: "Dr. T. Poonguzhali", role: "Member" }
      ]
    },
    {
      name: "Research Committee",
      description: "Promotes research culture and facilitates research activities in the college",
      members: [
        { name: "Dr. N. Gayathri", role: "Chairperson" },
        { name: "Dr. S. Anitha", role: "Member" },
        { name: "Dr. P. Ramya", role: "Member" },
        { name: "Dr. K. Selvi", role: "Member" }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">College Management</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Governing Body</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            P.K.R. Arts College for Women is governed by a dedicated team of visionary leaders who are committed to providing quality education and empowering women through academic excellence and holistic development.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {governingBody.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-slate-600 font-medium">{member.position}</p>
                <p className="text-gray-500 text-sm">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Administrative Structure</h2>
        </div>
        <div className="p-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">Organizational Hierarchy</h3>
            
            <div className="flex flex-col items-center">
              {/* Organizational Chart - Simplified version */}
              <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-64 text-center mb-4">
                <p className="font-bold">Chairman</p>
              </div>
              <div className="h-6 w-0.5 bg-slate-600"></div>
              <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-64 text-center mb-4">
                <p className="font-bold">Secretary</p>
              </div>
              <div className="h-6 w-0.5 bg-slate-600"></div>
              <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-64 text-center mb-4">
                <p className="font-bold">Principal</p>
              </div>
              <div className="h-6 w-0.5 bg-slate-600"></div>
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-slate-600"></div>
                  <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-full text-center">
                    <p className="font-bold">Vice Principal</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-slate-600"></div>
                  <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-full text-center">
                    <p className="font-bold">IQAC Coordinator</p>
                  </div>
                </div>
              </div>
              
              <div className="h-6 w-0.5 bg-slate-600 mt-4"></div>
              <div className="border-2 border-slate-600 rounded p-3 bg-slate-100 w-64 text-center">
                <p className="font-bold">Heads of Departments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Committees & Councils</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            The college functions through various committees and councils that oversee different aspects of academic and administrative operations, ensuring smooth functioning and quality management.
          </p>
          
          <div className="space-y-8">
            {committees.map((committee, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4">
                  <h3 className="font-bold text-lg">{committee.name}</h3>
                  <p className="text-gray-600">{committee.description}</p>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-sm mb-2 text-gray-700">Committee Members:</h4>
                  <ul className="divide-y">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="py-2 flex justify-between">
                        <span>{member.name}</span>
                        <span className="text-gray-600">{member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
