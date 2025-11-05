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
import WhyRudraticPage from "./Pages/WhyRudraticPage.jsx";
import SolutionsPage from "./Pages/SolutionsPage.jsx";
import ClientSuccessPage from "./Pages/ClientSuccessPage.jsx";
import ClientLoginModal from "./Components/ClientLoginModal";
import PAMPage from "./Pages/PAMPage.jsx";
import ITMonitoringPage from "./Pages/ITMonitoringPage.jsx";
import BPMPage from "./Pages/BPMPage.jsx";
import AutomationPage from "./Pages/AutomationPage.jsx";

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
          path="/products/monitoring"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ITMonitoringPage />
            </motion.div>
          }
        />
        <Route
          path="/products/bpm"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BPMPage />
            </motion.div>
          }
        />
        <Route
          path="/products/automation"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AutomationPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Make this function available globally through window object
  useEffect(() => {
    window.openLoginModal = () => setIsLoginModalOpen(true);
    return () => {
      delete window.openLoginModal;
    };
  }, []);

  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
      {/* Client Login Modal - Rendered in HomePage */}
      <ClientLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </Router>
  );
}

export default App;
