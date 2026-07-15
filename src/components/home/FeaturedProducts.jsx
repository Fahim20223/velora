import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";
import menImage from "@/assets/images/categories/men.jpg";
import womenImage from "@/assets/images/categories/women.jpg";
import accessoriesImage from "@/assets/images/categories/accessories.jpg";
import footwearImage from "@/assets/images/categories/footwear.jpg";

const FeaturedProducts = () => {
  const categories = [
    {
      name: "Men",
      image: menImage,
      href: "/products?category=men",
    },
    {
      name: "Women",
      image: womenImage,
      href: "/products?category=women",
    },
    {
      name: "Accessories",
      image: accessoriesImage,
      href: "/products?category=accessories",
    },
    {
      name: "Footwear",
      image: footwearImage,
      href: "/products?category=footwear",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C19A6B]">
            Categories
          </p>

          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            Shop By Category
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover carefully curated collections designed for every occasion,
            every season, and every style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-[28px]"
            >
              <div className="relative h-[450px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white">
                    {category.name}
                  </h3>

                  <span className="mt-2 inline-block text-sm font-medium text-white transition group-hover:translate-x-2">
                    Shop Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
