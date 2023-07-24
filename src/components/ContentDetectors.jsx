import React, { useState } from "react";
import { useLazyGetContentDetectionQuery } from "../services/content";

const ContentDetectors = () => {
  const [content, setContent] = useState("");
  const [probability, setProbability] = useState();
  const [getContentDetection, { error, isFetching }] =
    useLazyGetContentDetectionQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: result } = await getContentDetection({
      contentText: content,
    });

    setProbability(result);
  };

  const realProbability = probability?.real_probability;
  const fakeProbability = probability?.fake_probability;

  const isContentValid = content.length > 10;

  return (
    <div className="">
      <section className="mt-5 w-full max-w-7xl">
        <div className="flex items-center justify-center min-h-full">
          <div className="w-full max-w-md">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl text-center p-6">
              Paste the Content
            </h2>
            <form action="" onSubmit={handleSubmit}>
              <textarea
                id="paragraphInput"
                className="w-full h-80 resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Paste your content here... (should not be less than 10 words)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <button
                className="my-2 px-4 py-2 w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
                disabled={!isContentValid}
              >
                {isFetching ? <p>Loading...</p> : <p>Analyze</p>}
              </button>
            </form>
            {realProbability !== undefined && (
              <div className="mt-4">
                <strong>Real Probability:</strong> {realProbability}
              </div>
            )}
            {fakeProbability !== undefined && (
              <div>
                <strong>Fake Probability:</strong> {fakeProbability}
              </div>
            )}
            {error && <div>Error {error?.data?.error}</div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentDetectors;
