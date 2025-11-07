import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  Zap,
  Eye,
  Key,
  Lock,
  BarChart3,
  CheckCircle2,
  DollarSign,
  LineChart,
  TrendingUp,
  Users,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const PAMPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "innovation", label: "Core Innovation", icon: Cpu },
    { id: "capabilities", label: "Exclusive Capabilities", icon: Zap },
    { id: "benefits1", label: "Risk Reduction", icon: Eye },
    { id: "benefits2", label: "Compliance & Ops", icon: CheckCircle2 },
    { id: "benefits3", label: "Cost & Advantage", icon: DollarSign },
  ];

  const content = {
    overview: {
      title: "World’s First AI-Native PAM",
      items: [
        {
          icon: Shield,
          text: "The Future of Privileged Access Management",
          desc: "SWOT PAM is the world’s first AI-native Privileged Access Management platform, purpose-built to address modern cyber threats. Our platform combines Vision Language Processing (VLP) and Offline LLM for proactive and predictive privileged security.",
        },
        {
          icon: Cpu,
          text: "AI-Powered Understanding & Security",
          desc: "By merging context awareness with deep learning, SWOT PAM detects intent, behavior, and anomalies with unmatched precision while preserving full data privacy.",
        },
        {
          icon: Lock,
          text: "Transforming PAM Architecture",
          desc: "This is not a legacy extension—it’s a redefinition of PAM. Experience a new era of automated, intelligent, and secure privileged access.",
        },
      ],
    },
    innovation: {
      title: "Core Innovation: VLP + Offline LLM",
      items: [
        {
          icon: Cpu,
          text: "Vision Language Processing (VLP)",
          desc: "A multimodal AI engine that understands text, visuals, and context together—detecting complex intent and emerging threats in real time.",
        },
        {
          icon: Lock,
          text: "Offline Large Language Model (LLM)",
          desc: "SWOT’s proprietary offline LLM ensures total data privacy by operating entirely within your infrastructure—no cloud dependencies, no external exposure.",
        },
        {
          icon: Shield,
          text: "Unprecedented Accuracy",
          desc: "Understand user behavior and access intent with over 90% accuracy in real-time decision-making and automated approvals.",
        },
      ],
    },
    capabilities: {
      title: "Exclusive SWOT PAM Capabilities",
      items: [
        {
          icon: Eye,
          text: "User Behavior Analytics (UBA)",
          desc: "Detect anomalies instantly through AI-based behavioral baselines. Identify insider threats, compromised accounts, and misuse in real time.",
        },
        {
          icon: Lock,
          text: "Conditional Access Policies",
          desc: "Risk-based Zero Trust access—evaluating device health, behavior, and network context before granting privileges.",
        },
        {
          icon: Key,
          text: "Just-in-Time (JIT) Access",
          desc: "Grant time-limited privileged access that automatically revokes after task completion, eliminating standing privileges.",
        },
        {
          icon: Shield,
          text: "Bring Your Own Key (BYOK)",
          desc: "Total control over encryption keys and data residency. Ensure compliance with enterprise-grade privacy and security standards.",
        },
      ],
    },
    benefits1: {
      title: "Strategic Business Benefits – TIER 1: Risk Reduction & Breach Prevention",
      items: [
        {
          icon: Eye,
          text: "Enhanced Cyber Resilience",
          desc: "Detect and respond to threats in minutes instead of months, reducing breach impact by 95% and cutting MTTR from 206 days to under 15 minutes.",
        },
        {
          icon: Users,
          text: "Insider Threat Prevention",
          desc: "Behavior analytics identify insider risks before data loss, ensuring 100% session visibility and instant privilege revocation.",
        },
        {
          icon: Shield,
          text: "Reduced Attack Surface",
          desc: "Zero standing privileges and continuous least-privilege enforcement reduce exposure to insider and external attacks by up to 70%.",
        },
      ],
    },
    benefits2: {
      title: "TIER 2: Compliance & Operational Efficiency",
      items: [
        {
          icon: CheckCircle2,
          text: "Automated Regulatory Compliance",
          desc: "Meet NIST, HIPAA, GDPR, SOX, and PCI-DSS standards automatically with built-in governance and audit trails.",
        },
        {
          icon: BarChart3,
          text: "Operational Efficiency Gains",
          desc: "AI automation reduces manual IT effort by up to 70%, saving weeks of administrative time and cutting operational errors by over half.",
        },
        {
          icon: Lock,
          text: "Business Continuity & Resilience",
          desc: "Ensure uninterrupted operations with real-time monitoring, automatic containment, and disaster recovery readiness.",
        },
      ],
    },
    benefits3: {
      title: "TIER 3: Cost Savings & Strategic Advantage",
      items: [
        {
          icon: DollarSign,
          text: "Lower Total Cost of Ownership",
          desc: "Achieve 70% lower TCO with rapid 2–4 week deployment and 6–12 month ROI—saving up to $950K over 3 years.",
        },
        {
          icon: Shield,
          text: "Reduced Cyber Insurance Premiums",
          desc: "Enhanced resilience lowers risk ratings, reducing premiums by 20–30% and saving $50K–$200K annually.",
        },
        {
          icon: TrendingUp,
          text: "Competitive Advantage",
          desc: "Accelerate operations by 80% with AI-native architecture, ensuring 95% user adoption and cloud-native scalability.",
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
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(14,165,233,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(6,182,212,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(14,165,233,0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
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
              background: "rgba(14,165,233,0.15)",
              border: "1px solid rgba(6,182,212,0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg,#06b6d4,#0ea5e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🚀 World’s First AI-Native PAM
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg,#06b6d4,#0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            The Future of Privileged Access Management is Here
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Built from the ground up to redefine cybersecurity, SWOT PAM combines
            Vision Language Processing (VLP) and Offline LLM for proactive,
            intent-aware, and privacy-first privileged access management.
          </p>
        </motion.div>

        {/* Tabs Section (Right) + Video/Info (Left) */}
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
          {/* Left - Video + About */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                position: "relative",
                background: "rgba(10,13,20,0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "16/9",
              }}
            >
              <video
                src="/public/products-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                background: "rgba(10,13,20,0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(6,182,212,0.2)",
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
                    color: "#0ea5e9",
                    marginBottom: "20px",
                  }}
                >
                  About SWOT PAM
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  SWOT PAM empowers enterprises to stay ahead of evolving
                  cyber threats with AI-driven privileged access intelligence.
                  Designed for accuracy, automation, and autonomy, it brings
                  together advanced analytics, behavior modeling, and offline
                  LLM security.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "rgba(10,13,20,0.6)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(6,182,212,0.2)",
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
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                background: "rgba(6,182,212,0.1)",
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
                          ? "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(14,165,233,0.2))"
                          : "rgba(10,13,20,0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(14,165,233,0.4)"
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
                          ? "#0ea5e9"
                          : "rgba(255,255,255,0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#0ea5e9"
                            : "rgba(255,255,255,0.5)",
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
                    background: "linear-gradient(135deg,#06b6d4,#0ea5e9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "30px",
                  }}
                >
                  {content[activeTab].title}
                </h3>

                <div style={{ display: "grid", gap: "20px" }}>
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
                          background: "rgba(6,182,212,0.05)",
                          border: "1px solid rgba(6,182,212,0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(6,182,212,0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#0ea5e9" />
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "rgba(255,255,255,0.9)",
                              marginBottom: "6px",
                            }}
                          >
                            {item.text}
                          </h4>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "rgba(255,255,255,0.6)",
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
