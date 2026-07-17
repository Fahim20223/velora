import ProductDetails from "@/components/products/ProductDetails";
import products from "@/data/products";
import { notFound } from "next/navigation";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
