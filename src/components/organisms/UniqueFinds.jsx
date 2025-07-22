import React from 'react'
import { UniqueListData } from '../../db/data';
import UniqueCard from '../molecules/UniqueCard';
 import arrow from "../../assets/images/seemore-arrow.svg";

const UniqueFinds = () => {
  return (
    <div className="mt-4 px-3">
      <div className="mb-4 flex flex-col items-center lg:items-start">
        <span className="font-w text-[12.99px] leading-[1.4] font-[400] tracking-[.1299px]">
          Editors' Picks
        </span>
        <span className="font-w text-[18px] leading-[1.35] font-[500] tracking-[.09px]">
          The Linen Shop
        </span>
        <span className="hidden items-center justify-center gap-3 text-[16px] font-[700] lg:flex">
          Shop these unique finds
          <img src={arrow} alt="" className="pt-1" />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {UniqueListData.map((product) => (
          <UniqueCard
            key={product.id}
            ogPrice={product.originalPrice}
            discountPrice={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className="font-w hidden text-[16px] tracking-[.16px] lg:flex">
        Treat yourself to these easy, breezy designs that make every day feel
        like a holiday
      </div>
      <div className="mt-3 flex items-center justify-center gap-3 text-[16px] font-[700] lg:hidden">
        See more <img src={arrow} alt="" className="pt-1" />
      </div>
    </div>
  );
}

export default UniqueFinds