import React from "react";
import type { Project } from "../index";
import "./project-card.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-header">
        <div className="project-card-logo">{project.name.charAt(0)}</div>
        <span className="project-card-period">{project.period}</span>
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-website">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {project.website}
        </p>

        <p className="project-card-tagline">{project.tagline}</p>

        <div className="project-card-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-metrics">
          {project.metrics.map((metric, index) => (
            <div key={index} className="project-metric">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <span className="project-card-cta">
          Ver detalhes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
