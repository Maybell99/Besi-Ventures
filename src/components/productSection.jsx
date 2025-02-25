import React, { useState } from "react";
import ProductCard from "../components/productCard";
import One from "../assets/images/one.webp";
import Two from "../assets/images/two.webp";
import Three from "../assets/images/three.webp";

const ProductsSection = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Adds product to cart
    alert(`${product.name} added to cart!`); // Temporary alert for confirmation
  };

  const products = [
    { id: 1, name: "Millet & Groundnut Snack", price: "5.99", image: One },
    { id: 2, name: "Crunchy Groundnut Bars", price: "4.99", image: Two },
    { id: 3, name: "Nutty Millet Delight", price: "6.49", image: Three },
  ];

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
      <p className="text-gray-600 mt-2">
        Enjoy our selection of healthy, locally made snacks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      {/* Display Cart Items */}
      <div className="mt-8 text-left">
        <h3 className="text-2xl font-bold">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border p-2 rounded bg-gray-100">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
