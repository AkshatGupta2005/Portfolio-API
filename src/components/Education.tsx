"use client"

import { useState } from "react"

interface EducationItem {
  id: number
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  description: string
  achievements: string[]
  courses: string[]
  image: string
  type: "degree" | "certification" | "bootcamp" | "course"
  status: "completed" | "in-progress" | "upcoming"
}

const Education = () => {
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2022",
      endDate: "2024",
      gpa: "3.9/4.0",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, natural language processing, and computer vision. Conducted research on neural network optimization.",
      achievements: [
        "Dean's List for 4 consecutive semesters",
        "Research Assistant in AI Lab",
        "Published 2 papers in ML conferences",
        "Teaching Assistant for CS229 Machine Learning",
      ],
      courses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Distributed Systems",
        "Algorithm Design",
      ],
      image: "/placeholder.svg?height=300&width=400",
      type: "degree",
      status: "completed",
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      startDate: "2018",
      endDate: "2022",
      gpa: "3.8/4.0",
      description:
        "Comprehensive program covering software development, system design, and engineering principles. Strong foundation in computer science fundamentals and practical software development.",
      achievements: [
        "Summa Cum Laude graduate",
        "President of Computer Science Club",
        "Winner of Berkeley Hackathon 2021",
        "Internship at Google (Summer 2021)",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Operating Systems",
        "Web Development",
        "Mobile App Development",
      ],
      image: "/placeholder.svg?height=300&width=400",
      type: "degree",
      status: "completed",
    },
    {
      id: 3,
      degree: "Full Stack Web Development Bootcamp",
      institution: "Lambda School",
      location: "Remote",
      startDate: "2021",
      endDate: "2021",
      description:
        "Intensive 6-month program focused on modern web development technologies including React, Node.js, and cloud deployment. Built 15+ full-stack applications.",
      achievements: [
        "Top 5% of cohort",
        "Team Lead for final capstone project",
        "Mentored 10+ junior students",
        "100% job placement rate",
      ],
      courses: [
        "React & Redux",
        "Node.js & Express",
        "Python & Django",
        "PostgreSQL & MongoDB",
        "AWS Deployment",
        "Agile Development",
      ],
      image: "/placeholder.svg?height=300&width=400",
      type: "bootcamp",
      status: "completed",
    },
    {
      id: 4,
      degree: "AWS Solutions Architect Professional",
      institution: "Amazon Web Services",
      location: "Online",
      startDate: "2023",
      endDate: "2023",
      description:
        "Advanced certification covering complex AWS architectures, security, and optimization. Demonstrates expertise in designing distributed systems on AWS.",
      achievements: [
        "Scored 920/1000 on exam",
        "Completed 40+ hands-on labs",
        "Built 5 production-ready architectures",
        "Mentored team on AWS best practices",
      ],
      courses: [
        "Advanced Networking",
        "Security & Compliance",
        "Cost Optimization",
        "Disaster Recovery",
        "Microservices Architecture",
        "DevOps Integration",
      ],
      image: "/placeholder.svg?height=300&width=400",
      type: "certification",
      status: "completed",
    },
    {
      id: 5,
      degree: "Machine Learning Specialization",
      institution: "Coursera (Stanford University)",
      location: "Online",
      startDate: "2023",
      endDate: "2024",
      description:
        "Comprehensive specialization covering machine learning algorithms, deep learning, and practical applications. Hands-on projects with real-world datasets.",
      achievements: [
        "Completed with honors",
        "Built 8 ML projects",
        "Kaggle competition top 10%",
        "Peer mentor for 20+ students",
      ],
      courses: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Practical ML Projects",
        "ML System Design",
        "Ethics in AI",
      ],
      image: "/placeholder.svg?height=300&width=400",
      type: "course",
      status: "in-progress",
    },
  ]

  const filters = [
    { id: "all", label: "All", icon: "🎓" },
    { id: "degree", label: "Degrees", icon: "🏛️" },
    { id: "certification", label: "Certifications", icon: "🏆" },
    { id: "bootcamp", label: "Bootcamps", icon: "⚡" },
    { id: "course", label: "Courses", icon: "📚" },
  ]

  const filteredEducation =
    activeFilter === "all" ? educationData : educationData.filter((item) => item.type === activeFilter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#00ff88"
      case "in-progress":
        return "#00d4ff"
      case "upcoming":
        return "#ffa500"
      default:
        return "#00d4ff"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅"
      case "in-progress":
        return "🔄"
      case "upcoming":
        return "⏳"
      default:
        return "📚"
    }
  }

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Education & Learning</span>
          <span className="title-line"></span>
        </h2>

        {/* Filter Buttons */}
        <div className="education-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-label">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="education-timeline">
          <div className="timeline-line"></div>

          {filteredEducation.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="timeline-marker">
                <div className="marker-dot" style={{ backgroundColor: getStatusColor(item.status) }}>
                  <span className="marker-icon">{getStatusIcon(item.status)}</span>
                </div>
              </div>

              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <div className="card-image">
                      <img src={item.image || "/placeholder.svg"} alt={item.institution} />
                      <div className="image-overlay">
                        <span className="view-details">View Details</span>
                      </div>
                    </div>

                    <div className="card-info">
                      <div className="card-meta">
                        <span className="date-range">
                          {item.startDate} - {item.endDate}
                        </span>
                        <span className="status-badge" style={{ backgroundColor: getStatusColor(item.status) }}>
                          {item.status.replace("-", " ")}
                        </span>
                      </div>

                      <h3 className="degree-title">{item.degree}</h3>
                      <p className="institution-name">{item.institution}</p>
                      <p className="location">{item.location}</p>

                      {item.gpa && (
                        <div className="gpa">
                          <span className="gpa-label">GPA:</span>
                          <span className="gpa-value">{item.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="card-preview">
                    <p className="description-preview">{item.description.substring(0, 120)}...</p>

                    <div className="achievements-preview">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {item.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                        {item.achievements.length > 2 && (
                          <li className="more-items">+{item.achievements.length - 2} more</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal */}
        {selectedItem && (
          <div className="education-modal" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedItem(null)}>
                ×
              </button>

              <div className="modal-header">
                <div className="modal-image">
                  <img src={selectedItem.image || "/placeholder.svg"} alt={selectedItem.institution} />
                </div>

                <div className="modal-info">
                  <div className="modal-meta">
                    <span className="date-range">
                      {selectedItem.startDate} - {selectedItem.endDate}
                    </span>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(selectedItem.status) }}>
                      {selectedItem.status.replace("-", " ")}
                    </span>
                  </div>

                  <h2 className="modal-degree">{selectedItem.degree}</h2>
                  <h3 className="modal-institution">{selectedItem.institution}</h3>
                  <p className="modal-location">{selectedItem.location}</p>

                  {selectedItem.gpa && (
                    <div className="modal-gpa">
                      <span className="gpa-label">GPA:</span>
                      <span className="gpa-value">{selectedItem.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h4>Description</h4>
                  <p>{selectedItem.description}</p>
                </div>

                <div className="modal-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {selectedItem.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Relevant Courses</h4>
                  <div className="courses-grid">
                    {selectedItem.courses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
