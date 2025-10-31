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
        <div className="w-full h-60 bg-zinc-100">continuação</div>
      </div>
    </>
  );
}

export default App;
