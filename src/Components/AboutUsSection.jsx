import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Building2 } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight } from "../utils/animations";
import NoiseTexture from "./NoiseTexture";

const AboutUsSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "linear-gradient(135deg, #6366f1, #ec4899)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.1,
          // textAlign: "justify",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "2px",
                color: "#ec4899",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              About Us
            </motion.p>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.8)",
                textAlign: "justify",
                lineHeight: "1.8",
                marginBottom: "32px",
              }}
            >
              Rudratic Technologies operates with a vision: 'Make IT Easy' for
              the difficult business processes. We boast a highly spirited team,
              as we strongly believe that people with sound technical profile
              are the greatest strength to any organization. We provide prudent
              and affordable solutions for audit and monitoring compliant with
              security, risk and regulatory requirements. Carefully built
              application/system monitoring products ensure proactive customer
              service. Automation solutions for Business(BPM) and IT processes
              assist organizations achieve continuous improvement. Our
              consulting services are yet another forte that spans across
              leading technology products of Oracle, IBM & SAP.
            </motion.p>

            <a href="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                padding: "14px 28px",
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
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
              <Phone size={18} />
              Contact Us
            </motion.button>
            </a>
          </motion.div>

          {/* Right Image with Parallax */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ position: "relative" , height: "100%"}}
          >
            <motion.div
              style={{
                height: "100%",
                margin: "0 auto",
                // background:
                //   "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))",
                // backdropFilter: "blur(40px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/public/map image.png"
                alt="Description"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                  // opacity: 0.3,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
