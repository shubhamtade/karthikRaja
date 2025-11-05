import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, Activity, TrendingUp, AlertCircle, Zap } from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const ITMonitoringPage = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    { id: "benefits", label: "Benefits", icon: CheckCircle2 },
    { id: "capabilities", label: "Capabilities", icon: Activity },
    { id: "how-it-works", label: "How it Works", icon: TrendingUp },
    { id: "use-cases", label: "Use Cases", icon: AlertCircle },
  ];

  const content = {
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: Activity,
          text: "Real-Time Visibility",
          desc: "Monitor infrastructure health and performance in real-time across all systems",
        },
        {
          icon: AlertCircle,
          text: "Proactive Alerting",
          desc: "Get notified of issues before they impact business operations",
        },
        {
          icon: CheckCircle2,
          text: "Reduced Downtime",
          desc: "Minimize service disruptions with early detection and rapid response",
        },
        {
          icon: TrendingUp,
          text: "Performance Optimization",
          desc: "Identify bottlenecks and optimize resource utilization",
        },
        {
          icon: BarChart3,
          text: "Data-Driven Insights",
          desc: "Make informed decisions with comprehensive analytics and reporting",
        },
        {
          icon: Zap,
          text: "Faster Resolution",
          desc: "Reduce mean time to resolution with detailed diagnostics",
        },
      ],
    },
    capabilities: {
      title: "Core Capabilities",
      items: [
        {
          icon: Activity,
          text: "Infrastructure Monitoring",
          desc: "Monitor servers, networks, databases, and cloud resources",
        },
        {
          icon: BarChart3,
          text: "Application Performance Monitoring",
          desc: "Track application response times, errors, and user experience",
        },
        {
          icon: AlertCircle,
          text: "Intelligent Alerting",
          desc: "Smart alerts with threshold-based triggers and escalation",
        },
        {
          icon: TrendingUp,
          text: "Trend Analysis",
          desc: "Historical data analysis and capacity planning",
        },
        {
          icon: Zap,
          text: "Log Management",
          desc: "Centralized logging with powerful search and analysis",
        },
        {
          icon: CheckCircle2,
          text: "Custom Dashboards",
          desc: "Build personalized monitoring dashboards for your needs",
        },
      ],
    },
    "how-it-works": {
      title: "How It Works",
      items: [
        {
          icon: Activity,
          text: "Step 1: Data Collection",
          desc: "Lightweight agents collect metrics from all monitored systems and services",
        },
        {
          icon: BarChart3,
          text: "Step 2: Data Aggregation",
          desc: "Metrics are aggregated and stored in high-performance time-series database",
        },
        {
          icon: TrendingUp,
          text: "Step 3: Analysis",
          desc: "AI-powered analysis identifies patterns, anomalies, and potential issues",
        },
        {
          icon: AlertCircle,
          text: "Step 4: Alerting",
          desc: "Intelligent alerts notify teams through multiple channels instantly",
        },
        {
          icon: Zap,
          text: "Step 5: Visualization",
          desc: "Real-time dashboards display system health, metrics, and trends",
        },
        {
          icon: CheckCircle2,
          text: "Step 6: Reporting",
          desc: "Generate compliance and performance reports automatically",
        },
      ],
    },
    "use-cases": {
      title: "Common Use Cases",
      items: [
        {
          icon: Activity,
          text: "Cloud Infrastructure",
          desc: "Monitor AWS, Azure, GCP environments with unified visibility",
        },
        {
          icon: BarChart3,
          text: "Microservices",
          desc: "Track performance across distributed architectures and containers",
        },
        {
          icon: AlertCircle,
          text: "Database Monitoring",
          desc: "Monitor query performance, connection pools, and database health",
        },
        {
          icon: TrendingUp,
          text: "Network Performance",
          desc: "Track bandwidth, latency, packet loss, and network device health",
        },
        {
          icon: Zap,
          text: "Container Monitoring",
          desc: "Monitor Docker containers and Kubernetes deployments at scale",
        },
        {
          icon: CheckCircle2,
          text: "Hybrid Environments",
          desc: "Unified monitoring for on-premises and cloud systems",
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
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
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
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IT Monitoring Solutions
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Complete Infrastructure Visibility
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
            Real-time monitoring and observability platform to gain comprehensive
            insights into your IT infrastructure, applications, and network performance
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
                border: "1px solid rgba(16, 185, 129, 0.2)",
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

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                background: "rgba(10, 13, 20, 0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
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
                    color: "#10b981",
                    marginBottom: "20px",
                  }}
                >
                  About IT Monitoring
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  IT Monitoring Solutions provide comprehensive visibility into your
                  technology infrastructure, enabling you to proactively identify and
                  resolve issues before they impact your business. Our platform combines
                  infrastructure monitoring, application performance monitoring, and log
                  management into a unified solution.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  With real-time dashboards, intelligent alerting, and powerful analytics,
                  you can ensure optimal performance, maximize uptime, and deliver
                  exceptional user experiences across all your digital services while
                  meeting compliance requirements.
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
              border: "1px solid rgba(16, 185, 129, 0.2)",
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
                background: "rgba(16, 185, 129, 0.1)",
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
                          ? "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 182, 212, 0.2))"
                          : "rgba(10, 13, 20, 0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(16, 185, 129, 0.4)"
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
                          ? "#10b981"
                          : "rgba(255, 255, 255, 0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#10b981"
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
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
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
                          background: "rgba(16, 185, 129, 0.05)",
                          border: "1px solid rgba(16, 185, 129, 0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(16, 185, 129, 0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#10b981" />
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

export default ITMonitoringPage;
