import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { image, name, category, price } = product;

  return (
    <article className="group cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
        {/* Wishlist */}
        {/* <button
          className="
            absolute
            top-5
            right-5
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            opacity-0
            shadow-sm
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <FiHeart className="text-lg" />
        </button> */}

        <Image
          src={image}
          alt={name}
          width={700}
          height={900}
          className="
            h-[420px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-gray-900">{name}</h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">৳ {price}</span>

          <button className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3 text-black">
            View
            <FiArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
