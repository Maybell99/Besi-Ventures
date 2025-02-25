import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import AboutSection from "../components/aboutSection";
import ProductsSection from "../components/productSection"
import Footer from "../components/footer";
import TestimonialsSection from "../components/testimonialsSection";
import ContactSection from "../components/contactSection";

const LandingPage = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default LandingPage;
