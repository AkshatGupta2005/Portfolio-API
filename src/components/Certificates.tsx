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
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["AWS", "Cloud Architecture", "DevOps"],
    },
    {
      id: 2,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["GCP", "Cloud Computing", "Kubernetes"],
    },
    {
      id: 4,
      title: "MongoDB Developer Path",
      issuer: "MongoDB University",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["MongoDB", "NoSQL", "Database Design"],
    },
    {
      id: 5,
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["Docker", "Containerization", "DevOps"],
    },
    {
      id: 6,
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      date: "2021",
      image: "/placeholder.svg?height=200&width=300",
      credentialUrl: "#",
      skills: ["Kubernetes", "Container Orchestration", "DevOps"],
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

  const maxSlide = Math.max(0, certificates.length - itemsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide))
  }

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Certificates</span>
          <span className="title-line"></span>
        </h2>

        <div className="certificates-slider">
          <div
            className="certificates-container"
            style={{
              transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
              width: `${(certificates.length / itemsPerView) * 100}%`,
            }}
          >
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card" style={{ width: `${100 / certificates.length}%` }}>
                <div className="cert-image">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                  <div className="cert-overlay">
                    <a href={cert.credentialUrl} className="verify-btn" target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                    </a>
                  </div>
                </div>

                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>

                  <div className="cert-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {maxSlide > 0 && (
            <>
              <button className="slider-btn prev" onClick={prevSlide} disabled={currentSlide === 0}>
                ‹
              </button>
              <button className="slider-btn next" onClick={nextSlide} disabled={currentSlide === maxSlide}>
                ›
              </button>
            </>
          )}

          {maxSlide > 0 && (
            <div className="slider-dots">
              {Array.from({ length: maxSlide + 1 }, (_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certificates
