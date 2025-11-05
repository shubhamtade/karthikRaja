import React from 'react';
import { motion } from 'framer-motion';
import NoiseTexture from './NoiseTexture';

const TechPartnersSection = () => {
  const partners = ['Microsoft', 'Amazon', 'Google', 'Oracle', 'IBM', 'Dell', 'SAP', 'Cisco'];

  return (
    <section style={{ position: 'relative', padding: '60px 0', background: '#0a0d14', overflow: 'hidden' }}>
      <NoiseTexture opacity={0.08} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
          
          {/* Left Text */}
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: 'white', minWidth: '300px' }}>
            Trusted by Leading<br />Enterprises
          </h3>

          {/* Scrolling Partners */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'flex', gap: '60px', alignItems: 'center' }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.4)',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartnersSection;
