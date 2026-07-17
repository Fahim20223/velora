import Container from "../ui/Container";
import ProductCard from "../products/ProductCard";
import products from "@/data/products";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <section className="py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
            New Arrivals
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
            Curated for Modern Living
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Discover timeless pieces crafted with premium materials, minimalist
            design, and effortless comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="
      rounded-full
      border
      border-black
      px-8
      py-4
      font-medium
      text-black
      transition
      hover:bg-black
      hover:text-white
    "
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
