import React from "react";
import Image from "../assets/images/9a72fa35-ebce-49cc-ba01-b5926f198f46.jpg";

const HeroSection = () => {
  return (
    <div
      className="text-center bg-rose-200 text-gold-400 py-20 px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="bg-black/50 py-20 px-10 rounded-lg">
        <h1 className="text-4xl font-bold text-white">
          Nutritious Snacks, Locally Made
        </h1>
        <p className="mt-4 text-lg text-white">
          Enjoy healthy and delicious millet & groundnut snacks.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
