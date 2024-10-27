import React from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartNav() {
  const {
    items: cartItems,

    clearCart,
  } = useCart();

  return (
    <header className="flex items-center justify-between px-8 py-2 shadow-sm lg:justify-around lg:px-0">
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
      <Button
        variant={cartItems.length === 0 ? "ghost" : "outline"}
        onClick={clearCart}
        className={
          cartItems.length === 0 ? "cursor-not-allowed uppercase" : "uppercase"
        }
        size={"sm"}
      >
        Clear
      </Button>
    </header>
  );
}
