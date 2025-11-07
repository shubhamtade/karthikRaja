import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./britive-theme.css";
import Navigation from "./Components/Navigation.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import WhyRudraticPage from "./Pages/WhyRudraticpage.jsx";
import SolutionsPage from "./Pages/SolutionsPage.jsx";
import ClientSuccessPage from "./Pages/ClientSuccessPage.jsx";
import ClientLoginModal from "./Components/ClientLoginModal";
import PAMPage from "./Pages/PAMPage.jsx";
import SWOTDAMPage from "./Pages/SWOTDAMPage.jsx";
import SWOTCloudPAMPage from "./Pages/SWOTCloudPAMPage.jsx";
import BPMAutomationPage from "./Pages/BPMAutomationPage.jsx";
import AiquinoxPage from "./Pages/AiquinoxPage.jsx";
import Appdevelopmentpage from "./Pages/Services/Appdevelopmentpage.jsx";
import Oracleservicespage from "./Pages/Services/Oracleservicespage.jsx";
import SAPconsultpage from "./Pages/Services/SAPconsultpage.jsx";
import IBMservicespage from "./Pages/Services/IBMservicespage.jsx";
import ITinfrastructurepage from "./Pages/Services/ITinfrastructurepage.jsx";
import VMwarepage from "./Pages/Services/VMwarepage.jsx";
import RequestDemoModal from "./Components/RequestDemoModal.jsx"; // UNCOMMENT THIS

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animated routes wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactUs />
            </motion.div>
          }
        />
        <Route
          path="/about-us"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutUsPage />
            </motion.div>
          }
        />
        <Route
          path="/why-rudratic"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <WhyRudraticPage />
            </motion.div>
          }
        />
        <Route
          path="/solutions"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SolutionsPage />
            </motion.div>
          }
        />
        <Route
          path="/client-success"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ClientSuccessPage />
            </motion.div>
          }
        />
        <Route
          path="/products/pam"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PAMPage />
            </motion.div>
          }
        />
        <Route
          path="/products/SWOTDAMPage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SWOTDAMPage />
            </motion.div>
          }
        />
        <Route
          path="/products/SWOTCloudPAMPage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SWOTCloudPAMPage />
            </motion.div>
          }
        />
        <Route
          path="/products/AiquinoxPage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AiquinoxPage />
            </motion.div>
          }
        />
        <Route
          path="/products/BPMAutomationPage"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BPMAutomationPage />
            </motion.div>
          }
        />
        {/* Services Routes */}
        <Route
          path="/services/app-development"
          element={<Appdevelopmentpage />}
        />
        <Route path="/services/oracle" element={<Oracleservicespage />} />
        <Route path="/services/sap" element={<SAPconsultpage />} />
        <Route path="/services/ibm" element={<IBMservicespage />} />
        <Route
          path="/services/it-infrastructure"
          element={<ITinfrastructurepage />}
        />
        <Route path="/services/vmware" element={<VMwarepage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); // UNCOMMENT THIS

  // Make this function available globally through window object
  useEffect(() => {
    window.openLoginModal = () => setIsLoginModalOpen(true);
    // ADD FOR DEMO MODAL TOO
    window.openDemoModal = () => setIsDemoModalOpen(true);
    return () => {
      delete window.openLoginModal;
      delete window.openDemoModal;
    };
  }, []);

  return (
    <Router>
      {/* PASS THE PROP TO NAVIGATION */}
      <Navigation />
      <AnimatedRoutes />
      {/* Client Login Modal - Rendered in HomePage */}
      <ClientLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      {/* ADD THIS MODAL */}
      <RequestDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </Router>
  );
}

export default App;