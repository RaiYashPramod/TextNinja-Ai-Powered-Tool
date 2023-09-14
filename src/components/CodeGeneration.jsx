import React, { useState } from "react";
import { useLazyGetConvertedCodeQuery } from "../services/code";
import { loader } from "../assets";
import "../App.css";

const CodeGeneration = () => {
  const [toChange, setToChange] = useState("");
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [getConvertedCode, { error, isFetching }] =
    useLazyGetConvertedCodeQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getConvertedCode({
      from: fromLanguage,
      to: toLanguage,
      code: toChange,
    });

    if (data.code) {
      setConvertedCode(data.code);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative py-4">
        <span>golang java javascript python php ruby visual basic</span>
      </div>
      <section className="mt-4 w-full flex flex-col gap-10 sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col">
          <input
            type="text"
            className="w-full h-12 border border-gray-500 p-4 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter the source language"
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
          />
          <textarea
            className="w-full h-80 max-h-80 resize-none border border-gray-500 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Paste Your Code Here"
            value={toChange}
            onChange={(e) => setToChange(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <input
            type="text"
            className="w-full h-12 border border-gray-500 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter the target language"
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
          />
          <textarea
            className="w-full h-80 max-h-80 resize-none border border-gray-500 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Converted Code"
            value={convertedCode}
            readOnly
          ></textarea>
        </div>
      </section>
      <button
        type="submit"
        onClick={handleSubmit}
        className={`my-4 px-4 py-2 w-60 bg-blue-500 text-white rounded-md hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition ${
          isFetching ? "bg-gray-500 cursor-not-allowed" : ""
        }`}
        disabled={isFetching}
      >
        {isFetching ? "Converting..." : "Convert"}
      </button>
      {/* {isFetching && (
        <div className="flex items-center justify-center">
          <img
            src={loader}
            alt="loader"
            className="w-20 h-20 object-contain"
          />
          <p className="font-inter font-bold text-black text-center">
            Ninja is Working!!
          </p>
        </div>
      )} */}
    </div>
  );
};

export default CodeGeneration;
