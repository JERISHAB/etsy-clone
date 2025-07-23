import React from "react";

const QuestionSection = ({ title, content }) => {
  return (
    <div className="font-cw mb-6 leading-[1.7] tracking-[.16px]">
      <h3 className="mb-0 text-[18px] font-[500] text-[#2638c0]">{title}</h3>

      <p className="line-clamp-3 overflow-hidden text-[16px] leading-[1.7] tracking-[.16px] text-[#222]">
        {content}
      </p>

      <button
        className="mb-3 inline-flex h-[24px] w-[48px] items-center justify-center gap-1 rounded-full bg-[#d6d3d1] p-2"
        aria-label="See more"
      >
        <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
        <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
        <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
      </button>
    </div>
  );
};

export default QuestionSection;
