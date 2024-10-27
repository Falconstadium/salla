"use client";

import { products } from "@/app/assets/data";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import ProductNav from "@/app/components/ProductNav";
import AddToCart from "@/app/components/AddToCart";

export default function ProductPage() {
  const { id } = useParams();

  console.log(id);

  let productArray: any = [];
  if (Array.isArray(id)) {
    productArray = id
      .map((idItem) =>
        products.find((product) => product.id === parseInt(idItem)),
      )
      .filter(Boolean);
  } else {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      productArray = [product];
    }
  }

  if (productArray.length === 0) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-4">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <article className="grid min-h-dvh grid-rows-[auto_1fr]">
      <ProductNav />
      <div className="container mx-auto flex w-full flex-col items-center justify-center p-4">
        {productArray.map((product: any) => (
          <div
            key={product.id}
            className="grid place-items-center gap-4 lg:grid-cols-2"
          >
            <Image
              src={product.image}
              width={230}
              height={230}
              alt={product.title}
              className="ease cursor-pointer rounded-2xl object-cover shadow-md transition-all duration-200 hover:scale-110 lg:h-80 lg:w-80"
            />
            <div className="flex w-full flex-col items-center gap-4 px-16 pt-4">
              <h5 className="text-nowrap text-3xl font-semibold capitalize lg:text-6xl">
                {product.title}
              </h5>
              <p className="text-xl font-medium">{product.price} Dh</p>
              <AddToCart product={product} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
