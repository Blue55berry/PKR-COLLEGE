import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-college-blue text-white pt-10 pb-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl text-green-200 mb-4">About PKR Arts College</h3>
          <p className="text-sm">
            An Autonomous Institution Affiliated to Bharathiar University. Re-Accredited with 'A' Grade by NAAC. Dedicated to empowering women through quality education since 1953.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl text-green-200 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/admissions" className="hover:text-gray-300">Admissions</Link></li>
            <li><Link to="/departments" className="hover:text-gray-300">Departments</Link></li>
            <li><Link to="/iqac" className="hover:text-gray-300">IQAC</Link></li>
            <li><Link to="/alumni" className="hover:text-gray-300">Alumni</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl text-green-200 mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-start">
              <span className="mr-2">📍</span>
              P.K.R. Arts College for Women, Gobichettipalayam - 638 476, Tamil Nadu, India
            </p>
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              +91 4285 222 222
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              principal@pkrarts.org
            </p>
          </div>
          
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
        <p>© 2022 P.K.R. Arts College for Women. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
