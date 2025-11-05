import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Award } from 'lucide-react';
import NoiseTexture from '../Components/NoiseTexture';
import Footer from '../Components/Footer';

const ClientSuccessPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Rudratic Technologies transformed our security infrastructure. Their PAM solution not only secured our privileged accounts but also streamlined our compliance reporting. We achieved SOC 2 Type II certification in record time, and their team was with us every step of the way.",
      author: "Sarah Johnson",
      position: "Chief Information Officer",
      company: "Global Financial Technology",
      rating: 5,
      color: '#818cf8'
    },
    {
      quote: "The monitoring platform Rudratic implemented revolutionized our patient data security. What used to take 4 hours, now takes zero errors. Rudratic's team understood our unique healthcare compliance requirements and delivered a perfect solution.",
      author: "Emily Rodriguez",
      position: "Director of Operations",
      company: "Healthcare Plus",
      rating: 5,
      color: '#c084fc'
    },
    {
      quote: "We partnered with Rudratic for our Oracle integration, and they delivered excellence. Their expertise in both the technology and our industry needs made the transition seamless. The manufacturing solutions they provided have improved our efficiency by 40%.",
      author: "David Kumar",
      position: "IT Director",
      company: "Manufacturing Solutions Inc",
      rating: 5,
      color: '#ec4899'
    },
    {
      quote: "Rudratic's automation platform has been a game-changer for our operations. We've reduced manual processing time by 60% and our team can now focus on strategic initiatives instead of repetitive tasks. The ROI was evident within the first quarter.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "Enterprise Logistics Corp",
      rating: 5,
      color: '#818cf8'
    },
    {
      quote: "The real-time monitoring and predictive analytics from Rudratic have prevented costly downtime on multiple occasions. Their 24/7 support team is incredibly responsive, and the platform's insights have helped us optimize our infrastructure investments.",
      author: "Lisa Anderson",
      position: "CTO",
      company: "Cloud Services International",
      rating: 5,
      color: '#c084fc'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Building2 },
    { number: '15+', label: 'Years of Excellence', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '150+', label: 'Countries Served', icon: Building2 }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              Client Success Stories
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
            Trusted by Industry Leaders to<br />Deliver Real Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}
          >
            From startups to Fortune 500 companies, organizations worldwide trust Rudratic to overcome complex IT challenges, enhance security, and drive operational excellence. Hear directly from our clients about the tangible impact Rudratic Technologies has made.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto 100px',
          padding: '0 40px'
        }}>
          <div style={{
            background: 'rgba(10, 13, 20, 0.6)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(129, 140, 248, 0.2)',
            borderRadius: '28px',
            padding: '60px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '400px'
          }}>
            <NoiseTexture opacity={0.05} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                {/* Quote Icon */}
                <div style={{
                  marginBottom: '32px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    background: `${testimonials[activeTestimonial].color}20`,
                    border: `1px solid ${testimonials[activeTestimonial].color}30`,
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'inline-flex'
                  }}>
                    <Quote size={40} color={testimonials[activeTestimonial].color} />
                  </div>
                </div>

                {/* Stars */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '6px',
                  marginBottom: '24px'
                }}>
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={24} fill={testimonials[activeTestimonial].color} color={testimonials[activeTestimonial].color} />
                  ))}
                </div>

                {/* Quote Text */}
                <p style={{
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.8',
                  textAlign: 'center',
                  marginBottom: '40px',
                  maxWidth: '900px',
                  margin: '0 auto 40px'
                }}>
                  "{testimonials[activeTestimonial].quote}"
                </p>

                {/* Author Info */}
                <div style={{ textAlign: 'center', paddingBottom: '80px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: testimonials[activeTestimonial].color,
                    marginBottom: '8px'
                  }}>
                    {testimonials[activeTestimonial].author}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '4px'
                  }}>
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '16px',
              zIndex: 3
            }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                style={{
                  background: 'rgba(129, 140, 248, 0.2)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronLeft size={24} color="#818cf8" />
              </motion.button>

              {/* Dots Indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    style={{
                      width: index === activeTestimonial ? '32px' : '10px',
                      height: '10px',
                      borderRadius: '10px',
                      background: index === activeTestimonial ? testimonials[activeTestimonial].color : 'rgba(129, 140, 248, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                style={{
                  background: 'rgba(129, 140, 248, 0.2)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronRight size={24} color="#818cf8" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
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
                <Icon size={40} color="#818cf8" style={{ margin: '0 auto 20px', display: 'block' }} />
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
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ClientSuccessPage;