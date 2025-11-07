import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Network, HardDrive, Monitor, Wifi, PlayCircle, ChevronRight, Check, ArrowRight, Shield, Clock, HeadphonesIcon } from 'lucide-react';
import NoiseTexture from '/src/Components/NoiseTexture.jsx';

const ITinfrastructurepage = () => {
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
      icon: <Network size={32} />,
      title: "Network Management",
      description: "Complete network design, implementation, and monitoring",
      color: "#ec4899"
    },
    {
      icon: <HardDrive size={32} />,
      title: "Server Administration",
      description: "Windows, Linux, and Unix server support and maintenance",
      color: "#8b5cf6"
    },
    {
      icon: <Monitor size={32} />,
      title: "Help Desk Support",
      description: "24/7 technical support for end-users and systems",
      color: "#ec4899"
    },
    {
      icon: <Wifi size={32} />,
      title: "Cloud Infrastructure",
      description: "AWS, Azure, and GCP infrastructure management",
      color: "#8b5cf6"
    },
    {
      icon: <Shield size={32} />,
      title: "Security Management",
      description: "Firewall, VPN, and security infrastructure services",
      color: "#ec4899"
    },
    {
      icon: <Clock size={32} />,
      title: "Disaster Recovery",
      description: "Business continuity planning and disaster recovery solutions",
      color: "#8b5cf6"
    }
  ];

  const services = [
    "24/7 Infrastructure Monitoring",
    "Proactive Maintenance & Patching",
    "Network Security & Firewall Management",
    "Backup & Disaster Recovery",
    "Storage Area Network (SAN) Management",
    "Active Directory & Identity Management",
    "Email & Collaboration Services",
    "IT Asset Management"
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive infrastructure audit and analysis"
    },
    {
      step: "02",
      title: "Planning",
      description: "Strategic roadmap for infrastructure optimization"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy solutions with minimal downtime"
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "24/7 monitoring and proactive maintenance"
    }
  ];

  const benefits = [
    "99.9% uptime guarantee",
    "Average response time < 15 minutes",
    "Certified IT professionals",
    "Scalable support packages",
    "Cost-effective solutions",
    "Regular security updates"
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
                24/7 Support Services
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
              IT Infrastructure Support<br />
              <span style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Reliable, Scalable, Secure
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Comprehensive infrastructure management services ensuring your IT systems 
              run smoothly 24/7 with maximum uptime
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
              Get Started <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
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
              Complete Infrastructure Solutions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive support for all your IT infrastructure needs
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
              Our Infrastructure Services
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
                    Watch Infrastructure Demo
                  </p>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Infrastructure Demo"
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
              Our Support Process
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

      {/* Services & Benefits Grid */}
      <section style={{ padding: '100px 20px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px 30px'
              }}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '30px'
              }}>
                What We Provide
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={16} color="#fff" />
                    </div>
                    <span style={{ color: '#fff', fontSize: '1rem' }}>
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px 30px'
              }}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '30px'
              }}>
                Why Choose Us
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
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
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={16} color="#fff" />
                    </div>
                    <span style={{ color: '#fff', fontSize: '1rem' }}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
              Ready for Reliable IT Support?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              Let our experts manage your infrastructure while you focus on growing your business
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
                Request Quote <ArrowRight size={20} />
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
                Call Support <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
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

export default ITinfrastructurepage;
