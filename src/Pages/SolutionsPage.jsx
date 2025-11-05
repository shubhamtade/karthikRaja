import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  Workflow,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Identity & Access Management",
      subtitle: "Fortify Your Digital Gates with Advanced Identity Security",
      description:
        "Protect your organization's most critical assets with comprehensive Privileged Access Management (PAM). Our solutions provide real-time credential vaulting, just-in-time access, and complete session recording to ensure compliance with industry regulations.",
      features: [
        "Privileged Account Discovery & Onboarding",
        "Password Vaulting with Auto-Rotation",
        "Session Recording & Monitoring",
        "Multi-Factor Authentication (MFA)",
        "Compliance & Audit Reporting",
      ],
      color: "#818cf8",
      gradient: "linear-gradient(135deg, #818cf8, #c084fc)",
      image: "solution1.jpg", // ADD THIS
    },
    {
      title: "Monitoring & Performance Management",
      subtitle:
        "Gain Real-Time Visibility, Optimize Performance, Prevent Outages",
      description:
        "Never be blindsided by IT issues again. Our comprehensive monitoring solutions provide real-time insights into your infrastructure, applications, and network performance. Predictive analytics and intelligent alerting help you identify and resolve issues before they impact your business.",
      features: [
        "Infrastructure & Network Monitoring",
        "Application Performance Monitoring (APM)",
        "Log Management & Analytics",
        "Custom Dashboards & Visualizations",
        "Predictive Alerting & AI Insights",
      ],
      color: "#c084fc",
      gradient: "linear-gradient(135deg, #c084fc, #ec4899)",
      image: "solution2.jpg", // ADD THIS
    },
    {
      title: "IT & Business Process Automation",
      subtitle: "Automate for Agility: Streamline Operations, Boost Efficiency",
      description:
        "Transform manual, time-consuming tasks into automated workflows. Our BPM and automation solutions reduce human error, accelerate processes, and free your team to focus on strategic initiatives. From simple task automation to complex workflow orchestration, we deliver efficiency at scale.",
      features: [
        "Visual Workflow Designer",
        "Intelligent Task Orchestration",
        "Process Analytics & Optimization",
        "API-First Integration Framework",
        "Self-Service IT Portal",
      ],
      color: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
      image: "solution3.jpg", // ADD THIS
    },
  ];

  const benefits = [
    "End-to-end security and compliance",
    "Reduced operational costs",
    "Faster incident resolution",
    "Scalable cloud-ready architecture",
    "Expert implementation and support",
    "24/7 monitoring and maintenance",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0a0d14 0%, #13161f 50%, #1a1d28 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />

      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingTop: "140px",
            paddingBottom: "80px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "140px 20px 80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              display: "inline-block",
              padding: "10px 24px",
              background:
                "linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(192, 132, 252, 0.15))",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              borderRadius: "50px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              Our Expertise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: "56px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "24px",
              letterSpacing: "-1px",
              lineHeight: "1.2",
            }}
          >
            Featured Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Comprehensive solutions designed to secure, automate, and optimize
            your enterprise IT operations
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px 100px",
          }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                style={{
                  marginBottom: "80px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isEven ? "1fr 1.2fr" : "1.2fr 1fr",
                    gap: "60px",
                    alignItems: "center",
                  }}
                >
                  {/* Icon/Visual Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      style={{
                        background: `linear-gradient(135deg, ${solution.color}15, transparent)`,
                        border: `1px solid ${solution.color}30`,
                        borderRadius: "28px",
                        padding: "40px",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        aspectRatio: "16/10",
                      }}
                    >
                      <NoiseTexture opacity={0.05} />
                      <img
                        src={solution.image}
                        alt={solution.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "8px 20px",
                        background: `${solution.color}20`,
                        border: `1px solid ${solution.color}30`,
                        borderRadius: "50px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: solution.color,
                          letterSpacing: "0.5px",
                        }}
                      >
                        Key Capabilities
                      </span>
                    </div>

                    <h2
                      style={{
                        fontSize: "38px",
                        fontWeight: "700",
                        background: solution.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: "12px",
                        lineHeight: "1.2",
                      }}
                    >
                      {solution.title}
                    </h2>

                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "20px",
                        lineHeight: "1.4",
                      }}
                    >
                      {solution.subtitle}
                    </p>

                    <p
                      style={{
                        fontSize: "16px",
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: "1.8",
                        marginBottom: "32px",
                      }}
                    >
                      {solution.description}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gap: "12px",
                      }}
                    >
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <CheckCircle2 size={20} color={solution.color} />
                          <span
                            style={{
                              fontSize: "15px",
                              color: "rgba(255, 255, 255, 0.85)",
                              fontWeight: "500",
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0 10px 30px ${solution.color}60`,
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        marginTop: "32px",
                        background: solution.gradient,
                        color: "white",
                        padding: "16px 32px",
                        borderRadius: "12px",
                        border: "none",
                        fontSize: "16px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 40px 100px",
          }}
        >
          <div
            style={{
              background: "rgba(10, 13, 20, 0.6)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(129, 140, 248, 0.2)",
              borderRadius: "28px",
              padding: "60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <NoiseTexture opacity={0.05} />

            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #818cf8, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "16px",
                }}
              >
                Why Choose Our Solutions
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Trusted by 500+ enterprises across 150+ countries
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "20px",
                    background: "rgba(129, 140, 248, 0.05)",
                    borderRadius: "14px",
                    border: "1px solid rgba(129, 140, 248, 0.1)",
                  }}
                >
                  <CheckCircle2 size={22} color="#818cf8" />
                  <span
                    style={{
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.85)",
                      fontWeight: "500",
                    }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SolutionsPage;
