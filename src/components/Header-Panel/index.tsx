import "./header-panel.css";
import download from "../../assets/icons/download.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import ItemsButton from "./components/items-button";
import { LinkedinPerfil, GithubPerfil, curriculo } from "../../assets/links";
import React from "react";

const HeaderPanel = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-36 grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 h-auto md:h-[695px] items-center">
      <section
        className={`my-4 HeaderPanel${
          isVisible ? " HeaderPanel--visible" : ""
        } justify-self-center xl:justify-self-end`}
      >
        <div className="text-start font-light text-4xl md:text-5xl lg:text-5xl xl:text-5xl   2xl:text-6xl leading-tight md:leading-[70px] ">
          <h1>Desenvolvedor de Software</h1> <h1> Criador de Soluções Web</h1>
          <h1>Analista de sistemas</h1>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center mt-5">
          <ItemsButton name="Curriculo" href={curriculo} img={download} />
          <ItemsButton name="Linkedin" href={LinkedinPerfil} img={linkedin} />
          <ItemsButton name="GitHub" href={GithubPerfil} img={github} />
        </div>
      </section>
      <section
        className={`text-base sm:text-md pb-8 md:pb-0 sm:px-10 md:px-0 md:text-xl lg:text-2xl font-light text-[#E0E0E0] HeaderPanel${
          isVisible ? " HeaderPanel--visible" : ""
        } grid grid-cols-1 gap-5`}
      >
        <p>
          <span className="span-contrast">
            Desenvolvedor de Softwarecom 4 anos de experiência
          </span>{" "}
          , especializado em javascript, front-end e integração de sistemas .
          Atuação abrangente em todo o ciclo de desenvolvimento de software,
          participando ativamente desde a análise de requisitos e design de
          interfaces até a entrega técnica.
        </p>
        <p>
          Experiência adicional como{" "}
          <span className="span-contrast">
            Analista de Software/Product Owner e Designer de Interface
          </span>
          . Forte atuação em equipes ágeis, com aplicação consistente do SCRUM.
          Comprometido com a entrega de software de qualidade, com foco na
          resolução de problemas e melhoria contínua de processos e produtos.
        </p>
        <p>
          {" "}
          <span className="span-contrast">Pós-Graduado</span> em{" "}
          <span className="span-contrast">Engenharia de Software pela USP</span>{" "}
          e formado em ADS pela Faculdade Senac DF.{" "}
        </p>
      </section>
    </section>
  );
};
export default HeaderPanel;
