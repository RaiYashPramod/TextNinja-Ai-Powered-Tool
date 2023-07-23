import Hero from "./components/Hero";
import Summarize from "./components/Summarize";
import "./App.css";
import ContentDetectors from "./components/ContentDetectors";
import CodeGeneration from "./components/CodeGeneration";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [isContentDetectorModalOpen, setIsContentDetectorModalOpen] = useState(false);
  const [isArticleSummaryModalOpen, setIsArticleSummaryModalOpen] = useState(false);

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
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3"
          >
            Content Detector
          </button>

          <Modal isOpen={isContentDetectorModalOpen} onClose={closeContentDetectorModal}>
            <h2 className="text-xl font-bold mb-4">Check if this is Real or Fake. </h2>
            <p><ContentDetectors /></p>
          </Modal>
        </div>
        <button
            onClick={openArticleSummaryModal}
            className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md text-xl font-bold transform hover:scale-105 transition-all my-3"
          >
            Article Summary
          </button>

          <Modal isOpen={isArticleSummaryModalOpen} onClose={closeArticleSummaryModal}>
            <h2 className="text-xl font-bold mb-4">Summarize Any Article By Pasting the URL. </h2>
            <p><Summarize /></p>
          </Modal>
      </div>
    </main>
  );
};

export default App;
