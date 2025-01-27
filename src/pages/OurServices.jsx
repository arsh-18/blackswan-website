import React from "react";
import image1 from "../assets/image1.jpg";

const services = [
  {
    title: "Custom Tailoring & Alterations",
    description: "Get perfect fits with our professional tailoring and alteration services. We ensure every piece matches your exact size and style.",
    image: image1,
    reverse: false, // Image on left
  },
  {
    title: "Personal Styling & Fashion Consultation",
    description: "Our fashion experts help you curate the perfect wardrobe for any occasion. From casual to formal, we’ve got you covered.",
    image: image1,
    reverse: true, // Image on right
  },
  {
    title: "Exclusive Collection Previews",
    description: "Be the first to access our latest collections. Sign up for early previews and enjoy special discounts.",
    image: image1,
    reverse: false, // Image on left
  },
  {
    title: "24/7 Customer Support",
    description: "Our support team is available round-the-clock to assist you with your purchases, returns, and style queries.",
    image: image1,
    reverse: true, // Image on right
  },
];

const OurServices = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-20 text-center">
  <h1 className="text-3xl font-bold mb-20">Our Services</h1>

  <div className="space-y-16 w-full max-w-4xl">
    {services.map((service, index) => (
      <div key={index} className={`flex flex-col md:flex-row items-center ${service.reverse ? "md:flex-row-reverse" : ""} gap-10`}>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={service.image} alt={service.title} className="rounded-lg shadow-lg w-[500px] h-[400px] object-cover" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-left flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-gray-700">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
  {/* Footer */}
 
</div>
<div className="bg-black text-white text-center py-3 text-sm">
        <p>&copy; Blackswan All Rights Reserved</p>
      </div>
</>
  );
};

export default OurServices;
