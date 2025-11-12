import React from 'react';

const EResources = () => {
  const subscriptions = [
    {
      name: "INFLIBNET N-LIST",
      description: "Access to 6,000+ e-journals and 31,35,000+ e-books across multiple disciplines",
      url: "https://nlist.inflibnet.ac.in",
      icon: "📚"
    },
    {
      name: "DELNET",
      description: "Access to union catalogues and databases of books, periodicals, thesis, dissertations",
      url: "https://delnet.in",
      icon: "🔍"
    },
    {
      name: "JSTOR",
      description: "Digital library of academic journals, books, and primary sources in 75 disciplines",
      url: "https://www.jstor.org",
      icon: "📖"
    },
    {
      name: "IEEE Xplore Digital Library",
      description: "Scientific and technical literature in engineering, computer science, and related technologies",
      url: "https://ieeexplore.ieee.org",
      icon: "💻"
    },
    {
      name: "ScienceDirect",
      description: "Full-text scientific database offering journal articles and book chapters from more than 2,500 journals",
      url: "https://www.sciencedirect.com",
      icon: "🧪"
    },
    {
      name: "National Digital Library of India",
      description: "Educational materials for all subjects, all age groups, in all languages",
      url: "https://ndl.iitkgp.ac.in",
      icon: "🏛️"
    }
  ];
  
  const openAccess = [
    {
      name: "DOAJ (Directory of Open Access Journals)",
      description: "Independent directory of open access peer-reviewed journals",
      url: "https://doaj.org"
    },
    {
      name: "DOAB (Directory of Open Access Books)",
      description: "Discovery service for peer-reviewed open access books",
      url: "https://www.doabooks.org"
    },
    {
      name: "Shodhganga",
      description: "Repository of Indian theses and dissertations",
      url: "https://shodhganga.inflibnet.ac.in"
    },
    {
      name: "Project Gutenberg",
      description: "Free eBooks collection of public domain literature",
      url: "https://www.gutenberg.org"
    },
    {
      name: "Open Library",
      description: "Open, editable library catalog with millions of book records",
      url: "https://openlibrary.org"
    },
    {
      name: "arXiv",
      description: "Open access repository of electronic preprints for scientific papers",
      url: "https://arxiv.org"
    }
  ];
  
  const tutorials = [
    {
      title: "How to Access E-Resources",
      steps: [
        "Visit the college website and navigate to E-Resources page",
        "Click on the desired database link",
        "Log in using your college credentials when prompted",
        "Search for the required resources using relevant keywords",
        "Download or view the material as per requirements"
      ]
    },
    {
      title: "Remote Access Instructions",
      steps: [
        "Install the college VPN client on your device (available on the IT helpdesk website)",
        "Connect to the college VPN using your college ID and password",
        "Once connected, visit the E-Resources page and access resources as usual",
        "Disconnect from VPN after completing your research"
      ]
    }
  ];
  
  const statistics = [
    { label: "E-Journals", count: "10,000+" },
    { label: "E-Books", count: "35,000+" },
    { label: "Databases", count: "12" },
    { label: "Digital Repositories", count: "8" },
    { label: "Annual Downloads", count: "50,000+" },
    { label: "Active Users", count: "2,500+" }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">E-Resources</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About E-Resources</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            P.K.R. Arts College for Women provides access to a wide range of electronic resources to support the academic and research activities of students and faculty. These resources include e-journals, e-books, databases, digital repositories, and other online materials that can be accessed both on-campus and remotely.
          </p>
          
          <p className="mb-4">
            The college has subscribed to various national and international e-resource platforms, ensuring that our academic community has access to the latest research and literature in their respective fields. Additionally, we provide training and support to help users effectively utilize these resources for their academic pursuits.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-slate-700">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Subscribed E-Resources</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {subscriptions.map((resource, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-slate-100 p-4 flex items-center">
                  <span className="text-2xl mr-3">{resource.icon}</span>
                  <h3 className="font-bold text-lg">{resource.name}</h3>
                </div>
                <div className="p-4">
                  <p className="mb-4 text-gray-600">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Access Resource
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Open Access Resources</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            In addition to our subscribed e-resources, we encourage students and faculty to explore the following open access resources that provide valuable academic content free of charge.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {openAccess.map((resource, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{resource.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">How to Access E-Resources</h2>
        </div>
        <div className="p-6">
          {tutorials.map((tutorial, index) => (
            <div key={index} className={index > 0 ? "mt-8" : ""}>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">{tutorial.title}</h3>
              <ol className="list-decimal pl-6 space-y-2">
                {tutorial.steps.map((step, idx) => (
                  <li key={idx} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          ))}
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Troubleshooting</h3>
            <p className="mb-4 text-yellow-800">
              If you encounter any issues accessing the e-resources, please try the following:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-yellow-800">
              <li>Clear your browser cache and cookies</li>
              <li>Ensure you are using the latest version of your browser</li>
              <li>Check your internet connection</li>
              <li>Verify that you are using the correct login credentials</li>
              <li>If using VPN for remote access, ensure it is properly connected</li>
            </ul>
            <p className="mt-4 text-yellow-800">
              For persistent issues, please contact the E-Resources Help Desk at <span className="font-medium">eresources@pkrarts.org</span> or visit the library IT support desk.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">E-Resource Training & Support</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Training Sessions</h3>
            <p className="mb-4">
              The library conducts regular training sessions on how to effectively use e-resources for academic and research purposes. These sessions cover search strategies, citation management, avoiding plagiarism, and more.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Session</th>
                    <th className="py-3 px-4 text-left">Schedule</th>
                    <th className="py-3 px-4 text-left">Target Audience</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Introduction to E-Resources</td>
                    <td className="py-3 px-4">Every Monday, 10:00 AM</td>
                    <td className="py-3 px-4">First year students</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Advanced Database Searching</td>
                    <td className="py-3 px-4">Every Wednesday, 2:00 PM</td>
                    <td className="py-3 px-4">Final year & PG students</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Citation Management Tools</td>
                    <td className="py-3 px-4">First Friday of each month, 11:00 AM</td>
                    <td className="py-3 px-4">Research scholars & Faculty</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Plagiarism Prevention</td>
                    <td className="py-3 px-4">Second Saturday of each month, 12:00 PM</td>
                    <td className="py-3 px-4">All students and faculty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Self-Paced Learning Materials</h3>
            <p className="mb-4">
              We also provide self-paced learning materials that you can access anytime to enhance your e-resource usage skills:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#" className="border rounded-lg p-4 hover:bg-blue-50 transition-colors flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Video Tutorials</h4>
                  <p className="text-sm text-gray-600">Step-by-step video guides for using various e-resources</p>
                </div>
              </a>
              <a href="#" className="border rounded-lg p-4 hover:bg-blue-50 transition-colors flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">User Guides</h4>
                  <p className="text-sm text-gray-600">Comprehensive PDF guides for each e-resource platform</p>
                </div>
              </a>
              <a href="#" className="border rounded-lg p-4 hover:bg-blue-50 transition-colors flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">FAQ</h4>
                  <p className="text-sm text-gray-600">Frequently asked questions about e-resources</p>
                </div>
              </a>
              <a href="#" className="border rounded-lg p-4 hover:bg-blue-50 transition-colors flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Research Tips</h4>
                  <p className="text-sm text-gray-600">Best practices for effective research using e-resources</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EResources;
