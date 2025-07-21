import React from "react";

const PopularCard = ({ image, title }) => {
  return (
    <div className="w-[160px] min-w-[160px] flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="h-[180px] w-full rounded-xl object-cover"
      />
      <p className="mt-2  text-gray-800">
        {title}
      </p>
    </div>
  );
};

export default PopularCard;
