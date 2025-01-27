import React from "react";

const CatalogCard = ({ image, name, price, id, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="border border-black rounded-lg text-center shadow-lg w-[300px] h-[350px] mb-3">
        <div className="w-full h-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">{price}</p>
    </div>
  );
};

export default CatalogCard;