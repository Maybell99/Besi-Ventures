import React from "react";
import { Link } from "react-router-dom";

const ECommerceNavbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 flex justify-between items-center">
      {/* Logo / Brand Name */}
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
        Besi <span className="text-rose-600">Shop</span>
      </h1>

      {/* Home Button */}
      <Link to="/">
        <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 py-2 rounded-full shadow-md transition-all">
          Home
        </button>
      </Link>
    </nav>
  );
};

export default ECommerceNavbar;
