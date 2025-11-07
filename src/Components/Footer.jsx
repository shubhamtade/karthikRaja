import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import NoiseTexture from "./NoiseTexture";

const Footer = () => {
  const footerLinks = {
    products: ["PAM", "IT Monitoring", "BPM", "IT Automation"],
    services: ["Oracle Services", "IBM Services", "VMware", "IT Support"],
    company: ["About us", "Client Success", "Why Rudratic", "Solutions"],
  };

  const socialIcons = [
    { icon: Facebook, color: "#1877f2", link: "#" },
    { icon: Twitter, color: "#1da1f2", link: "#" },
    { icon: Linkedin, color: "#0a66c2", link: "#" },
    { icon: Instagram, color: "#e4405f", link: "#" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        background: "#0a0d14",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 48px 40px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
        >
          {/* Column 1 - Logo & Description */}
          <motion.div variants={fadeInUp}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                R
              </div>
              <span
                style={{ fontSize: "24px", fontWeight: "700", color: "white" }}
              >
                RUDRATIC
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: "1.7",
                marginBottom: "24px",
                maxWidth: "300px",
              }}
            >
              Leading provider of IT Security, Monitoring, and Automation
              solutions. Making IT Easy for businesses worldwide.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {React.createElement(social.icon, {
                    size: 20,
                    color: "rgba(255, 255, 255, 0.7)",
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Products */}
          <motion.div variants={fadeInUp}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Products
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.products.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div variants={fadeInUp}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.services.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Company */}
          <motion.div variants={fadeInUp}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "white",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.company.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.6)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "40px",
            padding: "24px 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Mail size={20} color="rgba(255, 255, 255, 0.6)" />
            <span
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
            >
              info@rudratic.com
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Phone size={20} color="rgba(255, 255, 255, 0.6)" />
            <span
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
            >
              ‪+44 7438618490‬,  ‪+91 9962233803
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <MapPin size={20} color="rgba(255, 255, 255, 0.6)" />
            <span
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
            >
              Rudratic Technologies Ltd., 47, Courtside, 47-49 Penywern
              road,London, SW59TU
            </span>

            <span
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}
            >
              India Address: No.187, 2nd cross street, shanthiNagar, chromepet, chennai, 600044
            </span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.5)",
              margin: 0,
            }}
          >
            © 2025 Rudratic Technologies. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.5)",
                textDecoration: "none",
              }}
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
