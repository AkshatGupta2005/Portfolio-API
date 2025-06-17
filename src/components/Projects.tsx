"use client"

import { useState, useEffect } from "react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  category: string
}

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All")
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, real-time inventory, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "AI Task Manager",
      description:
        "Intelligent task management app with AI-powered prioritization, collaborative features, drag-and-drop interface, and real-time synchronization.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Crypto Analytics Dashboard",
      description:
        "Real-time cryptocurrency tracking with advanced analytics, portfolio management, price alerts, and interactive charts powered by multiple APIs.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Chart.js", "Node.js", "Redis", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "DevOps Automation Suite",
      description:
        "Complete CI/CD pipeline automation with Docker containerization, Kubernetes orchestration, and monitoring dashboard for enterprise applications.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "DevOps",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description:
        "Advanced social media analytics platform with sentiment analysis, engagement tracking, automated reporting, and AI-powered insights.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Django", "D3.js", "TensorFlow", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI/ML",
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "AI/ML", "DevOps"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [activeCategory])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [filteredProjects.length])

  const currentProject = filteredProjects[currentSlide]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Featured Projects</span>
          <span className="title-line"></span>
        </h2>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-showcase">
          <div className="project-main">
            <div className="project-image-container">
              <img
                src={currentProject?.image || "/placeholder.svg"}
                alt={currentProject?.title}
                className="project-main-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={currentProject?.liveUrl}
                    className="project-link live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🔗</span> Live Demo
                  </a>
                  <a
                    href={currentProject?.githubUrl}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📱</span> GitHub
                  </a>
                </div>
              </div>
              {currentProject?.featured && <div className="featured-badge">Featured</div>}
            </div>

            <div className="project-info">
              <div className="project-header">
                <h3 className="project-title">{currentProject?.title}</h3>
                <span className="project-category">{currentProject?.category}</span>
              </div>

              <p className="project-description">{currentProject?.description}</p>

              <div className="project-technologies">
                {currentProject?.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-thumbnails">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`thumbnail ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="thumbnail-info">
                  <span className="thumbnail-title">{project.title}</span>
                  <span className="thumbnail-category">{project.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevSlide}>
              ‹
            </button>
            <div className="slider-dots">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
