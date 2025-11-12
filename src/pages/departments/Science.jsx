import React from 'react';
import { Link } from 'react-router-dom';

const Science = () => {
  const programs = [
    {
      name: "B.Sc. Mathematics",
      duration: "3 years",
      description: "A comprehensive program covering pure and applied mathematics, including algebra, calculus, statistics, and numerical analysis.",
      career: "Data analysis, actuarial science, teaching, research, banking, and finance"
    },
    {
      name: "B.Sc. Physics",
      duration: "3 years",
      description: "An in-depth study of classical and modern physics, including mechanics, electromagnetism, thermodynamics, and quantum physics.",
      career: "Research, quality control, teaching, technical writing, and scientific labs"
    },
    {
      name: "B.Sc. Chemistry",
      duration: "3 years",
      description: "A thorough exploration of organic, inorganic, physical, and analytical chemistry with practical laboratory experience.",
      career: "Quality control, chemical analysis, research labs, pharmaceutical industry, teaching"
    },
    {
      name: "M.Sc. Mathematics",
      duration: "2 years",
      description: "Advanced study in mathematics with specializations in differential equations, number theory, and mathematical modeling.",
      career: "Higher education teaching, research, data science, operations research, cryptography"
    }
  ];
  
  const faculty = [
    {
      name: "Dr. Rajalakshmi S.",
      designation: "Professor & Head, Department of Mathematics",
      qualification: "Ph.D. in Mathematics",
      specialization: "Differential Equations, Mathematical Modeling",
      image: "/images/faculty/rajalakshmi.jpg"
    },
    {
      name: "Dr. Mohan Kumar T.",
      designation: "Associate Professor, Department of Physics",
      qualification: "Ph.D. in Physics, NET",
      specialization: "Solid State Physics, Materials Science",
      image: "/images/faculty/mohan.jpg"
    },
    {
      name: "Dr. Anitha R.",
      designation: "Assistant Professor, Department of Chemistry",
      qualification: "Ph.D., M.Phil., M.Sc.",
      specialization: "Organic Chemistry, Polymer Chemistry",
      image: "/images/faculty/anitha.jpg"
    },
    {
      name: "Dr. Sundaram P.",
      designation: "Professor, Department of Mathematics",
      qualification: "Ph.D. in Mathematics",
      specialization: "Number Theory, Algebraic Structures",
      image: "/images/faculty/sundaram.jpg"
    }
  ];
  
  const laboratories = [
    {
      name: "Physics Laboratory",
      facilities: [
        "Advanced equipment for mechanics and optics experiments",
        "Digital electronic workstations",
        "Spectroscopy and radiation measurement instruments",
        "Data acquisition systems"
      ],
      image: "/images/labs/physics-lab.jpg"
    },
    {
      name: "Chemistry Laboratory",
      facilities: [
        "Well-equipped analytical chemistry section",
        "Organic synthesis facilities",
        "Spectroscopic instruments (UV-Visible, IR)",
        "Chromatographic equipment"
      ],
      image: "/images/labs/chemistry-lab.jpg"
    },
    {
      name: "Computer Laboratory for Mathematical Computing",
      facilities: [
        "Advanced computing systems with mathematical software",
        "Statistical analysis tools",
        "Numerical computation software",
        "Mathematical modeling platforms"
      ],
      image: "/images/labs/math-lab.jpg"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Department of Science</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About the Department</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                The Department of Science at P.K.R. Arts College for Women was established in 1963 and has since evolved into a center of excellence for scientific education and research. The department houses three major disciplines: Mathematics, Physics, and Chemistry.
              </p>
              
              <p className="mb-4">
                With state-of-the-art laboratories, experienced faculty, and a strong emphasis on practical learning, the Science Department provides students with a solid foundation in scientific principles and their applications. The department is committed to fostering critical thinking, analytical skills, and scientific temperament among students.
              </p>
              
              <p>
                The Science Department regularly organizes seminars, workshops, and conferences to keep students updated with the latest developments in the field. It also encourages research activities, with many faculty members actively engaged in research projects funded by various national and international agencies.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img src="/images/departments/science.jpg" alt="Science Department" className="rounded-lg max-h-60" />
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
          <h2 className="text-xl font-semibold">Laboratories</h2>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            {laboratories.map((lab, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-lg p-2 h-full">
                    <img src={lab.image} alt={lab.name} className="rounded-lg w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-lg font-semibold mb-3 text-slate-700">{lab.name}</h3>
                  <ul className="space-y-2">
                    {lab.facilities.map((facility, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research & Achievements</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Research Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-base mb-2">Mathematics Department</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Differential Equations and Applications</li>
                <li>Number Theory and Cryptography</li>
                <li>Operations Research</li>
                <li>Statistical Analysis and Data Science</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-base mb-2">Physics Department</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Material Science and Nanotechnology</li>
                <li>Solid State Physics and Device Applications</li>
                <li>Renewable Energy Systems</li>
                <li>Computational Physics</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold text-base mb-2">Chemistry Department</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Green Chemistry and Sustainable Synthesis</li>
                <li>Polymer Chemistry and Applications</li>
                <li>Medicinal Chemistry</li>
                <li>Environmental Analysis</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Recent Research Publications</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Rajalakshmi, S., et al. (2023). "Mathematical Modeling of Epidemic Spread: Analysis and Predictions." <span className="font-medium">International Journal of Mathematical Sciences, 28(3)</span>, 123-142.</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Kumar, M.T., et al. (2023). "Synthesis and Characterization of Novel Nanostructured Materials for Solar Cell Applications." <span className="font-medium">Journal of Material Science, 45(2)</span>, 215-230.</p>
            </div>
            <div className="border-l-4 border-slate-500 pl-4 py-1">
              <p className="italic">Anitha, R., et al. (2022). "Eco-friendly Synthesis of Biopolymers and Their Applications." <span className="font-medium">Green Chemistry Letters and Reviews, 12(4)</span>, 78-92.</p>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 mt-6 text-slate-700">Department Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recognized as a "Center of Excellence in Mathematical Sciences" by the State Government</li>
            <li>Received research grants worth ₹85 lakhs from various funding agencies in the past five years</li>
            <li>Organized 12 national and 3 international conferences in the last decade</li>
            <li>Students have consistently secured university ranks and qualified for competitive examinations like CSIR-NET, GATE, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Science;
