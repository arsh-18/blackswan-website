import React from "react";
import CatalogCard from "../components/CatalogCard";
import { useNavigate } from "react-router-dom";
import catalog from "../assets/catalog.jpeg";

const products = Array.from({ length: 22 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$${(index + 1) * 10}`,
  image: catalog,
}));

const CatalogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-8 ml-10 mr-10">
        <h1 className="text-3xl font-bold text-center mb-8 mt-20">Discover Our Latest Collection</h1>

        <div className="flex flex-wrap gap-20 justify-center items-start">
          {products.map((product) => (
            <CatalogCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-200 mt-12 p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="flex justify-center space-x-8">
          <img src="https://via.placeholder.com/100" alt="Company Logo" />
          <img src="https://via.placeholder.com/100" alt="Company Logo" />
          <img src="https://via.placeholder.com/100" alt="Company Logo" />
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black text-white text-center py-5">
        <p>&copy; Blackswan All Rights Reserved</p>
      </div>
    </>
  );
};

export default CatalogPage;
