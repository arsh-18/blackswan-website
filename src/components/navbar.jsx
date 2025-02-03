import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-100 border-b-2 border-black px-6 py-3 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="text-xl font-bold">
        <Link to="/">B|S</Link>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-black">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/services">Our Services</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-black focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 right-6 w-48 bg-white border border-black rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col text-black p-4 space-y-3">
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/catalog" onClick={() => setIsOpen(false)}>Catalog</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
