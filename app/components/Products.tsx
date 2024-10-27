"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products({ id, title, image, price }: any) {
  return (
    <div
      className="grid place-content-center place-items-center gap-4 overflow-hidden rounded-xl bg-secondary px-2 py-4 shadow-md"
      key={id}
    >
      <Image
        src={image}
        width={180}
        height={180}
        alt={title}
        placeholder="blur"
        className="cursor-pointer object-cover transition-all duration-200 ease-in-out hover:scale-110 lg:h-48 lg:w-48"
      />

      <div className="flex items-center justify-center gap-2">
        <h5 className="text-nowrap text-sm capitalize text-muted-foreground">
          {title}
        </h5>
        <h6 className="text-nowrap text-xl font-medium">{price} Dh</h6>
      </div>

      <Button variant={"green"} size={"sm"}>
        <Link className="flex items-center gap-1" href={`/shop/${id}`}>
          More Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-square-arrow-out-up-right"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
          </svg>
        </Link>
      </Button>
    </div>
  );
}
