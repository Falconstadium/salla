import React, { useEffect, useState } from "react";
import { products } from "../assets/data";
import Products from "./Products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Cards from "./Cards";

export default function Hero() {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(products.slice(0, 8));
  }, []);

  return (
    <main className="container mx-auto grid gap-8 bg-background pt-4 pb-12">
      <Cards />
      <section className="grid gap-16 px-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 lg:px-0">
        {items?.map((item: any) => (
          <Products
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </section>
      <div className="mx-auto grid w-full gap-4 px-4 pt-12">
        <h2 className="text-center text-xl font-semibold capitalize lg:text-3xl">
          subscribe to our newsletter
        </h2>
        <div className="grid place-items-center gap-2">
          <Input
            type="email"
            placeholder="Email"
            className="font-medium md:max-w-md lg:max-w-lg"
          />
          <Button variant={"outline"} size={"sm"} type="submit">
            Subscribe
          </Button>
        </div>
      </div>
    </main>
  );
}
