import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-black">404</h1>

        <h2 className="mt-6 text-3xl font-semibold text-black">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-black px-8 py-4 font-medium text-white transition hover:bg-gray-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
