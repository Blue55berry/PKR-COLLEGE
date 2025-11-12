import React from 'react';
import EventCard from '../../components/ui/EventCard';

const IQAC = () => {
  const events = [
    {
      date: "25 Jan 2025",
      title: "IQAC Meeting - 2024-25",
      description: "Quarterly review and quality assessment meeting"
    },
    {
      date: "10 Mar 2025",
      title: "NAAC Criteria Workshop",
      description: "Workshop on preparing for NAAC criteria assessment"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Internal Quality Assurance Cell (IQAC)</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">About IQAC</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            The Internal Quality Assurance Cell (IQAC) at P.K.R. Arts College for Women was established to maintain and enhance the quality of education and overall institutional performance. The cell works in alignment with the vision and mission of the college to promote academic excellence.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-700">Objectives of IQAC</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution.</li>
            <li>To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
            <li>To provide a sound basis for decision-making to improve institutional functioning.</li>
            <li>To act as a change agent in the institution.</li>
            <li>To better internal communication.</li>
          </ul>
          
          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-700">Upcoming IQAC Events</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg">
              View OBE Excel Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IQAC;
