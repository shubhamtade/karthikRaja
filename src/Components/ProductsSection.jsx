import React from 'react';
import { motion } from 'framer-motion';
import { Key, BarChart3, Workflow, Zap, ArrowRight, Check } from 'lucide-react';
import { fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import NoiseTexture from './NoiseTexture';
import { Link } from 'react-router-dom'; // ✅ Add this if using React Router

const ProductsSection = () => {
  const products = [
    {
      title: 'Privileged Access Management (PAM)',
      icon: Key,
      imagePath: 'product1.jpg',
      description:
        'Comprehensive Privileged Access Management solution that provides secure access control, session monitoring, and credential management for your enterprise infrastructure.',
      features: [
        'Privileged Account Discovery & Onboarding',
        'Password Vaulting & Auto-Rotation',
        'Session Recording & Monitoring',
        'Just-in-Time Access Provisioning',
      ],
      href: '/products/pam',
      color: '#6366f1',
    },
    {
      title: 'IT Monitoring Solutions',
      icon: BarChart3,
      imagePath: 'product2.jpg',
      description:
        'Real-time monitoring and observability platform that provides comprehensive insights into your IT infrastructure, applications, and network performance.',
      features: [
        'Infrastructure & Network Monitoring',
        'Application Performance Monitoring (APM)',
        'Log Management & Analytics',
        'Custom Dashboards & Visualizations',
      ],
      href: '/products/monitoring',
      color: '#10b981',
    },
    {
      title: 'Business Process Management (BPM)',
      icon: Workflow,
      imagePath: 'product3.jpg',
      description:
        'Enterprise BPM platform that enables you to model, automate, and optimize business processes with powerful workflow automation and analytics.',
      features: [
        'Visual Process Designer',
        'Workflow Automation Engine',
        'Process Analytics & Optimization',
        'Task Management & Tracking',
      ],
      href: '/products/bpm',
      color: '#f59e0b',
    },
    {
      title: 'IT Automation & Orchestration',
      icon: Zap,
      imagePath: 'product4.jpg',
      description:
        'Comprehensive IT automation platform that orchestrates complex workflows, eliminates manual tasks, and enables intelligent self-service IT operations.',
      features: [
        'Workflow Orchestration & Scheduling',
        'Runbook Automation',
        'Self-Service IT Portal',
        'API-First Integration Framework',
      ],
      href: '/products/automation',
      color: '#ec4899',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        padding: '100px 0',
        background: '#0a0d14',
        overflow: 'hidden',
      }}
    >
      <NoiseTexture opacity={0.08} />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.p
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '2px',
              color: '#818cf8',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Our Products
          </motion.p>
        </motion.div>

        {products.map((product, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
              marginBottom: index < products.length - 1 ? '100px' : '0',
            }}
          >
            {/* Image Section (Left Side if even index) */}
            {index % 2 === 0 && (
              <Link to={product.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  variants={fadeInLeft}
                  style={{
                    background: `${product.color}15`,
                    borderRadius: '24px',
                    padding: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${product.color}30`,
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={product.imagePath}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '400px',
                      maxHeight: '300px',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              </Link>
            )}

            {/* Content Section */}
            <motion.div variants={fadeInRight}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                {React.createElement(product.icon, {
                  size: 24,
                  color: 'white',
                })}
                <h3
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    color: 'white',
                    margin: 0,
                  }}
                >
                  {product.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: '1.8',
                  marginBottom: '24px',
                }}
              >
                {product.description}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '32px',
                }}
              >
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    <Check size={20} color={product.color} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={product.href} style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{
                    padding: '14px 28px',
                    background: product.color,
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '10px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Image Section (Right Side if odd index) */}
            {index % 2 === 1 && (
              <Link to={product.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  variants={fadeInRight}
                  style={{
                    background: `${product.color}15`,
                    borderRadius: '24px',
                    padding: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${product.color}30`,
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={product.imagePath}
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '400px',
                      maxHeight: '300px',
                      objectFit: 'contain',
                    }}
                  />
                </motion.div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
