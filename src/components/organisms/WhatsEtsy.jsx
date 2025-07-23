import React from "react";
import { questionAnswerList } from "../../db/data";
import QuestionSection from "../molecules/QuestionSection";


const WhatsEtsy = () => {
  return (
    <div className="font-cg mt-10 bg-[#fffbd8] px-7.5 py-10 text-[#222] lg:mt-20">
      <h2 className="text-center text-[31.01px] leading-[1.2] font-light text-[42px]">
        What is Etsy India?
      </h2>
      <h4 className="font-cw mt-[5.5px] mb-6 text-center text-[16px] leading-[1.7] tracking-[.16px] underline">
        Read our wonderfully weird story
      </h4>
      <div className="mx-auto mt-9 max-w-[720px] lg:max-w-[900px]">
        <p className="font-cw line-clamp-3 text-[16px] leading-[1.7] tracking-[.16px]">
          Etsy is a global marketplace for creative and one-of-a-kind goods.
          It’s home to a universe of special, extraordinary items, from unique
          home decor pieces to trending fashion finds. Founded in 2005, Etsy
          began its Indian journey in 2018.
        </p>
        <button
          className="mb-4 inline-flex h-[24px] w-[48px] items-center justify-center gap-1 rounded-full bg-[#d6d3d1] p-2"
          aria-label="See more"
        >
          <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
          <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
          <span className="h-1.75 w-1.75 rounded-full bg-[#222]"></span>
        </button>
      </div>

      <div className="mx-auto mt-5 max-w-[720px] lg:max-w-[900px]">
        {questionAnswerList.map((item) => (
          <QuestionSection
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center font-[500] lg:max-w-[900px]">
        <p className="font-cw px-2 text-center text-[18px] lg:text-[19.01px] tracking-[0.16px]">
          Have a question? Well, we've got some answers.
        </p>
        <div className="font-cw mx-auto mt-3 flex w-[174.3px] justify-center rounded-full border px-2 py-2 text-[16px] font-[500]  lg:px-1">
          Go to Help Centre
        </div>
      </div>
    </div>
  );
};

export default WhatsEtsy;
