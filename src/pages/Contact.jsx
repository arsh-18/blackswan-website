import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! Name: ${formData.name}, Email: ${formData.email}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-12 lg:py-20">
        <div className="w-full max-w-[500px] mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Have a question? Send us a message and we'll get back to you soon.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg px-6 py-6 w-full border-2 border-black"
          >
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md text-base font-semibold hover:bg-gray-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-center py-3 text-sm">
        <p>&copy; Blackswan All Rights Reserved</p>
      </div>
    </>
  );
};

export default Contact;
