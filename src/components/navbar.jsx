import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo / Brand Name */}
      <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
        Besi <span className="text-rose-600">Ventures</span>
      </h1>

      {/* Shop Button */}
      <Link to="/shop">
        <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-5 py-2 rounded-full shadow-md transition-all">
          Visit Our Shop
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
