import React from "react";

const PopularCard = ({ image, title }) => {
  return (
    <div className="w-[160px] min-w-[113px] lg:w-[196.33px]">
      <img
        src={image}
        alt={title}
        className="h-[141px] rounded-xl object-cover lg:h-[245px]"
      />
      <p className="mt-2  tracking-[0.08px] font-w text-[16px] font-[500] leading-[1.25] ">
        {title}
      </p>
    </div>
  );
};

export default PopularCard;
