import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import newsletterBg from "@/assets/images/newsletter.jpg";

const Newsletter = () => {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[40px]">
          {/* Background Image */}
          <Image
            src={newsletterBg}
            alt="Newsletter Background"
            className="h-[500px] w-full object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-3xl text-center text-white">
              <span className="text-xs uppercase tracking-[0.4em] text-gray-300">
                JOIN THE CLUB
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Stay Ahead of
                <br />
                Every Collection
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
                Be the first to discover new arrivals, exclusive drops, and
                curated fashion inspiration.
              </p>

              <form className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-full border border-white/30 bg-white/10 px-6 text-white placeholder:text-gray-300 outline-none backdrop-blur-md"
                />

                <button
                  type="submit"
                  className="h-14 rounded-full bg-white px-8 font-semibold text-black transition duration-300 hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
