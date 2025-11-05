import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Lock, Eye, Settings, Users } from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const PAMPage = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    { id: "benefits", label: "Benefits", icon: CheckCircle2 },
    { id: "capabilities", label: "Capabilities", icon: Settings },
    { id: "how-it-works", label: "How it Works", icon: Eye },
    { id: "use-cases", label: "Use Cases", icon: Users },
  ];

  const content = {
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: Shield,
          text: "Enhanced Security Posture",
          desc: "Protect privileged accounts from unauthorized access and cyber threats",
        },
        {
          icon: Lock,
          text: "Regulatory Compliance",
          desc: "Meet SOC 2, HIPAA, PCI-DSS, and other compliance requirements",
        },
        {
          icon: CheckCircle2,
          text: "Reduced Risk",
          desc: "Minimize the risk of data breaches and insider threats",
        },
        {
          icon: Eye,
          text: "Complete Visibility",
          desc: "Full audit trail of all privileged access activities",
        },
        {
          icon: Users,
          text: "Improved Productivity",
          desc: "Streamlined access workflows for IT teams",
        },
        {
          icon: Settings,
          text: "Automated Management",
          desc: "Automatic password rotation and access revocation",
        },
      ],
    },
    capabilities: {
      title: "Core Capabilities",
      items: [
        {
          icon: Shield,
          text: "Password Vaulting",
          desc: "Secure storage and management of privileged credentials",
        },
        {
          icon: Lock,
          text: "Just-in-Time Access",
          desc: "Temporary elevation of privileges when needed",
        },
        {
          icon: Eye,
          text: "Session Recording",
          desc: "Record and playback all privileged sessions",
        },
        {
          icon: Settings,
          text: "Auto Password Rotation",
          desc: "Automatic credential rotation and updates",
        },
        {
          icon: Users,
          text: "Multi-Factor Authentication",
          desc: "Additional security layer for privileged access",
        },
        {
          icon: CheckCircle2,
          text: "Privileged Account Discovery",
          desc: "Automatically find and onboard privileged accounts",
        },
      ],
    },
    "how-it-works": {
      title: "How It Works",
      items: [
        {
          icon: Settings,
          text: "Step 1: Discovery",
          desc: "PAM automatically discovers all privileged accounts across your infrastructure",
        },
        {
          icon: Lock,
          text: "Step 2: Vaulting",
          desc: "Credentials are securely stored in an encrypted vault with rotation policies",
        },
        {
          icon: Users,
          text: "Step 3: Access Request",
          desc: "Users request access through a secure workflow with approval processes",
        },
        {
          icon: Eye,
          text: "Step 4: Session Monitoring",
          desc: "All privileged sessions are monitored and recorded in real-time",
        },
        {
          icon: Shield,
          text: "Step 5: Audit & Compliance",
          desc: "Comprehensive logs and reports for compliance and security audits",
        },
        {
          icon: CheckCircle2,
          text: "Step 6: Auto Revocation",
          desc: "Access is automatically revoked after the approved time period",
        },
      ],
    },
    "use-cases": {
      title: "Common Use Cases",
      items: [
        {
          icon: Shield,
          text: "Financial Services",
          desc: "Protect sensitive financial data and meet PCI-DSS compliance requirements",
        },
        {
          icon: Lock,
          text: "Healthcare",
          desc: "Secure patient records and comply with HIPAA regulations",
        },
        {
          icon: Users,
          text: "Enterprise IT",
          desc: "Manage admin access across complex multi-cloud environments",
        },
        {
          icon: Eye,
          text: "Government",
          desc: "Meet stringent security requirements for classified systems",
        },
        {
          icon: Settings,
          text: "Manufacturing",
          desc: "Protect industrial control systems and intellectual property",
        },
        {
          icon: CheckCircle2,
          text: "Third-Party Access",
          desc: "Secure vendor and contractor access to critical systems",
        },
      ],
    },
  };

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

      {/* Animated Background */}
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

      <div style={{ position: "relative", zIndex: 2, paddingTop: "100px" }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            padding: "60px 20px 80px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(129, 140, 248, 0.15)",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Privileged Access Management
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Secure Your Most Critical Assets
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Comprehensive privileged access management solution to protect,
            monitor, and control access to your organization's most sensitive
            systems
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "40px",
          }}
        >
          {/* Left Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                position: "relative",
                background: "rgba(10, 13, 20, 0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(129, 140, 248, 0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "16/9",
              }}
            >
              <video
                src="/public/products-video.mp4" // ✅ FIXED PATH
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute", // ✅ Ensure video fills container
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                background: "rgba(10, 13, 20, 0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(129, 140, 248, 0.2)",
                borderRadius: "20px",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <NoiseTexture opacity={0.05} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#818cf8",
                    marginBottom: "20px",
                  }}
                >
                  About PAM
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  Privileged Access Management (PAM) is a critical security
                  solution that helps organizations protect, control, and
                  monitor access to their most sensitive systems and data. Our
                  PAM solution provides comprehensive credential vaulting,
                  session management, and compliance reporting.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  With automated password rotation, just-in-time access, and
                  complete session recording, you can ensure that privileged
                  accounts are protected against both external threats and
                  insider risks while maintaining full compliance with industry
                  regulations.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tabbed Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "rgba(10, 13, 20, 0.6)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(129, 140, 248, 0.2)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <NoiseTexture opacity={0.05} />

            {/* Tabs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "8px",
                background: "rgba(129, 140, 248, 0.1)",
                padding: "12px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: "20px",
                      background:
                        activeTab === tab.id
                          ? "linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.2))"
                          : "rgba(10, 13, 20, 0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(129, 140, 248, 0.4)"
                          : "1px solid transparent",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon
                      size={24}
                      color={
                        activeTab === tab.id
                          ? "#818cf8"
                          : "rgba(255, 255, 255, 0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#818cf8"
                            : "rgba(255, 255, 255, 0.5)",
                      }}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div style={{ padding: "40px", position: "relative", zIndex: 2 }}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #818cf8, #c084fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "30px",
                  }}
                >
                  {content[activeTab].title}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "20px",
                  }}
                >
                  {content[activeTab].items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        style={{
                          display: "flex",
                          gap: "16px",
                          padding: "20px",
                          background: "rgba(129, 140, 248, 0.05)",
                          border: "1px solid rgba(129, 140, 248, 0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(129, 140, 248, 0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#818cf8" />
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "rgba(255, 255, 255, 0.9)",
                              marginBottom: "6px",
                            }}
                          >
                            {item.text}
                          </h4>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "rgba(255, 255, 255, 0.6)",
                              lineHeight: "1.6",
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PAMPage;
