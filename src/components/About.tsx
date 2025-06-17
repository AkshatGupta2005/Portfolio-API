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
                <h3>Hello, I'm a passionate developer</h3>
                <p>
                  With over X years of experience in web development, I specialize in creating modern, responsive, and
                  user-friendly applications. My journey in tech started with curiosity and has evolved into a passion for
                  solving complex problems through elegant code.
                </p>
              </div>
  
              <div className="text-block">
                <h3>What drives me</h3>
                <p>
                  I believe in the power of technology to transform ideas into reality. Whether it's building scalable web
                  applications, designing intuitive user interfaces, or optimizing performance, I'm always excited to take
                  on new challenges and learn cutting-edge technologies.
                </p>
              </div>
  
              <div className="skills-highlight">
                <h3>Core Expertise</h3>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <span className="expertise-icon">🎨</span>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">⚡</span>
                    <span>Performance Optimization</span>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">🔧</span>
                    <span>Full Stack Development</span>
                  </div>
                  <div className="expertise-item">
                    <span className="expertise-icon">📱</span>
                    <span>Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="about-image">
              <div className="image-container">
                <img src="/placeholder.svg?height=400&width=300" alt="About me" className="about-img" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
export default About
  