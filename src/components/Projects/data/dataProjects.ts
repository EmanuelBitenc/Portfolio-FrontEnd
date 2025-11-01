export interface Project {
  id: number;
  name: string;
  website?: string;
  description: string;
  tagline: string;
  technologies: string[];
  images: string[];
  period: string;
  repository?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Sistema de Gerenciamento de Pavimentos - SGP",
    website: "DNIT",
    description:
      "Atuei na implementação e desenvolvimento. Projeto responsável por gerenciar a malha viária do país, a exportação de relatórios e a importação de dados, além de realizar análises de riscos e de qualidade do pavimento. Tive participação, também, como Analista de Requisitos, na gestão das tarefas (Product Owner) dentro das sprints Scrum, e como UI Designer no desenvolvimento dos protótipos utilizando o Figma",
    tagline:
      "Sistema de Gerenciamento de Pavimento do país, concebido para automatizar a importação de dados, gerar relatórios gerenciais, e subsidiar a tomada de decisão através da análise de riscos e qualidade do pavimento.",
    technologies: [
      "React.js",
      "Chakra.UI",
      "Typescript",
      "Desenvolvedor",
      "Front-end",
      "Product Owner",
    ],
    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sgp/sgp-1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sgp/sgp-2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sgp/sgp-3.png?raw=true",
    ],
    period: "2022-2025",
  },
  {
    id: 2,
    name: "Sistema de Gerenciamento de Estruturas - SGE",
    website: "DNIT",
    description:
      "Neste projeto de Gerenciamento de Obras de Arte Especiais (OAE), atuei como Desenvolvedor. Fui responsável pela implementação de APIs RESTful, gerenciamento de estado e integrações de bibliotecas utilizando React.js e TypeScript. Além disso, desenvolvi testes automatizados end-to-end (E2E) e participei ativamente no processo de deploy e correções do projeto.",
    tagline:
      "Solução de Gerenciamento de Obras de Arte Especiais (OAE) do DNIT, centralizando a importação e exportação de dados e subsidiando a gestão estratégica de ativos com foco em análise de riscos e qualidade estrutural.",
    technologies: [
      "React.js",
      "Chakra.UI",
      "Typescript",
      "Desenvolvedor",
      "Front-end",
      "Testes Automatizados",
    ],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sge/sge-1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sge/sge-2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sge/sge-3.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/sge/sge-4.png?raw=true",
    ],
    period: "2023-2025",
  },
  {
    id: 3,
    name: "Aceite de Usuários - DPP",
    website: "DNIT",
    description:
      "Desenvolvimento do sistema de Aceite de Usuários para o Departamento Nacional de Infraestrutura de Transportes (DNIT). Atuei como Desenvolvedor Front-end, utilizando React.js, Shadcn e TypeScript para implementar funcionalidades essenciais, garantir a integração com APIs RESTful e assegurar a qualidade do código através de testes automatizados.",
    tagline:
      "Sistema de Aceite de Usuários desenvolvido para o DNIT, facilitando a validação e aprovação de funcionalidades por parte dos usuários finais, assegurando a conformidade com os requisitos estabelecidos.",
    technologies: [
      "React.js",
      "Shadcn",
      "Typescript",
      "Desenvolvedor",
      "Front-end",
      "Testes Automatizados",
    ],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/aceiteDpp/aceite-1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/aceiteDpp/aceite-2.png?raw=true",
    ],
    period: "2025",
  },
  {
    id: 4,
    name: "Anima Sancta",
    website: "AnimaSancta.com.br",
    repository: "https://github.com/EmanuelBitenc/AnimaSancta",
    description:
      "Projeto próprio, full stack da aplicação Anima Sancta, utilizando o ecossistema moderno () para garantir alta performance e escalabilidade. Sua expertise técnica abrangeu desde a implementação de funcionalidades críticas, como a geração client-side de documentos PDF (jsPDF), até a gestão completa do ciclo de vida do software, incluindo a automação de deploy via Vercel, administração de domínios (DNS) e otimização de desempenho e SEO (Google Search Console/Analytics).",
    tagline:
      "Ferramenta de apoio espiritual, oferecendo aos fiéis católicos um guia detalhado para a prática do Exame de Consciência e facilitando o preparo para o sacramento da confissão, incluindo a geração de documentos PDF organizados.",
    technologies: [
      "Next.js",
      "React.js",
      "Typescript",
      "Proprietário",
      "Full Stack",
      "Vercel Deploy",
      "Google Search Console",
      "Google Search Analytics",
    ],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/anima/anima-1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/anima/anima-2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/anima/anima-3.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/anima/anima-4.png?raw=true",
    ],
    period: "2025",
  },
  {
    id: 5,
    name: "Namorinho",
    website: "https://namorinho.vercel.app/",
    repository: "https://github.com/EmanuelBitenc/Namorinho",
    description:
      "Projeto próprio, front-end. Namorinho foi desenvolvido utilizando o stack Next.js, React, TypeScript e Tailwind CSS. O projeto focou no desenvolvimento front-end. Uma simulação de fluxo de navegação simulada. Infraestrutura de deploy foi realizada utilizando a plataforma Vercel",
    tagline:
      "O Namorinho é uma aplicação web construída com Next.js e Tailwind CSS que permite aos usuários simular o fluxo de navegação em uma plataforma que gera mensagens de amor de forma elegante através de links exclusivos, simulando um fluxo de navegação.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vercel Deploy",
    ],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/namorinho/namorinho1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/namorinho/namorinho2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/namorinho/namorinho3.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/namorinho/namorinho4.png?raw=true",
    ],
    period: "2023",
  },
  {
    id: 6,
    name: "Bikcraft - Legacy",
    website: "https://emanuelbitenc.github.io/BikcraftLegacy/",
    repository: "https://github.com/EmanuelBitenc/BikcraftLegacy",
    description:
      "Projeto Bikcraft (Curso Origamid) de e-commerce de bicicletas, desenvolvido com foco em HTML5 Semântico, CSS3 Responsivo e Acessibilidade. O trabalho abrangeu desde a prototipação no Figma (UX/UI) até a implementação do código e versionamento Git/GitHub. Tempos depois foi refeito com React.js",
    tagline:
      "O Bikcraft é um website de e-commerce (projeto do curso Origamid) desenvolvido com HTML5, CSS3, e JavaScript, demonstrando proficiência em Design Responsivo, Acessibilidade e Prototipação (Figma), com o objetivo de simular uma loja de bicicletas elétricas e seguros.",
    technologies: ["HTML", "CSS", "Javascript", "React.js"],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/bikcraft/bikcraft1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/bikcraft/bikcraft2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/bikcraft/bikcraft3.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/bikcraft/bikcraft4.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/bikcraft/bikcraft5.png?raw=true",
    ],
    period: "2021",
  },
  {
    id: 7,
    name: "Chuck Norris Jokes",
    website: "https://chuck-norris-page.vercel.app/",
    repository: "https://github.com/EmanuelBitenc/ChuckNorris_Page",
    description:
      "Projeto próprio, front-end. Chuck Norris Jokes foi desenvolvido utilizando o stack Next.js, React, TypeScript e Tailwind CSS. O projeto focou no desenvolvimento front-end. Uma simulação de fluxo de navegação simulada. Infraestrutura de deploy foi realizada utilizando a plataforma Vercel",
    tagline:
      "A plataforma é uma aplicação Javascript que consome a API de piadas do Chuck Norris, oferecendo funcionalidades de listagem detalhada e filtragem de conteúdo por categoria",
    technologies: ["HTML", "CSS", "Javascript", "Consumo de API"],

    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/chuck/chunk-1.png?raw=true",
    ],
    period: "2023",
  },
];
export default projectsData;
