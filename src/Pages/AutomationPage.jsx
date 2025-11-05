import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, Cpu, Code, Clock, TrendingUp } from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const AutomationPage = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    { id: "benefits", label: "Benefits", icon: CheckCircle2 },
    { id: "capabilities", label: "Capabilities", icon: Cpu },
    { id: "how-it-works", label: "How it Works", icon: Code },
    { id: "use-cases", label: "Use Cases", icon: TrendingUp },
  ];

  const content = {
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: Zap,
          text: "Increased Efficiency",
          desc: "Automate repetitive tasks and free up valuable time for strategic work",
        },
        {
          icon: Clock,
          text: "Faster Execution",
          desc: "Execute complex workflows in minutes instead of hours or days",
        },
        {
          icon: CheckCircle2,
          text: "Error Reduction",
          desc: "Eliminate human errors in routine operations and processes",
        },
        {
          icon: TrendingUp,
          text: "Scalability",
          desc: "Handle growing workloads without additional resources or headcount",
        },
        {
          icon: Cpu,
          text: "Cost Savings",
          desc: "Reduce operational costs through intelligent automation",
        },
        {
          icon: Code,
          text: "Consistency",
          desc: "Ensure standardized execution across all tasks and workflows",
        },
      ],
    },
    capabilities: {
      title: "Core Capabilities",
      items: [
        {
          icon: Zap,
          text: "Workflow Orchestration",
          desc: "Design and execute complex multi-step workflows across systems",
        },
        {
          icon: Code,
          text: "Runbook Automation",
          desc: "Automate operational procedures and playbooks with templates",
        },
        {
          icon: Cpu,
          text: "Scheduling Engine",
          desc: "Schedule tasks with flexible triggers, conditions, and dependencies",
        },
        {
          icon: Clock,
          text: "Self-Service Portal",
          desc: "Empower users with IT self-service capabilities and automation",
        },
        {
          icon: TrendingUp,
          text: "API Integration",
          desc: "Connect with any system via RESTful APIs and webhooks",
        },
        {
          icon: CheckCircle2,
          text: "Event-Driven Automation",
          desc: "Trigger workflows based on system events and conditions",
        },
      ],
    },
    "how-it-works": {
      title: "How It Works",
      items: [
        {
          icon: Code,
          text: "Step 1: Define Workflows",
          desc: "Create automation workflows using visual designer or code-based approach",
        },
        {
          icon: Cpu,
          text: "Step 2: Configure Triggers",
          desc: "Set up event-based, scheduled, or manual triggers for execution",
        },
        {
          icon: Zap,
          text: "Step 3: Integration",
          desc: "Connect to systems via APIs, scripts, SSH, or pre-built connectors",
        },
        {
          icon: Clock,
          text: "Step 4: Testing",
          desc: "Test workflows in sandbox environment before production deployment",
        },
        {
          icon: TrendingUp,
          text: "Step 5: Deployment",
          desc: "Deploy automation to production with version control and rollback",
        },
        {
          icon: CheckCircle2,
          text: "Step 6: Monitor",
          desc: "Track execution, analyze performance, and optimize workflows",
        },
      ],
    },
    "use-cases": {
      title: "Common Use Cases",
      items: [
        {
          icon: Zap,
          text: "Infrastructure Provisioning",
          desc: "Automate server and cloud resource provisioning across platforms",
        },
        {
          icon: Cpu,
          text: "Incident Response",
          desc: "Automated incident detection, triage, and remediation workflows",
        },
        {
          icon: Code,
          text: "Backup & Recovery",
          desc: "Schedule automated backups and restore processes with validation",
        },
        {
          icon: Clock,
          text: "User Management",
          desc: "Automate user onboarding, offboarding, and access management",
        },
        {
          icon: TrendingUp,
          text: "Patch Management",
          desc: "Automated system updates, patching, and compliance verification",
        },
        {
          icon: CheckCircle2,
          text: "Report Generation",
          desc: "Schedule automated report creation, distribution, and archival",
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
            "radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
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
              background: "rgba(236, 72, 153, 0.15)",
              border: "1px solid rgba(236, 72, 153, 0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #ec4899, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IT Automation & Orchestration
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ec4899, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Intelligent Process Automation
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
            Comprehensive IT automation platform that orchestrates complex workflows,
            eliminates manual tasks, and enables intelligent self-service IT operations
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
                border: "1px solid rgba(236, 72, 153, 0.2)",
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
                border: "1px solid rgba(236, 72, 153, 0.2)",
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
                    color: "#ec4899",
                    marginBottom: "20px",
                  }}
                >
                  About IT Automation
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  IT Automation & Orchestration transforms manual IT operations into
                  automated, intelligent workflows that execute consistently and
                  reliably. Our platform enables you to automate everything from simple
                  tasks to complex multi-system processes with ease.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  With event-driven automation, powerful scheduling, API-first
                  integration, and self-service capabilities, you can dramatically reduce
                  operational overhead, improve service delivery, and enable your IT
                  teams to focus on strategic initiatives.
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
              border: "1px solid rgba(236, 72, 153, 0.2)",
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
                background: "rgba(236, 72, 153, 0.1)",
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
                          ? "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(244, 114, 182, 0.2))"
                          : "rgba(10, 13, 20, 0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(236, 72, 153, 0.4)"
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
                          ? "#ec4899"
                          : "rgba(255, 255, 255, 0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#ec4899"
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
                    background: "linear-gradient(135deg, #ec4899, #f472b6)",
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
                          background: "rgba(236, 72, 153, 0.05)",
                          border: "1px solid rgba(236, 72, 153, 0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(236, 72, 153, 0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#ec4899" />
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

export default AutomationPage;
