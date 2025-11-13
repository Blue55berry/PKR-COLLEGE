import React from 'react';

const ResearchAdvisory = () => {
  const advisoryBoard = [
    {
      name: "Prof. R. Venkatasubramanian",
      affiliation: "Indian Institute of Science, Bangalore",
      specialization: "Material Science and Engineering",
      role: "Chairperson"
    },
    {
      name: "Prof. Sudha Rao",
      affiliation: "University of Delhi",
      specialization: "Women's Studies and Gender Research",
      role: "Member"
    },
    {
      name: "Prof. K.R. Shanmugam",
      affiliation: "Madras School of Economics",
      specialization: "Econometrics and Financial Analysis",
      role: "Member"
    },
    {
      name: "Prof. Meenakshi Sundaram",
      affiliation: "Harvard University, USA",
      specialization: "English Literature and Cultural Studies",
      role: "International Advisor"
    },
    {
      name: "Dr. R. Mallika",
      affiliation: "P.K.R. Arts College for Women",
      specialization: "Principal",
      role: "Member Secretary"
    },
    {
      name: "Dr. N. Gayathri",
      affiliation: "P.K.R. Arts College for Women",
      specialization: "Research Coordinator",
      role: "Convener"
    }
  ];
  
  const responsibilities = [
    "Formulate research policies and guidelines for the institution",
    "Review and approve research proposals submitted by faculty and students",
    "Monitor progress of ongoing research projects and provide necessary guidance",
    "Facilitate interdisciplinary research collaborations within and outside the institution",
    "Ensure ethical standards and integrity in all research activities",
    "Identify and recommend potential funding sources for research initiatives",
    "Organize research-oriented workshops, seminars, and conferences",
    "Evaluate research outcomes and suggest improvements for future projects"
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Research Advisory Committee</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About the Committee</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            The Research Advisory Committee (RAC) at P.K.R. Arts College for Women is a body of distinguished academicians and researchers who provide strategic direction and guidance for research activities in the institution. The committee plays a crucial role in fostering a culture of research and innovation among faculty and students.
          </p>
          
          <p>
            The RAC meets quarterly to review research progress, discuss new initiatives, and address challenges in the research ecosystem of the college. With members from diverse academic backgrounds and institutions, the committee brings a wealth of experience and expertise to enhance the quality and impact of research undertaken at P.K.R. Arts College.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Committee Members</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Affiliation</th>
                  <th className="py-3 px-4 text-left">Specialization</th>
                  <th className="py-3 px-4 text-left">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {advisoryBoard.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{member.name}</td>
                    <td className="py-3 px-4">{member.affiliation}</td>
                    <td className="py-3 px-4">{member.specialization}</td>
                    <td className="py-3 px-4">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Responsibilities</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Meeting Schedule & Contact</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Regular Meetings</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Quarter</th>
                    <th className="py-3 px-4 text-left">Tentative Date</th>
                    <th className="py-3 px-4 text-left">Focus Areas</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Quarter 1 (Jan-Mar)</td>
                    <td className="py-3 px-4">January 25, 2025</td>
                    <td className="py-3 px-4">Annual research plan, budget allocation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Quarter 2 (Apr-Jun)</td>
                    <td className="py-3 px-4">April 15, 2025</td>
                    <td className="py-3 px-4">Progress review, summer research initiatives</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Quarter 3 (Jul-Sep)</td>
                    <td className="py-3 px-4">July 20, 2025</td>
                    <td className="py-3 px-4">New project approvals, collaboration opportunities</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Quarter 4 (Oct-Dec)</td>
                    <td className="py-3 px-4">October 10, 2025</td>
                    <td className="py-3 px-4">Annual performance evaluation, future planning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Information</h3>
            <p className="text-blue-800 mb-2">
              For any queries regarding the Research Advisory Committee or research initiatives at the college, please contact:
            </p>
            <div className="text-blue-800">
              <p><span className="font-medium">Dr. N. Gayathri</span> - Research Coordinator</p>
              <p><span className="font-medium">Email:</span> research@pkrarts.org</p>
              <p><span className="font-medium">Phone:</span> +91 4285 222 224</p>
              <p><span className="font-medium">Office:</span> Research Cell, Academic Block, First Floor, Room No. 112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAdvisory;
