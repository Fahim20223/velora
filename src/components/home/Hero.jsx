"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

import heroImage from "@/assets/images/heroCouple.jpg";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#FAF8F5] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            {/* Left side */}
            <div>
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C19A6B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">
                  New Collection 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 lg:text-7xl">
                Timeless Fashion
                <br />
                <span className="text-[#C19A6B]">Made For You</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                Discover premium clothing crafted for comfort, confidence, and
                modern living. Elevate your wardrobe with timeless essentials
                designed for every occasion.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
                >
                  Shop Now
                </Link>

                <Link
                  href="/products"
                  className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:border-gray-900 hover:shadow-lg"
                >
                  Explore Collection
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
                  <p className="mt-1 text-sm text-gray-500">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                  <p className="mt-1 text-sm text-gray-500">Premium Products</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900">4.9★</h3>
                  <p className="mt-1 text-sm text-gray-500">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Background Decoration */}
              <div className="absolute -left-8 top-10 h-72 w-72 rounded-full bg-[#C19A6B]/10 blur-3xl" />

              {/* Image */}
              <Image
                src={heroImage}
                alt="Fashion Couple"
                priority
                className="relative z-10 w-full max-w-lg rounded-[40px] object-cover shadow-2xl"
              />

              {/* Floating Card
            <div className="absolute bottom-8 left-0 z-20 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm font-semibold text-gray-900">
                ⭐ 4.9 Customer Rating
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Trusted by 50,000+ shoppers
              </p>
            </div> */}
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default Hero;
