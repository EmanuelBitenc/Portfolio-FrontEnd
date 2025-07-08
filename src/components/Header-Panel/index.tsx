import "./header-panel.css";
import download from "../../assets/icons/download.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import ItemsButton from "./components/items-button";
import { LinkedinPerfil, GithubPerfil, curriculo } from "../../assets/links";

const jobs = [
  {
    id: 1,
    periodo: "Jun de 2022 - Atual",
    cargo: "Desenvolvedor de software Front End",
    orgao: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    contrato: "STE - Serviços Técnicos de Engenharia S/A.",
  },
  {
    id: 2,
    periodo: "",
    cargo: "Desenvolvedor de software Front End",
    orgao: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    contrato: "ENGEFOTO Engenharia e Aerolevantamentos Ltda.",
  },
  {
    id: 3,
    periodo: "",
    cargo: "Analista de TI",
    orgao: "DNIT - Departamento Nacional de  Infraestrutura de Transportes",
    contrato: "STE - Serviços Técnicos de Engenharia S/A.",
  },
];

const HeaderPanel = () => {
  return (
    <section className="px-36 grid grid-cols-2 gap-5 h-[695px] items-center">
      <div className="grid grid-cols-1 gap-5  ">
        {jobs.map((a) => {
          return (
            <div key={a.id}>
              <p className="text-2xl font-light  text-[#E0E0E0]">{a.periodo}</p>
              <h3 className="text-4xl font-semibold">{a.cargo}</h3>
              <p className="text-2xl font-light text-[#E0E0E0]">{a.orgao}</p>
              <p className="text-2xl font-light text-[#E0E0E0]">{a.contrato}</p>
            </div>
          );
        })}
      </div>
      <div className="justify-self-end">
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
