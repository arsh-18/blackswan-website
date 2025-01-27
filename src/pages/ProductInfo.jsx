import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import product1 from "../assets/pufferJacket.jpg"; // Replace with actual images


const productDetails = {
  1: {
    name: "Invicta Men's Pro Diver Watch",
    price: "$82.99",
    images: [product1, product1, product1],
    description: "Stainless steel case 40mm diameter x 14.1mm thick; Exhibition case back; Black dial; Luminous hands. Band Length: 205mm.",
    material: "Stainless Steel",
    origin: "Malaysia",
    shipping: "$51.90 Shipping & Import Fees Deposit to India",
    warranty: "Includes gift box, instructions and 3-year limited manufacturer warranty.",
  },
};

const ProductInfo = () => {
  const { id } = useParams();
  const product = productDetails[id] || {};

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <div className="w-[70%] mx-auto">
  <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay thumbWidth={50}>
    {product.images?.map((img, index) => (
      <div key={index} className="border-2">
        <img src={img} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg" />
      </div>
    ))}
  </Carousel>
</div>

      {/* Right Section - Product Details */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-xl text-gray-700 font-semibold">{product.price}</p>
        <p className="text-gray-600 text-sm mb-3">{product.shipping}</p>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">Product Details</h3>
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Country of Origin:</strong> {product.origin}</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">About this item</h3>
          <p>{product.description}</p>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold mb-1">Warranty</h3>
          <p>{product.warranty}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <a
            href="/size-chart.pdf"
            download
            className="bg-black text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 w-[50%]"
          >
            Download Size Chart
          </a>
          <a
            href="https://wa.me/yourwhatsapplink"
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
