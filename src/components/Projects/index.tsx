import React from "react";
import "./projects.css";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";

import projectsData from "./data/dataProjects";
import type { Project } from "./data/dataProjects";

const Projects = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <>
      <section
        id="projects-section"
        className={`projects-section ${
          isVisible ? "projects-section--visible" : ""
        }`}
      >
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">Projetos Destacados</h2>
            <p className="projects-subtitle">
              Uma seleção de projetos que foram implementados e desenvolvidos.
            </p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
