import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg';
import BestSellers from '../components/Bestsellers';
import InnovationSection from '../components/InnovationSection';
import SmallProductCard from '../components/SmallProductCard';

const Home = ({ products }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-auto py-10 px-5 lg:px-20">
        {/* Left - Text Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-serif leading-snug mt-6 lg:mt-10">
            Crafted to<br />
            seamlessly <br />
            blend <i>fashion</i><br />
            with <i>function</i>.
          </h1>
          <Link to="/catalog">
            <button className="mt-6 px-6 py-3 bg-black text-white uppercase w-full lg:w-1/2 text-xs mb-10">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right - Image Section */}
        <div className="lg:w-1/2 w-full h-[50vh] lg:h-[100vh]">
          <img
            src={image1}
            alt="Fashion Model"
            className="w-full h-full object-cover border-2 border-black"
          />
        </div>
      </div>
      <div className="w-full h-1 bg-black"></div>

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
            className="w-full object-cover h-[50vh] lg:h-[90vh] border-2 border-black" 
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
          {/* Add some space after the last card */}
          <div className="mt-5"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
