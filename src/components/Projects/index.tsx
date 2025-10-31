import React from "react";
import "./projects.css";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";

export interface Project {
  id: number;
  name: string;
  website: string;
  description: string;
  tagline: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  images: string[];
  period: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "LOUD Store",
    website: "loud.gg",
    description:
      "Construí uma plataforma de e-commerce de alta performance para a maior organização de esports do Brasil, lidando com milhões de usuários simultâneos durante lançamentos de produtos. Implementei sistema de pagamentos integrado, gerenciamento de inventário em tempo real e dashboards administrativos completos.",
    tagline:
      "Plataforma de e-commerce de alta performance para a maior organização de gaming do Brasil, gerenciando milhões de usuários durante lançamentos",
    technologies: ["React", "C#", "Entity Framework", "+1"],
    metrics: [
      { label: "Users", value: "1M+" },
      { label: "Revenue", value: "$10M+/yr" },
    ],
    images: [],
    period: "2019-2021",
  },
  {
    id: 2,
    name: "Idols",
    website: "myidols.io",
    description:
      "Desenvolvi uma plataforma de exchange de tokens de fãs para crypto, permitindo que usuários negociem, façam stake e governem seus esportes e entretenimento favoritos. Sistema de trading em tempo real com WebSockets, integração com blockchain e dashboards de análise avançados.",
    tagline:
      "Exchange de tokens de fãs de ponta, permitindo aos fãs negociar, fazer stake e governar seus esportes e entretenimento favoritos",
    technologies: ["Next.js", "Nest.js", "TypeORM", "+1"],
    metrics: [
      { label: "Volume", value: "$20M+" },
      { label: "Tokens", value: "5+" },
    ],
    images: [],
    period: "2021-2022",
  },
  {
    id: 3,
    name: "Dropull Gaming",
    website: "dropull.gg",
    description:
      "Criei um ecossistema abrangente de gaming social com jogos multijogador em tempo real, marketplace NFT e torneios comunitários. Arquitetura de microserviços escalável, sistema de matchmaking inteligente e infraestrutura para suportar milhares de jogadores simultâneos.",
    tagline:
      "Ecossistema abrangente de gaming social com jogos multijogador em tempo real, marketplace NFT e torneios comunitários",
    technologies: ["React", "Node.js", "PostgreSQL", "+1"],
    metrics: [
      { label: "Players", value: "500K+" },
      { label: "Games", value: "3+" },
    ],
    images: [],
    period: "2022",
  },
  {
    id: 4,
    name: "Bored Army",
    website: "boredarmy.com",
    description:
      "Desenvolvi dashboard administrativo completo para gerenciamento de comunidade NFT, incluindo sistema de recompensas, gestão de eventos, analytics avançados e integração com Discord. Plataforma escalável que suporta dezenas de milhares de membros ativos.",
    tagline:
      "Dashboard administrativo completo para gerenciamento de comunidade NFT com sistema de recompensas e analytics",
    technologies: ["React", "Node.js", "MongoDB", "+1"],
    metrics: [
      { label: "Members", value: "10K+" },
      { label: "Events", value: "50+" },
    ],
    images: [],
    period: "2023",
  },
  {
    id: 5,
    name: "Betblex",
    website: "betblex.com",
    description:
      "Plataforma inovadora de apostas peer-to-peer que permite aos usuários convidar amigos e ganhar. Sistema de apostas em tempo real, gestão de odds dinâmicas, sistema de pagamentos seguro e programa de afiliados robusto.",
    tagline:
      "Plataforma inovadora de apostas peer-to-peer com sistema de referência e odds dinâmicas",
    technologies: ["Next.js", "Nest.js", "PostgreSQL", "+1"],
    metrics: [
      { label: "Users", value: "50K+" },
      { label: "Bets", value: "$5M+" },
    ],
    images: [],
    period: "2023-2024",
  },
  {
    id: 6,
    name: "Jungle Gaming",
    website: "junglegaming.io",
    description:
      "Como CTO, arquitetei e lidero o desenvolvimento de uma plataforma premium de iGaming internacional. Infraestrutura cloud escalável, sistema de jogos provably fair, compliance multi-jurisdicional, analytics em tempo real e ferramentas de business intelligence. Live em 48 horas sem taxas de setup.",
    tagline:
      "Plataforma premium de iGaming internacional com infraestrutura escalável e compliance multi-jurisdicional",
    technologies: ["React", "Microservices", "AWS", "+1"],
    metrics: [
      { label: "Go Live", value: "48h" },
      { label: "Setup Fee", value: "$0" },
    ],
    images: [],
    period: "2025-Present",
  },
];

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
              Uma seleção de projetos que transformaram ideias em produtos
              escaláveis
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
