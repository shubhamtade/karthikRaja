// SWOTDAMPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  FileText,
  Settings,
  BarChart3,
  CheckCircle2,
  Calendar,
  Lock,
  Cpu,
  Search,
  Shield,
  DollarSign,
  TrendingUp,
  Globe2,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const SWOTDAMPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Briefcase },
    { id: "crisis", label: "The Database Crisis", icon: Calendar },
    { id: "difference", label: "The Difference", icon: Cpu },
    { id: "capabilities", label: "Capabilities", icon: Settings },
    { id: "use-cases", label: "Use Cases", icon: Users },
    { id: "roi", label: "ROI & Next Steps", icon: BarChart3 },
  ];

  const content = {
    overview: {
      title: "Detect Threats in Milliseconds. Understand Your Data Instantly.",
      items: [
        {
          icon: Shield,
          text: "SWOT DAM 3.0 — AI-driven Database Protection & Intelligence",
          desc:
            "SWOT DAM 3.0 is an AI-driven, cloud-native database platform that combines advanced threat detection with intelligent data discovery. It learns your database, detects insider threats before they happen, and lets non-technical users query data using natural language—no SQL required.",
        },
        {
          icon: Search,
          text: "Prevent, Don’t React",
          desc:
            "Stop reacting to breaches and waiting for slow reports. Detect threats in milliseconds, make decisions instantly, and prevent damage before it happens.",
        },
        {
          icon: FileText,
          text: "Get Hands-On Quickly",
          desc:
            "See SWOT DAM 3.0 in action with a 30-minute demo or take our 2-minute risk assessment to understand immediate priorities.",
        },
      ],
    },

    crisis: {
      title: "Why You Need SWOT DAM 3.0 Now — The Database Crisis",
      items: [
        {
          icon: Calendar,
          text: "Security Reality",
          desc:
            "40% of data breaches involve insider threats or credential abuse. Average database breach cost: $4.45M. 70% of enterprises suffer alert fatigue from false positives.",
        },
        {
          icon: Lock,
          text: "Operational Reality",
          desc:
            "Business analysts spend ~40% of time searching for data. Only 5–10% of employees can write SQL, causing bottlenecks. Compliance audit prep takes 10+ days.",
        },
        {
          icon: Shield,
          text: "Hidden Sensitive Data",
          desc:
            "Sensitive data is often scattered and undiscovered — creating compliance and breach risk until identified.",
        },
      ],
    },

    difference: {
      title: "The SWOT DAM 3.0 Difference",
      items: [
        {
          icon: Cpu,
          text: "Three Breakthrough Capabilities",
          desc:
            "SWOT DAM 3.0 is not just monitoring. It’s a database operations platform built around: AI threat detection, Semantic Data Intelligence, and Automated Compliance Intelligence.",
        },
        {
          icon: Shield,
          text: "AI That Learns Your Environment",
          desc:
            "Our ML models build personalized baselines for queries, access patterns, and volumes — alerting on deviations in days (not months).",
        },
        {
          icon: FileText,
          text: "From Detection to Decision",
          desc:
            "Beyond alerts — get natural-language insights, automated reports, and recommended remediation so teams act faster and smarter.",
        },
      ],
    },

    capabilities: {
      title: "Capabilities — What SWOT DAM 3.0 Gives You",
      items: [
        {
          icon: Settings,
          text: "Advanced AI-Powered Threat Detection",
          desc:
            "AI baselines detect insider threats in <7 days (vs industry 90+ days), reduce false positives by ~80%, and integrate with SIEM/SOAR for automated response.",
        },
        {
          icon: Search,
          text: "Semantic Data Intelligence",
          desc:
            "AI analyzes tables, columns, relationships and business meaning — enabling plain-English queries and self-service reporting for non-technical users.",
        },
        {
          icon: CheckCircle2,
          text: "Automated Compliance Intelligence",
          desc:
            "One-click compliance reports (GDPR, HIPAA, PCI, SOX) with automatic evidence collection and continuous compliance posture monitoring.",
        },
        {
          icon: Lock,
          text: "Tamper-proof DBA Monitoring",
          desc:
            "Independent monitoring (not reliant on DBA logs) with tamper-evident trails for SOX/HIPAA and auditor confidence.",
        },
        {
          icon: Cpu,
          text: "Low Performance Impact & Fast Deployment",
          desc:
            "Agentless, network-based monitoring with <2% overhead and typical deployment in 2–4 weeks, not months.",
        },
      ],
    },

    "use-cases": {
      title: "Real-World Use Cases",
      items: [
        {
          icon: Users,
          text: "Financial Services — SOX & Trading Safety",
          desc:
            "Deployed across 400+ instances: zero performance impact, audit findings dropped to zero, audit prep from 6 weeks → 3 days; ROI in 4 months.",
        },
        {
          icon: Shield,
          text: "Healthcare — HIPAA & PHI Protection",
          desc:
            "Automated PHI detection and monitoring prevented violations, saved admin time daily, and eliminated audit findings during deployment.",
        },
        {
          icon: TrendingUp,
          text: "E-Commerce — Real-Time Fraud Prevention",
          desc:
            "Compromised accounts and suspicious transactions identified in minutes; incident response time reduced from hours to minutes.",
        },
        {
          icon: Globe2,
          text: "Operations & BI — Semantic Data for Analysts",
          desc:
            "Business users run natural-language queries, get dashboards in minutes, and cut analyst waiting times dramatically.",
        },
      ],
    },

    roi: {
      title: "ROI & Next Steps",
      items: [
        {
          icon: BarChart3,
          text: "Quantified Impact",
          desc:
            "Average annual benefit > $6.7M (breach prevention, compliance savings, analyst efficiency). Typical payback: 1–2 months for many customers.",
        },
        {
          icon: DollarSign,
          text: "Key ROI Drivers",
          desc:
            "Automated evidence collection, JIT remediation, analyst time savings, infrastructure consolidation, and insurance premium reductions.",
        },
        {
          icon: CheckCircle2,
          text: "Start Options",
          desc:
            "Free 30-min assessment, 14-day free POC on 2–3 critical DBs, or full deployment (2–4 weeks) with dedicated success manager.",
        },
        {
          icon: Shield,
          text: "Integrations",
          desc:
            "Native support for AWS/Azure/GCP, SIEM (Splunk/Sentinel/QRadar), ITSM (ServiceNow/Jira), and IAM (AD/Okta) — plus 500+ connectors.",
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

      {/* animated gradient blobs - kept same style */}
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
              SWOT DAM 3.0
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
            Detect Threats in Milliseconds. Understand Your Data Instantly.
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
            AI-driven database monitoring + semantic data intelligence. Prevent insider threats,
            democratize data access with plain-English queries, and automate compliance — all
            with minimal deployment effort and low performance impact.
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
          {/* Left Column: video + about */}
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
                  About SWOT DAM 3.0
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                    marginBottom: "12px",
                  }}
                >
                  An AI-driven database platform that detects insider threats, discovers data semantically,
                  and automates compliance reporting — all while keeping performance impact low.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  Deploy agentless in 2–4 weeks, enable natural-language queries, and gain continuous
                  audit-ready evidence for regulators and security teams.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tabs (same 3-column tab grid and card style) */}
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

            {/* Tab Buttons */}
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

export default SWOTDAMPage;
