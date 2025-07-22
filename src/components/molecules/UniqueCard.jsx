import React from "react";
 import heart from "../../assets/images/card-heart.svg";

const UniqueCard = ({image,ogPrice,discountPrice}) => {
  return (
    <div className="group relative rounded-xl bg-white shadow-sm">
      <img src={image} alt="Gift" className="w-full h-25" />

      <div className="border-[rgb(148, 148, 148)] absolute bottom-2 left-2 hidden rounded-full border-1 bg-white px-3 py-[2px] text-sm shadow group-hover:block">
        <span className="font-w text-[12.99px] font-[700]">
          <span className="">₹ </span>
          {discountPrice.toLocaleString("en-IN")}
        </span>
        {ogPrice && (
          <span className="font-w ml-1 text-[12.99px] font-[500] line-through">
            ₹ {ogPrice?.toLocaleString("en-IN")}
          </span>
        )}
      </div>

      <div className="absolute top-2 right-2 hidden rounded-full bg-white p-[6px] shadow group-hover:block">
        <img src={heart} className="h-4" alt="" />
      </div>
    </div>
  );
};

export default UniqueCard;
