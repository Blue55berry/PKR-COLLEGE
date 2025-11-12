import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Contact Us</h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">Get in Touch</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-slate-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-700 mb-1">Address</h3>
                    <p className="text-gray-600">
                      P.K.R. Arts College for Women,<br />
                      Gobichettipalayam - 638 476,<br />
                      Erode District, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-slate-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-700 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 4285 222 222</p>
                    <p className="text-gray-600">+91 4285 222 333 (Admissions)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-slate-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-700 mb-1">Email</h3>
                    <p className="text-gray-600">principal@pkrarts.org</p>
                    <p className="text-gray-600">info@pkrarts.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-slate-700 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-700 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <a href="#" className="text-slate-700 hover:text-slate-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-700 hover:text-slate-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-700 hover:text-slate-900">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 1.834a8.166 8.166 0 018.166 8.166A8.166 8.166 0 0112 20.166 8.166 8.166 0 013.834 12 8.166 8.166 0 0112 3.834zm-2.45 4.575c-.391 0-.713.303-.713.68v5.822c0 .377.322.68.713.68h4.9c.391 0 .713-.303.713-.68v-5.822c0-.377-.322-.68-.713-.68h-4.9zm4.716 1.133v5.016h-4.533V9.542h4.533z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-slate-600 text-white p-4">
              <h2 className="text-xl font-semibold">Send us a Message</h2>
            </div>
            <div className="p-6">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-slate-600 text-white p-4">
            <h2 className="text-xl font-semibold">Find Us</h2>
          </div>
          <div className="p-0 h-96">
            {/* Here you would typically embed a Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.317069059196!2d77.43!3d11.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA1JzI0LjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1625124256789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="College Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
