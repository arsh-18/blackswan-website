import React from "react";
import CatalogCard from "../components/CatalogCard";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";

const getImagePath = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};

const products = productsData.products.map((product) => ({
  id: product.product_id,
  name: product.product_name,
  image: product.images && product.images.length > 0 ? getImagePath(product.images[0]) : catalog,
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
              onClick={() => navigate(`/catalog/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;