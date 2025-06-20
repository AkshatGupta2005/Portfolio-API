"use client"

import { useState, useEffect } from "react"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  image: string
  credentialUrl: string
  skills: string[]
}

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "2025",
      image: "/certs/nptel.jpg",
      credentialUrl: "#",
      skills: ["Java"],
    },
    {
      id: 2,
      title: "Hacktoberfest 2024 Contributor",
      issuer: "DigitalOcean",
      date: "2024",
      image: "/certs/HacktoberCert.jpeg",
      credentialUrl: "#",
      skills: ["Open Source", "Git", "Collaboration"],
    },
    {
      id: 3,
      title: "GDG Mentor Certificate",
      issuer: "GDG On Campus LNCTS",
      date: "2025",
      image: "/certs/GDGcert.jpeg",
      credentialUrl: "#",
      skills: ["Mentorship", "GenAI","Cloud"],
    },
    {
      id: 4,
      title: "GDG GenAI",
      issuer: "GDSC LNCTS",
      date: "2024",
      image: "/certs/GenAICert.jpeg",
      credentialUrl: "#",
      skills: ["GenAI","Cloud"],
    },
    {
      id: 5,
      title: "Hackfrost 2024",
      issuer: "We Make Devs",
      date: "2024",
      image: "/certs/HackfrostCert.jpeg",
      credentialUrl: "#",
      skills: ["Fullstack Dev", "Hackathon"],
    },
    {
      id: 6,
      title: "Hack This Fall 2024 Virtual",
      issuer: "Hack This Fall Community",
      date: "2024",
      image: "/certs/HthCert.jpeg",
      credentialUrl: "#",
      skills: ["Fullstack Dev", "Hackathon"],
    },
    {
      id: 7,
      title: "Database for developers: Foundation",
      issuer: "Oracle Dev Gym",
      date: "2024",
      image: "/certs/OracleCertificate.jpg",
      credentialUrl: "#",
      skills: ["DBMS"],
    },
    {
      id: 8,
      title: "Parul Hack Verse",
      issuer: "Parul University",
      date: "2024",
      image: "/certs/ParulCert.jpeg",
      credentialUrl: "#",
      skills: ["Fullstack Dev", "Hackathon"],
    },
    {
      id: 9,
      title: "API Fundamentals",
      issuer: "Postman",
      date: "2024",
      image: "/certs/postman.png",
      credentialUrl: "#",
      skills: ["API"],
    },
    {
      id: 10,
      title: "Fullstack Web Developement Bootcamp",
      issuer: "Udemy",
      date: "2025",
      image: "/certs/UdemyCertificate.jpg",
      credentialUrl: "#",
      skills: ["API"],
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxSlide = Math.max(0, Math.ceil(certificates.length / itemsPerView) - 1)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Certificates</span>
          <span className="title-line"></span>
        </h2>

        <div className="certificates-slider">
          <div className="slider-wrapper" style={{ overflow: "hidden", position: "relative" }}>
            <div
              className="certificates-container"
              style={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(currentSlide * 100) / itemsPerView}%)`,
                width: `${(certificates.length * 100) / itemsPerView}%`,
              }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="certificate-card"
                  style={{
                    flex: `0 0 ${100 / certificates.length}%`,
                    maxWidth: `${100 / certificates.length}%`,
                    padding: "0 10px",
                    boxSizing: "border-box",
                  }}
                >
                  <div className="cert-image" style={{ position: "relative" }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <div
                      className="cert-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.6)",
                        opacity: 0,
                        borderRadius: "10px",
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <a
                        href={cert.credentialUrl}
                        className="verify-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#00D9FF",
                          color: "#000",
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          textDecoration: "none",
                        }}
                      >
                        Verify Certificate
                      </a>
                    </div>
                  </div>

                  <div className="cert-content" style={{ marginTop: "1rem", color: "#fff" }}>
                    <h3 className="cert-title" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {cert.title}
                    </h3>
                    <p className="cert-issuer" style={{ color: "#00D9FF" }}>
                      {cert.issuer}
                    </p>
                    <p className="cert-date" style={{ fontSize: "0.875rem", color: "#aaa" }}>
                      {cert.date}
                    </p>

                    <div className="cert-skills" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag"
                          style={{
                            background: "rgba(0,217,255,0.1)",
                            border: "1px solid #00D9FF",
                            color: "#00D9FF",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "999px",
                            fontSize: "0.75rem",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + Buttons Centered */}
          {maxSlide > 0 && (
            <div
              className="slider-controls-wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <button
                className="slider-btn prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                style={{
                  background: "#111",
                  color: "white",
                  border: "1px solid #333",
                  padding: "0.5rem",
                  borderRadius: "50%",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
              >
                ‹
              </button>

              <div className="slider-dots" style={{ display: "flex", gap: "0.5rem" }}>
                {Array.from({ length: maxSlide + 1 }, (_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: index === currentSlide ? "#00D9FF" : "#555",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <button
                className="slider-btn next"
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
                style={{
                  background: "#111",
                  color: "white",
                  border: "1px solid #333",
                  padding: "0.5rem",
                  borderRadius: "50%",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certificates
