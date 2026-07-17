"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { FiRefreshCcw, FiShield, FiTruck } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const ProductDetails = ({ product }) => {
  const {
    image,
    badge,
    category,
    name,
    rating,
    reviews,
    price,
    oldPrice,
    description,
    sizes,
    colors,
  } = product;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const { addToCart } = useCart();

  return (
    <div className="bg-white py-20">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="overflow-hidden rounded-3xl bg-[#f7f7f7]">
            <Image
              src={image}
              alt={name}
              width={900}
              height={1100}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Right */}
          <div>
            {/* Badge */}
            <span className="rounded-full bg-black px-4 py-2 text-xs font-medium uppercase tracking-widest text-white">
              {badge}
            </span>

            {/* Category */}
            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-gray-500">
              {category}
            </p>

            {/* Name */}
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-black lg:text-5xl">
              {name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-yellow-500">⭐ {rating}</span>

              <span className="text-gray-400">({reviews} Reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-bold text-black">৳ {price}</span>

              <span className="text-xl text-gray-400 line-through">
                ৳ {oldPrice}
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 leading-8 text-gray-600">{description}</p>

            {/* Color */}
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-black">
                Color
              </h3>

              <div className="flex gap-3">
                {colors.map((color) => (
                  <span
                    key={color}
                    className="rounded-full border border-gray-300 px-5 py-2 text-sm text-black"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-black">
                Size
              </h3>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 w-12 rounded-full border text-sm font-medium transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-black hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/*Add To Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-12 h-14 w-full rounded-full bg-black text-white transition hover:bg-gray-800"
            >
              Add To Cart
            </button>

            {/* Features */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-5">
                <FiTruck className="text-xl text-black" />
                <div>
                  <h4 className="font-medium text-black">Free Shipping</h4>
                  <p className="text-sm text-gray-500">On orders over ৳3000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-5">
                <FiRefreshCcw className="text-xl text-black" />
                <div>
                  <h4 className="font-medium text-black">Easy Returns</h4>
                  <p className="text-sm text-gray-500">7 day return policy</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-5">
                <FiShield className="text-xl text-black" />
                <div>
                  <h4 className="font-medium text-black">Secure Payment</h4>
                  <p className="text-sm text-gray-500">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
