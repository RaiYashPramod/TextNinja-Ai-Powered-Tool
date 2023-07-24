import React from "react";

const ParaPhrasing = () => {
  return (
    <section>
      <div className="flex flex-row">
        <div className="w-45"></div>

        <div className="gap-1 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="summary_box">
            <p className="font-inter font-medium text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa asperiores quam consectetur vitae. A eos nulla et sunt, velit provident impedit reiciendis id necessitatibus, numquam aspernatur maxime vitae adipisci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaPhrasing;
