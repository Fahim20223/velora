"use client";
import Image from "next/image";
import Link from "next/link";
// import { FiHeart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const { slug, image, badge, category, name, price, oldPrice } = product;

  return (
    <Link href={`/products/${slug}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl bg-[#f7f7f7]">
        {/* Badge */}
        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-medium text-black shadow">
            {badge}
          </span>
        )}

        {/* Wishlist */}
        {/* <button
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110"
          onClick={(e) => e.preventDefault()}
        >
          <FiHeart size={18} />
        </button> */}

        <Image
          src={image}
          alt={name}
          width={700}
          height={900}
          className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-black transition group-hover:underline">
          {name}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-semibold text-black">৳ {price}</span>

          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳ {oldPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
