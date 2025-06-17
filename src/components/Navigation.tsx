"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { id: "landing", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👨‍💻" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "techstack", label: "Tech", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "certificates", label: "Certs", icon: "🏆" },
    { id: "connect", label: "Connect", icon: "📱" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Floating Centered Navbar */}
      <nav className={`floating-navigation ${isScrolled ? "scrolled" : ""}`}>
        <div className="floating-nav-container">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`floating-nav-item ${activeSection === section.id ? "active" : ""}`}
              onClick={() => scrollToSection(section.id)}
              title={section.label}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`mobile-nav-item ${activeSection === section.id ? "active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-label">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Background Textures */}
      <div className="background-textures">
        <div className="texture-layer texture-dots"></div>
        <div className="texture-layer texture-grid"></div>
        <div className="texture-layer texture-waves"></div>
        <div className="texture-layer texture-noise"></div>
      </div>

      {/* Animated background particles */}
      <div className="particles-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default Navigation
