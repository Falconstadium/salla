"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  const navLinks = [
    { id: 1, name: "home", href: "/" },
    { id: 2, name: "collection", href: "/collection" },
    { id: 3, name: "about", href: "/about" },
  ];

  const pathName = usePathname();

  const { countAllItems } = useCart();
  const cartItems = countAllItems();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background px-6 py-2 shadow-[0_0_10px_#94a3b8] lg:px-20 lg:py-4">
      <Link className="flex items-center gap-2 text-indigo-700" href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
      <nav className="hidden items-center gap-4 text-sm uppercase transition-all duration-150 lg:flex">
        {navLinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              key={link.id}
              className={
                isActive
                  ? "rounded bg-indigo-700 px-3 py-1 font-medium text-light"
                  : "rounded bg-transparent px-3 py-1 font-medium text-slate-950 transition-colors duration-200 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-foreground"
              }
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-3">
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
        <button
          onClick={toggleNav}
          className="transistion-all duration-300 ease-in-out"
        >
          {show ? (
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
              className="lucide lucide-x transition-all duration-200"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
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
              className="lucide lucide-align-justify transition-all duration-200 lg:hidden"
            >
              <path d="M3 12h18" />
              <path d="M3 18h18" />
              <path d="M3 6h18" />
            </svg>
          )}
        </button>
        <ModeToggle />
      </div>

      {show && (
        <nav className="absolute left-0 top-12 z-50 grid w-full bg-background px-0 py-4 text-center text-sm uppercase shadow-xl transition-all duration-300 ease-in-out">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.id}
                className={
                  isActive
                    ? "rounded bg-indigo-700 px-3 py-1 text-sm font-medium text-light"
                    : "rounded bg-transparent px-3 py-1 text-sm font-medium text-slate-950 transition-colors duration-200 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-foreground"
                }
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
