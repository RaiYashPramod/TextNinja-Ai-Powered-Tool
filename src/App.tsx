import Hero from "./components/Hero";
import Summarize from "./components/Summarize";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <Summarize />
      </div>
    </main>
  );
};

export default App;
