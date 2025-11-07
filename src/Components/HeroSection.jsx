import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Play, Zap, ArrowRight } from "lucide-react";
import NoiseTexture from "./NoiseTexture";
import { fadeInUp, staggerContainer } from "../utils/animations";
import ParticleBackground from "./ParticleBackground";
import { floatingAnimation } from "../utils/animations";

const HeroSection = ({ setIsDemoModalOpen }) => {
  const [buttonHover, setButtonHover] = useState({
    primary: false,
    secondary: false,
  });
  

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0a0d14",
        paddingTop: "220px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={0.08} />
      <ParticleBackground density={40} color="rgba(129, 140, 248, 0.3)" />

      <motion.div
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        // style={{
        //   position: "absolute",
        //   top: "-20%",
        //   left: "-10%",
        //   width: "60%",
        //   height: "60%",
        //   background:
        //     "radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 70%)",
        //   filter: "blur(80px)",
        //   zIndex: 0,
        // }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05, x: 5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(99, 102, 241, 0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(99, 102, 241, 0.15)",
                borderRadius: "100px",
                padding: "10px 20px",
                marginBottom: "32px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={16} color="#818cf8" />
              </motion.div>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
                }}
              >
                LEADING IT SECURITY & AUTOMATION
              </span>
            </motion.div>
            <motion.div {...floatingAnimation}>
              {/* existing content */}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              style={{
                fontSize: "56px",
                fontWeight: "700",
                lineHeight: "1.1",
                marginBottom: "24px",
                color: "white",
                letterSpacing: "-0.03em",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
              }}
            >
              Transform Your Business
              <br />
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                with Integrated
              </span>
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(90deg, #818cf8, #c084fc, #e879f9, #818cf8)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline",
                }}
              >
                IT Security & Automation
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.55)",
                marginBottom: "40px",
                lineHeight: "1.7",
                maxWidth: "520px",
                fontWeight: "400",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
              }}
            >
              We empower organizations to achieve secure, efficient, and agile
              operations through expert consulting, implementation, and
              management of advanced IT solutions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "60px",
                flexWrap: "wrap",
              }}
            >
              <motion.button

                onClick={() => window.openDemoModal && window.openDemoModal()}
                onMouseEnter={() =>
                  setButtonHover({ ...buttonHover, primary: true })
                }
                onMouseLeave={() =>
                  setButtonHover({ ...buttonHover, primary: false })
                }
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: buttonHover.primary
                    ? "linear-gradient(135deg, #818cf8, #c084fc)"
                    : "rgba(255, 255, 255, 0.95)",
                  color: buttonHover.primary ? "white" : "#0a0d14",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
                  letterSpacing: "0.3px",
                  boxShadow: buttonHover.primary
                    ? "0 8px 30px rgba(129, 140, 248, 0.4)"
                    : "0 2px 8px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {buttonHover.primary && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "50%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                      transform: "skewX(-20deg)",
                    }}
                  />
                )}
                <Calendar size={16} />
                Schedule a Demo
                <motion.div
                  animate={{ x: buttonHover.primary ? 3 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>

              <motion.button
                onMouseEnter={() =>
                  setButtonHover({ ...buttonHover, secondary: true })
                }
                onMouseLeave={() =>
                  setButtonHover({ ...buttonHover, secondary: false })
                }
                whileHover={{ x: 3, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: buttonHover.secondary
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.03)",
                  color: "rgba(255, 255, 255, 0.9)",
                  border: `1px solid ${
                    buttonHover.secondary
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.1)"
                  }`,
                  backdropFilter: "blur(10px)",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
                  letterSpacing: "0.3px",
                }}
              >
                <Play size={16} />
                Watch Demo Video
              </motion.button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {[
                {
                  value: "100%",
                  label: "Success Rate",
                  gradient: "linear-gradient(135deg, #818cf8, #c084fc)",
                },
                {
                  value: "500+",
                  label: "Clients",
                  gradient: "linear-gradient(135deg, #c084fc, #e879f9)",
                },
                {
                  value: "24/7",
                  label: "Support",
                  gradient: "linear-gradient(135deg, #e879f9, #f472b6)",
                },
                {
                  value: "99.9%",
                  label: "Uptime",
                  gradient: "linear-gradient(135deg, #818cf8, #e879f9)",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    background: "rgba(255, 255, 255, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 12px 40px rgba(129, 140, 248, 0.2)",
                  }}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "12px",
                    padding: "20px 16px",
                    textAlign: "center",
                    cursor: "pointer",
                    position: "relative",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflow: "hidden",
                  }}
                >
                  <NoiseTexture opacity={0.03} />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "12px",
                      background: stat.gradient,
                      opacity: 0,
                      zIndex: -1,
                      filter: "blur(8px)",
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 0.95)",
                      marginBottom: "6px",
                      letterSpacing: "-0.02em",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.5)",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            <motion.div
              whileHover={{
                scale: 1.01,
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(40px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                padding: "24px",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <NoiseTexture opacity={0.04} />
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <video
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  controls
                  src="/public/rutradic.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {["map image.png", "hero1.png"].map(
                (imagePath, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.03,
                      borderColor: "rgba(255, 255, 255, 0.15)",
                      y: -4,
                    }}
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      backdropFilter: "blur(40px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "16px",
                      padding: "0px",
                      height: "160px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <NoiseTexture opacity={0.04} />
                    <img
                      src={imagePath}
                      alt={`Image ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
