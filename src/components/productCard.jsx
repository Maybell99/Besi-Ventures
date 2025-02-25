import React from "react";
import { PaystackButton } from "react-paystack";

const ProductCard = ({ name, price, image }) => {
  const publicKey = "pk_test_xxxxxxxxxxxxxxxxxxxxx"; // Replace with your Paystack Public Key
  const email = "customer@example.com"; // Replace with dynamic user email
  const amount = price * 100; // Convert price to kobo (Paystack's required format)

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Buy Now",
    onSuccess: () => alert("Payment Successful"),
    onClose: () => alert("Payment Cancelled"),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">${price}</p>
      <PaystackButton
        {...componentProps}
        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md cursor-pointer"
      />
    </div>
  );
};

export default ProductCard;
