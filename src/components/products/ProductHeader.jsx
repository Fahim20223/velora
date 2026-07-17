import React from "react";
import Container from "../ui/Container";

const ProductHeader = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
            OUR COLLECTION
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-gray-900 md:text-6xl">
            All Products
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore our curated collection of timeless fashion pieces designed
            with premium quality, comfort, and modern simplicity.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProductHeader;
