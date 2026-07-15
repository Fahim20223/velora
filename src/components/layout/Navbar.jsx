import Link from "next/link";
import React from "react";
import Container from "../ui/Container";
import { FiShoppingBag } from "react-icons/fi";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
];

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-[0.2em] text-gray-900 transition-colors duration-300 hover:text-black"
            >
              VELORA
            </Link>

            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/cart"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-black"
              >
                <FiShoppingBag size={18} />
                <span>Cart</span>
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
