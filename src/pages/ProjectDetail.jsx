import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import NavCard from '../components/NavCard';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="page-container">
        <NavCard />
        <div className="card detail-not-found">
          <h1>Project Not Found</h1>
          <p className="page-subtitle">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-container">
      <NavCard />

      <div className="detail-content">
        {/* Back Button */}
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="card detail-header">
          <div className="featured-project-grid">
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-info">
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-excerpt">{project.description}</p>
              <div className="tags-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                    <Github size={16} /> View Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="action-btn action-btn-primary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* About */}
        <div className="card detail-body">
          <h2 className="section-heading">About This Project</h2>
          <div className="prose-content" style={{ whiteSpace: 'pre-line' }}>
            {project.longDescription}
          </div>
        </div>

        {/* Features / Challenges / Learnings Grid */}
        <div className="detail-info-grid">
          <div className="card detail-info-card">
            <div className="detail-info-header">
              <CheckCircle size={20} className="icon-green" />
              <h3>Features</h3>
            </div>
            <ul className="detail-info-list">
              {project.features.map((feature, index) => (
                <li key={index}><span className="bullet">•</span> {feature}</li>
              ))}
            </ul>
          </div>

          <div className="card detail-info-card">
            <div className="detail-info-header">
              <AlertCircle size={20} className="icon-orange" />
              <h3>Challenges</h3>
            </div>
            <ul className="detail-info-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}><span className="bullet">•</span> {challenge}</li>
              ))}
            </ul>
          </div>

          <div className="card detail-info-card">
            <div className="detail-info-header">
              <Lightbulb size={20} className="icon-yellow" />
              <h3>What I Learned</h3>
            </div>
            <ul className="detail-info-list">
              {project.learnings.map((learning, index) => (
                <li key={index}><span className="bullet">•</span> {learning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
