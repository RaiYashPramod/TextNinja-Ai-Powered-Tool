import Hero from "./components/Hero";
import Summarize from "./components/Summarize";
import "./App.css";
import ContentDetectors from "./components/ContentDetectors";
import CodeGeneration from "./components/CodeGeneration";
import Modal from "./components/Modal";
import { useState } from "react";
import ParaPhrasing from "./components/ParaPhrasing";

const App = () => {
  const [isContentDetectorModalOpen, setIsContentDetectorModalOpen] =
    useState(false);
  const [isArticleSummaryModalOpen, setIsArticleSummaryModalOpen] =
    useState(false);
  const [isCodeGenerationModalOpen, setIsCodeGenerationModalOpen] = useState(false);
  const [isParaPhrasingModalOpen, setIsParaPhrasingModalOpen] = useState(false);

  const openContentDetectorModal = () => {
    setIsContentDetectorModalOpen(true);
  };

  const closeContentDetectorModal = () => {
    setIsContentDetectorModalOpen(false);
  };

  const openArticleSummaryModal = () => {
    setIsArticleSummaryModalOpen(true);
  };

  const closeArticleSummaryModal = () => {
    setIsArticleSummaryModalOpen(false);
  };
  const openCodeGenerationModal = () => {
    setIsCodeGenerationModalOpen(true);
  };

  const closeCodeGenerationModal = () => {
    setIsCodeGenerationModalOpen(false);
  };

  const openParaPhrasingModal = () => {
    setIsParaPhrasingModalOpen(true);
  }

  const closeParaPhrasingModal = () => {
    setIsParaPhrasingModalOpen(false);
  } 

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <div>
          <button
            onClick={openContentDetectorModal}
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3 w-60"
          >
            Content Detector
          </button>

          <Modal
            isOpen={isContentDetectorModalOpen}
            onClose={closeContentDetectorModal}
          >
            <h2 className="text-xl font-bold mb-4">
              Check if this is Real or Fake.{" "}
            </h2>
            <p>
              <ContentDetectors />
            </p>
          </Modal>
        </div>
        <div>
          <button
            onClick={openArticleSummaryModal}
            className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3 w-60"
          >
            Article Summary
          </button>

          <Modal
            isOpen={isArticleSummaryModalOpen}
            onClose={closeArticleSummaryModal}
          >
            <h2 className="text-xl font-bold mb-4">
              Summarize Any Article By Pasting the URL.{" "}
            </h2>
            <p>
              <Summarize />
            </p>
          </Modal>
        </div>
        {/* <div>
          <button
            onClick={openCodeGenerationModal}
            className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3 w-60"
          >
            Code Generation
          </button>

          <Modal
            isOpen={isCodeGenerationModalOpen}
            onClose={closeCodeGenerationModal}
          >
            <h2 className="text-xl font-bold mb-4">
              Generate Code By writing what you want.
            </h2>
            <p>
              <CodeGeneration />
            </p>
          </Modal>
        </div>
        <div>
          <button
            onClick={openParaPhrasingModal}
            className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3 w-60"
          >
            Para Phrasing
          </button>

          <Modal
            isOpen={isParaPhrasingModalOpen}
            onClose={closeParaPhrasingModal}
          >
            <h2 className="text-xl font-bold mb-4">
              Make Your Grammer Sound More Professional Instantly
            </h2>
            <p>
              <ParaPhrasing />
            </p>
          </Modal>
        </div> */}
      </div>
    </main>
  );
};

export default App;
