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
  status: "completed" | "in-progress" | "upcoming"
}

const Education = () => {
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null)

  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Lakshmi Narain College of Technology & Science",
      location: "Bhopal, Madhya Pradesh",
      startDate: "2023",
      endDate: "2027",
      description:
        "Pursuing core concepts in computer science including data structures, algorithms, web development, and IoT systems. Active participant in Google Developer Groups and Raahat Club, contributing to both technical and social impact initiatives.",
      achievements: [
        "Volunteer Coordinator and Student Mentor at GDG on Campus",
        "Teaching Team Member at Raahat Club",
        "Built multiple MERN stack and Arduino-based projects",
        "Led team at SIH and various hackathons",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "Digital Systems",
        "Programming",
      ],
      image: "/lncts.webp",
      status: "in-progress",
    },
    {
      id: 2,
      degree: "Senior Secondary (Class 12th, PCM)",
      institution: "Sanskar Academy H.S. School",
      location: "Sagore, Madhya Pradesh",
      startDate: "2021",
      endDate: "2023",
      description:
        "Focused on core science subjects including Physics, Chemistry, and Mathematics. Participated in cultural events including music and sports.",
      achievements: [
        "Participated in science exhibitions",
        "Active member of cultural and academic teams",
      ],
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Hindi",
        "English Core",
      ],
      image: "/sanskar.jpeg",
      status: "completed",
    },
    {
      id: 3,
      degree: "High School (10th Grade)",
      institution: "Alpine Academy",
      location: "Indore, Madhya Pradesh",
      startDate: "2015" ,
      endDate: "2021",
      description:
        "Built strong foundational knowledge in science, mathematics, and discipline. Actively involved in co-curriculars such as drama, music, and dance.",
      achievements: [
        "Participated in various school competitions",
        "Trained in music and sports",
      ],
      courses: [
        "Science",
        "Mathematics",
        "Social Science",
        "English",
        "Hindi",
      ],
      image: "/alpine.jpeg",
      status: "completed",
    },
  ]

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
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Education & Learning</span>
          <span className="title-line"></span>
        </h2>

        <div className="education-timeline">
          <div className="timeline-line"></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="timeline-marker">
                <div className="marker-dot" style={{ backgroundColor: getStatusColor(item.status) }}>
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

        {/* Modal */}
        {selectedItem && (
          <div className="education-modal" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>

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
