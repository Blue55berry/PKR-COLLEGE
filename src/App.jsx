import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

// Layouts
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Pages
import Login from './components/Login';

// Admin/Staff Pages
import AdminDashboard from './components/admin/AdminDashboard';
import StaffDashboard from './components/staff/StaffDashboard';

// Public Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import History from './pages/about/History';
import VisionMission from './pages/about/VisionMission';
import Management from './pages/about/Management';
import PrincipalsDesk from './pages/about/PrincipalsDesk';
import Admissions from './pages/admissions/Admissions';
import HowToApply from './pages/admissions/HowToApply';
import Eligibility from './pages/admissions/Eligibility';
import FeeStructure from './pages/admissions/FeeStructure';
import Scholarships from './pages/admissions/Scholarships';
import Departments from './pages/departments/Departments';
import Arts from './pages/departments/Arts';
import Commerce from './pages/departments/Commerce';
import Science from './pages/departments/Science';
import Research from './pages/research/Research';
import ResearchCell from './pages/research/ResearchCell';
import ResearchProjects from './pages/research/ResearchProjects';
import ResearchAdvisory from './pages/research/ResearchAdvisory';
import Resources from './pages/resources/Resources';
import Library from './pages/resources/Library';
import EResources from './pages/resources/EResources';
import Laboratory from './pages/resources/Laboratory';
import CampusLife from './pages/campus-life/CampusLife';
import Alumni from './pages/alumni/Alumni';
import Gallery from './pages/gallery/Gallery';
import IQAC from './pages/iqac/IQAC';
import Contact from './pages/contact/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                fontSize: '14px',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          <Routes>
            {/* Public routes are wrapped in MainLayout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/history" element={<History />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/management" element={<Management />} />
              <Route path="/about/principals-desk" element={<PrincipalsDesk />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/how-to-apply" element={<HowToApply />} />
              <Route path="/admissions/eligibility" element={<Eligibility />} />
              <Route path="/admissions/fee-structure" element={<FeeStructure />} />
              <Route path="/admissions/scholarships" element={<Scholarships />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/arts" element={<Arts />} />
              <Route path="/departments/commerce" element={<Commerce />} />
              <Route path="/departments/science" element={<Science />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/cell" element={<ResearchCell />} />
              <Route path="/research/projects" element={<ResearchProjects />} />
              <Route path="/research/advisory" element={<ResearchAdvisory />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/library" element={<Library />} />
              <Route path="/resources/e-resources" element={<EResources />} />
              <Route path="/resources/laboratory" element={<Laboratory />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/iqac" element={<IQAC />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Auth and Protected Routes (these do not use the MainLayout) */}
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff"
              element={
                <ProtectedRoute requiredRole="staff">
                  <StaffDashboard />
                </ProtectedRoute>
              }
            />

            {/* This is a catch-all for any route that doesn't match */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
