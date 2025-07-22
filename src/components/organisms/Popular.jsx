import React from "react";
import { PopularList } from "../../db/data";
import PopularCard from "../molecules/PopularCard";

const Popular = () => {
  return (
    <div className="mt-8 px-4 md:px-12">
      <h2 className="font-w mb-4 text-[24px] leading-[1.35] font-[500] tracking-[.12px] lg:tracking-[1.3] lg:text-[27.01px]">
        Shop our most popular categories
      </h2>

      <div className="no-scrollbar flex justify-between gap-4 overflow-x-auto">
        {PopularList.map((item) => (
          <PopularCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
