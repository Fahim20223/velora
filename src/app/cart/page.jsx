"use client";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-24 bg-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black">
              Your Cart is Empty
            </h1>
            <p className="mt-3 text-gray-600">
              Looks like you have not added anything yet
            </p>
            <Link
              href={"/products"}
              className="mt-7 inline-block rounded-full bg-black px-7 py-3 text-white transition hover:bg-gray-700"
            >
              Continue Shopping
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <Container>
        <h1 className="mb-12 text-4xl font-bold text-black">Shopping Cart</h1>

        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-3xl border border-gray-800 p-6 md:flex-row md:items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={140}
                height={160}
                className="rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-black">
                  {item.name}
                </h2>

                <p className="mt-2 text-gray-500">{item.category}</p>

                <p className="mt-4 font-semibold text-black">৳ {item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-red-500"
                >
                  <FaMinus />
                </button>

                <span className="w-8 text-center font-semibold text-gray-900">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 text-green-500"
                >
                  <FaPlus />
                </button>
              </div>

              <div className="text-right">
                <p className="font-semibold text-black">
                  ৳ {item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-gray-500 pt-8">
          <h2 className="text-2xl font-bold text-black">Total</h2>

          <h2 className="text-3xl font-bold text-black">৳ {totalPrice}</h2>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
