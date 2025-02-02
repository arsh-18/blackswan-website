import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import productsData from "../data/products.json";

const ProductInfo = () => {
  const { id } = useParams();
  const product = productsData.products.find((p) => p.product_id === parseInt(id)) || {}; 
  const getImagePath = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <div className="w-[70%] mx-auto">
      <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay thumbWidth={50}>
        {product.images?.map((img, index) => (
          <div key={index} className="border-2">
            <img src={getImagePath(img)} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg" />
          </div>
        ))}
      </Carousel>
    </div>

      <div>
        <h1 className="text-3xl font-bold mb-3">{product.product_name}</h1>
        <p>{product.description}</p>
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">Product Details</h3>
          <p>Material: {product.material}</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">Specifications</h3>
          <ul className="mb-4">
            {product.specifications?.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">Available colours</h3>
          <div className="flex space-x-2">
            {product.available_colors?.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border border-black"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <a
            href="/size-chart-blackswan-stores.pdf"
            download="size-chart-blackswan-stores.pdf"
            className="bg-black text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 w-[50%]"
          >
            Download Size Chart
          </a>
          <a
            href="https://wa.me/9873835613"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-green-600 w-[50%]"
          >
            Contact Me on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
