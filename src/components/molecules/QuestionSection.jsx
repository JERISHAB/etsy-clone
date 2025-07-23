import React from "react";

const QuestionSection = ({ title, content }) => {
  return (
    <div className="font-w mb-6">
      <h3 className="mb-1 text-[16px] font-semibold text-[#2638c0]">{title}</h3>

      <p className="line-clamp-3 overflow-hidden leading-[1.7] tracking-[.16px] text-[16px] text-[#222]">
        {content}
      </p>

      <button
        className="mt-2 inline-flex gap-1 rounded-full bg-[#d6d3d1] p-2"
        aria-label="See more"
      >
        <span className="h-1 w-1 rounded-full bg-[#222]"></span>
        <span className="h-1 w-1 rounded-full bg-[#222]"></span>
        <span className="h-1 w-1 rounded-full bg-[#222]"></span>
      </button>
    </div>
  );
};

export default QuestionSection;
