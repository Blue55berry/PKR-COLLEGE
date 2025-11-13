import React from 'react';

const ResearchCell = () => {
  const researchThrusts = [
    {
      area: "Women's Empowerment and Gender Studies",
      projects: [
        "Economic empowerment of women through skill development in rural areas",
        "Gender equality in higher education institutions",
        "Impact of digital literacy on women's social and economic status"
      ]
    },
    {
      area: "Environment and Sustainability",
      projects: [
        "Water conservation and management techniques for sustainable agriculture",
        "Assessment of environmental impact of urbanization in local regions",
        "Eco-friendly waste management solutions for educational institutions"
      ]
    },
    {
      area: "Information Technology and Digital Innovation",
      projects: [
        "AI-based solutions for educational challenges",
        "Development of mobile applications for rural health monitoring",
        "Cybersecurity awareness and digital safety for college students"
      ]
    },
    {
      area: "Commerce and Management Studies",
      projects: [
        "Financial inclusion among women in rural communities",
        "Impact of digital marketing on small and medium enterprises",
        "Consumer behavior analysis in e-commerce platforms"
      ]
    }
  ];
  
  const achievements = [
    "25+ ongoing research projects funded by various agencies",
    "₹1.5+ crore research grants received in the last 5 years",
    "100+ research papers published in national and international journals",
    "15 patents filed and 5 granted in the last decade",
    "30+ MoUs with industry partners and research institutions",
    "Organized 20+ national and international conferences/seminars"
  ];
  
  const fundingSources = [
    {
      name: "University Grants Commission (UGC)",
      schemes: ["Minor Research Projects", "Major Research Projects", "Research Awards"]
    },
    {
      name: "Department of Science and Technology (DST)",
      schemes: ["Science & Engineering Research Board (SERB) Projects", "Women Scientists Scheme", "Technology Development Programme"]
    },
    {
      name: "Indian Council of Social Science Research (ICSSR)",
      schemes: ["Research Projects", "Doctoral Fellowships", "Post-Doctoral Fellowships"]
    },
    {
      name: "State Government Research Grants",
      schemes: ["Tamil Nadu State Council for Science and Technology", "Tamil Nadu State Research Board"]
    },
    {
      name: "Industry Sponsored Research",
      schemes: ["Collaborative Research Projects", "Consultancy Services"]
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Research Cell</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About Research Cell</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            The Research Cell at P.K.R. Arts College for Women serves as the nodal center for promoting, facilitating, and monitoring research activities in the college. Established with the vision of creating a vibrant research ecosystem, the cell coordinates various research initiatives, provides support to faculty and student researchers, and facilitates collaboration with external research institutions and industry partners.
          </p>
          
          <p className="mb-4">
            The cell is committed to fostering a culture of inquiry, innovation, and intellectual exploration among faculty and students. It provides necessary infrastructure, resources, and administrative support for conducting quality research across disciplines.
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">30+</h3>
              <p className="text-gray-600">Faculty Researchers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">45</h3>
              <p className="text-gray-600">Research Scholars</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-slate-700">5</h3>
              <p className="text-gray-600">Research Centers</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research Thrust Areas</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            The Research Cell focuses on the following key thrust areas that align with institutional strengths, societal needs, and national priorities:
          </p>
          
          <div className="space-y-6">
            {researchThrusts.map((thrust, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-bold text-lg">{thrust.area}</h3>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-slate-700 mb-2">Ongoing Research Projects:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {thrust.projects.map((project, idx) => (
                      <li key={idx} className="text-gray-600">{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research Support Services</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">Pre-Research Support</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Research proposal development assistance</li>
                <li>Funding opportunity information and guidance</li>
                <li>Grant application support</li>
                <li>Research methodology guidance</li>
                <li>Ethics review facilitation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">Ongoing Research Support</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Project management assistance</li>
                <li>Access to specialized software and tools</li>
                <li>Data analysis support</li>
                <li>Laboratory and equipment access</li>
                <li>Regular progress review mechanisms</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Post-Research Support</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Research publication assistance</li>
              <li>Conference participation support</li>
              <li>Patent filing guidance</li>
              <li>Research dissemination through seminars and workshops</li>
              <li>Industry collaboration for research commercialization</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research Funding Sources</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            The Research Cell provides information and assistance for obtaining research funding from various sources:
          </p>
          
          <div className="space-y-4">
            {fundingSources.map((source, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{source.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {source.schemes.map((scheme, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {scheme}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
            >
              Download Funding Guidelines
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Research Achievements</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
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
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Contact Research Cell</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Dr. N. Gayathri</h3>
              <p className="text-sm text-gray-600 mb-1">Research Coordinator</p>
              <p className="text-sm text-gray-600 mb-3">Ph.D. in English Literature</p>
              <p className="text-sm"><span className="font-medium">Email:</span> research@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 224</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-1">Ms. Kalpana S.</h3>
              <p className="text-sm text-gray-600 mb-1">Research Administrative Assistant</p>
              <p className="text-sm text-gray-600 mb-3">M.Phil. in Commerce</p>
              <p className="text-sm"><span className="font-medium">Email:</span> researchcell@pkrarts.org</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> +91 4285 222 225</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Location</h3>
            <p className="mb-4">Research Cell, Academic Block, First Floor, Room No. 112</p>
            
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Office Hours</h3>
            <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCell;
