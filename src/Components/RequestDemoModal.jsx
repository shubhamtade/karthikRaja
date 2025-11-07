import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Building, MapPin, MessageSquare } from 'lucide-react';
import NoiseTexture from './NoiseTexture';

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    comments: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  const countries = [
    'Select Country',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
    'Singapore',
    'Other'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          zIndex: 9998 
        }}>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(10, 13, 20, 0.85), rgba(19, 22, 31, 0.9))',
              backdropFilter: 'blur(20px) saturate(120%)',
              WebkitBackdropFilter: 'blur(20px) saturate(120%)',
              zIndex: 9999
            }}
          >
            <NoiseTexture opacity={0.15} />
          </motion.div>

          {/* Modal Content - Centered Container */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 10000,
            pointerEvents: 'none'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                background: 'linear-gradient(135deg, rgba(10, 13, 20, 0.98), rgba(15, 18, 27, 0.98))',
                backdropFilter: 'blur(60px) saturate(150%)',
                WebkitBackdropFilter: 'blur(60px) saturate(150%)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8), 0 0 150px rgba(129, 140, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                position: 'relative',
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <NoiseTexture opacity={0.08} />

              {/* Animated gradient glow effect */}
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.4) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-30%',
                  opacity: 0.5,
                  pointerEvents: 'none',
                  filter: 'blur(40px)'
                }}
              />

              <div style={{ position: 'relative', zIndex: 2, padding: '40px',overflowY: 'auto', // ADD SCROLL IF CONTENT IS TOO LONG
                display: 'flex',
                flexDirection: 'column' }}>
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 3
                  }}
                >
                  <X size={20} color="rgba(255, 255, 255, 0.7)" />
                </motion.button>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #ec4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '8px',
                      letterSpacing: '-1px',
                      textShadow: '0 0 40px rgba(129, 140, 248, 0.3)'
                    }}
                  >
                    Request Demo
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: '1.6'
                    }}
                  >
                    Schedule a personalized demo with our experts
                  </motion.p>
                </div>

                {/* Demo Request Form */}
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    {/* First Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        First Name
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <User size={20} color="rgba(129, 140, 248, 0.6)" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: 'white',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Last Name */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        Last Name
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <User size={20} color="rgba(192, 132, 252, 0.6)" />
                        </div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: 'white',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        Email Address
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <Mail size={20} color="rgba(129, 140, 248, 0.6)" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: 'white',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        Company Name
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <Building size={20} color="rgba(192, 132, 252, 0.6)" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enter your company name"
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: 'white',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        Phone Number
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <Phone size={20} color="rgba(129, 140, 248, 0.6)" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: 'white',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Country */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <label style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.9)',
                        marginBottom: '12px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>
                        Country
                      </label>
                      <div style={{ position: 'relative' }}>
                        <div style={{
                          position: 'absolute',
                          left: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none'
                        }}>
                          <MapPin size={20} color="rgba(192, 132, 252, 0.6)" />
                        </div>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '18px 18px 18px 52px',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(129, 140, 248, 0.25)',
                            borderRadius: '14px',
                            color: formData.country ? 'white' : 'rgba(255, 255, 255, 0.5)',
                            fontSize: '16px',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
                            appearance: 'none',
                            cursor: 'pointer'
                          }}
                          onFocus={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                          }}
                        >
                          {countries.map((country, index) => (
                            <option 
                              key={index} 
                              value={country === 'Select Country' ? '' : country}
                              style={{ background: '#0a0d14', color: 'white' }}
                            >
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  </div>

                  {/* Additional Comments */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ marginBottom: '32px' }}
                  >
                    <label style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '12px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}>
                      Additional Comments
                    </label>
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        left: '16px',
                        top: '16px',
                        pointerEvents: 'none'
                      }}>
                        <MessageSquare size={20} color="rgba(129, 140, 248, 0.6)" />
                      </div>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Enter your comments here"
                        rows="4"
                        style={{
                          width: '100%',
                          padding: '18px 18px 18px 52px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(129, 140, 248, 0.25)',
                          borderRadius: '14px',
                          color: 'white',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'all 0.3s ease',
                          fontFamily: 'inherit',
                          boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
                          resize: 'vertical',
                          minHeight: '120px'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid rgba(129, 140, 248, 0.5)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(129, 140, 248, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid rgba(129, 140, 248, 0.25)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                          e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.2)';
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(129, 140, 248, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      padding: '18px',
                      background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #ec4899 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '14px',
                      fontSize: '17px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px',
                      marginBottom: '28px',
                      boxShadow: '0 8px 24px rgba(129, 140, 248, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textTransform: 'uppercase'
                    }}
                  >
                    Send Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RequestDemoModal;