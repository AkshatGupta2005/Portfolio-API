"use client"

import type React from "react"
import { useState, useEffect } from "react"
import WakaTimeStats from "./WakaTimeStats"
import SpotifyNowPlaying from "./SpotifyNowPlaying"

const Landing = () => {
  const [glitchText, setGlitchText] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true)
      setTimeout(() => setGlitchText(false), 200)
    }, 8000)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "💼", color: "#0077b5" },
    { name: "GitHub", url: "#", icon: "🐱", color: "#333" },
    { name: "Twitter", url: "#", icon: "🐦", color: "#1da1f2" },
    { name: "Email", url: "mailto:your@email.com", icon: "📧", color: "#ea4335" },
  ]

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Your_Name_Resume.pdf"
    link.click()
  }

  return (
    <section id="landing" className="section landing-section">
      <div
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>

      <div className="landing-container">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="hero-grid">
          {/* Left: Profile */}
          <div className="profile-section">
            <div className="profile-image-container">
              <img
                src="./LandingImg.png"
                alt="Akshat Gupta - Full Stack Developer"
                className="profile-image"
              />
              <div className="profile-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
              </div>
            </div>

            <div className="profile-info">
              <h1 className={`profile-name ${glitchText ? "glitch" : ""}`}>
                <span className="name-text">Akshat Gupta</span>
              </h1>
              <div className="typing-animation">
                <span className="typing-text">Creative Developer</span>
              </div>
              <p className="profile-subtitle">Web Development | IOT | AI | DSA</p>
            </div>
          </div>

          {/* Center: Actions */}
          <div className="actions-section">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--social-color": link.color } as React.CSSProperties}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>

            <button className="cta-button" onClick={downloadResume}>
              <span className="btn-content">
                <span className="btn-text">Resume</span>
                <span className="btn-icon">📄</span>
              </span>
            </button>
          </div>

          {/* Right: Stats */}
          <div className="stats-section">
            <WakaTimeStats />
            <SpotifyNowPlaying />
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Landing
