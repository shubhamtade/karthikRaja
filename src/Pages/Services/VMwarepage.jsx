import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Server, Cloud, Shield, Zap, Database, Network, PlayCircle, ChevronRight, Check, ArrowRight } from 'lucide-react';
import NoiseTexture from '/src/Components/NoiseTexture.jsx';

const VMwarepage = () => {
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
      icon: <Cloud size={32} />,
      title: "vSphere Virtualization",
      description: "Enterprise-grade server virtualization and cloud infrastructure",
      color: "#ec4899"
    },
    {
      icon: <Network size={32} />,
      title: "NSX Networking",
      description: "Software-defined networking and security solutions",
      color: "#8b5cf6"
    },
    {
      icon: <Database size={32} />,
      title: "vSAN Storage",
      description: "Hyper-converged infrastructure with integrated storage",
      color: "#ec4899"
    },
    {
      icon: <Server size={32} />,
      title: "vRealize Automation",
      description: "Multi-cloud automation and orchestration platform",
      color: "#8b5cf6"
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      description: "Advanced security controls and regulatory compliance",
      color: "#ec4899"
    },
    {
      icon: <Zap size={32} />,
      title: "Disaster Recovery",
      description: "Business continuity with VMware Site Recovery Manager",
      color: "#8b5cf6"
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 50%",
    "Increase server utilization to 80%+",
    "24/7 monitoring and support services",
    "Seamless migration and deployment",
    "Multi-cloud management capabilities",
    "Enterprise-level security and compliance"
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We evaluate your infrastructure and design a tailored VMware solution"
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Create optimized virtualization architecture for your needs"
    },
    {
      step: "03",
      title: "Implementation & Migration",
      description: "Seamless deployment with minimal downtime and disruption"
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing monitoring, maintenance, and performance tuning"
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
        className="hero-section"
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
                Virtualization Excellence
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
              VMware Solutions<br />
              <span style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                For Modern Infrastructure
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Enterprise virtualization and cloud infrastructure solutions powered by VMware technologies to optimize your IT operations
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '40px'
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)'
                }}
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '16px 32px',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <PlayCircle size={20} />
                Watch Demo Video
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 0
            }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 0
            }}
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <section style={{
        padding: '60px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px'
        }}>
          {[
            { number: '500+', label: 'VMware Deployments' },
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '50%', label: 'Cost Reduction' },
            { number: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '30px 20px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(236, 72, 153, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3 style={{
                fontSize: '3rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {stat.number}
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1rem'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        padding: '80px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              Comprehensive VMware Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Full-stack expertise across VMware ecosystem and virtualization technologies
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section style={{
        padding: '80px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              padding: '60px 40px',
              textAlign: 'center'
            }}
          >
            <h3 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              See VMware in Action
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Discover how our VMware solutions can transform your infrastructure and reduce operational costs
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVideoPlaying(true)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)'
              }}
            >
              <PlayCircle size={40} color="#fff" />
            </motion.button>

            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                  padding: '20px'
                }}
                onClick={() => setIsVideoPlaying(false)}
              >
                <div style={{
                  maxWidth: '1000px',
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#000',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="/public/Swot Explainer Video V6.mp4"
                    title="VMware Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '80px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px'
            }}>
              Our Implementation Process
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              A proven methodology that delivers reliable virtualization results
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {process.map((item, index) => (
              <ProcessCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{
        padding: '80px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '20px'
              }}>
                Why Choose Our<br />
                <span style={{
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  VMware Services
                </span>
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                Partner with certified VMware experts who deliver enterprise-grade virtualization solutions
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                Learn More
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '20px',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(236, 72, 153, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div style={{
                    minWidth: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Check size={16} color="#fff" />
                  </div>
                  <span style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem'
                  }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
                borderRadius: '50%',
                filter: 'blur(40px)'
              }}
            />

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px',
              position: 'relative',
              zIndex: 1
            }}>
              Ready to Transform Your Infrastructure?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              position: 'relative',
              zIndex: 1
            }}>
              Let's discuss how our VMware services can help optimize your virtualization environment and reduce costs
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '18px 40px',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)',
                position: 'relative',
                zIndex: 1
              }}
            >
              Schedule a Consultation
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '20px',
        padding: '40px 30px',
        border: `1px solid ${feature.color}20`,
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${feature.color}40, transparent)`,
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />

      <div style={{
        width: '60px',
        height: '60px',
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
        color: 'rgba(255,255,255,0.6)',
        fontSize: '1rem',
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
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        position: 'relative',
        padding: '40px 30px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '20px',
        border: '1px solid rgba(236, 72, 153, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{
        fontSize: '3rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        opacity: 0.5
      }}>
        {item.step}
      </div>

      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: '600',
        color: '#fff',
        marginBottom: '15px'
      }}>
        {item.title}
      </h3>

      <p style={{
        color: 'rgba(255,255,255,0.6)',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>
        {item.description}
      </p>
    </motion.div>
  );
};

export default VMwarepage;