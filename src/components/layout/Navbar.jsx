import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import img from '../../../public/logo1.jpg'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { 
      name: "About PKR", 
      path: "/about", 
      dropdown: [
        { name: "History", path: "/about/history" },
        { name: "Vision & Mission", path: "/about/vision-mission" },
        { name: "Management", path: "/about/management" },
        { name: "Principal's Desk", path: "/about/principals-desk" }
      ]
    },
    { 
      name: "Admissions", 
      path: "/admissions", 
      dropdown: [
        { name: "How to Apply", path: "/admissions/how-to-apply" },
        { name: "Eligibility", path: "/admissions/eligibility" },
        { name: "Fee Structure", path: "/admissions/fee-structure" },
        { name: "Scholarships", path: "/admissions/scholarships" }
      ] 
    },
    { 
      name: "Departments", 
      path: "/departments", 
      dropdown: [
        { name: "Arts", path: "/departments/arts" },
        { name: "Commerce", path: "/departments/commerce" },
        { name: "Science", path: "/departments/science" }
      ] 
    },
    { 
      name: "Research", 
      path: "/research", 
      dropdown: [
        { name: "Research Cell", path: "/research/cell" },
        { name: "Research Projects", path: "/research/projects" },
        { name: "Research Advisory", path: "/research/advisory" }
      ] 
    },
    { name: "Campus Life", path: "/campus-life" },
    { 
      name: "Resources", 
      path: "/resources", 
      dropdown: [
        { name: "Library", path: "/resources/library" },
        { name: "E-Resources", path: "/resources/e-resources" },
        { name: "Laboratory", path: "/resources/laboratory" }
      ] 
    },
    { name: "Alumni", path: "/alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "IQAC", path: "/iqac" },
  ];

  return (
    <header className="w-full">
      {/* Header with logo and college name */}
      <div className="flex items-center justify-between bg-college-blue p-4">
        <div className="flex items-center">
          <Link to="/">
            <img src={img} alt="College Logo" className="h-16 w-16" />
          </Link>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-white">P.K.R. ARTS COLLEGE FOR WOMEN</h1>
            <p className="text-gray-300 text-sm">Autonomous Institution | NAAC 'A' Grade</p>
          </div>
        </div>
        <Link 
          to="/payment"
          className="bg-green-200 hover:bg-green-300 text-green-900 py-2 px-4 rounded"
        >
          Online Payment
        </Link>
      </div>
      
      {/* Main navigation */}
      <nav className="bg-college-blue text-white">
        {/* Desktop menu */}
        <div className="container mx-auto hidden md:block">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li key={index} className={item.dropdown?.length ? "nav-dropdown" : ""}>
                <Link to={item.path} className="nav-link flex items-center">
                  {item.name} 
                  {item.dropdown?.length ? <FaChevronDown className="ml-1 w-3 h-3" /> : null}
                </Link>
                
                {item.dropdown?.length ? (
                  <div className="dropdown-menu">
                    {item.dropdown.map((dropItem, idx) => (
                      <Link 
                        key={idx}
                        to={dropItem.path} 
                        className="block p-2 text-gray-800 hover:bg-gray-100"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden p-4 flex justify-end">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-college-blue border-t border-gray-600">
            <ul className="px-4 py-2">
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <Link 
                    to={item.path}
                    className="block text-white py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
