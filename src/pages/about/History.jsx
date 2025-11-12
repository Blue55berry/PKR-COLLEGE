import React from 'react';

const History = () => {
  const milestones = [
    {
      year: "1953",
      title: "Foundation",
      description: "Establishment of P.K.R. Arts College for Women by visionary founder Sri P.K. Ramasamy with a mission to provide quality education to women in the region."
    },
    {
      year: "1960",
      title: "Introduction of New Programs",
      description: "Introduction of Commerce and Science programs, expanding the academic offerings beyond Arts."
    },
    {
      year: "1975",
      title: "Silver Jubilee",
      description: "Celebration of 25 years of educational excellence with the introduction of postgraduate programs in select disciplines."
    },
    {
      year: "1985",
      title: "Research Centers",
      description: "Establishment of research centers and commencement of research programs in various disciplines."
    },
    {
      year: "1995",
      title: "Autonomous Status",
      description: "The college was granted autonomous status by the UGC, allowing for curriculum design and evaluation autonomy."
    },
    {
      year: "2003",
      title: "Golden Jubilee",
      description: "Celebration of 50 years of educational service with the inauguration of new infrastructure and facilities."
    },
    {
      year: "2010",
      title: "NAAC Accreditation",
      description: "Accredited with 'A' Grade by the National Assessment and Accreditation Council (NAAC)."
    },
    {
      year: "2018",
      title: "Modern Infrastructure",
      description: "Major campus renovation and expansion, including new academic buildings, smart classrooms, and sports facilities."
    },
    {
      year: "2023",
      title: "Platinum Jubilee",
      description: "Celebration of 70 years of academic excellence and women empowerment with various events and initiatives."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Our History</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">The Genesis</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/2">
              <p className="mb-4">
                P.K.R. Arts College for Women was founded in 1953 by the visionary philanthropist Sri P.K. Ramasamy, who recognized the need for higher education institutions dedicated to women in the region. In the post-independence era, when women's education was not widespread, the establishment of the college marked a significant step toward empowering women through quality education.
              </p>
              
              <p>
                The college began its journey with just three undergraduate programs in Arts and a handful of students. Despite humble beginnings and limited resources, the institution was founded on strong principles and a clear vision to provide access to quality education for women, especially those from rural and economically disadvantaged backgrounds.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
                <img src="/images/history/foundation.jpg" alt="College Foundation" className="rounded-lg max-h-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Journey Through Decades</h2>
        </div>
        <div className="p-6">
          <div className="relative border-l-2 border-slate-500 ml-6 pl-8 py-2">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-14 w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{index+1}</span>
                </div>
                <div className="absolute -left-10 top-0 w-2 h-2 bg-slate-600 rounded-full"></div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-slate-700 mb-1">{milestone.year} - {milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Legacy & Heritage</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">Architectural Heritage</h3>
              <div className="bg-gray-100 rounded-lg p-2 mb-3">
                <img src="/images/history/heritage-building.jpg" alt="Heritage Building" className="rounded-lg w-full h-48 object-cover" />
              </div>
              <p className="text-gray-600">
                The original main building of the college, constructed in 1953, stands as a testament to the architectural style of the era. Preserved and maintained, it serves as a reminder of the institution's rich history and legacy.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-slate-700">Institutional Values</h3>
              <div className="bg-gray-100 rounded-lg p-2 mb-3">
                <img src="/images/history/values.jpg" alt="Institutional Values" className="rounded-lg w-full h-48 object-cover" />
              </div>
              <p className="text-gray-600">
                Throughout its history, the college has maintained its core values of academic excellence, integrity, social responsibility, and inclusivity. These values continue to guide the institution's growth and development.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">Looking Forward</h3>
            <p className="mb-4">
              As P.K.R. Arts College for Women moves forward into the future, it remains committed to its founding principles while adapting to the changing educational landscape. The institution continues to evolve, embracing innovation and modern teaching methodologies while preserving its rich heritage and legacy.
            </p>
            
            <p>
              The college's history is not just a chronicle of events but a narrative of growth, resilience, and unwavering commitment to women's education and empowerment. It stands as an inspiration for future generations and a reminder of the transformative power of education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
