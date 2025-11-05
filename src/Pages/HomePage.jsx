import React, { useState, useEffect } from 'react';
import HeroSection from "/src/Components/HeroSection.jsx";
import TechPartners from "/src/Components/TechPartners.jsx";
import WhatWeDoSection from "/src/Components/WhatWeDoSection.jsx";
import ServicesSection from "/src/Components/ServicesSection.jsx";
import ProductsSection from "/src/Components/ProductsSection.jsx";
import IntegratedApproach from "/src/Components/IntegratedApproach.jsx";
import TestimonialsSection from "/src/Components/TestimonialsSection.jsx";
import CTASection from "/src/Components/CTASection.jsx";
import Footer from "/src/Components/Footer.jsx";
// import ClientLoginModal from "/src/Components/ClientLoginModal.jsx";

const HomePage = () => {
 

  return (
    <>
      <HeroSection />
      <TechPartners />
      <WhatWeDoSection />
      <ServicesSection />
      <ProductsSection />
      <IntegratedApproach />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
     
    </>
  );
};

export default HomePage;
