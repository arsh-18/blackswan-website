import React from 'react'

const SmallProductCard = ({ image, title, price }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border border-black flex-shrink-0 text-center w-[180px] h-[230px] mb-3">
        <img src={image} alt={title} className="w-full h-full object-cover mb-3" />
      </div>
      <h2 className="text-sm font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">${price}</p>
      <button className="mt-5 px-3 py-2 bg-black text-white w-full text-xs">
        Add to cart
      </button>
    </div>
  )
}

export default SmallProductCard