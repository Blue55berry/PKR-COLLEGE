import React, { useState } from 'react';

const ResearchProjects = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  
  const ongoingProjects = [
    {
      title: "Impact of Digital Literacy on Women's Economic Empowerment in Rural Tamil Nadu",
      investigators: "Dr. N. Gayathri, Dr. P. Sumathi",
      duration: "2023-2025 (2 years)",
      funding: "UGC - ₹18 lakhs",
      description: "This project investigates how digital literacy programs affect the economic opportunities and empowerment of women in rural areas of Tamil Nadu. The study employs mixed methods including surveys, interviews, and focus groups to assess the impact of digital skills on income generation, entrepreneurship, and financial inclusion."
    },
    {
      title: "Development of AI-based Early Detection System for Plant Diseases",
      investigators: "Dr. Ramesh Kumar T., Ms. Divya Lakshmi",
      duration: "2022-2024 (2 years)",
      funding: "DST-SERB - ₹25 lakhs",
      description: "This project aims to develop a mobile application that uses artificial intelligence and image processing to identify plant diseases at early stages. The system will help farmers take timely action to prevent crop loss and reduce dependency on chemical pesticides."
    },
    {
      title: "Sustainable Waste Management Solutions for Educational Institutions",
      investigators: "Dr. Anitha R., Dr. Mohan Kumar T.",
      duration: "2023-2025 (2 years)",
      funding: "Tamil Nadu State Council for Science and Technology - ₹12 lakhs",
      description: "This project focuses on developing and implementing sustainable waste management systems for educational institutions. It includes waste audit, segregation strategies, composting methods, and creating awareness about waste reduction and recycling among students and staff."
    },
    {
      title: "Consumer Behavior Analysis in E-commerce Platforms During Post-Pandemic Period",
      investigators: "Dr. S. Radhakrishnan, Dr. K. Rajalakshmi",
      duration: "2022-2024 (2 years)",
      funding: "ICSSR - ₹10 lakhs",
      description: "This research examines the changes in consumer behavior in e-commerce platforms in the post-pandemic period. It analyzes factors influencing online purchasing decisions, brand loyalty, payment preferences, and the overall shift in shopping patterns."
    },
    {
      title: "Development of Eco-friendly Biopolymers for Food Packaging Applications",
      investigators: "Dr. Anitha R., Dr. Vijay Prasad",
      duration: "2023-2026 (3 years)",
      funding: "DST - ₹32 lakhs",
      description: "This interdisciplinary project aims to develop biodegradable polymers from agricultural waste for sustainable food packaging applications. The research involves synthesis, characterization, and testing of biopolymers for their mechanical, barrier, and antimicrobial properties."
    }
  ];
  
  const completedProjects = [
    {
      title: "Gender Equality in Higher Education Institutions: A Comparative Study",
      investigators: "Dr. N. Gayathri, Dr. M. Priya",
      duration: "2020-2022 (2 years)",
      funding: "UGC - ₹15 lakhs",
      outcomes: "Published 3 research papers in international journals, Developed a gender equality framework for educational institutions, Organized a national seminar on gender equity in academia"
    },
    {
      title: "Mathematical Modeling of Epidemic Spread in Urban Settings",
      investigators: "Dr. Rajalakshmi S., Dr. Sundaram P.",
      duration: "2019-2022 (3 years)",
      funding: "DST-SERB - ₹22 lakhs",
      outcomes: "Developed predictive models for disease transmission, Published 4 research papers, Created a web-based application for epidemic prediction, Received Best Research Project Award from DST"
    },
    {
      title: "Cybersecurity Awareness Among College Students: Assessment and Intervention",
      investigators: "Dr. Ramesh Kumar T., Dr. Kavitha S.",
      duration: "2021-2022 (1 year)",
      funding: "Industry Sponsored (TCS) - ₹8 lakhs",
      outcomes: "Developed a comprehensive cybersecurity awareness program, Trained 2000+ students across 10 colleges, Created digital learning modules on cybersecurity"
    },
    {
      title: "Impact of Digital Marketing on Small and Medium Enterprises",
      investigators: "Dr. S. Radhakrishnan, Dr. P. Sumathi",
      duration: "2020-2022 (2 years)",
      funding: "ICSSR - ₹12 lakhs",
      outcomes: "Published 3 research papers, Developed a digital marketing framework for SMEs, Conducted workshops for local businesses on digital marketing strategies"
    }
  ];
  
  const studentProjects = [
    {
      title: "Smart Attendance System using Facial Recognition",
      students: "Aruna K., Deepika S., Fathima J. (M.Sc. Computer Science)",
      guide: "Dr. Kavitha S.",
      year: "2023",
      recognition: "Best Innovation Award in State-level Project Competition"
    },
    {
      title: "IoT-based Water Quality Monitoring System for Rural Areas",
      students: "Priya R., Shalini T., Vasanthi M. (B.Sc. Physics)",
      guide: "Dr. Mohan Kumar T.",
      year: "2023",
      recognition: "Selected for DST-INSPIRE Fellowship"
    },
    {
      title: "AI-based Crop Disease Detection Mobile Application",
      students: "Divya P., Nithya S. (M.Sc. Computer Science)",
      guide: "Dr. Ramesh Kumar T.",
      year: "2022",
      recognition: "Incubated at College Startup Hub, Patent Filed"
    },
    {
      title: "Microfinance Models for Women Entrepreneurs in Rural Communities",
      students: "Lakshmi N., Malathi R., Oviya S. (M.Com)",
      guide: "Dr. P. Sumathi",
      year: "2022",
      recognition: "Implemented in 5 villages with NGO collaboration"
    },
    {
      title: "Sign Language Translator using Machine Learning",
      students: "Harini K., Jothi S. (B.Sc. Computer Science)",
      guide: "Ms. Divya Lakshmi",
      year: "2023",
      recognition: "Selected for National Innovation Competition"
    },
    {
      title: "Eco-friendly Sanitary Products: Development and Awareness Campaign",
      students: "Bhavani R., Chitra P., Devi S. (B.Sc. Chemistry)",
      guide: "Dr. Anitha R.",
      year: "2022",
      recognition: "Best Social Impact Project Award"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Research Projects</h1>
      
      <div className="max-w-5xl mx-auto mb-8">
        <p className="text-lg text-center">
          P.K.R. Arts College for Women is actively engaged in a wide range of research projects funded by various government agencies, industry partners, and the institution itself. These projects address important societal challenges and contribute to knowledge advancement in diverse fields.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="flex border-b">
          <button 
            className={`py-3 px-6 font-medium ${activeTab === "ongoing" ? "bg-slate-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setActiveTab("ongoing")}
          >
            Ongoing Projects
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === "completed" ? "bg-slate-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Projects
          </button>
          <button 
            className={`py-3 px-6 font-medium ${activeTab === "student" ? "bg-slate-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            onClick={() => setActiveTab("student")}
          >
            Student Projects
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === "ongoing" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-slate-700">Ongoing Research Projects</h2>
              <div className="space-y-6">
                {ongoingProjects.map((project, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-100 p-4">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                    <div className="p-4">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Principal Investigators</p>
                          <p className="text-gray-700">{project.investigators}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Duration</p>
                          <p className="text-gray-700">{project.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Funding</p>
                          <p className="text-gray-700">{project.funding}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Project Description</p>
                        <p className="text-gray-700">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "completed" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-slate-700">Completed Research Projects</h2>
              <div className="space-y-6">
                {completedProjects.map((project, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-100 p-4">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                    <div className="p-4">
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Principal Investigators</p>
                          <p className="text-gray-700">{project.investigators}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Duration</p>
                          <p className="text-gray-700">{project.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Funding</p>
                          <p className="text-gray-700">{project.funding}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Key Outcomes</p>
                        <p className="text-gray-700">{project.outcomes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "student" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-slate-700">Student Research Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {studentProjects.map((project, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div className="bg-slate-100 p-4">
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Students</p>
                          <p className="text-gray-700">{project.students}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Guide</p>
                          <p className="text-gray-700">{project.guide}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Year</p>
                          <p className="text-gray-700">{project.year}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Recognition/Achievement</p>
                          <p className="text-gray-700">{project.recognition}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research Project Opportunities</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">For Faculty</h3>
              <p className="mb-4">
                Faculty members interested in initiating new research projects can apply for internal seed funding or seek guidance for external funding applications.
              </p>
              <a 
                href="#" 
                className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
              >
                Faculty Project Application
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">For Students</h3>
              <p className="mb-4">
                Students can participate in ongoing research projects or propose new ideas for final year projects with faculty guidance.
              </p>
              <a 
                href="#" 
                className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
              >
                Student Project Guidelines
              </a>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Research Project Support</h3>
            <p className="text-blue-800 mb-3">
              The Research Cell provides comprehensive support for project planning, proposal development, implementation, and reporting. For any assistance related to research projects, please contact:
            </p>
            <div className="text-blue-800">
              <p><span className="font-medium">Email:</span> projects@pkrarts.org</p>
              <p><span className="font-medium">Phone:</span> +91 4285 222 224</p>
              <p><span className="font-medium">Office:</span> Research Cell, Academic Block, First Floor, Room No. 112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProjects;
