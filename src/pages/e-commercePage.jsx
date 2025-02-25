import React from "react";
import ECommerceNavbar from "../pages/e-commerceNavbar";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";
import One from "../assets/images/one.webp";
import Two from "../assets/images/two.webp";
import Three from "../assets/images/three.webp";

const ECommercePage = () => {
  const products = [
    { id: 1, name: "Millet & Groundnut Snack", price: 5.99, image: One },
    { id: 2, name: "Crunchy Groundnut Bars", price: 4.99, image: Two },
    { id: 3, name: "Nutty Millet Delight", price: 6.49, image: Three },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <ECommerceNavbar />
      <div className="p-10">
        {/* E-Commerce Tasks Section */}
       

        {/* Product Section */}
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommercePage;
