import { DiscoverList } from "../../db/data.js";
import DiscoverCard from "../molecules/DiscoverCard";

const Discover = () => {
    return (
      <div className=" mt-20 px-3  flex flex-col lg:flex-row items-center gap-5 lg:px-14">
        <div className="flex flex-col items-center w-[268.16px] lg:w-400 border-box lg:items-start">
          <span className="font-w text-[12.99px] leading-[1.4] font-[400] tracking-[.1299px] text-[#595959] lg:pb-2">
            Local finds? Etsy has it.
          </span>
          <span className="font-w text-[24px] leading-[1.35] font-[500] tracking-[.12px] lg:text-[27.01px] lg:leading-[1.4]">
            Discover shops in India
          </span>
          <div className=" mt-3 border w-full rounded-full px-8 py-4 flex justify-center items-center font-w text-[16px] font-[500]">Shop from local makers</div>
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
