"use client"

import { useState, useEffect } from "react"

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { id: "landing", label: "Home", icon: "/icons/home.svg" },
    { id: "about", label: "About", icon: "/icons/about.svg" },
    { id: "education", label: "Education", icon: "/icons/education.svg" },
    { id: "techstack", label: "Tech", icon: "/icons/tech.svg" },
    { id: "projects", label: "Projects", icon: "/icons/projects.svg" },
    { id: "certificates", label: "Certs", icon: "/icons/certificate.svg" },
    { id: "connect", label: "Connect", icon: "/icons/contact.svg" },
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
              <span className="nav-icon">
                <img src={section.icon} alt={section.label} className="icon-img" />
              </span>
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>
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
                <span className="nav-icon">
                  <img src={section.icon} alt={section.label} className="icon-img" />
                </span>
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
    </>
  )
}

export default Navigation
