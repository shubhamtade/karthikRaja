import React, { useState } from 'react';
import HeroSection from "/src/Components/HeroSection.jsx";
import TechPartners from "/src/Components/TechPartners.jsx";
import WhatWeDoSection from "/src/Components/WhatWeDoSection.jsx";
import ServicesSection from "/src/Components/ServicesSection.jsx";
import ProductsSection from "/src/Components/ProductsSection.jsx";
import IntegratedApproach from "/src/Components/IntegratedApproach.jsx";
import TestimonialsSection from "/src/Components/TestimonialsSection.jsx";
import AboutUsSection from '/src/Components/AboutUsSection.jsx';
import CTASection from "/src/Components/CTASection.jsx";
import Footer from "/src/Components/Footer.jsx";
import RequestDemoModal from "/src/Components/RequestDemoModal.jsx";

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <HeroSection setIsDemoModalOpen={setIsDemoModalOpen} />
      <TechPartners />
      <WhatWeDoSection />
      <ProductsSection />
      <ServicesSection />
      <IntegratedApproach />
      <TestimonialsSection />
      <AboutUsSection />
      <CTASection />
      <Footer />
      
      {/* MODAL AT ROOT LEVEL */}
      <RequestDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default HomePage;