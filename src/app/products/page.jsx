"use client";
import ProductCard from "@/components/products/ProductCard";
import ProductHeader from "@/components/products/ProductHeader";
import Container from "@/components/ui/Container";
import products from "@/data/products";
import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Hoodie",
  "T-Shirt",
  "Shirt",
  "Shoes",
  "Accessories",
  "Bottoms",
  "Sweatshirt",
];

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteringProducts = useMemo(() => {
    let data = [...products];

    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }
    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }
    return data;
  }, [search, selectedCategory, sort]);

  return (
    <div className="bg-white">
      <ProductHeader />

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 w-full rounded-full border border-gray-300 bg-white pl-14 pr-5 outline-none focus:border-black text-black"
              />
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-14 rounded-full border border-gray-300 bg-white px-6 outline-none text-black"
            >
              <option value="newest">Newest</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
            </select>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-black">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "border border-gray-300 bg-white hover:border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 mb-8 flex items-center justify-between text-black">
            <h3 className="text-xl font-semibold">
              {filteringProducts.length} Products
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          >
            {filteringProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default ProductPage;
