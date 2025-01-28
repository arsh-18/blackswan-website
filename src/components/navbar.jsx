import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-100 border-b-2 border-black px-6 py-3 flex justify-between items-center fixed top-0 w-full z-50">
      {/* Left Logo */}
      <div className="text-xl font-bold">
        <Link to="/">Logo</Link>  {/* Clicking logo takes user to Home */}
      </div>
      
      {/* Right Navigation */}
      <ul className="flex space-x-6 text-black">
        <li className="hover:underline cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to="/services">Our Services</Link> {/* New Nav Link */}
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
