import Link from "next/link";
import React from "react";

const Button = ({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200",

    secondary:
      "border border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900",

    ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-900",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
