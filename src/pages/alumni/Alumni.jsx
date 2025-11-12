import React from 'react';
import { Link } from 'react-router-dom';

const Alumni = () => {
  const alumniSpotlights = [
    {
      name: "Dr. Lakshmi Priya",
      batch: "1998",
      profession: "Chief Scientist, ISRO",
      image: "/images/alumni1.jpg",
      quote: "My years at P.K.R. Arts College laid the foundation for my career in space research. The quality of education and guidance from professors shaped my future."
    },
    {
      name: "Ms. Kavitha Ramachandran",
      batch: "2005",
      profession: "CEO, TechInnovate Solutions",
      image: "/images/alumni2.jpg",
      quote: "The entrepreneurial spirit I developed at PKR helped me build my own tech company. I'm forever grateful for the leadership skills I gained here."
    },
    {
      name: "Dr. Meenakshi Sundaram",
      batch: "2000",
      profession: "Associate Professor, Harvard University",
      image: "/images/alumni3.jpg",
      quote: "PKR's academic rigor and research opportunities prepared me for global academic challenges. I cherish the mentorship I received during my time there."
    }
  ];

  const events = [
    {
      title: "Alumni Meet 2025",
      date: "February 15, 2025",
      location: "College Auditorium",
      description: "Annual gathering of PKR alumni to reconnect, network, and share experiences."
    },
    {
      title: "Career Mentorship Program",
      date: "March 10-15, 2025",
      location: "Various Departments",
      description: "A week-long program where alumni mentor current students in their respective fields."
    },
    {
      title: "Alumni Lecture Series",
      date: "Monthly (First Saturday)",
      location: "Online and On-campus",
      description: "Distinguished alumni share their expertise and experiences with current students."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Alumni Network</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Alumni Association</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            The P.K.R. Arts College Alumni Association was established to foster a lifelong connection between the college and its graduates. It serves as a platform for alumni to stay connected, give back to their alma mater, and help current students through mentorship and networking opportunities.
          </p>
          
          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-700">Mission</h3>
          <p className="mb-4">
            To create and maintain a lifelong relationship between the college and its alumni, promote professional and personal development of alumni, and support the growth and development of the institution.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Join the Alumni Network</h3>
            <p className="text-blue-800 mb-3">
              We invite all alumni to register with the association and stay connected with your alma mater and fellow graduates.
            </p>
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg inline-block"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Alumni Spotlight</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {alumniSpotlights.map((alumni, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg">{alumni.name}</h4>
                <p className="text-sm text-gray-600">Batch of {alumni.batch}</p>
                <p className="text-sm font-medium text-gray-800 mb-2">{alumni.profession}</p>
                <p className="text-sm text-gray-600 italic">"{alumni.quote}"</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/alumni/spotlights"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View More Alumni Spotlights
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Upcoming Alumni Events</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg">{event.title}</h3>
                <div className="flex flex-wrap text-sm text-gray-600 mb-2">
                  <p className="mr-4"><span className="font-medium">Date:</span> {event.date}</p>
                  <p><span className="font-medium">Location:</span> {event.location}</p>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Alumni Contributions</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Ways to Give Back</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><span className="font-medium">Mentorship Programs:</span> Share your expertise and experience with current students</li>
            <li><span className="font-medium">Guest Lectures:</span> Conduct sessions on industry trends and career guidance</li>
            <li><span className="font-medium">Internship Opportunities:</span> Offer internships and job placements</li>
            <li><span className="font-medium">Scholarships:</span> Contribute to scholarship funds for deserving students</li>
            <li><span className="font-medium">Infrastructure Development:</span> Support the enhancement of college facilities</li>
          </ul>
          
          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
            >
              Contribute Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
