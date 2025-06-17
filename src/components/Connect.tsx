"use client"

import type React from "react"

import { useState } from "react"

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "your@email.com",
      link: "mailto:your@email.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Your City, Country",
      link: "#",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
    },
  ]

  const socialLinks = [
    { name: "GitHub", url: "#", icon: "🐱", color: "#333" },
    { name: "LinkedIn", url: "#", icon: "💼", color: "#0077b5" },
    { name: "Twitter", url: "#", icon: "🐦", color: "#1da1f2" },
    { name: "Instagram", url: "#", icon: "📸", color: "#e4405f" },
    { name: "Discord", url: "#", icon: "🎮", color: "#7289da" },
    { name: "Telegram", url: "#", icon: "✈️", color: "#0088cc" },
  ]

  return (
    <section id="connect" className="section connect-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Let's Connect</span>
          <span className="title-line"></span>
        </h2>

        <div className="connect-content">
          <div className="connect-info">
            <div className="connect-text">
              <h3>Get In Touch</h3>
              <p>
                I'm always interested in hearing about new opportunities, creative projects, or just having a chat about
                technology. Feel free to reach out!
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className="contact-item"
                  target={contact.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--social-color": social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="connect-form">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">🚀</span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2024 Your Name. Crafted with ❤️ and lots of ☕</p>
        </div>
      </div>
    </section>
  )
}

export default Connect
