import { DiscoverList } from "../../db/data.js";
import DiscoverCard from "../molecules/DiscoverCard";

const Discover = () => {
    return (
      <div className=" mt-20 px-3  flex flex-col lg:flex-row items-center gap-4.25 lg:gap-4.5 lg:px-14">
        <div className="flex mb-1.75 lg:mt-3.5 flex-col items-center w-[268.16px] lg:w-400 border-box lg:items-start">
          <span className="font-cw mb-0.25 lg:mb-1 text-[12.99px] leading-[1.4] font-[400] tracking-[.1299px] text-[#595959] lg:pb-2">
            Local finds? Etsy has it.
          </span>
          <span className="font-cw text-[24px] leading-[1.35] font-[500] tracking-[.12px] lg:text-[27.01px] lg:leading-[1.4]">
            Discover shops in India
          </span>
          <div className=" mt-4.5 lg:mt-8.5 border w-full lg:w-[301.06px] rounded-full px-8 py-2.75 flex justify-center items-center font-cw text-[16px] font-[500]">Shop from local makers</div>
        </div>

        {DiscoverList.map((item) => (
          <DiscoverCard
            key={item.id}
            image={item.image}
            logo={item.logo}
            title={item.title}
          />
        ))}
      </div>
    );
};

export default Discover;
