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
        className="h-auto w-full rounded-md md:w-[700px] lg:h-[450px] lg:w-[900px]"
      />
    </section>
  );
}
