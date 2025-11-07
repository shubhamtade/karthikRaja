import React from "react";
import { motion } from "framer-motion";
import { Key, BarChart3, Workflow, Zap, ArrowRight, Check } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import NoiseTexture from "./NoiseTexture";
import { Link } from "react-router-dom"; // ✅ Add this if using React Router

const ProductsSection = () => {
  const products = [
    {
      title: "SWOT - Privileged Access Management",
      // icon: Key,
      imagePath: "product1.jpg",
      description:
        "Comprehensive Privileged Access Management solution that provides secure credential vaulting, granular access controls, approval workflows, and continuous monitoring of users with authorized privileges.",
      features: [
        "Role-based Access Control",
        "Just-in-Time Privilege Elevation",
        "Password Vaulting & Auto-Rotation",
        "Session Recording & Monitoring",
      ],
      href: "/products/pam",
      color: "#6366f1",
    },
    {
      title: "AIquinox - Redefining Performance Monitoring",
      // icon: BarChart3,
      imagePath: "product2.jpg",
      description:
        "AI-powered performance monitoring solution that discovers impactful performance issues with advanced AI analytics. Cut through the noise of traditional analytics and monitoring with intelligent insights.",
      features: [
        "AI-Driven Performance Analytics",
        "Automated Issue Discovery",
        "Real-Time Performance Tracking",
        "Predictive Performance Insights",
      ],
      href: "/products/AiquinoxPage",
      color: "#10b981",
    },
    {
      title: "BPM AUTOMATION - Business Process Management",
      // icon: Zap,
      imagePath: "product5.jpg",
      description:
        "An intelligent automation platform that streamlines business workflows, eliminates manual tasks, and optimizes operational efficiency through process orchestration and automation.",
      features: [
        "AI-powered automation and intelligent routing",
        "Real-time process monitoring and analytics",
        "Seamless integration with enterprise systems",
        "Automated notifications and task escalations",
      ],
      href: "/products/BPMAutomationPage",
      color: "#ec4899",
    },
    {
      title: "SWOT DAM - Digital Asset Management",
      // icon: Workflow,
      imagePath: "product3.jpg",
      description:
        "A comprehensive platform for organizing, managing, and distributing digital assets across your organization with powerful search, version control, and collaboration capabilities.",
      features: [
        "Centralized storage for all digital assets",
        "AI-powered search and metadata tagging",
        "Version control with complete audit trails",
        "permission management and user roles",
      ],
      href: "/products/SWOTDAMPage",
      color: "#f59e0b",
    },
    {
      title: "SWOT CLOUD PAM - Cloud Privileged Access Management",
      // icon: Zap,
      imagePath: "product4.jpg",
      description:
        "A cloud-native security solution that protects privileged accounts and manages access across multi-cloud and hybrid environments with zero-trust architecture.",
      features: [
        "Secure encrypted credential vaulting in cloud",
        "Just-in-time access with temporary privileges",
        "Multi-factor authentication for enhanced security",
        "Real-time session monitoring and recording",
      ],
      href: "/products/SWOTCloudPAMPage",
      color: "#ec4899",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0",
        background: "#0a0d14",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <motion.p
            style={{
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "2px",
              color: "#818cf8",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Our Products
          </motion.p>
        </motion.div>

        {products.map((product, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              marginBottom: index < products.length - 1 ? "100px" : "0",
            }}
          >
            {/* Image Section (Left Side if even index) */}
            {index % 2 === 0 && (
              <Link to={product.href} style={{ textDecoration: "none" }}>
                <motion.div
                  variants={fadeInLeft}
                  style={{
                    background: `${product.color}15`,
                    borderRadius: "24px",
                    padding: "0px", // Reduced padding
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${product.color}30`,
                    cursor: "pointer",
                    height: "400px", // Add fixed height
                    overflow: "hidden", // Prevent overflow
                  }}
                >
                  <img
                    src={product.imagePath}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // or 'cover' to fill completely
                    }}
                  />
                </motion.div>
              </Link>
            )}

            {/* Content Section */}
            <motion.div variants={fadeInRight}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                {/* {React.createElement(product.icon, {
                  size: 32,
                  color: 'white',
                })} */}
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "white",
                    margin: 0,
                  }}
                >
                  {product.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.6)",
                  lineHeight: "1.8",
                  marginBottom: "24px",
                }}
              >
                {product.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "32px",
                }}
              >
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <Check size={20} color={product.color} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={product.href} style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{
                    padding: "14px 28px",
                    background: product.color,
                    color: "white",
                    fontWeight: "600",
                    borderRadius: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Image Section (Right Side if odd index) */}
            {index % 2 === 1 && (
              <Link to={product.href} style={{ textDecoration: "none" }}>
                <motion.div
                  variants={fadeInRight}
                  style={{
                    background: `${product.color}15`,
                    borderRadius: "24px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${product.color}30`,
                    cursor: "pointer",
                    height: "400px", // Add fixed height
                    overflow: "hidden", // Prevent overflow
                  }}
                >
                  <img
                    src={product.imagePath}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
