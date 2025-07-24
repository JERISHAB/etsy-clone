import React from "react";

const QuestionSection = ({ title, content }) => {
  return (
    <div className="font-cw mb-6 leading-[1.7] tracking-[.16px]">
      <h3 className="mb-0 text-[18px] font-[500] text-[#2638c0] lg:text-[19.01px] lg:mb-6">{title}</h3>

      <p className="line-clamp-3  overflow-hidden text-[16px] leading-[1.7] tracking-[.16px] -m-0.5 text-[#222]">
        {content}
      </p>
 
      <button
        className="mb-2.5 lg:mb-3 inline-flex h-[24px] w-[48px] items-center justify-center gap-0.75 rounded-full bg-[#e5e3d8] p-2"
        aria-label="See more"
      >
        <span className="h-[6px] w-[6px] rounded-full bg-[#222]"></span>
        <span className="h-[6px] w-[6px] rounded-full bg-[#222]"></span>
        <span className="h-[6px] w-[6px] rounded-full bg-[#222]"></span>
      </button>
    </div>
  );
};

export default QuestionSection;
