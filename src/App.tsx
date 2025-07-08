import "./index.css";
import Header from "./components/Header";
import HeaderPanel from "./components/Header-Panel";

function App() {
  return (
    <>
      <div>
        <div className="container-header-img ">
          <Header />
          <HeaderPanel />
        </div>
      </div>
    </>
  );
}

export default App;
