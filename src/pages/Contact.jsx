import React, { useState, useEffect } from "react";
import productsData from "../data/products.json"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productsData && Array.isArray(productsData.products)) {
      setProducts(productsData.products);
    } else {
      console.error("productsData is not an array:", productsData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, product, message } = formData;
    const whatsappUrl = `https://wa.me/9873835613?text=${encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${product}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="min-h-screen mt-8 flex flex-col justify-center items-center bg-gray-100 px-4 py-12 lg:py-20">
        <div className="w-full max-w-[500px] mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Have a question? Send us a message and we'll get back to you soon.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg px-6 py-6 w-full border-2 border-black"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product"
              >
                Product you want to enquire about
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product"
                required
              >
                <option value="">Select a product</option>
                {products.map((product) => (
                  <option key={product.product_id} value={product.product_name}>
                    {product.product_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
