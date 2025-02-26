import React from "react";

const testimonials = [
  { name: "Akosua", text: "This is the best millet product I have ever tried! Highly recommended!" },
  { name: "Leticia", text: "A delicious and nutritious meal. Perfect for my breakfast routine!" },
  { name: "Kwame", text: "Great taste and very easy to prepare. Will buy again!" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">What Our Customers Say</h2>
      <div className="mt-6 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <p className="italic text-gray-600">"{testimonial.text}"</p>
            <p className="mt-2 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
