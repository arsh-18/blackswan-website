import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./Productcard";

const products = [
  { image: "https://via.placeholder.com/200", title: "Puffer Jacket", price: "218" },
  { image: "https://via.placeholder.com/200", title: "Contrast Legging", price: "98" },
  { image: "https://via.placeholder.com/200", title: "Scuba Jacket 2.0", price: "118" },
  { image: "https://via.placeholder.com/200", title: "Buster Bra", price: "79" },
  { image: "https://via.placeholder.com/200", title: "Rib Combo Legging", price: "108" },
  { image: "https://via.placeholder.com/200", title: "Rib Combo Legging", price: "108" },
  { image: "https://via.placeholder.com/200", title: "Rib Combo Legging", price: "108" },
  { image: "https://via.placeholder.com/200", title: "Rib Combo Legging", price: "108" },
  { image: "https://via.placeholder.com/200", title: "Rib Combo Legging", price: "108" },
];

const BestSellers = () => {
  const scrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setScrollPercent((scrollLeft / (scrollWidth - clientWidth)) * 100);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">This Season's Best Sellers</h1>
        <button className="text-md underline">View All Best Sellers</button>
      </div>

      {/* Scrollable Product List */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex space-x-10 overflow-x-scroll scrollbar-hide w-full mt-6"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Custom Scroll Bar */}
        <div className="mt-5 w-full bg-gray-200 h-[3px] relative">
          <div
            className="bg-black h-[3px] absolute left-0 "
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
