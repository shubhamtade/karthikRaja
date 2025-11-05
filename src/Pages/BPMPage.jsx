import React, { useState } from "react";
import { motion } from "framer-motion";
import { Workflow, CheckCircle2, GitBranch, BarChart, Settings, Users } from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const BPMPage = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    { id: "benefits", label: "Benefits", icon: CheckCircle2 },
    { id: "capabilities", label: "Capabilities", icon: Settings },
    { id: "how-it-works", label: "How it Works", icon: GitBranch },
    { id: "use-cases", label: "Use Cases", icon: Users },
  ];

  const content = {
    benefits: {
      title: "Key Benefits",
      items: [
        {
          icon: Workflow,
          text: "Process Efficiency",
          desc: "Streamline workflows and eliminate bottlenecks across all departments",
        },
        {
          icon: BarChart,
          text: "Better Visibility",
          desc: "Complete transparency into business processes and performance metrics",
        },
        {
          icon: CheckCircle2,
          text: "Reduced Errors",
          desc: "Minimize manual errors with automated validation and controls",
        },
        {
          icon: GitBranch,
          text: "Agile Adaptation",
          desc: "Quickly adapt processes to changing business requirements",
        },
        {
          icon: Users,
          text: "Enhanced Collaboration",
          desc: "Improve team coordination and cross-functional communication",
        },
        {
          icon: Settings,
          text: "Continuous Improvement",
          desc: "Data-driven process optimization and performance tracking",
        },
      ],
    },
    capabilities: {
      title: "Core Capabilities",
      items: [
        {
          icon: Workflow,
          text: "Visual Process Designer",
          desc: "Drag-and-drop BPMN 2.0 compliant process modeling interface",
        },
        {
          icon: GitBranch,
          text: "Workflow Automation",
          desc: "Automate complex business workflows end-to-end with minimal coding",
        },
        {
          icon: BarChart,
          text: "Process Analytics",
          desc: "Real-time insights and process performance metrics and KPIs",
        },
        {
          icon: Settings,
          text: "Rules Engine",
          desc: "Business rules management without technical programming",
        },
        {
          icon: Users,
          text: "Task Management",
          desc: "Assign, track, and manage tasks efficiently across teams",
        },
        {
          icon: CheckCircle2,
          text: "Integration Hub",
          desc: "Connect with existing enterprise systems and applications",
        },
      ],
    },
    "how-it-works": {
      title: "How It Works",
      items: [
        {
          icon: Workflow,
          text: "Step 1: Process Modeling",
          desc: "Design business processes visually using industry-standard BPMN notation",
        },
        {
          icon: Settings,
          text: "Step 2: Configuration",
          desc: "Configure business rules, forms, integrations, and user assignments",
        },
        {
          icon: GitBranch,
          text: "Step 3: Deployment",
          desc: "Deploy processes to production environment with version control",
        },
        {
          icon: Users,
          text: "Step 4: Execution",
          desc: "Workflow engine executes processes automatically based on triggers",
        },
        {
          icon: BarChart,
          text: "Step 5: Monitoring",
          desc: "Track process instances and performance metrics in real-time",
        },
        {
          icon: CheckCircle2,
          text: "Step 6: Optimization",
          desc: "Analyze data and continuously improve process efficiency",
        },
      ],
    },
    "use-cases": {
      title: "Common Use Cases",
      items: [
        {
          icon: Workflow,
          text: "Order Management",
          desc: "Automate order-to-cash processes across departments and systems",
        },
        {
          icon: Users,
          text: "Employee Onboarding",
          desc: "Streamline HR onboarding workflows with automated provisioning",
        },
        {
          icon: CheckCircle2,
          text: "Approval Workflows",
          desc: "Manage multi-level approval processes with routing and escalation",
        },
        {
          icon: GitBranch,
          text: "Incident Management",
          desc: "Track and resolve incidents systematically with SLA management",
        },
        {
          icon: Settings,
          text: "Compliance Processes",
          desc: "Ensure regulatory compliance with automated audit trails",
        },
        {
          icon: BarChart,
          text: "Financial Processes",
          desc: "Automate invoicing, payments, reconciliation, and reporting",
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
            "radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)",
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
              background: "rgba(245, 158, 11, 0.15)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business Process Management
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Transform Your Business Operations
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
            Enterprise BPM platform to model, automate, and optimize business
            processes with powerful workflow automation and analytics
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
                border: "1px solid rgba(245, 158, 11, 0.2)",
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
                border: "1px solid rgba(245, 158, 11, 0.2)",
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
                    color: "#f59e0b",
                    marginBottom: "20px",
                  }}
                >
                  About BPM
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  Business Process Management (BPM) is a comprehensive approach to
                  improving organizational processes through analysis, modeling,
                  automation, and continuous optimization. Our BPM platform provides
                  the tools and capabilities needed to transform how your organization
                  operates.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  With visual process design, powerful workflow automation, and
                  real-time analytics, you can eliminate inefficiencies, reduce costs,
                  improve compliance, and deliver better outcomes for your customers
                  and stakeholders.
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
              border: "1px solid rgba(245, 158, 11, 0.2)",
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
                background: "rgba(245, 158, 11, 0.1)",
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
                          ? "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))"
                          : "rgba(10, 13, 20, 0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(245, 158, 11, 0.4)"
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
                          ? "#f59e0b"
                          : "rgba(255, 255, 255, 0.5)"
                      }
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color:
                          activeTab === tab.id
                            ? "#f59e0b"
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
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
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
                          background: "rgba(245, 158, 11, 0.05)",
                          border: "1px solid rgba(245, 158, 11, 0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(245, 158, 11, 0.2)",
                            borderRadius: "10px",
                            padding: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: "44px",
                            height: "44px",
                          }}
                        >
                          <Icon size={20} color="#f59e0b" />
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

export default BPMPage;
