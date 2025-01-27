import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center">
    <div className="border border-black flex-shrink-0 p-3 text-center w-[250px] h-[300px]">
      <img src={image} alt={title} className="w-full h-auto object-cover mb-3" />
     
    </div>
     <h2 className="text-sm font-semibold">{title}</h2>
     <p className="text-sm text-gray-600">${price}</p>
     </div>
  );
};

export default ProductCard;