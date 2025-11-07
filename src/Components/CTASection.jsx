import React from "react";
import { motion } from "framer-motion";
import { Calendar, PlayCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import NoiseTexture from "./NoiseTexture";
import ParticleBackground from './ParticleBackground';
import { floatingAnimation } from '../utils/animations';


const CTASection = () => {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        background: "#0a0d14",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />
      <ParticleBackground density={40} color="rgba(129, 140, 248, 0.3)" />

      {/* Animated Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "500px",
          height: "400px",
          background: "radial-gradient(circle, #6366f1, transparent)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #ec4899, transparent)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Main CTA Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "32px",
            padding: "80px 60px",
            textAlign: "center",
          }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "white",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            Ready to Transform{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your IT Security?
            </span>{" "}
            
          </motion.h2>
          <motion.div {...floatingAnimation}>
            {/* existing content */}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "700px",
              margin: "0 auto 48px",
            }}
          >
            Schedule a free consultation with our experts to discuss your
            requirements and see how Rudratic can help secure your business.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            <motion.button
              onClick={() => window.openDemoModal && window.openDemoModal()}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "18px 36px",
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
              }}
            >
              <Calendar size={20} />
              Schedule Consultation
            </motion.button>

            <motion.button
              onClick={() => window.openDemoModal && window.openDemoModal()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: "18px 36px",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
              }}
            >
              <PlayCircle size={20} />
              Request Demo
            </motion.button>
          </motion.div>

          {/* Stats - Bottom Section */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {[
              {
                value: "500+",
                label: "Clients",
                color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              },
              {
                value: "99.9%",
                label: "Uptime",
                color: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              },
              {
                value: "24/7",
                label: "Support",
                color: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    background: stat.color,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontWeight: "600",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
