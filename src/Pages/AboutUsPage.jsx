import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp, Globe, Shield } from "lucide-react";
import NoiseTexture from "../Components/NoiseTexture";
import Footer from "../Components/Footer";

const AboutUsPage = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years of Excellence" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Countries Served" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in everything we do.",
      color: "#818cf8",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in working together with our clients as partners to achieve shared success.",
      color: "#c084fc",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality solutions and services.",
      color: "#ec4899",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We continuously evolve and adopt cutting-edge technologies to stay ahead.",
      color: "#818cf8",
    },
  ];

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

      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15) 0%, transparent 50%)",
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

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            paddingTop: "140px",
            paddingBottom: "80px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "140px 20px 80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              display: "inline-block",
              padding: "10px 24px",
              background:
                "linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(192, 132, 252, 0.15))",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              borderRadius: "50px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.5px",
              }}
            >
              About Rudratic
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: "56px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "24px",
              letterSpacing: "-1px",
              lineHeight: "1.2",
            }}
          >
            Empowering Businesses Through
            <br />
            Integrated IT Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            We combine strategy, technology, and support to help businesses
            operate smarter and achieve more.
          </motion.p>
        </motion.div>

        {/* About Section */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background:
                "linear-gradient(135deg, rgba(129, 140, 248, 0.1), rgba(192, 132, 252, 0.1))",
              border: "1px solid rgba(129, 140, 248, 0.2)",
              borderRadius: "24px",
              padding: "0",
              position: "relative",
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <NoiseTexture opacity={0.05} />
            <video
              src="Swot Explainer Video V6.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(129, 140, 248, 0.1)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: '50px',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#818cf8',
                letterSpacing: '0.5px'
              }}>
                About Rudratic
              </span>
            </div> */}

            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                background: "linear-gradient(90deg, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              Rudratic
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              <span style={{ color: "#818cf8", fontWeight: "600" }}>
                Rudratic
              </span>{" "}
              is a leading provider of enterprise IT solutions, specializing in{" "}
              <span style={{ color: "#c084fc" }}>
                Privileged Access Management
              </span>
              , <span style={{ color: "#c084fc" }}>IT Monitoring</span>,{" "}
              <span style={{ color: "#c084fc" }}>
                Business Process Management
              </span>
              , and <span style={{ color: "#c084fc" }}>Automation</span>.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              With over <strong>15 years of experience</strong>, we serve{" "}
              <strong>500+ global enterprises</strong> across{" "}
              <strong>150+ countries</strong>, delivering innovative solutions
              that secure, optimize, and transform IT operations.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.8",
              }}
            >
              Our team of certified experts provides comprehensive training,
              consulting, and implementation services for{" "}
              <span style={{ color: "#ec4899" }}>Oracle</span>,{" "}
              <span style={{ color: "#ec4899" }}>IBM</span>,{" "}
              <span style={{ color: "#ec4899" }}>SAP</span>, and{" "}
              <span style={{ color: "#ec4899" }}>
                custom application development
              </span>
              .
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "rgba(10, 13, 20, 0.6)",
                backdropFilter: "blur(30px)",
                border: "1px solid rgba(129, 140, 248, 0.2)",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <NoiseTexture opacity={0.05} />
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #818cf8, #c084fc, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "12px",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: "500",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "80px 40px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "16px",
              }}
            >
              Our Core Values
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              The principles that guide everything we do
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: "rgba(10, 13, 20, 0.6)",
                    backdropFilter: "blur(30px)",
                    border: "1px solid rgba(129, 140, 248, 0.2)",
                    borderRadius: "24px",
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <NoiseTexture opacity={0.05} />
                  <div
                    style={{
                      background: `linear-gradient(135deg, ${value.color}20, transparent)`,
                      border: `1px solid ${value.color}40`,
                      borderRadius: "16px",
                      padding: "16px",
                      display: "inline-flex",
                      marginBottom: "24px",
                    }}
                  >
                    <Icon size={32} color={value.color} />
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: value.color,
                      marginBottom: "12px",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.7",
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
