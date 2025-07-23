import BasicCard from "../molecules/BasicCard";
import { teacherAppreciationGifts } from "../../db/data.js";

const Appreciation = () => {
  return (
    <div className="mt-4.5 items-center lg:mt-11.5 lg:flex lg:px-14">
      <div className="font-w flex items-center px-3 leading-[24.3px] tracking-[0.09px] lg:w-1/4 lg:flex-col lg:items-start lg:gap-4.25 lg:px-0 lg:pt-3">
        <span className="block pt-0.5 pr-6 pb-[1px] text-[18px] font-[500] tracking-[0.13505px] lg:pr-10 lg:text-[27.01px] lg:leading-[1.3]">
          Etsy-special gifts for Teacher Appreciation
        </span>
        <button className="rounded-3xl bg-gray-200 px-4.5 py-3 text-[16px] lg:relative lg:top-0.25">
          Get inspired
        </button>
      </div>

      <div className=" mt-4.25 lg:mt-4 grid grid-cols-3 gap-4 lg:gap-4.5 px-3.5 lg:w-3/4 lg:pr-0">
        {teacherAppreciationGifts.map((gift) => (
          <BasicCard key={gift.id} title={gift.title} image={gift.image} />
        ))}
      </div>
    </div>
  );
};

export default Appreciation;
