"use client"

import { useState } from "react"

interface TechItem {
  name: string
  icon: string
  category: string
  projects: Array<{ name: string; url: string }>
}

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)

  const techStack: TechItem[] = [
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      projects: [
        { name: "E-commerce App", url: "#" },
        { name: "Dashboard UI", url: "#" },
        { name: "Portfolio Site", url: "#" },
      ],
    },
    {
      name: "TypeScript",
      icon: "📘",
      category: "Language",
      projects: [
        { name: "API Gateway", url: "#" },
        { name: "React Components", url: "#" },
      ],
    },
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      projects: [
        { name: "REST API", url: "#" },
        { name: "Microservices", url: "#" },
      ],
    },
    {
      name: "Python",
      icon: "🐍",
      category: "Language",
      projects: [
        { name: "Data Analysis Tool", url: "#" },
        { name: "ML Model", url: "#" },
      ],
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Database",
      projects: [
        { name: "Social Media App", url: "#" },
        { name: "Content Management", url: "#" },
      ],
    },
    {
      name: "Docker",
      icon: "🐳",
      category: "DevOps",
      projects: [
        { name: "Containerized Apps", url: "#" },
        { name: "CI/CD Pipeline", url: "#" },
      ],
    },
    {
      name: "AWS",
      icon: "☁️",
      category: "Cloud",
      projects: [
        { name: "Serverless Functions", url: "#" },
        { name: "Cloud Infrastructure", url: "#" },
      ],
    },
    {
      name: "Git",
      icon: "📚",
      category: "Tools",
      projects: [
        { name: "Version Control", url: "#" },
        { name: "Collaboration", url: "#" },
      ],
    },
  ]

  const categories = ["All", "Frontend", "Backend", "Language", "Database", "DevOps", "Cloud", "Tools"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredTech =
    activeCategory === "All" ? techStack : techStack.filter((tech) => tech.category === activeCategory)

  return (
    <section id="techstack" className="section techstack-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Tech Stack</span>
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

        <div className="tech-grid">
          {filteredTech.map((tech, index) => (
            <div key={index} className="tech-item" onClick={() => setSelectedTech(tech)}>
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-category">{tech.category}</div>
            </div>
          ))}
        </div>

        {selectedTech && (
          <div className="tech-modal" onClick={() => setSelectedTech(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedTech(null)}>
                ×
              </button>
              <div className="modal-header">
                <span className="modal-icon">{selectedTech.icon}</span>
                <h3>{selectedTech.name}</h3>
              </div>
              <div className="modal-body">
                <h4>Projects using {selectedTech.name}:</h4>
                <div className="project-links">
                  {selectedTech.projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default TechStack
