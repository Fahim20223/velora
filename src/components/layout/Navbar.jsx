"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../ui/Container";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-[0.2em] text-black"
          >
            VELORA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black"
            >
              <FiShoppingBag size={18} />
              Cart
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-gray-200 py-6 md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    pathname === link.href ? "text-black" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-base font-medium text-gray-600"
              >
                <FiShoppingBag size={18} />
                Cart
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
