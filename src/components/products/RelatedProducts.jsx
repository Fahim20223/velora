import products from "@/data/products";
import React from "react";
import Container from "../ui/Container";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ currentProduct }) => {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="bg-white py-20">
      <Container>
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
            You May Also Like
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-black">
            Related Products
          </h2>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RelatedProducts;
