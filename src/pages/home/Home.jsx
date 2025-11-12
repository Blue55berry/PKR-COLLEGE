import React from 'react';
import { Link } from 'react-router-dom';
import NewsTicker from '../../components/layout/NewsTicker';
import EventCard from '../../components/ui/EventCard';
import Calendar from '../../components/ui/Calendar';
import AcademicLink from '../../components/ui/AcademicLink';

const Home = () => {
  const news = "International Seminar on Decoding the Relevance of Ethic Standards Executions, Chief Guest, Dr Pratibha Hariharan Riding at USA • Annual Sports Day 2025 - Registration Open • NAAC Peer Team Visit Scheduled - January 2025 • New Computer Lab Inauguration";
  
  const events = [
    {
      date: "25 Jan 2025",
      title: "IQAC Meeting - 2024-25",
      description: "Quarterly review and quality assessment meeting"
    },
    {
      date: "15 Feb 2025",
      title: "Alumni Meet 2025",
      description: "Annual gathering of all college alumni"
    }
  ];
  
  const academicLinks = [
    {
      icon: "📚",
      title: "P.K.R. Academy (CA/S)",
      description: "Career guidance and skill development",
      url: "#"
    },
    {
      icon: "🎓",
      title: "Bharathiar University",
      description: "Affiliated university portal",
      url: "#"
    },
    {
      icon: "📚",
      title: "Digital Library",
      description: "Access e-books and journals",
      url: "#"
    }
  ];

  return (
    <div>
      {/* Hero Section with Banner Image */}
      <div className="relative">
        <div className="h-[500px] bg-slate-600 relative">
          <img 
            src="/images/college-banner.jpg" 
            alt="College Group" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Accredited by NAAC with 'A' Grade</h1>
            <p className="text-xl">Promoting knowledge and skills of learner</p>
          </div>
        </div>
      </div>

      {/* OBE CO/PO Section */}
      <div className="bg-green-200 py-8">
        <div className="container mx-auto text-center">
          <Link to="/obe-copo" className="text-2xl text-slate-700 hover:text-slate-900">
            OBE CO/PO Course Attainment
          </Link>
        </div>
      </div>

      {/* News Ticker */}
      <NewsTicker news={news} />

      {/* Main Content Sections */}
      <div className="container mx-auto py-12 px-4">
        {/* Tabs Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex border-b">
            <button className="py-2 px-6 bg-gray-100 border-t border-r border-l rounded-t-lg text-slate-700 font-medium">Overview</button>
            <button className="py-2 px-6 text-slate-600">CO/PO Excel Data</button>
          </div>
        </div>

        {/* Three Column Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* News & Events */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4 flex items-center">
              <span className="mr-2">📅</span>
              <h3 className="text-xl font-medium">News & Events</h3>
            </div>
            <div className="bg-gray-50 p-4 h-64 overflow-y-auto">
              {events.map((event, index) => (
                <EventCard 
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          </div>

          {/* Academic Calendar */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4 flex items-center">
              <span className="mr-2">📅</span>
              <h3 className="text-xl font-medium">Academic Calendar</h3>
            </div>
            <Calendar />
          </div>

          {/* Academic Links */}
          <div className="border rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-4 flex items-center">
              <span className="mr-2">🔗</span>
              <h3 className="text-xl font-medium">Academic Links</h3>
            </div>
            <div className="bg-gray-50 p-4">
              {academicLinks.map((link, index) => (
                <AcademicLink
                  key={index}
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
