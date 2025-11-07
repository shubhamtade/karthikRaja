import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Database, BookOpen, Settings, BarChart3, PlayCircle, ChevronRight, Check, ArrowRight, Target, Users, Award } from 'lucide-react';
import NoiseTexture from '/src/Components/NoiseTexture.jsx';

const Oracleservicespage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Database size={32} />,
      title: "Oracle Database",
      description: "Expert administration, optimization, and migration services",
      color: "#8b5cf6"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Training Programs",
      description: "Comprehensive Oracle certification and skill development courses",
      color: "#ec4899"
    },
    {
      icon: <Settings size={32} />,
      title: "Implementation",
      description: "End-to-end Oracle solution deployment and configuration",
      color: "#8b5cf6"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Performance Tuning",
      description: "Database optimization for maximum efficiency",
      color: "#ec4899"
    },
    {
      icon: <Target size={32} />,
      title: "Consulting",
      description: "Strategic guidance for Oracle technology adoption",
      color: "#8b5cf6"
    },
    {
      icon: <Award size={32} />,
      title: "Certified Experts",
      description: "Oracle-certified professionals with proven expertise",
      color: "#ec4899"
    }
  ];

  const services = [
    "Oracle Database Administration (11g, 12c, 19c, 21c)",
    "Oracle Cloud Infrastructure (OCI)",
    "Oracle E-Business Suite",
    "Oracle Fusion Middleware",
    "Oracle RAC & Data Guard",
    "Oracle APEX Development",
    "PL/SQL Programming",
    "Oracle GoldenGate Replication"
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Analyze current Oracle infrastructure and identify opportunities"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Design customized solutions aligned with business goals"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy and configure Oracle systems with minimal disruption"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Empower your team with knowledge and ongoing assistance"
    }
  ];

  const trainingTracks = [
    {
      title: "Database Administrator",
      duration: "12 weeks",
      level: "Intermediate to Advanced"
    },
    {
      title: "PL/SQL Developer",
      duration: "8 weeks",
      level: "Beginner to Intermediate"
    },
    {
      title: "Oracle Cloud Architect",
      duration: "10 weeks",
      level: "Advanced"
    }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0a0d14 0%, #1a1f2e 50%, #0a0d14 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <NoiseTexture />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
      >
        <div style={{
          position: 'relative',
          padding: '180px 20px 100px',
          maxWidth: '1400px',
          margin: '0 auto',
          zIndex: 2
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50px',
                marginBottom: '30px'
              }}
            >
              <span style={{ 
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Oracle Certified Partner
              </span>
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '25px',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              Oracle Services<br />
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Training • Consulting • Implementation
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Comprehensive Oracle solutions delivered by certified experts to maximize 
              your database performance and enterprise potential
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                color: '#fff',
                padding: '16px 40px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
              }}
            >
              Request Consultation <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />
      </motion.section>

      {/* Services Grid */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              Complete Oracle Solutions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              From training to implementation, we cover all aspects of Oracle technology
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Training Tracks */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              Professional Training Programs
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Industry-recognized certification tracks for career advancement
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {trainingTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#fff'
                }}>
                  {index + 1}
                </div>

                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#fff',
                  marginBottom: '15px'
                }}>
                  {track.title}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '10px'
                }}>
                  Duration: {track.duration}
                </p>

                <span style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: '#8b5cf6'
                }}>
                  {track.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo-section" style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              See Our Oracle Expertise
            </h2>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                aspectRatio: '16/9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              {!isVideoPlaying ? (
                <div style={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 20px 60px rgba(139, 92, 246, 0.4)'
                    }}
                  >
                    <PlayCircle size={50} color="#fff" />
                  </motion.div>
                  <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '600' }}>
                    Watch Oracle Services Demo
                  </p>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Oracle Services Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              Our Proven Process
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {process.map((item, index) => (
              <ProcessCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '60px 40px'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              What We Offer
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={18} color="#fff" />
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.05rem' }}>
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 20px 120px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '25px'
            }}>
              Ready to Optimize Your Oracle Systems?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Let our certified Oracle experts help you maximize database performance and ROI
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  color: '#fff',
                  padding: '16px 40px',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
                }}
              >
                Schedule Consultation <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  padding: '16px 40px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                View Training Calendar <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '40px 30px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        width: '70px',
        height: '70px',
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '25px',
        color: feature.color
      }}>
        {feature.icon}
      </div>

      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '15px'
      }}>
        {feature.title}
      </h3>

      <p style={{
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.6'
      }}>
        {feature.description}
      </p>
    </motion.div>
  );
};

// Process Card Component
const ProcessCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '40px 30px',
        position: 'relative'
      }}
    >
      <div style={{
        fontSize: '3rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        opacity: 0.3
      }}>
        {item.step}
      </div>

      <h3 style={{
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '15px'
      }}>
        {item.title}
      </h3>

      <p style={{
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.6'
      }}>
        {item.description}
      </p>
    </motion.div>
  );
};

export default Oracleservicespage;