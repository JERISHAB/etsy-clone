import React from "react";
import { PopularList } from "../../db/data";
import PopularCard from "../molecules/PopularCard";

const Popular = () => {
  return (
    <div className="mt-8 px-4 md:px-12">
      <h2 className="mb-4 text-lg font-semibold">
        Shop our most popular categories
      </h2>

      <div className="no-scrollbar flex gap-4 overflow-x-auto">
        {PopularList.map((item) => (
          <PopularCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
