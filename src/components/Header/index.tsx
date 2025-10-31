import Links from "./components/links";
import "./header.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";
import { GithubPerfil, LinkedinPerfil } from "../../assets/links";

const Header = () => {
  return (
    <div className="header-container">
      <nav>
        <ul className="container-menu glass w-full px-4 sm:px-6 lg:px-16 h-auto md:h-20 py-3 md:py-0 text-white grid grid-cols-1 md:grid-cols-3 items-center gap-2">
          <li className="items-menu items-menu order-2 md:order-1">
            <div className="flex flex-wrap items-center opacity-90 justify-center md:justify-start gap-3 sm:gap-4 lg:gap-10 text-base sm:text-lg lg:text-2xl font-light">
              <Links name="Experiencias" href="#skills-section" />
              <Links name="Projetos" href="#projects-section" />
              <Links name="Contato" href="#footer" />
            </div>
          </li>
          <li className="title-header order-1 md:order-2 text-center text-2xl sm:text-3xl lg:text-4xl font-light">
            Emanuel Bitencourt
          </li>
          <li className="items-menu items-menu order-3 md:order-3">
            <div className="flex flex-wrap items-center justify-center md:justify-end opacity-90 gap-3 sm:gap-4 lg:gap-10 text-base sm:text-lg lg:text-2xl font-light">
              <Links name="Github" href={GithubPerfil} image={github} />
              <Links name="Linkedin" href={LinkedinPerfil} image={linkedin} />
              <Links
                name="Email"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=emanuelmagalhaes3m@gmail.com"
                image={mail}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
