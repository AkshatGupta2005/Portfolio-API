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
      title: "Smart Farm Automation System",
      description:
        "A smart farm solution using Arduino + ESP32. Controls shed, ventilation, water valve based on sensors, integrates a live stream camera and mobile app for threshold setting and alerts.",
      image: "/projects/smartfarm.jpg",
      technologies: ["ESP32", "Arduino", "DHT11", "React Native", "Web Serial", "Python (ML)"],
      liveUrl: "#",
      githubUrl: "https://github.com/AkshatGupta2005/smart-farm",
      featured: true,
      category: "IoT/ML",
    },
    {
      id: 2,
      title: "Path2Hack",
      description:
        "A web app to help beginners find hackathon partners, project ideas, and resources using GitHub integration and Gemini AI. Built during Hack This Fall.",
      image: "/projects/path2hack.jpg",
      technologies: ["Next.js", "Express.js", "MongoDB", "GeminiAI", "GitHub API"],
      liveUrl: "#",
      githubUrl: "https://github.com/AkshatGupta2005/Path2Hack",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Gita by Madhav",
      description:
        "Bhagavad Gita website with clean UI, chapter-wise reading, and shloka breakdown. Built with deep respect for cultural heritage.",
      image: "/projects/gita.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://gita-by-madhav.onrender.com/",
      githubUrl: "https://github.com/AkshatGupta2005/gita-by-madhav",
      featured: false,
      category: "Full Stack",
    },
    {
      id: 4,
      title: "Readdy Blog",
      description:
        "A personal blogging platform to share reviews, articles, and experiments. Integrated book review chatbot using Gemini API.",
      image: "/projects/readdyblog.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      liveUrl: "https://readdyblog.onrender.com/",
      githubUrl: "https://github.com/AkshatGupta2005/readdy-blog",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Book Review Chatbot",
      description:
        "A Gemini AI chatbot embedded in Readdy Blog for summarizing and reviewing books based on user queries.",
      image: "/projects/chatbot.jpg",
      technologies: ["Gemini API", "Node.js", "React"],
      liveUrl: "https://readdyblog.onrender.com/chatbot",
      githubUrl: "https://github.com/AkshatGupta2005/readdy-blog",
      featured: false,
      category: "AI/ML",
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "AI/ML", "IoT/ML"]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

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
          <span className="title-text">My Projects</span>
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
