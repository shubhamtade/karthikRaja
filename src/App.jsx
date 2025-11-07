import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./britive-theme.css";
import Navigation from "/src/Components/Navigation.jsx";
import HomePage from "/src/Pages/HomePage.jsx";
import ContactUs from "/src/Pages/ContactUs.jsx";
import AboutUsPage from "/src/Pages/AboutUsPage.jsx";
import WhyRudraticPage from "/src/Pages/WhyRudraticPage.jsx";
import SolutionsPage from "/src/Pages/SolutionsPage.jsx";
import ClientSuccessPage from "/src/Pages/ClientSuccessPage.jsx";
import ClientLoginModal from "./Components/ClientLoginModal";
import PAMPage from "/src/Pages/PAMPage.jsx";
import SWOTDAMPage from "/src/Pages/SWOTDAMPage.jsx";
import SWOTCloudPAMPage from "/src/Pages/SWOTCloudPAMPage.jsx";
import BPMAutomationPage from "/src/Pages/BPMAutomationPage.jsx";
import AiquinoxPage from "/src/Pages/AiquinoxPage.jsx";
import Appdevelopmentpage from "/src/Pages/Services/Appdevelopmentpage.jsx";
import Oracleservicespage from "/src/Pages/Services/Oracleservicespage.jsx";
import SAPconsultpage from "/src/Pages/Services/SAPconsultpage.jsx";
import IBMservicespage from "/src/Pages/Services/IBMservicespage.jsx";
import ITinfrastructurepage from "/src/Pages/Services/ITinfrastructurepage.jsx";
import VMwarepage from "/src/Pages/Services/VMwarepage.jsx";
import RequestDemoModal from "/src/Components/RequestDemoModal.jsx"; // UNCOMMENT THIS

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