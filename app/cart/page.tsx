"use client";

import React from "react";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartNav from "../components/CartNav";

export default function cart() {
  const {
    items: cartItems,
    updateCart,
    removeFromCart,
    countTotalPrice,
  } = useCart();

  return (
    <article className="grid min-h-dvh grid-rows-[auto_1fr]">
      <CartNav />

      <section
        className={
          cartItems.length === 0 ? "grid place-content-center gap-2" : "grid"
        }
      >
        {cartItems.length === 0 ? (
          <div className="grid place-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
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
            <p className="text-xl font-medium lg:text-3xl">
              Your Cart is empty.
            </p>
            <Link href={"/"}>
              <Button size={"sm"}>Back</Button>
            </Link>
          </div>
        ) : (
          <>
            <main className="container mx-auto w-full">
              {cartItems?.map((cartItem: any) => {
                return (
                  <div key={cartItem.product.id} className="px-8">
                    <div className="my-2 flex items-center justify-between lg:justify-around">
                      <div className="flex items-center gap-2">
                        <Image
                          src={cartItem.product.image}
                          alt={cartItem.product.title}
                          className="rounded-2xl object-cover shadow lg:h-24 lg:w-24"
                          width={64}
                          height={64}
                        />
                        <div className="">
                          <h2 className="font-semibold">
                            {cartItem.product.title}
                          </h2>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <span>{cartItem.count}</span>
                            <span>x</span>
                            <span>
                              {cartItem.count * cartItem.product.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          variant={"destructive"}
                          onClick={() => removeFromCart(cartItem.product)}
                          title="remove"
                          className="order-2 text-xs uppercase hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </Button>

                        <div className="flex items-center justify-between gap-2">
                          <button
                            onClick={() => updateCart(cartItem.product, -1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-minus text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12h8" />
                            </svg>
                          </button>
                          <span className="">{cartItem.count}</span>
                          <button
                            onClick={() => updateCart(cartItem.product, 1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-circle-plus text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="M8 12h8" />
                              <path d="M12 8v8" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="h-[0.8px] w-full rounded-2xl bg-secondary-foreground"></div>
                  </div>
                );
              })}
            </main>
            <div className="mt-auto p-4">
              <div className="grid place-content-center py-4">
                <h1 className="text-xl font-semibold uppercase">Total</h1>
                <p className="font-semibold">
                  <span className="font-normal text-gray-400">
                    The total of your cart is:
                  </span>{" "}
                  {countTotalPrice()} Dh
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </article>
  );
}
