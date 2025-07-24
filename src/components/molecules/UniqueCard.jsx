import React from "react";
import heart from "../../assets/images/card-heart.svg";

const UniqueCard = ({ image, ogPrice, discountPrice, c_span, r_span }) => {

      const colSpanClass = {
        2: "lg:col-span-2",
        3: "lg:col-span-3",
        4: "lg:col-span-4",
      };

      const rowSpanClass = {
        3: "lg:row-span-3",
        4: "lg:row-span-4",
      };

  return (
    <div
          className={`group ${colSpanClass[c_span]} ${rowSpanClass[r_span]} relative col-span-4 rounded-xl bg-white shadow-sm`}
        >
          <img src={image} alt="Gift" className="h-[92.95px] w-full lg:h-full lg:[aspect-ratio:1.25] " />
    
          <div className="border-[rgb(148, 148, 148)] absolute bottom-2 left-2 hidden rounded-full border-1 bg-white px-3 py-[2px] text-sm shadow lg:block group-hover:block">
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
 
