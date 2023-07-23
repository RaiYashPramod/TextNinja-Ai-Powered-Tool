import React from "react";
import { useState } from "react";


const handleSubmit = (e) => {
  e.preventDefault()
}

const CodeGeneration = () => {
  const [query, setQuery] = useState("");
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="w-full gap-2">  
        <form action="" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="url_input"
          />
          <button className="border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black w-full m-3 rounded-md font-semibold">Generate Code</button>
        </form>
      </div>
    </section>
  );
};

export default CodeGeneration;
