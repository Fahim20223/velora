import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
// import heroImage from "@/assets/images/hero-couple.jpg";
import heroImage from "@/assets/images/hero-couple.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left side */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              New Collection 2026
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
              Elevate Your
              <br />
              Everyday Style
            </h1>

            <p className="mb-8 max-w-lg text-lg leading-8 text-gray-600">
              Discover timeless fashion crafted for comfort, confidence, and
              modern living. Explore premium essentials designed to elevate your
              everyday wardrobe.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn btn-neutral rounded-full px-8"
              >
                Shop Now
              </Link>

              <Link
                href="/products"
                className="btn btn-outline rounded-full px-8"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={heroImage}
              alt="Fashion couple wearing modern clothing"
              priority
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
