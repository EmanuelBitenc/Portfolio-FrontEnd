import React from "react";
import "./about.css";

const About = () => {
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
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about-section"
      className={`about-section ${isVisible ? "about-section--visible" : ""}`}
    >
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            De construir soluções de e-commerce na <strong>LOUD</strong> a
            liderar equipes técnicas em exchanges de criptomoedas e plataformas
            iGaming, minha jornada tem sido sobre ultrapassar limites e entregar
            excelência.
          </p>
          <p className="about-text">
            Arquitetei sistemas que lidam com milhões de transações diárias,
            liderei equipes de mais de 10 desenvolvedores e transformei startups
            em líderes de mercado. Minha abordagem combina profundidade técnica
            com visão estratégica.
          </p>
          <p className="about-text">
            Atualmente, como CTO na Jungle Gaming, estou impulsionando a
            inovação no mercado internacional de iGaming, construindo
            plataformas escaláveis que atendem usuários em todo o mundo.
          </p>
          <a href="#" className="about-download" download>
            Download do currículo completo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
