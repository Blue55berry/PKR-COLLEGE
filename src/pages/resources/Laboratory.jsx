import React from 'react';

const Laboratory = () => {
  const laboratories = [
    {
      name: "Physics Laboratory",
      facilities: [
        "Mechanics lab equipment for force, motion, and energy experiments",
        "Optics instruments including lasers, spectrometers, and diffraction apparatus",
        "Electronics workstations with oscilloscopes and function generators",
        "Modern physics instruments for radiation and quantum experiments"
      ],
      image: "/images/labs/physics-lab.jpg",
      software: ["PASCO Scientific Software", "PhET Interactive Simulations", "Logger Pro"]
    },
    {
      name: "Chemistry Laboratory",
      facilities: [
        "Organic chemistry section with distillation and extraction setups",
        "Analytical chemistry instruments including UV-Visible and IR spectrophotometers",
        "Physical chemistry equipment for thermodynamic and kinetics experiments",
        "Inorganic chemistry synthesis facilities with fume hoods"
      ],
      image: "/images/labs/chemistry-lab.jpg",
      software: ["ChemDraw", "Gaussian", "Origin Lab"]
    },
    {
      name: "Computer Science Laboratory",
      facilities: [
        "High-performance desktop computers with latest hardware specifications",
        "Networking lab with routers, switches, and server infrastructure",
        "IoT development kits and embedded systems modules",
        "Artificial Intelligence and Machine Learning workstations with GPU support"
      ],
      image: "/images/labs/cs-lab.jpg",
      software: ["Visual Studio", "Eclipse IDE", "MATLAB", "Python", "R Studio", "TensorFlow", "Hadoop"]
    },
    {
      name: "Language Laboratory",
      facilities: [
        "Digital workstations with headphones and microphones",
        "Audio-visual equipment for language learning",
        "Recording and playback facilities",
        "Group discussion and presentation areas"
      ],
      image: "/images/labs/language-lab.jpg",
      software: ["Rosetta Stone", "TOEFL Preparation Software", "Pronunciation Trainer", "Digital Language Library"]
    },
    {
      name: "Mathematics Laboratory",
      facilities: [
        "Computational workstations for mathematical modeling",
        "Statistical analysis equipment",
        "Geometrical modeling instruments",
        "Mathematical simulation tools"
      ],
      image: "/images/labs/math-lab.jpg",
      software: ["MATLAB", "Mathematica", "SPSS", "SageMath", "GeoGebra"]
    },
    {
      name: "Research Laboratory",
      facilities: [
        "Advanced analytical instruments",
        "Research-grade microscopes",
        "Material testing equipment",
        "Climate-controlled research chambers",
        "Data acquisition systems"
      ],
      image: "/images/labs/research-lab.jpg",
      software: ["LabVIEW", "ImageJ", "Origin Pro", "GraphPad Prism"]
    }
  ];
  
  const labRules = [
    "Students must wear lab coats and appropriate safety equipment in science laboratories",
    "Prior booking is required for using specialized equipment",
    "Consumption of food and drinks is strictly prohibited in all laboratories",
    "Report any damage to equipment or facilities immediately to the lab staff",
    "Follow all safety protocols and guidelines specific to each laboratory",
    "Maintain silence and professional conduct in the laboratory premises",
    "Lab materials and equipment must not be taken outside without proper authorization"
  ];
  
  const labSchedule = [
    { lab: "Physics Laboratory", weekdays: "9:00 AM - 5:00 PM", saturday: "9:00 AM - 1:00 PM" },
    { lab: "Chemistry Laboratory", weekdays: "9:00 AM - 5:00 PM", saturday: "9:00 AM - 1:00 PM" },
    { lab: "Computer Science Laboratory", weekdays: "8:00 AM - 8:00 PM", saturday: "9:00 AM - 5:00 PM" },
    { lab: "Language Laboratory", weekdays: "9:00 AM - 6:00 PM", saturday: "9:00 AM - 1:00 PM" },
    { lab: "Mathematics Laboratory", weekdays: "9:00 AM - 5:00 PM", saturday: "9:00 AM - 1:00 PM" },
    { lab: "Research Laboratory", weekdays: "8:00 AM - 8:00 PM", saturday: "9:00 AM - 5:00 PM" }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Laboratories</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About Our Laboratories</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            P.K.R. Arts College for Women is proud to offer state-of-the-art laboratory facilities that provide students with hands-on learning experiences and practical skills development. Our laboratories are equipped with modern instruments, equipment, and software that support both teaching and research activities across various disciplines.
          </p>
          
          <p className="mb-4">
            The college has invested significantly in developing and maintaining laboratories that meet the highest standards of educational excellence. Regular upgrades ensure that our students have access to the latest technologies and tools used in their respective fields.
          </p>
          
          <p>
            All laboratories are supervised by qualified technical staff who provide guidance and support to students during practical sessions and research work. The laboratories are designed to accommodate both regular curriculum activities and specialized research projects.
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">6+</h3>
              <p className="text-gray-600">Specialized Labs</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">₹2.5+ Cr</h3>
              <p className="text-gray-600">Investment in Equipment</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">15+</h3>
              <p className="text-gray-600">Technical Staff</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">200+</h3>
              <p className="text-gray-600">Workstations</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">30+</h3>
              <p className="text-gray-600">Software Applications</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">99.9%</h3>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-slate-700">Our Laboratory Facilities</h2>
        
        <div className="space-y-8">
          {laboratories.map((lab, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-700">{lab.name}</h3>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Facilities & Equipment:</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    {lab.facilities.map((facility, idx) => (
                      <li key={idx} className="text-gray-600">{facility}</li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Software & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.software.map((sw, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Laboratory Rules & Guidelines</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {labRules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="font-bold text-yellow-800 mb-2">Safety First</h3>
            <p className="text-yellow-800">
              Safety is our top priority in all laboratory activities. Students must follow all safety instructions and use personal protective equipment as required. Any violation of safety protocols may result in disciplinary action.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Laboratory Schedule</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Laboratory</th>
                  <th className="py-3 px-4 text-left">Weekdays (Mon-Fri)</th>
                  <th className="py-3 px-4 text-left">Saturday</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {labSchedule.map((schedule, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{schedule.lab}</td>
                    <td className="py-3 px-4">{schedule.weekdays}</td>
                    <td className="py-3 px-4">{schedule.saturday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-600 italic">
            * All laboratories remain closed on Sundays and public holidays unless special permissions are granted.
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Laboratory Staff & Contact</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Dr. K. Ramesh</h3>
              <p className="text-sm text-gray-600 mb-1">Laboratory Director</p>
              <p className="text-sm text-gray-600 mb-3">Ph.D. in Analytical Chemistry</p>
              <p className="text-sm"><span className="font-medium">Email:</span> labdirector@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 227</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Ms. Priya Sundaram</h3>
              <p className="text-sm text-gray-600 mb-1">Laboratory Manager (Science Labs)</p>
              <p className="text-sm text-gray-600 mb-3">M.Sc. in Physics</p>
              <p className="text-sm"><span className="font-medium">Email:</span> sciencelabs@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 228</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Mr. Senthil Kumar</h3>
              <p className="text-sm text-gray-600 mb-1">Laboratory Manager (Computer Labs)</p>
              <p className="text-sm text-gray-600 mb-3">M.Tech in Computer Science</p>
              <p className="text-sm"><span className="font-medium">Email:</span> computerlabs@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 229</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Mrs. Gayathri R.</h3>
              <p className="text-sm text-gray-600 mb-1">Laboratory Manager (Language & Research Labs)</p>
              <p className="text-sm text-gray-600 mb-3">M.Phil. in English</p>
              <p className="text-sm"><span className="font-medium">Email:</span> speciallabs@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 230</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-slate-700">Laboratory Booking</h3>
            <p className="mb-4">
              For special project work or research activities requiring laboratory access outside regular hours, please fill out the laboratory booking form at least 48 hours in advance.
            </p>
            <div className="text-center">
              <a 
                href="#" 
                className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
              >
                Laboratory Booking Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
