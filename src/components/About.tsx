const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">About Me</span>
          <span className="title-line"></span>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>Hello, I'm Akshat Gupta</h3>
              <p>
                A passionate MERN stack developer with a strong inclination toward building meaningful digital experiences.
                My journey began with a love for web technologies and has grown into a deep interest in AI, Web3, and open-source collaboration. 
                I’ve worked on impactful projects ranging from smart farming systems using Arduino/ESP32 to full-stack hackathon-ready platforms.
              </p>
            </div>

            <div className="text-block">
              <h3>What drives me</h3>
              <p>
                I'm driven by curiosity, innovation, and a desire to solve real-world problems through tech. Whether it’s connecting developers
                through my <strong>Path2Hack</strong> platform or improving farm efficiency using smart IoT systems, I love challenges that combine hardware, software, and meaningful impact.
                As a volunteer and student mentor, I also find joy in empowering others to learn and grow.
              </p>
            </div>

            <div className="skills-highlight">
              <h3>Core Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span>MERN Stack Development</span>
                </div>
                <div className="expertise-item">
                  <span>AI & ML Integrations</span>
                </div>
                <div className="expertise-item">
                  <span>Web3 & Blockchain Concepts</span>
                </div>
                <div className="expertise-item">
                  <span>IoT Projects (Arduino/ESP32)</span>
                </div>
                <div className="expertise-item">
                  <span>Hackathon Collaboration</span>
                </div>
                <div className="expertise-item">
                  <span>Community Mentorship</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="./profilePic.jpg" alt="Akshat Gupta" className="about-img" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
