import React from "react";
import type { Project } from "../data/dataProjects";
import "./project-modal.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [slideIndex, setSlideIndex] = React.useState(0);
  const imagesLen = project.images?.length ?? 0;

  React.useEffect(() => {
    if (!imagesLen || imagesLen < 2) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % imagesLen);
    }, 4000);
    return () => window.clearInterval(id);
  }, [imagesLen]);

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-header sm:flex inline-block">
            <div className="modal-logo">{project.name.charAt(0)}</div>
            <div className="modal-header-info">
              <h2 className="modal-title text-lg md:text-3xl">
                {project.name}
              </h2>
              {project.website && project.website === "DNIT" ? (
                <p>DNIT</p>
              ) : (
                <a
                  href={`${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-website "
                >
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <p className="text-sm md:text-base">{project.website}</p>
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}{" "}
              {project.repository && (
                <p className="text-sm md:text-base">
                  Repositório:{" "}
                  <a className="text-[var(--accent)]" href={project.repository}>
                    {project.repository}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h3 className="modal-section-title">Sobre o Projeto</h3>
              <p className="modal-description">{project.description}</p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Tecnologias</h3>
              <div className="modal-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="modal-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.images.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-title">Galeria</h3>
                <div
                  className="modal-slider"
                  aria-label={`Galeria de ${project.name}`}
                >
                  <div
                    className="modal-slider-track"
                    style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                  >
                    {project.images.map((image, index) => (
                      <div key={index} className="modal-slide">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={image}
                          alt={`${project.name} - imagem ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
