import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"; // Heroicons v2 path
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProductCard from "./ProductCard";
import productData from "../data/products.json"; // Assuming products data is available in this file

const BestSellers = () => {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position
  const navigate = useNavigate(); 

  // Handle scroll event and update the scroll percent
  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollPercent((scrollLeft / (scrollWidth - clientWidth)) * 100);
  };

  // Function to scroll to left or right by one screen width
  const scrollTo = (direction) => {
    const { scrollWidth, clientWidth } = scrollRef.current;
    let newPosition = direction === "next" ? scrollPosition + clientWidth : scrollPosition - clientWidth;
    
    // Keep the scroll position within the boundaries
    if (newPosition < 0) newPosition = 0;
    if (newPosition > scrollWidth - clientWidth) newPosition = scrollWidth - clientWidth;

    setScrollPosition(newPosition);
    scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter best-selling products from productData
  const bestSellers = productData.products.filter(product => product.is_best_seller);

  // Navigate to catalog page
  const goToCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">This Season's Best Sellers</h1>

        <div className="flex items-center space-x-2">
          <button
            className="hidden lg:block text-md underline"
            onClick={goToCatalog}
          >
            View all
          </button>
          <button
            className="block lg:hidden text-2xl flex items-center space-x-1"
            onClick={goToCatalog} 
          >
            <ChevronRightIcon className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>

      {/* Scrollable Product List */}
      <div className="relative w-full">
        {/* Left Arrow Button */}
        <div className="absolute left-0 top-0 z-10 flex items-center justify-center h-full">
          <button
            onClick={() => scrollTo("prev")}
            className="text-3xl text-black bg-white p-2 rounded-full"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll scrollbar-hide w-full mt-6 px-4 md:px-8"
        >
          {bestSellers.map((product, index) => (
            <div key={index} className="flex-shrink-0">
              <ProductCard
                image={product.images[0]} 
                title={product.product_name}
                // Add fixed width and height for cards here
                cardWidth="w-[200px]"  // Fixed width for card
                cardHeight="h-[300px]"  // Fixed height for card
              />
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <div className="absolute right-0 top-0 z-10 flex items-center justify-center h-full">
          <button
            onClick={() => scrollTo("next")}
            className="text-3xl text-black bg-white p-2 rounded-full"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-5 w-full bg-gray-200 h-[3px] relative">
          <div
            className="bg-black h-[3px] absolute left-0"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
