import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Settings, ArrowRight, Server, HardDrive, Headphones, Code, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import NoiseTexture from './NoiseTexture';
import ParticleBackground from './ParticleBackground';
import { floatingAnimation } from '../utils/animations';

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: 'Oracle Services',
      icon: Briefcase,
      items: [
        { icon: GraduationCap, text: 'Oracle Training' },
        { icon: Briefcase, text: 'Oracle Consulting' },
        { icon: Settings, text: 'Oracle Implementation' }
      ]
    },
    {
      title: 'IBM Services',
      icon: Server,
      items: [
        { icon: GraduationCap, text: 'IBM Training' },
        { icon: Briefcase, text: 'IBM Consulting' },
        { icon: Settings, text: 'IBM Implementation' }
      ]
    },
    {
      title: 'Virtualization & VMware',
      icon: HardDrive,
      items: [
        { icon: Settings, text: 'VMware Solutions' },
        { icon: Briefcase, text: 'Virtualization Support' }
      ]
    },
    {
      title: 'IT Infrastructure Support',
      icon: Headphones,
      items: [
        { icon: Settings, text: 'Infrastructure Management' },
        { icon: Headphones, text: '24/7 Technical Support' }
      ]
    },
    {
      title: 'Application Development',
      icon: Code,
      items: [
        { icon: Code, text: '.NET/C# Development' },
        { icon: Code, text: 'Java Development' },
        { icon: Code, text: 'Mobile Applications' }
      ]
    },
    {
      title: 'SAP Consulting',
      icon: Server,
      items: [
        { icon: Users, text: 'SAP Solutions' }
      ]
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section style={{ position: 'relative', padding: '100px 0', background: '#0a0d14', overflow: 'hidden' }}>
      <NoiseTexture opacity={0.08} />
      <ParticleBackground density={40} color="rgba(129, 140, 248, 0.3)" />

      {/* Animated Background Grid */}
      
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.05 }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.p variants={fadeInUp} style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '2px', color: '#818cf8', marginBottom: '16px', textTransform: 'uppercase' }}>
            Our Services
          </motion.p>
          <motion.h2 variants={fadeInUp} style={{ fontSize: '48px', fontWeight: '700', color: 'white' }}>
            Comprehensive IT Solutions
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportLeave={() => setShowAll(false)}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Icon Container */}
                <div style={{ marginBottom: '24px', padding: '16px', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))', borderRadius: '12px', width: 'fit-content', transition: 'transform 0.3s ease' }}>
                  {React.createElement(service.icon, { size: 40, color: 'white' })}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '24px', transition: 'color 0.3s ease' }}>
                  {service.title}
                </h3>

                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
                  {service.items.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '12px' }}>
                      {React.createElement(item.icon, { size: 20, color: '#a78bfa' })}
                      <span style={{ fontSize: '14px' }}>{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button style={{ background: 'none', border: 'none', color: '#a78bfa', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'gap 0.3s ease' }}>
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Services Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowAll(true)}
              style={{ padding: '16px 32px', background: 'linear-gradient(90deg, #a855f7, #ec4899)', color: 'white', fontWeight: '600', borderRadius: '12px', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              View All Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;