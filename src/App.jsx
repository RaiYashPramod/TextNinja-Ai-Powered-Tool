import Hero from "./components/Hero";
import Summarize from "./components/Summarize";
import "./App.css";
import ContentDetectors from "./components/ContentDetectors";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        {/* <Summarize /> */}
        <ContentDetectors />
      </div>
    </main>
  );
};

export default App;
