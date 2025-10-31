import React from "react";
import "./skills.css";
import SkillCategory from "./components/SkillCategory";
import StatsCard from "./components/StatsCard";

const skillsData = {
  Frontend: [
    "HTML e CSS",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn",
    "Chakra.UI",
  ],
  Backend: [
    "Integração de API RESTful",
    "Integrações de Requisições",
    "Banco de dados",
    "Programação Orientado a Objetos",
    "Java",
  ],
  Plus: [
    "Testes Cypress.js",
    "Git",
    "Figma",
    "UI Design",
    "Design Responsivo",
    "Design de código",
  ],
  Gerenciamento: [
    "Metodologia SCRUM",
    "Kanban",
    "Analise de requisitos",
    "Gestão Ágil",
    "Liderança e Comunicação",
    "Modelagem UML",
  ],
};

const statsData = [
  { icon: "📈", value: "4+", label: "Anos de experiência" },
  { icon: "👥", value: "6+", label: "Colaboradores em Equipe" },
  { icon: "🚀", value: "6+", label: "Projetos Trabalhado" },
  { icon: "💻", value: "∞", label: "Lines of Code" },
];

const experiencesData = [
  {
    yearStart: "2024",
    yearEnd: "2025",
    role: "Desenvolvedor de Software",
    company: "DNIT ",
    contract: " STE Serviços Técnicos de Engenharia S/A",
    action: "Contribui com a implementação e desenvolvimento dos projetos: ",
    description:
      "Sistema de Gerenciamento de Estruturas, Aceite de Usuários - DPP",
    techs: [
      "React.js",
      "Typescript",
      "Tailwind",
      "Chakra.UI",
      "Shadcn",
      "Bibliotecas React",
      "Cypress.js",
    ],
    tags: [
      "Gorvenamental",
      "Testes E2E",
      "Gerenciamento de estados",
      "Integração APIs RESTful",
      "300+ Usuários",
    ],
  },
  {
    yearStart: "2023",
    yearEnd: "2024",
    role: "Desenvolvedor de Software",
    company: "DNIT ",
    contract: "ENGEFOTO Engenharia e Aerolevantamentos Ltda",
    action: "Contribui com a implementação e desenvolvimento dos projetos: ",
    description:
      "Sistema de Gerenciamento de Estruturas, Sistema de Gerenciamento de Pavimentos",
    techs: ["React.js", "Typescript", "Chakra.UI", "Bibliotecas React"],
    tags: [
      "Gorvenamental",
      "Testes E2E",
      "Gerenciamento de estados",
      "Integração APIs RESTful",
      "300+ Usuários",
    ],
  },
  {
    yearStart: "2022",
    yearEnd: "2022",
    role: "Analista de Sistemas - Requisitos de Software - Product Owner",
    company: "DNIT",
    contract: " STE Serviços Técnicos de Engenharia S/A",
    action: "Gerenciei e conduzi os projetos: ",
    description:
      "Sistema de Gerenciamento de Pavimento e Estudo de Viabilidade Técnica, Econômica e Ambiental de Rodovias",
    techs: ["Análista", "Figma", "SCRUM", "Kanban", "UI/UX"],
    tags: [
      "Gorvenamental",
      "Gerenciamento",
      "Análista",
      "Product Owner",
      "2+ Projetos",
      "UI Design",
    ],
  },
  {
    yearStart: "2020",
    yearEnd: "2021",
    role: "Desenvolvedor de Software - Estágio",
    company: "Faculdade Senac - DF ",
    action: "Colaboraçõ com a equipe no desenvolvimento: ",
    description:
      "Sistema de Inscrição de Eventos, Portal do Aluno e o Sistema de Gerenciamento de Disciplinas",
    techs: ["React.js", "HTML", "CSS", "Bootstrap", "Javascript"],
    tags: ["Estágio", "Correção de Bugs", "Institucional", "200+ Usuários"],
  },
];

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
                    <h2 className="experiencia-contract">
                      {experience.contract}
                    </h2>
                  </div>

                  <p className="experiencia-dt">
                    {experience.techs &&
                      experience.techs.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}, </span>
                      ))}
                  </p>
                  <p className="experiencia-description">
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
