"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductNav() {
  const { countAllItems } = useCart();
  const cartItems = countAllItems();

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-[0_0_10px_#94a3b8] lg:justify-around lg:px-0">
      <Link className="items flex gap-2 text-indigo-700" href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-wallet-cards"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
          <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
        </svg>
        <span className="font-semibold tracking-wide">
          Sal<span className="text-green">la.</span>
        </span>
      </Link>

      <Link
        href={"/cart"}
        className="relative flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-bag cursor-pointer"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        {cartItems > 0 ? (
          <div className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1 translate-x-1 items-center justify-center rounded-[50%] bg-indigo-700 text-xs text-white">
            <p>{cartItems >= 9 ? "9+" : cartItems}</p>
          </div>
        ) : null}
      </Link>
    </header>
  );
}
