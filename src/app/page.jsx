import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default Home;
