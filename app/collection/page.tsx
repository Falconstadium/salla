"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { products } from "../assets/data";
import { Input } from "@/components/ui/input";

export default function collection() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("");

  return (
    <article className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main className="container mx-auto grid gap-16 px-8 py-8 lg:gap-12 lg:px-4 lg:py-12">
        <div>
          <Input
            className="mx-auto w-full lg:max-w-lg"
            type="search"
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
            })
            .map((item) => (
              <Products
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
        </div>
      </main>
      <footer className="bg-indigo-700 py-4 text-center text-white">
        2024 &copy;
      </footer>
    </article>
  );
}
