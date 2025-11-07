import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Eye,
  AlertTriangle,
  Cpu,
  Layers,
  Settings,
  CheckCircle2,
  Shield,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const AiquinoxPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "mdes", label: "Modern Digital Experience Stack", icon: Layers },
    { id: "product-analytics", label: "Product Analytics", icon: BarChart3 },
    { id: "session-replay", label: "Session Replay", icon: Eye },
    { id: "issue-monitoring", label: "Issue Monitoring", icon: AlertTriangle },
    { id: "esfn", label: "Extracting Signal from Noise", icon: Cpu },
  ];

  const content = {
    overview: {
      title: "Aiquinox – Redefining Performance Monitoring",
      items: [
        {
          icon: Shield,
          text: "AI-Powered Performance Insights",
          desc: "Discover impactful performance issues with AI-driven analytics. Cut through the noise of traditional monitoring with the intelligence of Aiquinox AI.",
        },
        {
          icon: Layers,
          text: "Modern Digital Experience",
          desc: "Aiquinox unifies monitoring, analytics, and session replay to deliver clear insights into your application's user experience and performance.",
        },
        {
          icon: CheckCircle2,
          text: "Continuous Optimization",
          desc: "Built for teams deploying fast and iterating faster, Aiquinox empowers continuous optimization and real-time visibility across modern digital stacks.",
        },
      ],
    },
    mdes: {
      title: "Modern Digital Experience Stack (MDES)",
      items: [
        {
          icon: Layers,
          text: "Understanding MDES",
          desc: "Product teams now ship updates multiple times per day, run A/B tests, and personalize content. This complexity increases the risk of undetected issues.",
        },
        {
          icon: BarChart3,
          text: "The Growing Challenge",
          desc: "With multiple monitoring tools and fragmented data, teams struggle to efficiently identify and resolve experience-impacting issues.",
        },
        {
          icon: Cpu,
          text: "Aiquinox Advantage",
          desc: "Aiquinox brings together analytics, replay, and issue detection into a unified platform to streamline digital experience management.",
        },
      ],
    },
    "product-analytics": {
      title: "Product Analytics – RMQAS (Raising More Questions than Answers)",
      items: [
        {
          icon: BarChart3,
          text: "Quantitative Insights",
          desc: "Traditional analytics reveal surface-level metrics such as conversion drop-offs but rarely explain the underlying reasons.",
        },
        {
          icon: Eye,
          text: "Beyond the Numbers",
          desc: "Aiquinox goes beyond static analytics by correlating data points and behaviors to uncover the ‘why’ behind performance issues.",
        },
        {
          icon: CheckCircle2,
          text: "AI-Powered Clarity",
          desc: "By combining user behavior analytics with performance data, Aiquinox ensures you know not just what happened, but why it did.",
        },
      ],
    },
    "session-replay": {
      title: "Session Replay – USV (Unclear what Sessions are Valuable)",
      items: [
        {
          icon: Eye,
          text: "Session Overload Problem",
          desc: "Teams often collect thousands of user sessions, making it difficult to find the ones that truly matter or contain valuable insights.",
        },
        {
          icon: Settings,
          text: "Intelligent Prioritization",
          desc: "Aiquinox AI highlights meaningful sessions based on engagement, anomalies, and frustration signals, saving time and effort.",
        },
        {
          icon: BarChart3,
          text: "Contextual Understanding",
          desc: "By combining replay data with analytics, teams can see exactly how users experience performance issues or drop-offs.",
        },
      ],
    },
    "issue-monitoring": {
      title: "Issue Monitoring & Frustration Signals – IM & FS (A Sea of False Positives)",
      items: [
        {
          icon: AlertTriangle,
          text: "Reducing Alert Fatigue",
          desc: "Conventional monitoring tools flood teams with low-impact alerts. Aiquinox minimizes noise by filtering out irrelevant events.",
        },
        {
          icon: CheckCircle2,
          text: "Impact-Based Prioritization",
          desc: "Focus on what truly matters. Aiquinox identifies low-frequency, high-impact errors that affect real user experience.",
        },
        {
          icon: Cpu,
          text: "Unified View",
          desc: "Integrating performance, behavioral, and technical signals, Aiquinox ensures critical issues are surfaced efficiently.",
        },
      ],
    },
    esfn: {
      title: "Extracting Signal from Noise – ESFN",
      items: [
        {
          icon: Cpu,
          text: "Unified AI-Driven Platform",
          desc: "Aiquinox integrates session replay, analytics, and issue monitoring to extract meaningful insights from massive data volumes.",
        },
        {
          icon: BarChart3,
          text: "Faster Root-Cause Analysis",
          desc: "Reduce investigation time from days to minutes by letting AI correlate signals and identify the root cause automatically.",
        },
        {
          icon: Shield,
          text: "Redefining Performance Monitoring",
          desc: "Aiquinox transforms how digital teams monitor, analyze, and act — turning data noise into clear, actionable intelligence.",
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
            "radial-gradient(circle at 20% 30%, rgba(168,85,247,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(192,132,252,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(168,85,247,0.15) 0%, transparent 50%)",
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
              background: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(192,132,252,0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg,#a855f7,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aiquinox (Redefining Performance Monitoring)
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg,#a855f7,#c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Discover Impactful Performance Issues with AI Analytics
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
            Cut through the noise of traditional analytics and monitoring with powerful AI that redefines how teams identify, analyze, and resolve digital performance challenges.
          </p>
        </motion.div>

        {/* Main Layout */}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                position: "relative",
                background: "rgba(10,13,20,0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(168,85,247,0.2)",
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
                border: "1px solid rgba(168,85,247,0.2)",
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
                    color: "#c084fc",
                    marginBottom: "20px",
                  }}
                >
                  About Aiquinox
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  Aiquinox is a next-generation AI performance monitoring platform designed to unify analytics, issue detection, and user experience tracking into a single intelligent system.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  With Aiquinox, digital teams can quickly isolate critical issues, eliminate false positives, and understand the true impact of every performance anomaly through deep AI correlation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column – Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "rgba(10,13,20,0.6)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(168,85,247,0.2)",
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
                background: "rgba(168,85,247,0.1)",
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
                          ? "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(192,132,252,0.2))"
                          : "rgba(10,13,20,0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(192,132,252,0.4)"
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
                          ? "#c084fc"
                          : "rgba(255,255,255,0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#c084fc"
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
                    background: "linear-gradient(135deg,#a855f7,#c084fc)",
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
                          background: "rgba(192,132,252,0.05)",
                          border: "1px solid rgba(192,132,252,0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(192,132,252,0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#c084fc" />
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

export default AiquinoxPage;
