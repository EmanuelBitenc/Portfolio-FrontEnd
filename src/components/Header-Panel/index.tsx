import "./header-panel.css";
import download from "../../assets/icons/download.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import ItemsButton from "./components/items-button";
import { LinkedinPerfil, GithubPerfil, curriculo } from "../../assets/links";
import React from "react";

const jobs = [
  {
    id: 1,
    periodo: "Jun de 2022 - Atual",
    cargo: "Desenvolvedor de software Front End",
    local: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    info2: "STE - Serviços Técnicos de Engenharia S/A.",
  },
  {
    id: 2,
    periodo: "",
    cargo: "Desenvolvedor de software Front End",
    local: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    info2: "ENGEFOTO Engenharia e Aerolevantamentos Ltda.",
  },
  {
    id: 3,
    periodo: "",
    cargo: "Analista de TI",
    local: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    info2: "STE - Serviços Técnicos de Engenharia S/A.",
  },
];

const HeaderPanel = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-36 grid grid-cols-2 gap-5 h-[695px] items-center">
      <div
        className={`HeaderPanel${
          isVisible ? " HeaderPanel--visible" : ""
        } grid grid-cols-1 gap-5`}
      >
        {jobs
          .sort((a, b) => a.local.localeCompare(b.local))
          .map((a, i, arr) => {
            const isNewGroup = i === 0 || a.local !== arr[i - 1].local;
            return (
              <div key={a.id}>
                {isNewGroup && (
                  <h2 className="text-2xl font-light  text-[#E0E0E0]">
                    {a.periodo}
                  </h2>
                )}

                <div className="ml-10">
                  <h3 className="text-4xl font-semibold">{a.cargo}</h3>
                  <p className="text-2xl font-light text-[#E0E0E0]">
                    {a.local}
                  </p>
                  <p className="text-2xl font-light text-[#E0E0E0]">
                    {a.info2}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div
        className={`HeaderPanel${
          isVisible ? " HeaderPanel--visible" : ""
        } justify-self-end`}
      >
        <div className="text-start font-light text-6xl leading-[70px]">
          <h1>Desenvolvedor de Software</h1> <h1> Criador de Soluções Web</h1>
          <h1>Analista de sistemas</h1>
        </div>
        <div className="flex gap-10 items-center mt-5">
          <ItemsButton name="Curriculo" href={curriculo} img={download} />
          <ItemsButton name="Linkedin" href={LinkedinPerfil} img={linkedin} />
          <ItemsButton name="GitHub" href={GithubPerfil} img={github} />
        </div>
      </div>
    </section>
  );
};
export default HeaderPanel;
