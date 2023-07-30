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
            strings: ["Article-Summarizer", "Text-Translator", "Para-Phrasing", "Content-Detector", "Text-Extractor", "Code-Converter"],
            autoStart: true,
            loop: true,
          }}
        />
        {/* <br className="max-md:hidden" />{" "} */}
        <span className="orange_gradient">using OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Harness the power of GPT-4 using some amazing Tools. More Tools will be added soon!!
      </h2>
    </header>
  );
};

export default Hero;
