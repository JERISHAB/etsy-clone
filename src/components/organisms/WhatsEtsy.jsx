import React from "react";
import { questionAnswerList } from "../../db/data";
import QuestionSection from "../molecules/QuestionSection";


const WhatsEtsy = () => {
  return (
    <div className="font-g mt-10 bg-[#fffbd8] px-6 py-10 text-[#222]">
      <h2 className="text-center text-[32px] leading-[1.2] font-light">
        What is Etsy India?
      </h2>
      <h4 className="font-w mt-1 mb-6 text-center text-[14px] underline">
        Read our wonderfully weird story
      </h4>
      <div className="mx-auto max-w-[720px]">
        <p className="font-w line-clamp-3 text-[16px] leading-[1.7] tracking-[.16px]">
          Etsy is a global marketplace for creative and one-of-a-kind goods.
          It’s home to a universe of special, extraordinary items, from unique
          home decor pieces to trending fashion finds. Founded in 2005, Etsy
          began its Indian journey in 2018.
        </p>
        <button
          className="mb-4 inline-flex gap-1 rounded-full bg-[#d6d3d1] p-2"
          aria-label="See more"
        >
          <span className="h-1 w-1 rounded-full bg-[#222]"></span>
          <span className="h-1 w-1 rounded-full bg-[#222]"></span>
          <span className="h-1 w-1 rounded-full bg-[#222]"></span>
        </button>
      </div>

      <div className="mx-auto max-w-[720px]">
        {questionAnswerList.map((item) => (
          <QuestionSection
            key={item.id}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[720px] flex-col items-center">
        <p className="font-w px-4 text-center text-[18px] tracking-[0.16px]">
          Have a question? Well, we've got some answers.
        </p>
        <div className="font-w mx-auto mt-3 flex w-2/3 justify-center rounded-full border px-8 py-4 text-[16px] font-[500] lg:w-3/12 lg:px-1">
          Go to Help Centre
        </div>
      </div>
    </div>
  );
};

export default WhatsEtsy;
