import React from "react";
import "./skills.css";
import SkillCategory from "./components/SkillCategory";
import StatsCard from "./components/StatsCard";

import data from "./data/skillsdata";
const { skillsData, statsData, experiencesData } = data;

const Skills = () => {
  const [activeTab, setActiveTab] = React.useState<"experiencia" | "skills">(
    "experiencia"
  );
  const [isVisible, setIsVisible] = React.useState(false);

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

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="skills-section"
      className={`skills-section ${isVisible ? "skills-section--visible" : ""}`}
    >
      <div className="mb-10 mx-5">
        <h2 className=" text-center text-xl lg:text-3xl text-[color:var(--accent)]">
          Atuando com foco em qualidade de código e entregas responsáveis,
          gerando valor ao projeto e ao cliente.
        </h2>
      </div>

      <div className="skills-container">
        <div className="skills-toggle">
          <button
            className={`toggle-btn ${
              activeTab === "experiencia" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experiencia")}
          >
            Experiência
          </button>
          <button
            className={`toggle-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </div>

        <div className="skills-content">
          {activeTab === "experiencia" && (
            <div className="experiencia-content fade-in">
              {experiencesData.map((experience, index) => (
                <div className="experiencia-card" key={index}>
                  <span className="experiencia-year">
                    {experience.yearStart} - {experience.yearEnd} •{" "}
                    {experience.role}
                  </span>
                  <div className="flex items-center  gap-3">
                    <h3 className="experiencia-title">{experience.company}</h3>
                    <span> • </span>
                    <h2 className="experiencia-contract text-sm sm:text-lg">
                      {experience.contract}
                    </h2>
                  </div>

                  <p className="experiencia-dt">
                    {experience.techs &&
                      experience.techs.map((tech, techIndex) => (
                        <span key={techIndex}>
                          {tech}
                          {techIndex < experience.techs.length - 1 && ", "}
                        </span>
                      ))}
                  </p>
                  <p className="experiencia-description sm:text-lg">
                    <span>{experience.action}</span>
                    {experience.description}
                  </p>
                  <div className="experiencia-tags">
                    {experience.tags.map((tag, tagIndex) => (
                      <span className="tag" key={tagIndex}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="skills-grid fade-in">
              {Object.entries(skillsData).map(([category, skills]) => (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={skills}
                />
              ))}
            </div>
          )}
        </div>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
