export interface Project {
  id: number;
  name: string;
  website?: string;
  description: string[];
  tagline: string;
  technologies: string[];
  images: string[];
  period: string;
  repository?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    name: "Nortus - Plataforma de Inteligência para Vendas e Atendimento",
    website: "https://nortus-project-pi.vercel.app/",
    repository: "https://github.com/EmanuelBitenc/Nortus-project",
    description: [
      "Desenvolvimento de uma plataforma completa de gestão empresarial com foco em análise de KPIs e gerenciamento de tickets. O projeto implementa um sistema robusto de autenticação com NextAuth.js, incluindo validação de email, opção de visualizar/ocultar senha, funcionalidade 'Lembrar usuário', armazenamento seguro de tokens em cookies e persistência de dados do usuário em localStorage.",
      "Implementei um dashboard interativo de métricas principais (ARPU, Retenção, Churn, Conversão) utilizando ApexCharts para visualizações dinâmicas. A plataforma conta com mapas de clientes por região, mapas de impacto segmentado por tipo, tabelas avançadas com filtros e paginação, além de indicadores de crescimento percentual para análise de tendências.",
      "O sistema de gestão de tickets oferece listagem completa com status e prioridades, filtros por múltiplos critérios (status, prioridade, responsável), resumo visual de tickets (abertos, em andamento, resolvidos) e criação de novos tickets com validação robusta através de React Hook Form e Zod. A interface implementa estados de loading (skeleton) e atualização automática da tabela após criação de tickets.",
      "O gerenciamento de estado foi implementado com Zustand, garantindo performance e escalabilidade. O projeto segue boas práticas de desenvolvimento com TypeScript, ESLint, Prettier e testes unitários com Vitest, além de consumo de API com Axios e notificações toast com Sonner.",
    ],
    tagline:
      "Sistema desenvolvido para operadores da Nortus durante a jornada de atendimento e recomendação de produtos aos clientes, utilizando inteligência artificial para análise de dados comportamentais e sugestão inteligente de produtos e planos.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "NextAuth.js",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Axios",
      "ApexCharts",
      "Sonner",
      "Vitest",
    ],
    images: [
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/desafio/desafio1.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/desafio/desafio2.png?raw=true",
      "https://github.com/EmanuelBitenc/ImagesProject/blob/main/desafio/Desafio3.png?raw=true",
    ],
    period: "2025",
  },
  {
    id: 2,
    name: "SGP - Sistema de Gerenciamento de Pavimentos",
    website: "DNIT",
    description: [
      "Atuei na implementação e desenvolvimento do SGP (Sistema de Gestão de Projetos), solução voltada à gestão centralizada de portfólios, projetos e demandas em ambientes institucionais e corporativos. O projeto tem como foco o gerenciamento da malha viária nacional, abrangendo exportação de relatórios, importação de dados, e a realização de análises de risco e de qualidade do pavimento.",
      " O sistema permite o cadastro e acompanhamento de escopos, cronogramas, custos, contratos e recursos humanos, consolidando dados de desempenho por meio de dashboards e relatórios técnicos. Implementei módulos de gestão contratual, controle de medições e fiscalização, repositório documental, além de integrações com sistemas externos via APIs e coleta de dados por formulários e importadores de bases.",
      " O SGP também automatiza notificações, versionamento de documentos, auditoria de ações e geração de relatórios gerenciais e operacionais, otimizando fluxos de trabalho e garantindo rastreabilidade.",
      " Além do desenvolvimento, atuei como Analista de Requisitos, conduzindo a gestão das tarefas como Product Owner dentro das sprints Scrum, e como UI Designer, sendo responsável pela criação de protótipos e interfaces no Figma. O SGP promove eficiência, transparência e conformidade, reduzindo retrabalho, aprimorando o controle de custos e prazos e garantindo padronização e governança em todo o ciclo de vida dos projetos de infraestrutura.",
    ],
    tagline:
      "Sistema de Gerenciamento de Pavimento do país, concebido para automatizar a importação de dados, gerar relatórios gerenciais, e subsidiar a tomada de decisão através da análise de riscos e qualidade do pavimento.",
    technologies: [
      "React.js",
      "Chakra.UI",
      "Typescript",
      "Zustand",
      "Zod",
      "React Hook Form",
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
    id: 3,
    name: "SGE - Sistema de Gerenciamento de Estruturas",
    website: "DNIT",
    description: [
      "Atuei no desenvolvimento do SGE (Sistema de Gestão de Estruturas), responsável pela gestão nacional das estruturas sob supervisão do DNIT (Departamento Nacional de Infraestrutura de Transportes). O sistema foi projetado para o Gerenciamento de Obras de Arte Especiais (OAE), realizando o processamento e integração de centenas de dados sensíveis e de grande impacto, aplicando cálculos e fórmulas de engenharia para gerar relatórios técnicos de status, saúde estrutural e necessidades de manutenção.",
      "Participei da implementação de módulos de gestão contratual, fiscalização, avaliações e medições, além de repositório interno de documentos. O sistema também contempla coleta de dados via formulários e importação de bases externas para integração e análises estruturais.",
      " Como Desenvolvedor, fui responsável pela implementação de APIs RESTful, gerenciamento de estado e integração de bibliotecas utilizando React.js e TypeScript. Também desenvolvi testes automatizados end-to-end (E2E) e atuei diretamente nos processos de deploy e correções do projeto.",
      "O SGE tem como objetivo centralizar informações críticas, padronizar processos técnicos e apoiar a tomada de decisões estratégicas, fortalecendo a governança e eficiência na gestão das estruturas de transporte em todo o território nacional.",
    ],
    tagline:
      "Solução de Gerenciamento de Obras de Arte Especiais (OAE) do DNIT, centralizando a importação e exportação de dados e subsidiando a gestão estratégica de ativos com foco em análise de riscos e qualidade estrutural.",
    technologies: [
      "React.js",
      "Chakra.UI",
      "Typescript",
      "Zustand",
      "Zod",
      "React Hook Form",
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
    id: 4,
    name: "DPP - Aceite de Usuários",
    website: "DNIT",
    description: [
      "Atuei na implementação e desenvolvimento do sistema 'Controle de Usuários', solução voltada ao gerenciamento do processo de validação de cadastros no departamento DPP - DNIT. O projeto centraliza o fluxo de aprovação de usuários que se cadastram nos projetos GE e SGP, exigindo validação na plataforma por um responsável antes da ativação da conta.",
      "O sistema permite o registro de solicitações de cadastro, a apresentação das informações do solicitante aos responsáveis, a decisão de aceite ou negação do cadastro e a comunicação do resultado ao usuário. A plataforma organiza uma fila de validações, mantém registro da decisão de cada responsável e assegura que somente usuários validados tenham acesso aos projetos GE e SGP.",
      "Implementei o fluxo de validação e as interfaces para responsáveis efetuarem aceite ou recusa, além da notificação aos solicitantes sobre o status do cadastro. O sistema promove controle de acesso, reduz riscos de contas indevidas e centraliza a governança sobre aprovações de usuários no âmbito do DPP - DNIT.",
    ],
    tagline:
      "Sistema de Aceite de Usuários desenvolvido para o DNIT, facilitando a validação e aprovação de funcionalidades por parte dos usuários finais, assegurando a conformidade com os requisitos estabelecidos.",
    technologies: [
      "React.js",
      "Shadcn",
      "Typescript",
      "Zustand",
      "Zod",
      "React Hook Form",
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
    id: 5,
    name: "Anima Sancta",
    website: "AnimaSancta.com.br",
    repository: "https://github.com/EmanuelBitenc/AnimaSancta",
    description: [
      "Atuação Full Stack no desenvolvimento do projeto Anima Sancta, utilizando um stack moderno para garantir performance e escalabilidade.",
      "Implementei funcionalidades como geração de PDFs client-side (jsPDF) e participei de todo o ciclo de vida do projeto, incluindo deploy automatizado na Vercel, administração de domínio (DNS) e otimizações de desempenho e SEO.",
    ],
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
    id: 6,
    name: "Namorinho",
    website: "https://namorinho.vercel.app/",
    repository: "https://github.com/EmanuelBitenc/Namorinho",
    description: [
      "Projeto próprio focado no front-end, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.",
      "O projeto simula fluxos de navegação e geração de mensagens através de links exclusivos; o deploy foi realizado na plataforma Vercel.",
    ],
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
    id: 7,
    name: "Bikcraft - Legacy",
    website: "https://emanuelbitenc.github.io/BikcraftLegacy/",
    repository: "https://github.com/EmanuelBitenc/BikcraftLegacy",
    description: [
      "Projeto Bikcraft (Curso Origamid) de e-commerce de bicicletas, com foco em HTML5 semântico, CSS3 responsivo e acessibilidade.",
      "O trabalho incluiu prototipação no Figma, implementação do código e versionamento no Git/GitHub; posteriormente o projeto foi refeito em React.js.",
    ],
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
    id: 8,
    name: "Chuck Norris Jokes",
    website: "https://chuck-norris-page.vercel.app/",
    repository: "https://github.com/EmanuelBitenc/ChuckNorris_Page",
    description: [
      "Projeto próprio focado no front-end, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.",
      "A aplicação consome a API de piadas do Chuck Norris, oferecendo listagem e filtragem por categoria; o deploy foi feito na Vercel.",
    ],
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
