import Links from "./components/links";
import "./header.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import dark from "../../assets/icons/dark.svg";
import light from "../../assets/icons/light.svg";

const Header = () => {
  return (
    <div className="header-container   ">
      <nav>
        <ul className="container-menu px-16 h-20 text-white grid lg:grid-cols-3 items-center ">
          <li
            className="items-menu
items-menu"
          >
            <div className=" flex items-center opacity-90 justify-center xl:justify-start gap-4 lg:gap-10 text-2xl font-light">
              <Links name="Sobre mim" href="#Sobre" />
              <Links name="Projetos" href="#Projetos" />
              <Links name="Contato" href="#Contato" />
            </div>
          </li>
          <li className="title-header text-center  text-4xl font-light">
            Emanuel Bitencourt
          </li>
          <li
            className="items-menu
items-menu"
          >
            <div className=" flex items-center justify-center xl:justify-end opacity-90 gap-4 lg:gap-10 text-2xl font-light">
              {localStorage.theme === "light" ? (
                <Links name="Tema Dark" image={dark} />
              ) : (
                <Links name="Tema Light" image={light} />
              )}
              <Links
                name="Github"
                href="https://github.com/EmanuelBitenc"
                image={github}
              />
              <Links
                name="Linkedin"
                href="https://www.linkedin.com/in/emanuelbitencourt/"
                image={linkedin}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
