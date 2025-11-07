// SWOTCloudPAMPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Cpu,
  Lock,
  Eye,
  Globe2,
  BarChart3,
  Users,
  CheckCircle2,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const SWOTCloudPAMPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "problem", label: "The Problem", icon: AlertTriangle },
    { id: "solution", label: "The SWOT Solution", icon: Cpu },
    { id: "capabilities", label: "Core Capabilities", icon: Lock },
    { id: "use-cases", label: "Real-World Use Cases", icon: Users },
    { id: "roi", label: "ROI & Integrations", icon: BarChart3 },
  ];

  const content = {
    overview: {
      title:
        "SWOT Cloud PAM — The Only AI-Native Platform Designed to Eliminate Privilege Abuse Before It Happens",
      items: [
        {
          icon: Shield,
          text: "Predictive, Preventive, Autonomous",
          desc:
            "Stop reacting to security threats. SWOT Cloud PAM predicts, prevents, and automatically responds to privilege abuse in real-time—learning and adapting to your organization's unique security landscape.",
        },
        {
          icon: Globe2,
          text: "Cloud-First by Design",
          desc:
            "From securing multi-cloud infrastructure (AWS, Azure, GCP) to protecting on-prem and hybrid environments, SWOT delivers a single policy, a single audit trail, and unified control.",
        },
        {
          icon: CheckCircle2,
          text: "Fast Time-to-Value",
          desc:
            "Typical SWOT deployment completes in 3–4 weeks vs. months for legacy PAM — enabling rapid remediation and ROI.",
        },
      ],
    },

    problem: {
      title: "The Problem: Why Traditional PAM Can't Keep Up",
      items: [
        {
          icon: AlertTriangle,
          text: "Dynamic Cloud Infrastructure",
          desc:
            "Cloud resources spin up and down continuously while legacy PAM policies remain static — causing coverage gaps and stale privileges.",
        },
        {
          icon: Eye,
          text: "Sophisticated Insider & Account Threats",
          desc:
            "Insider threats and credential compromise blend into normal behavior, making them difficult to detect with rule-based systems.",
        },
        {
          icon: TrendingUp,
          text: "Compliance & Operational Burden",
          desc:
            "Manual audits and evidence collection are expensive and slow, often missing transient or subtle privileged abuses.",
        },
        {
          icon: Globe2,
          text: "Fragmented Multi-Cloud Controls",
          desc:
            "Different IAM models across providers force fragmented tooling and inconsistent controls, increasing risk and operational overhead.",
        },
      ],
    },

    solution: {
      title: "The SWOT Solution: AI-Native from the Ground Up",
      items: [
        {
          icon: Cpu,
          text: "Built-in Intelligence",
          desc:
            "SWOT's intelligence is woven into every component (credential management, session control, policy engine) rather than slapped on as an add-on.",
        },
        {
          icon: Lock,
          text: "Zero Standing Privileges (ZSP)",
          desc:
            "All privileges are ephemeral and context-aware — privileges automatically expire and cannot be reused by attackers.",
        },
        {
          icon: Shield,
          text: "Autonomous Response in Milliseconds",
          desc:
            "When threats are detected, SWOT takes automated action: revoke access, enforce MFA, terminate sessions, or quarantine resources instantly.",
        },
      ],
    },

    capabilities: {
      title: "SWOT’s Core Capabilities",
      items: [
        {
          icon: Lock,
          text: "Zero Standing Privilege (ZSP)",
          desc:
            "Temporary, context-aware access — even stolen credentials are useless after session expiry.",
        },
        {
          icon: Cpu,
          text: "AI Behavioral Anomaly Detection",
          desc:
            "Deep learning baselines detect deviations in real-time to flag insider threats and compromised accounts before damage happens.",
        },
        {
          icon: Eye,
          text: "Intelligent Session Recording & Analysis",
          desc:
            "AI reviews session recordings to identify subtle attack patterns humans might miss — not just rule violations.",
        },
        {
          icon: Globe2,
          text: "Unified Multi-Cloud Control",
          desc:
            "Native support for AWS, Azure, GCP, private & hybrid clouds under a single policy engine and unified audit trail.",
        },
        {
          icon: TrendingUp,
          text: "Native Kubernetes & Container Security",
          desc:
            "Ephemeral credentials for pods/containers and direct integration with EKS/AKS/GKE/OpenShift.",
        },
        {
          icon: Users,
          text: "Service Account & CI/CD Security",
          desc:
            "Dynamic credential vending for API keys, Lambdas, and pipelines — eliminating hardcoded secrets.",
        },
        {
          icon: CheckCircle2,
          text: "Automated Compliance Reporting",
          desc:
            "One-click reports for HIPAA, PCI-DSS, GDPR, SOX, NIST, FedRAMP with automatic evidence collection.",
        },
        {
          icon: DollarSign,
          text: "Just-In-Time Access (JIT) & Self-Service",
          desc:
            "Self-service via Slack, Teams, CLI, or API with risk-based automatic approvals and automatic revocation.",
        },
      ],
    },

    "use-cases": {
      title: "Real-World Use Cases",
      items: [
        {
          icon: Users,
          text: "Financial Services",
          desc:
            "Insider threat detection for 2,000 privileged users, audit time cut from 4 weeks to 2 days, and significant cost avoidance from prevented data exfiltration.",
        },
        {
          icon: Shield,
          text: "Healthcare",
          desc:
            "Unified PAM across EMR and cloud stores: HIPAA audit success, automated password rotation, and major admin time savings.",
        },
        {
          icon: TrendingUp,
          text: "Technology / DevOps",
          desc:
            "Slack-integrated JIT reduces approval time from 30 minutes to 30 seconds — removes hardcoded keys and speeds debugging.",
        },
        {
          icon: Globe2,
          text: "MSPs & Third-Party Access",
          desc:
            "Centralized third-party access with auto-expiry when tickets close and full client-visible audit trails.",
        },
        {
          icon: BarChart3,
          text: "Enterprise Multi-Cloud",
          desc:
            "Consolidate multiple PAM tools into one platform with consistent policies and significant licensing + maintenance savings.",
        },
      ],
    },

    roi: {
      title: "ROI & Integrations",
      items: [
        {
          icon: DollarSign,
          text: "Quantified Business Impact",
          desc:
            "$3.1M average annual benefit, 50% reduction in IT admin labor, 80% faster audits, and $623K annual incident response savings.",
        },
        {
          icon: BarChart3,
          text: "Key ROI Drivers",
          desc:
            "Automated password rotation, JIT self-service, automated onboarding/offboarding, and cloud-native delivery reduce operational costs and speed payback.",
        },
        {
          icon: Globe2,
          text: "Integrations",
          desc:
            "Native connectors for AWS, Azure, GCP, Splunk, Sentinel, ServiceNow, Jira, Active Directory, Okta and 500+ enterprise tools via REST APIs.",
        },
        {
          icon: CheckCircle2,
          text: "Typical Cost & Payback",
          desc:
            "Typical annual cost $150K–250K; payback in 3–6 months with measurable admin savings, license consolidation, and fewer incidents.",
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

      {/* Animated background blobs — same pattern as your other pages */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(245,158,11,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(217,119,6,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(251,191,36,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(245,158,11,0.15) 0%, transparent 50%)",
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
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SWOT Cloud PAM
            </span>
          </div>

          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            The Only AI-Native Platform Designed to Eliminate Privilege Abuse Before It Happens
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
            Stop reacting to security threats. SWOT Cloud PAM predicts, prevents, and automatically responds to privilege abuse in real-time—combining zero standing privileges, behavioral intelligence, and autonomous response.
          </p>
        </motion.div>

        {/* Main grid: left video/about — right tabs (same grid as your other pages) */}
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
          {/* Left: Video + About */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                position: "relative",
                background: "rgba(10,13,20,0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(245,158,11,0.2)",
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
                border: "1px solid rgba(245,158,11,0.2)",
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
                  About SWOT Cloud PAM
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                    marginBottom: "12px",
                  }}
                >
                  SWOT Cloud PAM predicts and prevents privilege abuse using AI-native techniques. It secures multi-cloud and hybrid infrastructures with ephemeral privileges, autonomous response, and deep session intelligence.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  The platform reduces risk, accelerates compliance, and lowers operational costs — delivering measurable ROI within months.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              background: "rgba(10,13,20,0.6)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(245,158,11,0.2)",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <NoiseTexture opacity={0.05} />

            {/* Tabs header buttons (same 3-column compact grid) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                background: "rgba(245,158,11,0.1)",
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
                          ? "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(251,191,36,0.2))"
                          : "rgba(10,13,20,0.8)",
                      border:
                        activeTab === tab.id
                          ? "1px solid rgba(245,158,11,0.4)"
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
                      color={activeTab === tab.id ? "#f59e0b" : "rgba(255,255,255,0.5)"}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: activeTab === tab.id ? "#f59e0b" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content (same card style and animation) */}
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
                    background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "30px",
                  }}
                >
                  {content[activeTab].title}
                </h3>

                <div style={{ display: "grid", gap: "20px" }}>
                  {content[activeTab].items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        style={{
                          display: "flex",
                          gap: "16px",
                          padding: "20px",
                          background: "rgba(245,158,11,0.05)",
                          border: "1px solid rgba(245,158,11,0.1)",
                          borderRadius: "12px",
                        }}
                      >
                        <div
                          style={{
                            background: "rgba(245,158,11,0.2)",
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

export default SWOTCloudPAMPage;
