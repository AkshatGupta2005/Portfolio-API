"use client"

import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Landing from "./components/Landing"
import About from "./components/About"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Connect from "./components/Connect"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("landing")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["landing", "about", "techstack", "projects", "education", "certificates", "connect"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      <main className="main-content">
        <Landing />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Certificates />
        <Connect />
      </main>
    </div>
  )
}

export default App
