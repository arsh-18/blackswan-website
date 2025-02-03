import React from "react";

const getImagePath = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};

const ProductCard = ({ image, title, price }) => {
  const imageUrl = getImagePath(image);  // Dynamically get image URL

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm w-[250px] h-[350px]">
      <div className="flex-shrink-0 p-3 text-center w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[90%] object-cover rounded-md"
        />
        <h2 className="text-sm font-semibold text-gray-800 mt-3">{title}</h2> {/* Removed margin-bottom */}
      </div>
      
    </div>
  );
};

export default ProductCard;
