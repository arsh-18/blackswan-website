import React from "react";
import image2 from "../assets/image2.jpg";

const InnovationSection = () => {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center flex items-center px-10"
      style={{
        backgroundImage: `url(${image2})`,
      }}
    >
      {/* White Bordered Box */}
      <div className="border-2 border-white p-6 w-[250px] h-[250px] ml-20 flex items-center justify-center">
        <h1 className="text-white text-3xl font-semibold uppercase leading-relaxed text-center">
          style. <br />
          technical. <br />
          innovate.
        </h1>
      </div>
    </div>
  );
};

export default InnovationSection;
