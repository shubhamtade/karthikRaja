import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Calendar, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import NoiseTexture from '../Components/NoiseTexture';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0d14 0%, #13161f 50%, #1a1d28 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <NoiseTexture opacity={0.08} />

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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontSize: '56px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        {/* Main Content Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px 100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '60px',
          alignItems: 'start'
        }}>
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Contact Information Card */}
            <div style={{
              background: 'rgba(10, 13, 20, 0.6)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <NoiseTexture opacity={0.05} />
              
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '32px'
              }}>
                Contact Information
              </h2>

              <div style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '28px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.2))',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  borderRadius: '14px',
                  padding: '14px',
                  flexShrink: 0
                }}>
                  <Phone size={24} color="#818cf8" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ec4899',
                    marginBottom: '8px'
                  }}>
                    Phone :
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.8'
                  }}>
                    +44 7438618490‬,<br />
                    +91 9962233803
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '28px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  borderRadius: '14px',
                  padding: '14px',
                  flexShrink: 0
                }}>
                  <Mail size={24} color="#ec4899" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#8b5cf6',
                    marginBottom: '8px'
                  }}>
                    Email :
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    info@rudratic.com
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '14px',
                  padding: '14px',
                  flexShrink: 0
                }}>
                  <MapPin size={24} color="#8b5cf6" />
                </div>
                <div>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ec4899',
                    marginBottom: '8px'
                  }}>
                    Address :
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.8'
                  }}>
                     Rudratic Technologies Ltd., 47, Courtside, 47-49 Penywern
              road,London, SW59TU,<br />
              India Address: No.187, 2nd cross street, shanthiNagar, chromepet, chennai, 600044
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #5b48e8, #c94399)',
                borderRadius: '24px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <NoiseTexture opacity={0.12} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '16px'
                }}>
                  Ready to Get Started
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '24px',
                  lineHeight: '1.7'
                }}>
                  Schedule a free consultation with our experts to discuss your requirements.
                </p>
                <motion.button
                  onClick={() => window.openDemoModal && window.openDemoModal()}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'white',
                    color: '#5b48e8',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  Schedule Free Consultation
                  <Calendar size={18} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              background: 'rgba(10, 13, 20, 0.6)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: '24px',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <NoiseTexture opacity={0.05} />
            
            <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '10px',
                  letterSpacing: '0.3px'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '10px',
                  letterSpacing: '0.3px'
                }}>
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '10px',
                  letterSpacing: '0.3px'
                }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '10px',
                  letterSpacing: '0.3px'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows="6"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    lineHeight: '1.6',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 35px rgba(236, 72, 153, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '18px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  letterSpacing: '0.3px'
                }}
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FOOTER EMBEDDED */}
        <footer style={{
          background: 'linear-gradient(180deg, rgba(10, 13, 20, 0.95) 0%, rgba(7, 10, 18, 1) 100%)',
          borderTop: '1px solid rgba(129, 140, 248, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <NoiseTexture opacity={0.06} />

          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '80px 40px 40px',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
              gap: '60px',
              marginBottom: '60px'
            }}>
              
              <div>
                <img 
                  src="/Rudratic-logoo.png" 
                  alt="RUDRATIC" 
                  style={{
                    height: '45px',
                    width: 'auto',
                    marginBottom: '24px'
                  }}
                />
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.65)',
                  lineHeight: '1.8',
                  marginBottom: '24px'
                }}>
                  Rudratic Technologies is an emerging IT Products and Services company headquartered at India.
                </p>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { Icon: Facebook, color: '#818cf8' },
                    { Icon: Linkedin, color: '#ec4899' },
                    { Icon: Twitter, color: '#8b5cf6' },
                    { Icon: Youtube, color: '#ec4899' }
                  ].map(({ Icon, color }, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(129, 140, 248, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                    >
                      <Icon size={20} color={color} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '20px'
                }}>
                  Products
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['PAM', 'IT Monitoring', 'BPM', 'IT Automation'].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none'
                      }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '20px'
                }}>
                  Services
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Oracle Services', 'IBM Services', 'VMware', 'IT Support'].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none'
                      }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '20px'
                }}>
                  Company
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px' }}>
                  {['About Us', 'Contact Us'].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: 'none'
                      }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              borderTop: '1px solid rgba(129, 140, 248, 0.15)',
              paddingTop: '32px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                © 2017-2025 Rudratic Technologies. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
