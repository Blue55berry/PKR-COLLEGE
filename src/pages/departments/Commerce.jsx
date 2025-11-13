import React from 'react';
import { Link } from 'react-router-dom';

const Commerce = () => {
  const programs = [
    {
      name: "B.Com",
      duration: "3 years",
      description: "A comprehensive program covering accounting, finance, business law, taxation, and management principles.",
      career: "Accounting, banking, financial services, taxation, corporate administration"
    },
    {
      name: "B.Com (Computer Applications)",
      duration: "3 years",
      description: "Integration of commerce education with computer applications for the modern business environment.",
      career: "IT-enabled financial services, accounting software implementation, ERP management"
    },
    {
      name: "M.Com",
      duration: "2 years",
      description: "Advanced study in commerce with specializations in accounting, finance, or taxation.",
      career: "Higher positions in accounting, finance, corporate planning, teaching, research"
    },
    {
      name: "M.Phil. Commerce",
      duration: "1 year",
      description: "Research-oriented program preparing students for doctoral studies and academic careers.",
      career: "Academic research, teaching in higher education institutions, consultancy"
    },
    {
      name: "Ph.D. Commerce",
      duration: "3-5 years",
      description: "Doctoral research program for specialized academic research in commerce and business studies.",
      career: "Academic research, college/university teaching, corporate research"
    }
  ];
  
  const faculty = [
    {
      name: "Dr. S. Radhakrishnan",
      designation: "Professor & Head, Department of Commerce",
      qualification: "Ph.D. in Commerce, FCA",
      specialization: "Financial Accounting, Corporate Taxation",
      image: "/images/faculty/radhakrishnan.jpg"
    },
    {
      name: "Dr. P. Sumathi",
      designation: "Associate Professor",
      qualification: "Ph.D. in Commerce, NET",
      specialization: "Marketing Management, Entrepreneurship Development",
      image: "/images/faculty/sumathi.jpg"
    },
    {
      name: "Dr. M. Priya",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.Phil., M.Com",
      specialization: "Banking, Insurance, Financial Markets",
      image: "/images/faculty/priya.jpg"
    },
    {
      name: "Dr. K. Rajalakshmi",
      designation: "Professor",
      qualification: "Ph.D. in Commerce",
      specialization: "Business Law, Corporate Governance",
      image: "/images/faculty/rajalakshmi.jpg"
    }
  ];
  
  const achievements = [
    "Ranked among the top 20 Commerce departments in the state by Higher Education Review 2023",
    "100% placement record for postgraduate students for the past 5 years",
    "MoUs with 15+ corporate partners for internships and placement opportunities",
    "Recognized research center with 30+ research scholars having completed doctoral degrees",
    "Faculty members have published over 200 research papers in national and international journals",
    "Students have consistently secured university ranks in B.Com and M.Com programs",
    "Organized 25+ national level seminars and conferences in the last decade"
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Department of Commerce</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About the Department</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                The Department of Commerce at P.K.R. Arts College for Women was established in 1960 and has since evolved into a center of excellence in commerce education. The department offers undergraduate, postgraduate, and research programs in commerce and business studies.
              </p>
              
              <p className="mb-4">
                With a team of highly qualified and experienced faculty members, the department imparts quality education that blends theoretical knowledge with practical applications. The curriculum is regularly updated to reflect the changing business landscape and industry requirements.
              </p>
              
              <p>
                The department has strong industry connections and provides students with ample opportunities for internships, industrial visits, and practical training. It also has an active placement cell that facilitates campus recruitment and career development.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img src="/images/departments/commerce.jpg" alt="Commerce Department" className="rounded-lg max-h-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Programs Offered</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-bold text-lg">{program.name}</h3>
                  <p className="text-sm text-gray-600">Duration: {program.duration}</p>
                </div>
                <div className="p-4">
                  <p className="mb-2">{program.description}</p>
                  <div>
                    <span className="font-medium text-slate-700">Career Opportunities:</span> {program.career}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/admissions"
              className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Faculty</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {faculty.map((member, index) => (
              <div key={index} className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-1/3 flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{member.designation}</p>
                  <p className="text-sm text-gray-600 mb-1">Qualification: {member.qualification}</p>
                  <p className="text-sm text-gray-600">Specialization: {member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Facilities & Resources</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">Commerce Lab</h3>
              <p className="text-gray-600 mb-3">
                The department has a well-equipped commerce lab with modern facilities to provide practical exposure to students.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Computers with Tally, SAP, and other accounting software</li>
                <li>Internet connectivity for online financial data access</li>
                <li>Facilities for conducting virtual trading sessions</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <img src="/images/departments/commerce-lab.jpg" alt="Commerce Lab" className="rounded-lg max-h-60" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Achievements & Highlights</h2>
        </div>
        <div className="p-6">
          <ul className="list-disc pl-6 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Commerce;              