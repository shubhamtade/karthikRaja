import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users2, Target, Sparkles, CheckCircle2, Award } from 'lucide-react';
import NoiseTexture from '../Components/NoiseTexture';
import Footer from '../Components/Footer';

const WhyRudraticPage = () => {
  const features = [
    {
      icon: Layers,
      title: 'Seamless Integration',
      subtitle: 'Everything Works Together — Effortlessly',
      description: 'We bring all your systems — security, monitoring, and automation — into one connected space. Our goal is to make your operations smooth, reliable, and stress-free. By creating a unified environment, we help your business save time, cut effort, and focus on what matters most — growth and innovation.',
      color: '#818cf8'
    },
    {
      icon: Users2,
      title: 'Experienced Team, Proven Impact',
      subtitle: '15+ Years of Real-World Experience',
      description: 'Our expert team has helped hundreds of organizations simplify complex challenges and achieve better, faster results. With deep industry knowledge, real-world experience, and a hands-on approach, we focus on what truly works for you — delivering clear outcomes, lasting success, and continuous improvement.',
      color: '#c084fc'
    },
    {
      icon: Target,
      title: 'Built Around You',
      subtitle: 'Partnership That Puts You First',
      description: 'We listen, understand, and tailor our support to your unique goals and vision. You\'re not just another client — you\'re a valued part of our shared journey. From the first step to ongoing success, we\'re here to guide, support, and grow with you every step of the way.',
      color: '#ec4899'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150+', label: 'Countries Served' }
  ];

  const benefits = [
    'Comprehensive end-to-end solutions',
    'Dedicated support and consultation',
    'Industry-leading security standards',
    'Scalable and flexible architecture',
    'Continuous innovation and updates',
    'Cost-effective implementation'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0d14 0%, #13161f 50%, #1a1d28 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <NoiseTexture opacity={0.08} />

      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingTop: '140px',
            paddingBottom: '80px',
            textAlign: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '140px 20px 80px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(192, 132, 252, 0.15))',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}
          >
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px'
            }}>
              Why Choose Rudratic
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '56px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '24px',
              letterSpacing: '-1px',
              lineHeight: '1.2'
            }}
          >
            Your Trusted Partner in<br />Smart IT Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
          >
            We don't just provide technology — we build long-term partnerships that help your business grow smarter, faster, and stronger.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px'
        }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                style={{
                  background: 'rgba(10, 13, 20, 0.6)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(129, 140, 248, 0.2)',
                  borderRadius: '24px',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <NoiseTexture opacity={0.05} />
                
                <div style={{
                  background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                  border: `1px solid ${feature.color}40`,
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'inline-flex',
                  marginBottom: '24px'
                }}>
                  <Icon size={32} color={feature.color} />
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: feature.color,
                  marginBottom: '8px'
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '16px'
                }}>
                  {feature.subtitle}
                </p>

                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.8'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 40px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px'
            }}>
              Let's Build Smarter Together
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Start your journey with a team that believes in clarity, collaboration, and continuous growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'rgba(10, 13, 20, 0.6)',
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(129, 140, 248, 0.2)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <NoiseTexture opacity={0.05} />
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #818cf8, #c084fc, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '12px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(236, 72, 153, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '17px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                letterSpacing: '0.3px'
              }}
            >
              <Sparkles size={20} />
              Talk to Our Team
            </motion.button>
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 40px 100px'
        }}>
          <div style={{
            background: 'rgba(10, 13, 20, 0.6)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(129, 140, 248, 0.2)',
            borderRadius: '28px',
            padding: '60px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <NoiseTexture opacity={0.05} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{
                  fontSize: '38px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  Why Businesses Choose Us
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.8'
                }}>
                  Join hundreds of organizations that trust Rudratic for reliable, future-ready IT solutions.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px'
              }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <CheckCircle2 size={22} color="#818cf8" />
                    <span style={{
                      fontSize: '15px',
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontWeight: '500'
                    }}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default WhyRudraticPage;