import TypewriterComponent from "typewriter-effect";
import { TextNinja } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-5 mb-10">
        <img src={TextNinja} alt="logo" className="w-36 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open(
              "https://github.com/RaiYashPramod/TextNinja-Ai-Powered-Tool"
            );
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        <TypewriterComponent
          options={{
            strings: ["Article-Summarizer", "Text-Translator", "Para-Phrasing", "Content-Detector", "Text-Extractor", "Code-Generation"],
            autoStart: true,
            loop: true,
          }}
        />
        {/* <br className="max-md:hidden" />{" "} */}
        <span className="orange_gradient">using OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with the help of AI-Model that transforms lenghty
        articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
