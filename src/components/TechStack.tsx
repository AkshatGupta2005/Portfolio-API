"use client"

import { useState } from "react"
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt,
} from "react-icons/fa"
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiMongodb, SiPostgresql,
  SiArduino, SiEspressif, SiDocker, SiFirebase, SiAmazon,
  SiFigma, SiTailwindcss, SiBootstrap, SiFramer, SiSolidity,
} from "react-icons/si"

interface TechItem {
  name: string
  Icon: React.ElementType
  category: string
  projects: Array<{ name: string; url: string }>
}

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)

  const techStack: TechItem[] = [
    { name: "React", Icon: FaReact, category: "Frontend", projects: [
      { name: "Path2Hack", url: "https://path2hack.vercel.app" },
      { name: "Readdy Blog", url: "https://readdyblog.onrender.com" },
      { name: "Gita Website", url: "https://gita-by-madhav.onrender.com" },
    ]},
    { name: "Next.js", Icon: SiNextdotjs, category: "Frontend", projects: [
      { name: "Portfolio Site", url: "#" },
    ]},
    { name: "TypeScript", Icon: SiTypescript, category: "Language", projects: [
      { name: "API Gateway", url: "#" },
      { name: "Smart Farm App", url: "#" },
    ]},
    { name: "JavaScript", Icon: SiJavascript, category: "Language", projects: [
      { name: "Interactive UI Projects", url: "#" },
    ]},
    { name: "Node.js", Icon: FaNodeJs, category: "Backend", projects: [
      { name: "Path2Hack Backend", url: "https://github.com/AkshatGupta2005/Path2Hack-Backend" },
      { name: "Smart Farm System", url: "#" },
    ]},
    { name: "Express.js", Icon: SiExpress, category: "Backend", projects: [
      { name: "Path2Hack API", url: "https://github.com/AkshatGupta2005/Path2Hack-Backend" },
    ]},
    { name: "Python", Icon: FaPython, category: "Language", projects: [
      { name: "ML Plant Detection", url: "#" },
      { name: "Book Review Chatbot", url: "#" },
    ]},
    { name: "MongoDB", Icon: SiMongodb, category: "Database", projects: [
      { name: "Path2Hack CMS", url: "#" },
    ]},
    { name: "PostgreSQL", Icon: SiPostgresql, category: "Database", projects: [
      { name: "Admin Panel (GDG)", url: "#" },
    ]},
    { name: "Arduino", Icon: SiArduino, category: "IoT", projects: [
      { name: "Smart Environment System", url: "#" },
    ]},
    { name: "ESP32", Icon: SiEspressif, category: "IoT", projects: [
      { name: "Sensor Farm Controller", url: "#" },
    ]},
    { name: "Docker", Icon: SiDocker, category: "DevOps", projects: [
      { name: "Containerized Apps", url: "#" },
    ]},
    { name: "AWS", Icon: SiAmazon, category: "Cloud", projects: [
      { name: "Serverless Functions", url: "#" },
    ]},
    { name: "Firebase", Icon: SiFirebase, category: "Backend", projects: [
      { name: "Real-time Chat App", url: "#" },
    ]},
    { name: "Git", Icon: FaGitAlt, category: "Tools", projects: [
      { name: "Open Source Contributions", url: "https://github.com/AkshatGupta2005" },
    ]},
    { name: "Figma", Icon: SiFigma, category: "Design", projects: [
      { name: "UI Wireframes", url: "#" },
    ]},
    { name: "Tailwind CSS", Icon: SiTailwindcss, category: "Frontend", projects: [
      { name: "Readdy Blog UI", url: "#" },
    ]},
    { name: "Bootstrap", Icon: SiBootstrap, category: "Frontend", projects: [
      { name: "Gita Website", url: "#" },
    ]},
    { name: "Framer Motion", Icon: SiFramer, category: "Frontend", projects: [
      { name: "Animated Portfolio", url: "#" },
    ]},
    { name: "Solidity", Icon: SiSolidity, category: "Web3", projects: [
      { name: "Smart Contract DApp", url: "#" },
    ]},
  ]

  const categories = [
    "All", "Frontend", "Backend", "Language", "Database", "IoT",
    "DevOps", "Cloud", "Web3", "Design", "Tools"
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredTech = activeCategory === "All"
    ? techStack
    : techStack.filter((tech) => tech.category === activeCategory)

  return (
    <section id="techstack" className="section techstack-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Tech Stack</span>
          <span className="title-line"></span>
        </h2>

        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredTech.map(({ name, Icon, category }) => (
            <div key={name} className="tech-item" onClick={() => setSelectedTech(techStack.find(t => t.name === name) || null)}>
              <Icon className="tech-icon-svg" size={40} />
              <div className="tech-name">{name}</div>
              <div className="tech-category">{category}</div>
            </div>
          ))}
        </div>

        {selectedTech && (
          <div className="tech-modal" onClick={() => setSelectedTech(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedTech(null)}>×</button>
              <div className="modal-header">
                <selectedTech.Icon className="modal-icon-svg" size={48} />
                <h3>{selectedTech.name}</h3>
              </div>
              <div className="modal-body">
                <h4>Projects using {selectedTech.name}:</h4>
                <div className="project-links">
                  {selectedTech.projects.map((project, i) => (
                    <a
                      key={i}
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
