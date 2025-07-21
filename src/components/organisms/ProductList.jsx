import React from "react";
import { ProductListData } from "../../db/data.js";
import BasicHoverCard from "../molecules/BasicHoverCard.jsx";

const ProductList = () => {
  return (
    <div className="mt-4.5 grid grid-cols-2 lg:grid-cols-6 gap-4 px-3 md:grid-cols-3 lg:px-14">
      {ProductListData.slice(0, 4).map((product) => (
        <BasicHoverCard
          key={product.id}
          ogPrice={product.originalPrice}
          discountPrice={product.price}
          image={product.image}
        />
      ))}

      {ProductListData.slice(4).map((product) => (
        <div className="hidden md:block lg:inline-block" key={product.id}>
          <BasicHoverCard
            ogPrice={product.originalPrice}
            discountPrice={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
