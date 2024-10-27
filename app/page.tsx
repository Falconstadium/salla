"use client";

import Image from "next/image";
import { products } from "./assets/data";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Hero />
      <Footer />
    </article>
  );
}
