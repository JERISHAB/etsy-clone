import React from "react";
import { UniqueListData } from "../../db/data";
import UniqueCard from "../molecules/UniqueCard";
import arrow from "../../assets/images/seemore-arrow.svg";

const UniqueFinds = () => {
  return (
    <div className=" mt-21.5 lg:mt-4 px-3 lg:flex lg:flex-col lg:gap-4 lg:p-14">
      <div className="grid grid-cols-12 gap-3 lg:gap-5 lg:grid-rows-7">
        <div className="col-span-12 mb-1.5 flex flex-col items-center lg:col-span-4 lg:row-span-3 lg:items-start lg:justify-start lg:mt-16.75 lg:mb-0">
          <span className="font-w text-[12.99px] leading-[1.4] font-[400] tracking-[.1299px] lg:text-[#595959] lg:mb-1">
            Editors' Picks
          </span>
          <span className="font-w text-[18px] leading-[1.35] font-[500] tracking-[.09px] lg:text-[27.01px] lg:leading-[1.4] lg:mb-5 ">
            The Linen Shop
          </span>
          <span className=" font-w hidden items-center justify-center gap-2.5 text-[16px] font-[700] lg:flex">
            Shop these unique finds
            <img src={arrow} alt="" className="pt-1" />
          </span>
        </div>
        {UniqueListData.map((product) => (
          <UniqueCard
            key={product.id}
            ogPrice={product.originalPrice}
            discountPrice={product.price}
            image={product.image}
            c_span={product.c_span}
            r_span={product.r_span}
          />
        ))}

        <div className="font-w row-span-4 hidden items-center text-[16px] tracking-[.16px] lg:col-span-3 lg:flex">
          Treat yourself to these easy, breezy designs that make every day feel
          like a holiday
        </div>

        <div className="col-span-12 mt-1.25 flex items-center justify-center font-w gap-2.75 text-[16px] font-[700] lg:hidden">
          See more <img src={arrow} alt="" className="pt-0.5" />
        </div>
      </div>
    </div>
  ); 
};

export default UniqueFinds;
