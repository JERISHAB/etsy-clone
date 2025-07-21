import BasicCard from "../molecules/BasicCard";
import { teacherAppreciationGifts } from "../../db/data.js";

const Appreciation = () => {
  return (
    <div className="mt-11.25 items-center lg:flex lg:px-14">
      <div className="font-w flex items-center px-3 leading-[24.3px] tracking-[0.09px] lg:w-1/4 lg:flex-col lg:items-start lg:gap-5 lg:px-0">
        <span className="block pr-4 pb-[1px] text-[18px] font-[500] tracking-[0.13505px] lg:pr-10 lg:text-[27.01px] lg:leading-[35.113px]">
          Etsy-special gifts for Teacher Appreciation
        </span>
        <button className="rounded-3xl bg-gray-200 px-6 py-3 text-[16px]">
          Get inspired
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-5 px-3.5 lg:w-3/4 lg:pr-0">
        {teacherAppreciationGifts.map((gift) => (
          <BasicCard key={gift.id} title={gift.title} image={gift.image} />
        ))}
      </div>
    </div>
  );
};

export default Appreciation;
