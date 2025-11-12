import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import main pages
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Admissions from '../pages/admissions/Admissions';
import Departments from '../pages/departments/Departments';
import Research from '../pages/research/Research';
import CampusLife from '../pages/campus-life/CampusLife';
import Resources from '../pages/resources/Resources';
import Alumni from '../pages/alumni/Alumni';
import Gallery from '../pages/gallery/Gallery';
import IQAC from '../pages/iqac/IQAC';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/NotFound';

// Import about sub-pages
import History from '../pages/about/History';
import VisionMission from '../pages/about/VisionMission';
import Management from '../pages/about/Management';
import PrincipalsDesk from '../pages/about/PrincipalsDesk';

// Import admissions sub-pages
import HowToApply from '../pages/admissions/HowToApply';
import Eligibility from '../pages/admissions/Eligibility';
import FeeStructure from '../pages/admissions/FeeStructure';
import Scholarships from '../pages/admissions/Scholarships';

// Import departments sub-pages
import Arts from '../pages/departments/Arts';
import Commerce from '../pages/departments/Commerce';
import Science from '../pages/departments/Science';

// Import research sub-pages
import ResearchCell from '../pages/research/ResearchCell';
import ResearchProjects from '../pages/research/ResearchProjects';
import ResearchAdvisory from '../pages/research/ResearchAdvisory';

// Import resources sub-pages
import Library from '../pages/resources/Library';
import EResources from '../pages/resources/EResources';
import Laboratory from '../pages/resources/Laboratory';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* About Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/about/history" element={<History />} />
      <Route path="/about/vision" element={<VisionMission />} />
      <Route path="/about/management" element={<Management />} />
      <Route path="/about/principals-desk" element={<PrincipalsDesk />} />

      {/* Admissions Routes */}
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/admissions/how-to-apply" element={<HowToApply />} />
      <Route path="/admissions/eligibility" element={<Eligibility />} />
      <Route path="/admissions/fee-structure" element={<FeeStructure />} />
      <Route path="/admissions/scholarships" element={<Scholarships />} />

      {/* Departments Routes */}
      <Route path="/departments" element={<Departments />} />
      <Route path="/departments/arts" element={<Arts />} />
      <Route path="/departments/commerce" element={<Commerce />} />
      <Route path="/departments/science" element={<Science />} />

      {/* Research Routes */}
      <Route path="/research" element={<Research />} />
      <Route path="/research/cell" element={<ResearchCell />} />
      <Route path="/research/projects" element={<ResearchProjects />} />
      <Route path="/research/advisory" element={<ResearchAdvisory />} />

      {/* Resources Routes */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/library" element={<Library />} />
      <Route path="/resources/e-resources" element={<EResources />} />
      <Route path="/resources/laboratory" element={<Laboratory />} />
      
      <Route path="/campus-life" element={<CampusLife />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/iqac" element={<IQAC />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;