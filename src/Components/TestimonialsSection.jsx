import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import NoiseTexture from './NoiseTexture';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "I have been extremely happy with the results of working with the creative agency and I would highly recommend them to anyone.",
      name: "Lewis Herrin",
      position: "CEO, SSI",
      rating: 5
    },
    {
      text: "The team delivered exceptional results that exceeded our expectations. Their professionalism and expertise are unmatched.",
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      rating: 5
    },
    {
      text: "Outstanding service and support throughout the entire project. We couldn't be happier with the outcome.",
      name: "Michael Chen",
      position: "Director, GlobalTech",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section style={{ position: 'relative', padding: '100px 0', background: '#0a0d14', overflow: 'hidden' }}>
      <NoiseTexture opacity={0.08} />
      
      {/* Floating Quotes Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '10%', right: '10%', opacity: 0.03, zIndex: 0 }}
      >
        <Quote size={200} color="white" />
      </motion.div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '48px', fontWeight: '700', color: 'white', marginBottom: '16px' }}>
            What our Clients say About us
          </motion.h2>
          <motion.p variants={fadeInUp} style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '600px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet consectetur. Facilisis molestie facilisis posuere sagittis orci est.
            Diam in a volutpat libero elit rhoncus dolor sit.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '40px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Quote Icon */}
              <Quote size={40} color="#818cf8" style={{ marginBottom: '24px', opacity: 0.3 }} />

              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', marginBottom: '32px' }}>
                "{testimonial.text}"
              </p>

              {/* Rating Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>
                {testimonial.name}
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>
                {testimonial.position}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontWeight: '500' }}>
            {currentSlide + 1}/4
          </span>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
