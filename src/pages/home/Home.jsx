import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* OBE CO/PO Course Attainment Button */}
      <div className="text-center mb-8">
        <Link 
          to="/login"
          className="inline-block bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg text-lg"
        >
          OBE CO/PO Course Attainment
        </Link>
        <p className="text-slate-300 text-sm mt-2">
          Access the student evaluation and course attainment system
        </p>
      </div>

      {/* News Ticker */}
      <div className="bg-green-600 text-white p-3 rounded-lg mb-8 overflow-hidden">
        <div className="flex items-center">
          <span className="bg-green-700 px-4 py-2 rounded text-sm font-semibold mr-4 flex-shrink-0">
            📢 News
          </span>
          <div className="animate-marquee whitespace-nowrap text-sm">
            International Seminar on Decoding the Relevance of Ethic Standards Executions, Chief Guest, Dr Pratibha Hariharan Riding at USA • Annual Sports Day 2025 - Registration Open • NAAC Peer Team Visit Scheduled - January 2025 • New Computer Lab Inauguration • Digital Library Access Available
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-6">
        <div className="flex space-x-1">
          <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-medium">
            Overview
          </button>
          <button className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
            CO/PO Excel Data
          </button>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* News & Events */}
        <div className="bg-slate-600 text-white rounded-xl shadow-lg">
          <div className="bg-slate-700 px-6 py-4 rounded-t-xl">
            <h3 className="font-semibold flex items-center text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              News & Events
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <div className="bg-green-600 text-white text-xs px-3 py-1 rounded w-fit mb-2">
                25 Jan 2025
              </div>
              <h4 className="font-semibold text-sm mb-1">IQAC Meeting - 2024-25</h4>
              <p className="text-xs text-slate-300">Quarterly review and quality assessment meeting</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="bg-green-600 text-white text-xs px-3 py-1 rounded w-fit mb-2">
                15 Feb 2025
              </div>
              <h4 className="font-semibold text-sm mb-1">Alumni Meet 2025</h4>
              <p className="text-xs text-slate-300">Annual alumni gathering and networking event</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <div className="bg-green-600 text-white text-xs px-3 py-1 rounded w-fit mb-2">
                01 Mar 2025
              </div>
              <h4 className="font-semibold text-sm mb-1">Science Exhibition</h4>
              <p className="text-xs text-slate-300">Student science project presentations</p>
            </div>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-slate-600 text-white rounded-xl shadow-lg">
          <div className="bg-slate-700 px-6 py-4 rounded-t-xl">
            <h3 className="font-semibold flex items-center text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Academic Calendar
            </h3>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <button className="text-slate-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <h4 className="font-semibold">November 2025</h4>
              <button className="text-slate-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center font-semibold py-2">{day}</div>
              ))}
              
              {Array.from({length: 30}, (_, i) => (
                <div 
                  key={i} 
                  className={`text-center py-2 hover:bg-slate-700 rounded cursor-pointer transition-colors ${
                    i === 10 ? 'bg-slate-500 text-white font-semibold' : ''
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Links */}
        <div className="bg-green-600 text-white rounded-xl shadow-lg">
          <div className="bg-green-700 px-6 py-4 rounded-t-xl">
            <h3 className="font-semibold flex items-center text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Academic Links
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">P.K.R. Academy (CA/CS)</h4>
                  <p className="text-xs text-green-200">Career guidance and skill development</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center mr-3">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Bharathiar University</h4>
                  <p className="text-xs text-green-200">Affiliated university portal</p>
                </div>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Digital Library</h4>
                  <p className="text-xs text-green-200">Access e-books and journals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;