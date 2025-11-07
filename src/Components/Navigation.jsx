import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Search, Globe, LogIn, ChevronDown, Calendar } from "lucide-react";
import NoiseTexture from "./NoiseTexture";
import ClientLoginModal from "./ClientLoginModal"; // ADD THIS LINE

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Products", href: "#products", hasDropdown: true, isRoute: true  },
    { label: "Services", href: "#services", hasDropdown: true, isRoute: true  },
    { label: "Company", href: "#company", hasDropdown: true, isRoute: true  },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  // Determine active menu item based on current route
 const getActiveIndex = () => {
  const path = location.pathname;
  
  if (path === "/contact") {
    return 4; // Contact index
  } else if (path.startsWith("/products")) {
    return 1; // Products index
  } else if (path.startsWith("/services")) {
    return 2; // Services index
  } else if (path.startsWith("/company") || path === "/solutions" || path === "/about-us" || path === "/client-success" || path === "/why-rudratic") {
    return 3; // Services index  
  } else if (path === "/") {
    return 0; // Home index
  }
  return 0; // Default to Home
};

  const activeIndex = getActiveIndex();

  // Products Dropdown Content
  // Products Dropdown Content
  const productsContent = [
    {
      title: "SWOT Analysis",
      subtitle: "Privileged Access Management",
      color: "#ec4899",
      href: "/products/pam",
      isRoute: true,
    },
    {
      title: "SWOTDAM",
      subtitle: "Digital Asset Management",
      color: "#ec4899",
      href: "/products/SWOTDAMPage",
      isRoute: true,
    },
    {
      title: "SWOTCloudPAM",
      subtitle: "Cloud Privileged Access Management",
      color: "#8b5cf6",
      href: "/products/SWOTCloudPAMPage",
      isRoute: true,
    },
    {
      title: "AIquinox",
      subtitle: "Performance Monitoring Platform",
      color: "#8b5cf6",
      href: "/products/AiquinoxPage",
      isRoute: true,
    },
    {
      title: "BPMAutomation",
      subtitle: "Business Process Management",
      color: "#8b5cf6",
      href: "/products/BPMAutomationPage",
      isRoute: true,
    },
  ];

  // Services Dropdown Content
  const servicesContent = [
    {
      title: "Application Development",
      subtitle: "Custom Solutions",
      color: "#ec4899",
      href: "/services/app-development",
      isRoute: true,
    },
    {
      title: "Oracle Services",
      subtitle: "Enterprise Solutions",
      color: "#8b5cf6",
      href: "/services/oracle",
      isRoute: true,
    },
    {
      title: "SAP Consulting",
      subtitle: "Business Integration",
      color: "#ec4899",
      href: "/services/sap",
      isRoute: true,
    },
    {
      title: "IBM Services",
      subtitle: "Infrastructure Management",
      color: "#8b5cf6",
      href: "/services/ibm",
      isRoute: true,
    },
    {
      title: "IT Infrastructure",
      subtitle: "Network & Systems",
      color: "#ec4899",
      href: "/services/it-infrastructure",
      isRoute: true,
    },
    {
      title: "VMware Solutions",
      subtitle: "Virtualization",
      color: "#8b5cf6",
      href: "/services/vmware",
      isRoute: true,
    },
  ];

  // Company Dropdown Content
  const companyContent = [
    { title: "Solutions", color: "#ec4899", href: "/solutions", isRoute: true },
    { title: "About us", color: "#8b5cf6", href: "/about-us", isRoute: true },
    {
      title: "Client Success",
      color: "#ec4899",
      href: "/client-success",
      isRoute: true,
    },
    {
      title: "Why Rudratic",
      color: "#8b5cf6",
      href: "/why-rudratic",
      isRoute: true,
    },
  ];

  return (
    <>
      {/* BACKGROUND BLUR OVERLAY - Appears when dropdown is active */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px) saturate(120%)",
              WebkitBackdropFilter: "blur(8px) saturate(120%)",
              zIndex: 900,
              pointerEvents: "none",
            }}
          >
            <NoiseTexture opacity={0.15} />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: "0px" }} />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: scrolled ? "20px" : "30px",
          left: "4%",
          alignItems: "center",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "calc(100% - 100px)",
          maxWidth: "1400px",
          background: scrolled
            ? "rgba(10, 13, 20, 0.7)"
            : "rgba(10, 13, 20, 0.3)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          border: "1px solid rgba(129, 140, 248, 0.2)",
          borderRadius: "20px",
          padding: "18px 40px",
          boxShadow: scrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(129, 140, 248, 0.1)"
            : "0 4px 20px rgba(0, 0, 0, 0.3)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          overflow: "visible",
        }}
      >
        <NoiseTexture opacity={0.08} />

        <motion.div
          animate={{
            background: [
              "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.3), transparent)",
              "linear-gradient(180deg, transparent, rgba(192, 132, 252, 0.3), transparent)",
              "linear-gradient(270deg, transparent, rgba(129, 140, 248, 0.3), transparent)",
              "linear-gradient(360deg, transparent, rgba(192, 132, 252, 0.3), transparent)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            pointerEvents: "none",
            borderRadius: "20px",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          {/* Logo - Also navigates to home */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <motion.img
                src="/rudratic new logo.png"
                alt="RUDRATIC Logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </Link>

          {/* CENTER MENU */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "8px",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {menuItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  style={{ position: "relative" }}
                  onMouseEnter={() => {
                    setHoveredItem(index);
                    if (item.hasDropdown) {
                      setActiveDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setActiveDropdown(null);
                  }}
                >
                  {item.isRoute ? (
                    <Link to={item.href} style={{ textDecoration: "none" }}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        style={{
                          position: "relative",
                          cursor: "pointer",
                          padding: "10px 20px",
                          borderRadius: "10px",
                          background:
                            hoveredItem === index
                              ? "linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.2))"
                              : isActive
                              ? "rgba(129, 140, 248, 0.1)"
                              : "transparent",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <motion.span
                          animate={{
                            color:
                              hoveredItem === index
                                ? "rgba(255, 255, 255, 1)"
                                : isActive
                                ? "rgba(255, 255, 255, 0.95)"
                                : "rgba(255, 255, 255, 0.65)",
                          }}
                          style={{
                            fontSize: "14px",
                            letterSpacing: "0.3px",
                            fontWeight: isActive ? "600" : "500",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {item.label}
                        </motion.span>

                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            style={{
                              position: "absolute",
                              bottom: "6px",
                              left: "20px",
                              right: "20px",
                              height: "2px",
                              borderRadius: "9999px",
                              background:
                                "linear-gradient(90deg, #818cf8, #c084fc)",
                              boxShadow: "0 0 8px rgba(129, 140, 248, 0.6)",
                            }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.div
                      whileHover={{ y: -2 }}
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        background:
                          hoveredItem === index
                            ? "linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.2))"
                            : "transparent",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <motion.span
                          animate={{
                            color:
                              hoveredItem === index
                                ? "rgba(255, 255, 255, 1)"
                                : "rgba(255, 255, 255, 0.65)",
                          }}
                          style={{
                            fontSize: "14px",
                            letterSpacing: "0.3px",
                            fontWeight: "500",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {item.label}
                        </motion.span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{
                              rotate: hoveredItem === index ? 180 : 0,
                              color:
                                hoveredItem === index
                                  ? "rgba(255, 255, 255, 0.95)"
                                  : "rgba(255, 255, 255, 0.5)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={14} />
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* ENHANCED DROPDOWN OVERLAY - EQUAL HEIGHT COLUMNS WITH DIVIDERS */}
                  <AnimatePresence>
                    {activeDropdown === item.label && item.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          position: "absolute",
                          top: "60px",
                          left: item.label === "Company" ? "50%" : "-300px",
                          transform:
                            item.label === "Company"
                              ? "translateX(-50%)"
                              : "none",
                          background: "rgba(10, 13, 20, 0.98)",
                          backdropFilter: "blur(50px)",
                          WebkitBackdropFilter: "blur(50px)",
                          border: "1px solid rgba(129, 140, 248, 0.25)",
                          borderRadius: "20px",
                          padding: "32px",
                          minWidth:
                            item.label === "Company" ? "320px" : "980px",
                          boxShadow:
                            "0 25px 70px rgba(0, 0, 0, 0.6), 0 0 100px rgba(129, 140, 248, 0.15)",
                          zIndex: 1001,
                          overflow: "hidden",
                        }}
                      >
                        <NoiseTexture opacity={0.1} />

                        {/* COMPANY - Simple Vertical List */}
                        {item.label === "Company" && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "14px",
                              position: "relative",
                              zIndex: 2,
                            }}
                          >
                            {companyContent.map((dropItem, idx) =>
                              dropItem.isRoute ? (
                                <Link
                                  key={idx}
                                  to={dropItem.href}
                                  style={{ textDecoration: "none" }}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    style={{
                                      background: `linear-gradient(135deg, ${dropItem.color}15, transparent)`,
                                      border: `1px solid ${dropItem.color}30`,
                                      borderRadius: "14px",
                                      padding: "18px 24px",
                                      cursor: "pointer",
                                      transition: "all 0.3s ease",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        color: dropItem.color,
                                        letterSpacing: "0.2px",
                                      }}
                                    >
                                      {dropItem.title}
                                    </div>
                                  </motion.div>
                                </Link>
                              ) : (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.02, x: 5 }}
                                  style={{
                                    background: `linear-gradient(135deg, ${dropItem.color}15, transparent)`,
                                    border: `1px solid ${dropItem.color}30`,
                                    borderRadius: "14px",
                                    padding: "18px 24px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "600",
                                      color: dropItem.color,
                                      letterSpacing: "0.2px",
                                    }}
                                  >
                                    {dropItem.title}
                                  </div>
                                </motion.div>
                              )
                            )}
                          </div>
                        )}

                        {/* PRODUCTS - 3 EQUAL HEIGHT COLUMNS WITH DIVIDERS */}
                        {item.label === "Products" && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "280px 1fr 280px",
                              gap: "0px",
                              position: "relative",
                              zIndex: 2,
                              minHeight: "420px",
                            }}
                          >
                            {/* Column 1: Video Section */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                paddingRight: "28px",
                                height: "100%",
                              }}
                            >
                              <div
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(139, 92, 246, 0.12))",
                                  border: "1px solid rgba(236, 72, 153, 0.25)",
                                  borderRadius: "16px",
                                  overflow: "hidden",
                                  flex: 1,
                                  minHeight: "320px",
                                }}
                              >
                                <video
                                  src="/public/products-video.mp4"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Vertical Divider 1 */}
                            <div
                              style={{
                                position: "absolute",
                                left: "280px",
                                top: "0",
                                bottom: "0",
                                width: "1px",
                                background:
                                  "linear-gradient(180deg, transparent, rgba(129, 140, 248, 0.3) 20%, rgba(129, 140, 248, 0.3) 80%, transparent)",
                                zIndex: 1,
                              }}
                            />

                            {/* Column 2: Products Grid */}
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "14px",
                                alignContent: "start",
                                padding: "0 28px",
                                height: "100%",
                              }}
                            >
                              {productsContent.map((product, idx) => (
                                <Link
                                  key={idx}
                                  to={product.href}
                                  style={{ textDecoration: "none" }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    style={{
                                      background: `linear-gradient(135deg, ${product.color}15, transparent)`,
                                      border: `1px solid ${product.color}35`,
                                      borderRadius: "14px",
                                      padding: "20px",
                                      cursor: "pointer",
                                      transition: "all 0.3s ease",
                                      height: "fit-content",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: product.color,
                                        marginBottom: "8px",
                                        lineHeight: "1.4",
                                      }}
                                    >
                                      {product.title}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        color: "rgba(255, 255, 255, 0.65)",
                                        fontWeight: "400",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {product.subtitle}
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Vertical Divider 2 */}
                            <div
                              style={{
                                position: "absolute",
                                right: "280px",
                                top: "0",
                                bottom: "0",
                                width: "1px",
                                background:
                                  "linear-gradient(180deg, transparent, rgba(129, 140, 248, 0.3) 20%, rgba(129, 140, 248, 0.3) 80%, transparent)",
                                zIndex: 1,
                              }}
                            />

                            {/* Column 3: Description + Button */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                paddingLeft: "28px",
                                height: "100%",
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    background:
                                      "linear-gradient(90deg, #ec4899, #8b5cf6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    marginBottom: "16px",
                                    lineHeight: "1.3",
                                  }}
                                >
                                  Rudratic Products
                                </div>
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "rgba(255, 255, 255, 0.75)",
                                    lineHeight: "1.8",
                                    letterSpacing: "0.2px",
                                    textAlign: "justify",
                                  }}
                                >
                                  Transform your business with our integrated
                                  suite of enterprise solutions. From managing
                                  digital assets with SWOT DAM and securing
                                  cloud access through SWOT CLOUD PAM, to
                                  automating workflows with BPM AUTOMATION and
                                  analyzing privileged access with SWOT PAM
                                  Analysis, we've got you covered. AIquinox ties
                                  it all together with AI-driven performance
                                  monitoring, giving you complete visibility and
                                  control. Our solutions work seamlessly to
                                  protect your infrastructure, streamline
                                  operations, and drive intelligent
                                  decision-making across your organization.
                                </div>
                              </div>

                              {/* Request Demo Button at Bottom */}
                              <motion.button
                                onClick={() => window.openDemoModal && window.openDemoModal()}
                                whileHover={{
                                  scale: 1.03,
                                  boxShadow:
                                    "0 10px 30px rgba(236, 72, 153, 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #ec4899, #8b5cf6)",
                                  color: "white",
                                  padding: "14px 20px",
                                  borderRadius: "12px",
                                  border: "none",
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "10px",
                                  marginTop: "20px",
                                }}
                              >
                                <Calendar size={18} />
                                Request Demo
                              </motion.button>
                            </div>
                          </div>
                        )}

                        {/* SERVICES - 3 EQUAL HEIGHT COLUMNS WITH DIVIDERS */}
                        {item.label === "Services" && (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 280px 280px",
                              gap: "0px",
                              position: "relative",
                              zIndex: 2,
                              minHeight: "420px",
                            }}
                          >
                            {/* Column 1: Services Grid */}
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "14px",
                                alignContent: "start",
                                paddingRight: "28px",
                                height: "100%",
                              }}
                            >
                              {servicesContent.map((product, idx) => (
                                <Link
                                  key={idx}
                                  to={product.href}
                                  style={{ textDecoration: "none" }}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    style={{
                                      background: `linear-gradient(135deg, ${product.color}15, transparent)`,
                                      border: `1px solid ${product.color}35`,
                                      borderRadius: "14px",
                                      padding: "20px",
                                      cursor: "pointer",
                                      transition: "all 0.3s ease",
                                      height: "fit-content",
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: product.color,
                                        marginBottom: "8px",
                                        lineHeight: "1.4",
                                      }}
                                    >
                                      {product.title}
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        color: "rgba(255, 255, 255, 0.65)",
                                        fontWeight: "400",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {product.subtitle}
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Vertical Divider 1 */}
                            <div
                              style={{
                                position: "absolute",
                                right: "560px",
                                top: "0",
                                bottom: "0",
                                width: "1px",
                                background:
                                  "linear-gradient(180deg, transparent, rgba(129, 140, 248, 0.3) 20%, rgba(129, 140, 248, 0.3) 80%, transparent)",
                                zIndex: 1,
                              }}
                            />

                            {/* Column 2: Video Section */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "0 28px",
                                height: "100%",
                              }}
                            >
                              <div
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(139, 92, 246, 0.12))",
                                  border: "1px solid rgba(139, 92, 246, 0.25)",
                                  borderRadius: "16px",
                                  overflow: "hidden",
                                  flex: 1,
                                  minHeight: "320px",
                                }}
                              >
                                <video
                                  src="/public/service-video.mp4"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Vertical Divider 2 */}
                            <div
                              style={{
                                position: "absolute",
                                right: "280px",
                                top: "0",
                                bottom: "0",
                                width: "1px",
                                background:
                                  "linear-gradient(180deg, transparent, rgba(129, 140, 248, 0.3) 20%, rgba(129, 140, 248, 0.3) 80%, transparent)",
                                zIndex: 1,
                              }}
                            />

                            {/* Column 3: Description + Button */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                paddingLeft: "28px",
                                height: "100%",
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    background:
                                      "linear-gradient(90deg, #8b5cf6, #ec4899)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    marginBottom: "16px",
                                    lineHeight: "1.3",
                                  }}
                                >
                                  Our Services
                                </div>
                                <div
                                  style={{
                                    fontSize: "13px",
                                    color: "rgba(255, 255, 255, 0.75)",
                                    lineHeight: "1.8",
                                    letterSpacing: "0.2px",
                                    textAlign: "justify",
                                  }}
                                >
                                  From enterprise platforms to custom development, we deliver end-to-end IT
                                  solutions tailored to your needs. Whether it's Oracle and IBM training and implementation,
                                  VMware virtualization, round-the-clock Infrastructure Support, cutting-edge
                                  Application Development in .NET, Java, and mobile, or SAP Consulting, our expert team
                                  provides the knowledge, tools, and support to transform your technology landscape. We
                                  partner with you every step of the way to ensure successful implementation and
                                  ongoing optimization of your IT investments.
                                </div>
                              </div>

                              {/* Request Demo Button at Bottom */}
                              <motion.button
                                onClick={() => window.openDemoModal && window.openDemoModal()}
                                whileHover={{
                                  scale: 1.03,
                                  boxShadow:
                                    "0 10px 30px rgba(139, 92, 246, 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #8b5cf6, #ec4899)",
                                  color: "white",
                                  padding: "14px 20px",
                                  borderRadius: "12px",
                                  border: "none",
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "10px",
                                  marginTop: "20px",
                                }}
                              >
                                <Calendar size={18} />
                                Request Demo
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT ICONS */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {/* <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.7)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <Search size={18} />
            </motion.button> */}

            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.7)",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <Globe size={18} />
            </motion.button>

            <div
              style={{
                width: "1px",
                height: "30px",
                background: "rgba(255, 255, 255, 0.1)",
                margin: "0 8px",
              }}
            />

            <motion.button
              onClick={() => window.openLoginModal && window.openLoginModal()}
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                boxShadow: "0 8px 30px rgba(129, 140, 248, 0.5)",
              }}
              whileTap={{
                scale: 0.98,
                background: "linear-gradient(135deg, #c084fc, #ec4899)",
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))",
                color: "#0a0d14",
                padding: "10px 24px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "14px",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              <motion.span
                animate={{
                  color: "#0a0d14",
                }}
                style={{ transition: "color 0.3s ease" }}
              >
                Client Login
              </motion.span>
              <LogIn size={16} />
            </motion.button>
          </div>

          <div style={{ height: "42px", visibility: "hidden" }} />
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
