import "./index.css";
import Header from "./components/Header";
import HeaderPanel from "./components/Header-Panel";
//import About from "./components/About";
import Skills from "./components/Skills";
//import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <div className="container-header-img">
          <Header />
          <HeaderPanel />
        </div>
        {/**<About /> */}
        <Skills />
        {/**<Projects />*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
