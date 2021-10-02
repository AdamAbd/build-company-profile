import React from "react";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative">
      <img src="/bg-img-hero.jpg" className="object-cover w-full h-screen" />
      <div className="container mx-auto">
        <div className="absolute top-0">
          <h3 className="text-white text-3xl font-semibold pt-56">
            Supplying across the globe
          </h3>
          <h1 className="text-white text-6xl font-semibold pt-4 w-7/12 tracking-wide">
            The Leading Supplier of Coconut Product
          </h1>
          <Link href="/">
            <a
              className="border border-white text-white hover:text-green-700 hover:bg-white rounded-md transition py-3 px-10 mt-14 font-semibold text-lg inline-block"
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
