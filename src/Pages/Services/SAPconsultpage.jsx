import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Briefcase, TrendingUp, Layers, Cloud, PlayCircle, ChevronRight, Check, ArrowRight, Settings, Award, Target } from 'lucide-react';
import NoiseTexture from '/src/Components/NoiseTexture.jsx';

const SAPconsultpage = () => {
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
      icon: <Briefcase size={32} />,
      title: "SAP S/4HANA",
      description: "Migration, implementation, and optimization of SAP's intelligent ERP",
      color: "#ec4899"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Business Transformation",
      description: "Process optimization and digital transformation consulting",
      color: "#8b5cf6"
    },
    {
      icon: <Layers size={32} />,
      title: "SAP Modules",
      description: "Expertise in FI/CO, MM, SD, PP, HR, and all major SAP modules",
      color: "#ec4899"
    },
    {
      icon: <Cloud size={32} />,
      title: "SAP Cloud Solutions",
      description: "SuccessFactors, Ariba, Concur, and cloud-native applications",
      color: "#8b5cf6"
    },
    {
      icon: <Settings size={32} />,
      title: "Custom Development",
      description: "ABAP, Fiori, and custom SAP application development",
      color: "#ec4899"
    },
    {
      icon: <Award size={32} />,
      title: "SAP Certified",
      description: "Certified consultants with proven enterprise implementation experience",
      color: "#8b5cf6"
    }
  ];

  const solutions = [
    "SAP S/4HANA Migration & Implementation",
    "SAP ECC to S/4HANA Conversion",
    "SAP Fiori/UI5 Development",
    "SAP BW/4HANA & Analytics",
    "SAP SuccessFactors HCM",
    "SAP Ariba Procurement",
    "Custom ABAP Development",
    "SAP Integration Suite"
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Understand your processes and identify optimization opportunities"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Architect SAP solutions aligned with business objectives"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy SAP systems with minimal business disruption"
    },
    {
      step: "04",
      title: "Support & Optimize",
      description: "Continuous improvement and dedicated support services"
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
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                borderRadius: '50px',
                marginBottom: '30px'
              }}
            >
              <span style={{ 
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                SAP Certified Partner
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
              SAP Consulting Services<br />
              <span style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Enterprise Solutions That Scale
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Transform your business with expert SAP implementation, migration, and 
              consulting services from certified professionals
            </p>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
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
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)'
              }}
            >
              Request Consultation <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />
      </motion.section>

      {/* Features Grid */}
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
              Comprehensive SAP Expertise
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              End-to-end SAP services for digital transformation
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
              SAP Success Stories
            </h2>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
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
                      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: '0 20px 60px rgba(236, 72, 153, 0.4)'
                    }}
                  >
                    <PlayCircle size={50} color="#fff" />
                  </motion.div>
                  <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '600' }}>
                    Watch SAP Transformation Demo
                  </p>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="SAP Demo"
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
              Our Consulting Approach
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

      {/* Solutions List */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
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
              SAP Solutions We Deliver
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              {solutions.map((solution, index) => (
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
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={18} color="#fff" />
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.05rem' }}>
                    {solution}
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
              Transform Your Enterprise with SAP
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Partner with certified SAP consultants to drive digital transformation and business growth
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
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
                  boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)'
                }}
              >
                Get Started <ArrowRight size={20} />
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
                Contact Expert <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component (reusable)
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

// Process Card Component (reusable)
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
        background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
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

export default SAPconsultpage;