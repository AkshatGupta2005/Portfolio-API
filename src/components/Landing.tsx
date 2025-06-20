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
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akshatguptaip/", icon: "./icons/linkedin.svg", color: "#0077b5" },
    { name: "GitHub", url: "https://github.com/AkshatGupta2005", icon: "./icons/github.svg", color: "#0077b5" },
    { name: "X", url: "https://x.com/_Gupta_Akshat", icon: "./icons/twitter-x.svg", color: "#0077b5" },
    { name: "Email", url: "mailto:akshatguptaip@gmail.com", icon: "./icons/envelope.svg", color: "#0077b5" },
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
                  <span className="social-icon"><img src={link.icon} alt={link.name} className="Social-icon-img"/></span>
                </a>
              ))}
            </div>

            <button className="cta-button" onClick={downloadResume}>
              <span className="btn-content">
                <span className="btn-text">Download Resume</span>
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
