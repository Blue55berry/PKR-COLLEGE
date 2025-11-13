import React from 'react';
import { Link } from 'react-router-dom';

const Arts = () => {
  const programs = [
    {
      name: "B.A. English Literature",
      duration: "3 years",
      description: "A comprehensive program focusing on English literature, language skills, and literary analysis.",
      career: "Teaching, content writing, publishing, civil services, journalism"
    },
    {
      name: "B.A. Tamil",
      duration: "3 years",
      description: "An in-depth study of Tamil language, literature, grammar, and cultural aspects.",
      career: "Teaching, translation, journalism, government services, cultural organizations"
    },
    {
      name: "M.A. English Literature",
      duration: "2 years",
      description: "Advanced study of English literature with specialization options and research methodology.",
      career: "Higher education teaching, research, content development, editing, corporate communications"
    },
    {
      name: "M.Phil. English",
      duration: "1 year",
      description: "Research-oriented program preparing students for doctoral studies and academic careers.",
      career: "Academic research, teaching in higher education institutions"
    },
    {
      name: "Ph.D. English",
      duration: "3-5 years",
      description: "Doctoral research program for specialized academic research in English literature.",
      career: "Academic research, college/university teaching, literary criticism"
    }
  ];
  
  const faculty = [
    {
      name: "Dr. Lakshmi Narayanan",
      designation: "Professor & Head, Department of English",
      qualification: "Ph.D. in English Literature",
      specialization: "Modern British Literature, Feminist Literary Criticism",
      image: "/images/faculty/lakshmi.jpg"
    },
    {
      name: "Dr. Saraswathi V.",
      designation: "Associate Professor",
      qualification: "Ph.D. in English, NET",
      specialization: "Indian Writing in English, Post-colonial Literature",
      image: "/images/faculty/saraswathi.jpg"
    },
    {
      name: "Dr. Padmavathi K.",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.Phil., M.A.",
      specialization: "American Literature, English Language Teaching",
      image: "/images/faculty/padmavathi.jpg"
    },
    {
      name: "Dr. Vijayalakshmi R.",
      designation: "Professor & Head, Department of Tamil",
      qualification: "Ph.D. in Tamil Literature",
      specialization: "Classical Tamil Literature, Comparative Literature",
      image: "/images/faculty/vijayalakshmi.jpg"
    }
  ];
  
  const facilities = [
    "Language Laboratory with audio-visual equipment",
    "Department Library with specialized collections",
    "Smart Classrooms with interactive teaching tools",
    "Digital Resources for language and literature studies",
    "Research Center for advanced literary studies"
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Department of Arts</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About the Department</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                The Department of Arts at P.K.R. Arts College for Women was established in 1953 as one of the founding departments of the college. Over the decades, it has evolved into a center of excellence for language and literature studies, offering comprehensive programs in English and Tamil.
              </p>
              
              <p className="mb-4">
                The department is known for its strong emphasis on developing critical thinking, analytical skills, and creative expression among students. It boasts a team of highly qualified faculty members who are experts in their respective fields and are actively engaged in research and publications.
              </p>
              
              <p>
                With state-of-the-art facilities, including a language laboratory and a well-stocked department library, the department provides an ideal learning environment for students to explore the richness of languages and literature.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img src="/images/departments/arts.jpg" alt="Arts Department" className="rounded-lg max-h-60"                />
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
          <h2 className="text-xl font-semibold">Facilities</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-slate-700">Department Facilities</h3>
              <ul className="space-y-3">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
              <img src="/images/departments/language-lab.jpg" alt="Language Laboratory" className="rounded-lg max-h-60" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research & Publications</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Research Areas</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Comparative Literature and Translation Studies</li>
            <li>Feminist and Gender Studies in Literature</li>
            <li>Post-colonial Literature and Diasporic Writings</li>
            <li>Eco-criticism and Environmental Humanities</li>
            <li>Indian Writing in English and Regional Literatures</li>
            <li>Language Teaching Methodologies and Pedagogical Innovations</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Recent Publications</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Narayanan, L. (2023). "Feminist Perspectives in Contemporary Indian English Fiction." <span className="font-medium">International Journal of Literary Studies, 15(2)</span>, 45-62.</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Saraswathi, V. (2023). "Post-colonial Identities in Diasporic Writings." <span className="font-medium">Journal of Commonwealth Literature, 42(1)</span>, 78-93.</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Padmavathi, K. (2022). "Teaching English through Digital Platforms: Challenges and Opportunities." <span className="font-medium">English Language Teaching Journal, 18(3)</span>, 112-128.</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Vijayalakshmi, R. (2022). "Evolution of Feminist Consciousness in Tamil Literature." <span className="font-medium">Journal of Dravidian Studies, 25(2)</span>, 67-82.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arts;
