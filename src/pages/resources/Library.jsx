import React from 'react';

const Library = () => {
  const libraryStats = [
    { label: "Books", count: "50,000+" },
    { label: "Journals & Magazines", count: "150+" },
    { label: "E-Resources", count: "20,000+" },
    { label: "Daily Newspapers", count: "12" },
    { label: "Seating Capacity", count: "300" },
    { label: "Digital Access Points", count: "50" }
  ];
  
  const sections = [
    {
      name: "Reference Section",
      description: "Houses encyclopedias, dictionaries, yearbooks, and other reference materials for in-library use only.",
      image: "/images/library/reference.jpg"
    },
    {
      name: "General Stack Area",
      description: "Contains books from all disciplines that can be borrowed by students and faculty.",
      image: "/images/library/stack.jpg"
    },
    {
      name: "Periodicals Section",
      description: "Houses current and back volumes of journals, magazines, and newspapers.",
      image: "/images/library/periodicals.jpg"
    },
    {
      name: "Digital Resource Center",
      description: "Provides access to e-books, e-journals, online databases, and other digital resources.",
      image: "/images/library/digital.jpg"
    },
    {
      name: "Reading Room",
      description: "A quiet space for reading and studying with adequate seating arrangements.",
      image: "/images/library/reading.jpg"
    },
    {
      name: "Thesis Repository",
      description: "Collection of M.Phil. and Ph.D. theses submitted by research scholars from the college.",
      image: "/images/library/thesis.jpg"
    }
  ];
  
  const services = [
    "Book lending for students, faculty, and staff",
    "Reference and information services",
    "Digital resource access",
    "Inter-library loan facility",
    "Reprography services",
    "Current awareness service",
    "Orientation programs for new users",
    "Book exhibitions and library week celebrations"
  ];
  
  const digitalResources = [
    { name: "INFLIBNET N-LIST", description: "Access to 6,000+ e-journals and 31,35,000+ e-books" },
    { name: "DELNET", description: "Access to union catalogues and databases" },
    { name: "National Digital Library", description: "Learning resources for all subjects" },
    { name: "J-Gate", description: "Journal discovery service" },
    { name: "JSTOR", description: "Digital library of academic journals, books, and primary sources" },
    { name: "IEEE Digital Library", description: "Technical literature in engineering and technology" }
  ];
  
  const rules = [
    "Maintain silence in the library premises",
    "Library cards are not transferable",
    "Books are issued for 14 days for students and 30 days for faculty",
    "Overdue charges of ₹1 per day will be levied for late returns",
    "Reference books, periodicals, and theses cannot be borrowed",
    "Damaged or lost books must be replaced or compensated for",
    "Personal belongings are not allowed inside the stack area"
  ];
  
  const hours = [
    { day: "Monday to Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 3:00 PM" },
    { day: "Sundays & Public Holidays", time: "Closed" },
    { day: "Examination Period", time: "Extended hours announced separately" }
  ];
  
  const staff = [
    { name: "Dr. Kamala Devi", position: "Librarian", qualification: "Ph.D. in Library Science", email: "librarian@pkrarts.org" },
    { name: "Ms. Vijaya Lakshmi", position: "Deputy Librarian", qualification: "M.Lib., M.Phil.", email: "deputylibrarian@pkrarts.org" },
    { name: "Mr. Senthil Kumar", position: "Technical Assistant", qualification: "M.Lib.Sc.", email: "tech.library@pkrarts.org" },
    { name: "Ms. Kalpana", position: "Library Assistant", qualification: "B.Lib.Sc.", email: "library.assistant@pkrarts.org" }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Library</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About the Library</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                The Central Library of P.K.R. Arts College for Women is a treasure trove of knowledge and information. Established in 1953 along with the college, it has grown into a comprehensive resource center supporting the academic and research needs of students and faculty.
              </p>
              
              <p className="mb-4">
                Spread over an area of 15,000 sq. ft., the library is housed in a spacious, well-ventilated building with modern infrastructure. It follows an open access system, allowing users to freely browse the collections and explore resources of their interest.
              </p>
              
              <p>
                The library is fully automated with a web-based integrated library management system, enabling efficient cataloging, circulation, and retrieval of resources. It also provides access to a wide range of digital resources, including e-books, e-journals, and online databases.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img src="/images/library/main.jpg" alt="College Library" className="rounded-lg max-h-60" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {libraryStats.map((stat, index) => (
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
          <h2 className="text-xl font-semibold">Library Sections</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div key={index} className="flex bg-gray-50 rounded-lg overflow-hidden">
                <div className="w-1/3 flex-shrink-0">
                  <img src={section.image} alt={section.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold text-lg">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Library Services</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{service}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Digital Library Access</h3>
            <p className="mb-4 text-blue-800">
              The library provides access to various digital resources and databases including:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {digitalResources.map((resource, index) => (
                <div key={index} className="bg-white p-3 rounded shadow-sm text-center">
                  <h4 className="font-bold text-slate-700 mb-1">{resource.name}</h4>
                  <p className="text-xs text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Library Rules & Regulations</h2>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Library Hours</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Days</th>
                  <th className="py-3 px-4 text-left">Timing</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {hours.map((hour, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{hour.day}</td>
                    <td className="py-3 px-4">{hour.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-600 italic">
            * Hours may vary during vacation periods and special occasions. Please check the notice board for any changes.
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Library Staff</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {staff.map((member, index) => (
              <div key={index} className="flex bg-gray-50 rounded-lg p-4">
                <div className="w-full">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-1">Qualification: {member.qualification}</p>
                  <p className="text-sm text-blue-600">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Contact the Library</h3>
            <p className="mb-4 text-yellow-800">
              For any queries regarding library services, resources, or assistance, please feel free to contact us.
            </p>
            <div className="text-yellow-800">
              <p><span className="font-medium">Email:</span> library@pkrarts.org</p>
              <p><span className="font-medium">Phone:</span> +91 4285 222 226</p>
              <p><span className="font-medium">Location:</span> Library Building, East Wing, Ground Floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
