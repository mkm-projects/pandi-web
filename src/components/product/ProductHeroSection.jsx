"use client";
import Image from "next/image";

export default function ProductHeroSection() {
  return (
    <header
      className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full"
      aria-labelledby="products-hero-title"
    >
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1
          id="products-hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn"
        >
          Our <span className="text-primary">Products</span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold fadeIn">
          High-Quality Spare Parts for Every Vehicle
        </h2>

        <p className="mt-8 max-w-xl text-sm sm:text-xl font-light leading-relaxed fadeIn">
          Explore a wide range of spare parts that guarantee performance,
          durability, and compatibility. Whether you need OEM components or
          trusted aftermarket alternatives, we’ve got exactly what your vehicle
          needs — all in one place.
        </p>
      </div>

      {/* Background Image */}
      <Image
        src="/images/products_tyre.webp"
        alt="Close-up of a car tyre representing spare parts"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
    </header>
  );
}
