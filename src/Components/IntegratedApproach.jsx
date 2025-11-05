import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, BarChart3, Zap, ArrowRight } from 'lucide-react';

const IntegratedApproach = () => {
  const [activeTab, setActiveTab] = useState('PAM');

  const tabs = [
    {
      id: 'PAM',
      label: 'PAM',
      description: 'Protects and controls access to critical systems by managing privileged accounts, ensuring authorized users perform sensitive actions. It strengthens compliance, reduces risk and enhances security.',
      imagePath: 'product1.jpg'
    },
    {
      id: 'MONITORING',
      label: 'MONITORING',
      description: 'Real-time visibility into your IT infrastructure, applications, and network performance. Proactive monitoring helps identify issues before they impact your business.',
      imagePath: 'product2.jpg'
    },
    {
      id: 'AUTOMATION',
      label: 'AUTOMATION',
      description: 'Streamline operations and eliminate manual tasks with intelligent automation. Improve efficiency, reduce errors, and free up your team for strategic initiatives.',
      imagePath: 'product3.jpg'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section style={{ position: 'relative', padding: '100px 0', background: '#0a0d14', overflow: 'hidden' }}>
      
      {/* Animated Background Pattern */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.05 }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 10 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '48px', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '80px' }}
        >
          Our Integrated Approach
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left - Tabs and Content */}
          <div>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', background: 'rgba(139, 92, 246, 0.1)', padding: '8px', borderRadius: '16px' }}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    background: activeTab === tab.id
                      ? 'linear-gradient(135deg, #6366f1, #ec4899)'
                      : 'transparent'
                  }}
                  style={{
                    flex: 1,
                    padding: '16px',
                    border: 'none',
                    borderRadius: '14px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    color: activeTab === tab.id ? 'white' : '#6b21a8',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Content Box with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '48px'
                }}
              >
                {/* Green Border Box with Image */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  // border: '4px solid #10b981',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '32px',
                  position: 'relative'
                }}>
                  <img 
                    src={activeTabData.imagePath}
                    alt={`${activeTabData.label} visualization`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Description Text */}
                <p style={{ 
                  fontSize: '17px', 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  {activeTabData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - IT Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '40px',
              position: 'sticky',
              top: '120px'
            }}
          >
            <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
              IT Challenges
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8', marginBottom: '32px' }}>
              In today's complex digital landscape, IT security and operational efficiency can no longer exist in silos. Rudratic Technologies is your trusted partner, specializing in connecting these critical functions. We design, implement, and manage integrated solutions that not only fortify your defenses but also streamline your business processes, driving agility and sustainable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(90deg, #6366f1, #ec4899)',
                color: 'white',
                fontWeight: '600',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Learn About Our Approach
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproach;