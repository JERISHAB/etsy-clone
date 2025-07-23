import React from "react";
 import heart from "../../assets/images/card-heart.svg";

const DiscoverCard = ({ image, title, logo }) => {
  return (
    <div className="flex lg:flex-col w-full  min-w-[113px]  rounded-xl border-1 border-b-gray-400">
      <img
        src={image}
        alt={title}
        className="h-full lg:h-100 lg:w-full w-1/2 rounded-l-xl lg:rounded-t-xl  lg:rounded-b-none object-cover"
      />
      <div className="ml-4 flex  items-center gap-3 relative lg:py-4 ">
        <img src={logo} className="w-8 rounded-full lg:w-10" alt="" />
        <p className="font-w w-[14ch] truncate text-[16px] font-[500] tracking-[.08px]">
          {title}
        </p>

        <div className="absolute top-2 right-2 rounded-full bg-white p-[6px] shadow lg:top-[-390px] ">
          <img src={heart} className="h-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
    