"use client";
import Image from "next/image";

export default function ProductHeroSection() {
  return (
    <div className="flex flex-col h-full w-full relative">
      <section className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full">
        {/* Left Content */}
        <div className="relative z-10 w-full">
          <div className="px-6 sm:px-10 md:px-20 py-15 sm:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 sm:mb-4 md:mb-0 fadeIn">
              Our<span className="text-primary"> Products</span>
            </h1>
            <h2 className="flex text-xl sm:text-2xl lg:text-3xl font-bold mt-4 fadeIn">
              High-Quality Spare Parts for Every Vehicle
            </h2>
            <p className="text-white font-light text-sm sm:text-xl leading-[30px] sm:leading-[34.5px] capitalize mt-8 max-w-xl fadeIn">
              "Explore a wide range of spare parts that guarantee performance,
              durability, and compatibility. Whether you need OEM components or
              trusted aftermarket alternatives, we’ve got exactly what your
              vehicle needs — all in one place.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-full h-full z-0">
          <Image
            src="/images/products_tyre.webp"
            alt="Tyre Background"
            fill
            className="object-cover object-center h-[400px] sm:h-full sm:w-full md:h-auto md:w-auto"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.65)] sm:bg-transparent"></div>
        </div>
      </section>
    </div>
  );
}
