import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 font-serif">
          About Us
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed font-light">
          At <span className="font-semibold text-rose-600">Besi Ventures</span>,
          we are committed to providing nutritious, locally sourced, and
          easy-to-eat meals. Our millet and groundnut-based snacks are crafted
          with care, ensuring authentic taste, high-quality ingredients, and
          maximum health benefits.  
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed font-light">
          We believe in promoting a healthy lifestyle while supporting
          sustainable farming and empowering local communities. Whether
          you're looking for a quick snack or a wholesome energy boost, our
          products offer the perfect balance of taste and nutrition.
        </p>
        <p className="mt-6 text-lg font-medium text-gray-800">
          🌿 Naturally Healthy | 🥜 Rich in Nutrients | 🍽️ Ready to Eat
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
