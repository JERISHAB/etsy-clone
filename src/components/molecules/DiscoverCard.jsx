import React from "react";
import heart from "../../assets/images/card-heart.svg";

const DiscoverCard = ({ image, title, logo }) => {
  return (
    <div className="flex w-full min-w-[113px] lg:min-w-[310.08px] rounded-xl border border-gray-300 lg:flex-col">
      <img
        src={image}
        alt={title}
        className="h-[175px] w-1/2 rounded-l-xl object-cover lg:h-100 lg:w-full lg:rounded-t-xl lg:rounded-b-none"
      />
      <div className="relative ml-3 flex items-center gap-2 lg:ml-3 lg:gap-3 lg:py-4.75">
        <img
          src={logo}
          className="h-[34px] w-[34px] rounded-full lg:h-[42px] lg:w-[42px]"
          alt=""
        />
        <p className="font-cw w-[14ch] truncate text-[16px] font-[500] tracking-[.08px] lg:text-[19.01px]">
          {title}
        </p>

        <div className="absolute top-1.5 right-1 rounded-full bg-white p-[6px] shadow lg:top-[-390px]">
          <img src={heart} className="h-[18px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
