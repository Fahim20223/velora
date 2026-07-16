import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import {
  //   FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral-950 text-white">
        <Container>
          {/* Top */}
          <div className="border-b border-white/10 py-20 text-center">
            <h2 className="text-5xl font-bold tracking-[0.3em] text-white">
              VELORA
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Timeless fashion crafted for modern lifestyles. Premium quality,
              effortless style, and everyday confidence.
            </p>

            <div className="mt-10 flex justify-center gap-8">
              <Link
                href="/"
                className="text-gray-400 transition duration-300 hover:text-white"
              >
                <FiInstagram size={22} />
              </Link>

              <Link
                href="/"
                className="text-gray-400 transition duration-300 hover:text-white"
              >
                <FiFacebook size={22} />
              </Link>

              <Link
                href="/"
                className="text-gray-400 transition duration-300 hover:text-white"
              >
                <FiTwitter size={22} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
            <div>
              <h3 className="mb-5 font-semibold text-white">Shop</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/">New Arrivals</Link>
                </li>
                <li>
                  <Link href="/">Men</Link>
                </li>
                <li>
                  <Link href="/">Women</Link>
                </li>
                <li>
                  <Link href="/">Accessories</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-white">Company</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Journal</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-white">Support</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/">Help Center</Link>
                </li>
                <li>
                  <Link href="/">Returns</Link>
                </li>
                <li>
                  <Link href="/">Shipping</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 font-semibold text-white">Contact</h3>

              <p className="text-gray-400">hello@velora.com</p>
              <p className="mt-3 text-gray-400">Chattogram, Bangladesh</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-gray-500 md:flex-row">
            <p>© 2026 Velora. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/">Privacy</Link>
              <Link href="/">Terms</Link>
              <Link href="/">Cookies</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
