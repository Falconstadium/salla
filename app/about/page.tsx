import React from "react";
import { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "About",
};

export default function about() {
  return (
    <article className="grid min-h-dvh w-full grid-rows-[auto_1fr_auto]">
      <Navbar />
      <section className="grid place-content-center gap-4">
        <h2 className="text-center text-3xl font-semibold">About:</h2>
        <p className="px-6 text-justify leading-relaxed md:max-w-md">
          Welcome to Salla Collection, where elegance meets comfort. Our curated
          selection of sports is designed to transform your
          life into a sanctuary of style and tranquility. Discover the perfect balance of
          beauty and functionality with Salla Collection.
        </p>
      </section>
      <footer className="bg-indigo-700 py-4 text-center text-white">
        2024 &copy;
      </footer>
    </article>
  );
}
