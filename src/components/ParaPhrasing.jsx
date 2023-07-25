import React, { useState } from "react";
import { useLazyGetParaPhraseQuery } from "../services/paraphrasing";

const ParaPhrasing = () => {
  const [textArea, setTextArea] = useState();
  const [correctArea, setCorrectArea] = useState();
  const [getParaPhrase, { error, isFetching }] = useLazyGetParaPhraseQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: result } = await getParaPhrase({
      ParaPhraseText: textArea,
    });

    setCorrectArea(result);
  };
  return (
    <section className="">
      <div className="flex flex-row gap-3 justify-between">
        <div className="w-2/4">
          <form action="" onSubmit={handleSubmit}>
            <textarea
              id="paragraphInput"
              className="w-full h-80 resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
              placeholder="Write your content here..."
              value={textArea}
              onChange={(e) => setTextArea(e.target.value)}
            ></textarea>
            <button
              className="my-2 px-4 py-2 w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
              // disabled={!isContentValid}
            >
              {isFetching ? <p>Loading...</p> : <p>Analyze</p>}
            </button>
          </form>
        </div>
        {isFetching ? (
          <p>Loading...</p>
        
          ) : error ? (
            <p>Error</p>):(
          <div className="h-80 w-2/4 overflow-y-auto rounded-md">
            <div className="summary_box">{correctArea?.ParaPhraseText}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ParaPhrasing;
