import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Clock } from 'lucide-react';
import NoiseTexture from './NoiseTexture';

const ClientLoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    customerId: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

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
                maxWidth: '500px',
                background: 'linear-gradient(135deg, rgba(10, 13, 20, 0.98), rgba(15, 18, 27, 0.98))',
                backdropFilter: 'blur(60px) saturate(150%)',
                WebkitBackdropFilter: 'blur(60px) saturate(150%)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                borderRadius: '28px',
                boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8), 0 0 150px rgba(129, 140, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                overflow: 'hidden',
                position: 'relative',
                pointerEvents: 'auto'
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
                  inset: '-50%',
                  opacity: 0.5,
                  pointerEvents: 'none',
                  filter: 'blur(40px)'
                }}
              />

              <div style={{ position: 'relative', zIndex: 2, padding: '48px' }}>
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(129, 140, 248, 0.2)',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <X size={20} color="rgba(255, 255, 255, 0.7)" />
                </motion.button>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      fontSize: '36px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #ec4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px',
                      letterSpacing: '-1px',
                      textShadow: '0 0 40px rgba(129, 140, 248, 0.3)'
                    }}
                  >
                    Customer Login
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
                    Access your account dashboard
                  </motion.p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                  {/* Customer ID Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{ marginBottom: '24px' }}
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
                      Customer ID
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
                        type="text"
                        name="customerId"
                        value={formData.customerId}
                        onChange={handleChange}
                        placeholder="Enter your Customer ID"
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

                  {/* Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
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
                      Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        left: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none'
                      }}>
                        <Lock size={20} color="rgba(192, 132, 252, 0.6)" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        style={{
                          width: '100%',
                          padding: '18px 52px 18px 52px',
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
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '16px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {showPassword ? (
                          <EyeOff size={20} color="rgba(255, 255, 255, 0.5)" />
                        ) : (
                          <Eye size={20} color="rgba(255, 255, 255, 0.5)" />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Login Button */}
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
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
                    Login
                  </motion.button>

                  {/* Forgot Password Link */}
                  <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <a
                      href="#"
                      style={{
                        fontSize: '14px',
                        color: 'rgba(129, 140, 248, 0.8)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'rgba(129, 140, 248, 1)'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(129, 140, 248, 0.8)'}
                    >
                      Forgot your password?
                    </a>
                  </div>

                  {/* Support Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                      borderTop: '1px solid rgba(129, 140, 248, 0.15)',
                      paddingTop: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '32px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Mail size={18} color="rgba(129, 140, 248, 0.7)" />
                      <a
                        href="mailto:support@rudratic.com"
                        style={{
                          fontSize: '13px',
                          color: 'rgba(255, 255, 255, 0.6)',
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'rgba(129, 140, 248, 1)'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                      >
                        support@rudratic.com
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={18} color="rgba(192, 132, 252, 0.7)" />
                      <span style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.6)'
                      }}>
                        24/7
                      </span>
                    </div>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ClientLoginModal;