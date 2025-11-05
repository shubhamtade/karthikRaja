import React from "react";
import { motion } from "framer-motion";
import { Shield, Activity, Settings, ArrowRight } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  floatingAnimation,
} from "../utils/animations";
import NoiseTexture from "./NoiseTexture";
import ParticleBackground from "./ParticleBackground";
// import { floatingAnimation } from '../utils/animations';

const WhatWeDoSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure",
      description:
        "Protect critical assets with advanced identity & access management",
      color: "#3b82f6",
    },
    {
      icon: Activity,
      title: "Monitor",
      description:
        "Gain real-time visibility into your IT infrastructure performance",
      color: "#10b981",
    },
    {
      icon: Settings,
      title: "Automate",
      description:
        "Streamline operations and eliminate manual, repetitive tasks",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0",
        background: "#0a0d14",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />
      <ParticleBackground density={40} color="rgba(129, 140, 248, 0.3)" />

      {/* Animated Background Pattern */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="pattern-bg"
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "2px",
                color: "#818cf8",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "white",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              Seamlessly Unifying Your
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #818cf8, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IT Security & Operations
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.8",
                marginBottom: "32px",
              }}
            >
              In today's complex digital landscape, IT security and operational
              efficiency can no longer exist in silos. Rudratic Technologies is
              your trusted partner, specializing in connecting these critical
              functions. We design, implement, and manage integrated solutions
              that not only fortify your defenses but also streamline your
              business processes, driving agility and sustainable growth.
            </motion.p>

            <motion.div {...floatingAnimation}>
              {/* existing content */}
            </motion.div>

            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                padding: "16px 32px",
                background: "linear-gradient(90deg, #6366f1, #a855f7)",
                color: "white",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              Request for Free Consultation
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(40px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "32px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      padding: "8px",
                      borderRadius: "12px",
                      background: `${feature.color}20`,
                      transition: "transform 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={
                        feature.title === "Secure"
                          ? "/What we do/whatwedo5.jpg"
                          : feature.title === "Monitor"
                          ? "/What we do/whatwedo2.jpg"
                          : feature.title === "Automate"
                          ? "/What we do/whatwedo3.jpg"
                          : "/public/What we do/whatwedo5.jpg"
                      }
                      alt={feature.title}
                      style={{
                        width: "100px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "6px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
