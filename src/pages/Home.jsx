import React from 'react';
import image1 from '../assets/image1.jpg';
import BestSellers from '../components/Bestsellers';
import InnovationSection from '../components/InnovationSection';
import SmallProductCard from '../components/SmallProductCard';

const Home = ({ products }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-screen w-full">
        {/* Left - Text Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center px-10 lg:px-20 mt-10">
          <h1 className="text-4xl lg:text-6xl font-serif leading-snug mt-10">
            Crafted to<br />
            seamlessly <br />
            blend <i>fashion</i><br />
            with <i>function</i>.
          </h1>
          <button className="mt-6 px-6 py-3 bg-black text-white uppercase w-1/2 lg:w-1/3 text-xs mb-10">
            Shop New Arrivals
          </button>
        </div>

        {/* Right - Image Section */}
        <div className="lg:w-1/2 w-full h-[70vh] lg:h-[100vh]">
          <img
            src={image1}
            alt="Fashion Model"
            className="w-full h-full object-cover border-2 border-black"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-black"></div>

      {/* Best Sellers Section */}
      <div className="px-5 lg:px-20 my-20">
        <BestSellers />
      </div>

      {/* Innovation Section */}
      <div className="w-full">
        <InnovationSection />
      </div>

      {/* Shop the Look Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-20">
        {/* Left - Image */}
        <div className="lg:w-1/2 w-full p-5">
          <img 
            src={image1} 
            alt="Fashion Model" 
            className="w-full object-cover border-2 h-[90vh] border-black" 
          />
        </div>

        {/* Right - Text & Products */}
        <div className="lg:w-1/2 w-full text-center lg:text-left px-10">
          <h1 className="text-3xl lg:text-4xl font-bold italic mb-10">Shop the Look</h1>
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            {products.map((product, index) => (
              <SmallProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-10">
        <p>&copy; Blackswan All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Home;
