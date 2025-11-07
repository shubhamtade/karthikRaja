// BPMAutomationPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Cpu,
  FileText,
  Network,
  Cloud,
  CheckCircle2,
  Settings,
  BarChart3,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const BPMAutomationPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Briefcase },
    { id: "workflow", label: "Workflow Automation", icon: Cpu },
    { id: "browser", label: "Browser Automation", icon: FileText },
    { id: "scheduler", label: "Task Scheduler", icon: Calendar },
    { id: "file-transfer", label: "File Management", icon: Cloud },
    { id: "benefits", label: "Key Benefits", icon: CheckCircle2 },
  ];

  const content = {
    overview: {
      title: "Business Process Management & IT Automations",
      items: [
        {
          icon: Briefcase,
          text: "Unified BPM & IT Automation",
          desc:
            "Complete lifecycle automation of both IT and business processes. Orchestrate batch jobs, end-of-day (EOD) tasks, disaster recovery automation and BPM workflows from a single control plane.",
        },
        {
          icon: Settings,
          text: "Reliable Orchestration",
          desc:
            "Coordinate tasks across systems, enforce business rules, and ensure consistency across cross-department processes with auditability and retry logic built in.",
        },
        {
          icon: CheckCircle2,
          text: "Faster Time to Value",
          desc:
            "Reduce manual intervention, remove human error, and speed operational tasks so your teams can focus on higher-value initiatives.",
        },
      ],
    },

    workflow: {
      title: "Workflow Automation Engine",
      items: [
        {
          icon: Cpu,
          text: "Batch Jobs & End-of-Day Automation",
          desc:
            "Automate scheduled batch jobs and EOD processes with dependency management, retries, and alerts — ensuring consistent, predictable results every cycle.",
        },
        {
          icon: Cpu,
          text: "Disaster Recovery Automation",
          desc:
            "Automate failover, backup orchestration, and recovery workflows so critical systems recover reliably and with minimal human intervention.",
        },
        {
          icon: Settings,
          text: "Full Process Lifecycle",
          desc:
            "Design, execute, monitor, and optimize business and IT processes from a unified workflow engine that supports complex branching and approval flows.",
        },
      ],
    },

    browser: {
      title: "Browser Automation & Data Extraction",
      items: [
        {
          icon: FileText,
          text: "UI Automation for Repetitive Tasks",
          desc:
            "Automate manual back-office operations and repetitive UI tasks — including data entry, validations, reconciliation and form submissions — across web applications.",
        },
        {
          icon: Network,
          text: "Robust Data Extraction",
          desc:
            "Extract structured data from web portals and legacy UIs, normalize results and feed downstream systems automatically for faster processing.",
        },
        {
          icon: Settings,
          text: "Validation & Error Handling",
          desc:
            "Built-in validation rules and error handling ensure data quality and trigger compensating workflows or alerts when issues occur.",
        },
      ],
    },

    scheduler: {
      title: "Task Scheduler for Multiple Systems",
      items: [
        {
          icon: Calendar,
          text: "Centralized Job Scheduling",
          desc:
            "Manage scheduled jobs across Windows, Linux, cloud platforms and enterprise apps from a single scheduler with visibility into status and dependencies.",
        },
        {
          icon: Cloud,
          text: "Cross-Platform Orchestration",
          desc:
            "Support for heterogeneous environments, including on-prem, cloud, and hybrid landscapes — schedule and coordinate jobs across them seamlessly.",
        },
        {
          icon: CheckCircle2,
          text: "Event & Rule-Based Triggers",
          desc:
            "Define rule-based triggers, event-driven executions and conditional flows so automations react to business signals in real time.",
        },
      ],
    },

    "file-transfer": {
      title: "Output File Management & Transfer",
      items: [
        {
          icon: FileText,
          text: "Inbound & Outbound File Transfers",
          desc:
            "Automate secure file inbound/outbound transfers using schedulers and rule sets for routing, validation, and processing.",
        },
        {
          icon: Cloud,
          text: "Policy-Based File Handling",
          desc:
            "Apply policies for renaming, archiving, encryption, retention and error handling to keep file workflows auditable and compliant.",
        },
        {
          icon: Network,
          text: "Multi-Protocol Support",
          desc:
            "Support FTP, SFTP, API-based transfers and cloud storage connectors to integrate file movement across systems and partners.",
        },
      ],
    },

    benefits: {
      title: "Key Benefits of BPM & IT Automation",
      items: [
        {
          icon: CheckCircle2,
          text: "Reduce Manual Effort",
          desc:
            "Eliminate repetitive tasks and human errors, freeing operations teams to focus on innovation and exception handling.",
        },
        {
          icon: Briefcase,
          text: "Improve Productivity",
          desc:
            "Accelerate process turnaround, minimize downtime, and standardize operational procedures across departments.",
        },
        {
          icon: BarChart3,
          text: "Gain Visibility & Control",
          desc:
            "Unified dashboards provide real-time insight into schedules, workflow status, SLA adherence, and historical trends.",
        },
        {
          icon: Cpu,
          text: "Seamless Integration",
          desc:
            "Connect to ERP, CRM, databases, legacy systems and modern APIs for end-to-end automation without replacing existing platforms.",
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

      {/* animated background blobs — same pattern */}
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
        {/* Hero */}
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
              Business Process Management & IT Automations
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
            Streamline IT Operations and Business Workflows with Automation
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Automate repetitive tasks, coordinate cross-system processes, and enable 24/7 operational resilience. Our BPM Automation suite brings unified control, intelligent scheduling, and zero-touch execution for all your business workflows.
          </p>
        </motion.div>

        {/* Main Layout (left video/about + right tabs) */}
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
                  About Our BPM Automation
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                    marginBottom: "12px",
                  }}
                >
                  A unified automation platform that manages both business and IT processes. From scheduled jobs to browser-based data extraction and secure file transfers — deliver consistent, auditable operations.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  Deploy quickly, increase reliability, and gain end-to-end visibility into your workflows and file movement.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tabs */}
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
                      color={activeTab === tab.id ? "#0ea5e9" : "rgba(255,255,255,0.5)"}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: activeTab === tab.id ? "#0ea5e9" : "rgba(255,255,255,0.5)",
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

export default BPMAutomationPage;
