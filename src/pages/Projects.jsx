import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/projects';
import NavCard from '../components/NavCard';
import Footer from '../components/Footer';

const Projects = () => {
  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <div className="page-container">
      {/* Top Row - Title + Nav */}
      <div className="page-top-row">
        <div className="card page-title-card">
          <h1>Projects</h1>
        </div>
        <div className="page-nav-wrapper">
          <NavCard />
        </div>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <Link to={`/projects/${featuredProject.id}`} className="post-link">
          <div className="card project-card-item featured-project">
            <div className="featured-label">
              <Star size={16} className="star-icon" />
              <span>Featured Project</span>
            </div>
            <div className="featured-project-grid">
              <div className="project-image-wrapper">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="project-img"
                />
              </div>
              <div className="project-info">
                <h2 className="project-title">{featuredProject.title}</h2>
                <p className="project-desc">{featuredProject.description}</p>
                <div className="tags-row">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {featuredProject.github && (
                    <span className="action-btn">
                      <Github size={16} /> View Code
                    </span>
                  )}
                  {featuredProject.live && (
                    <span className="action-btn action-btn-primary">
                      <ExternalLink size={16} /> Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Projects Grid */}
      <div className="projects-grid">
        {regularProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="post-link">
            <div className="card project-card-item">
              <div className="project-image-wrapper small">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h3 className="project-title-sm">{project.title}</h3>
              <p className="project-desc-sm">{project.description}</p>
              <div className="tags-row">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <span className="action-btn action-btn-sm">
                    <Github size={14} /> Code
                  </span>
                )}
                {project.live && (
                  <span className="action-btn action-btn-sm">
                    <ExternalLink size={14} /> Live
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
