import Image from "next/image";
import React from "react";
import banner from "../assets/banner.png";

export default function Cards() {
  return (
    <section className="relative flex justify-center px-4">
      <Image
        src={banner}
        placeholder="blur"
        width={350}
        height={200}
        alt="banner"
        className="rounded md:h-[500px] md:w-full"
      />
    </section>
  );
}
