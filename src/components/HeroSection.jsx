"use client";
import { scrollAnimation } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    scrollAnimation();
  }, []);
  return (
    <div className="flex flex-col h-full w-full relative">
      <section className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full">
        {/* Left Content */}
        <div className="relative z-10 w-full">
          <div className="px-6 sm:px-10 md:px-20 py-15 sm:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap fadeIn">
              Your <span className="text-primary">Trusted</span>
              <br />
              Destination For <span className="text-primary">Quality</span>
              <br />
              Spare Parts
            </h1>
            <p className="text-white font-light text-base sm:text-xl leading-relaxed sm:leading-relaxed tracking-wide capitalize mt-6 max-w-3xl fadeIn">
              Discover a wide selection of OEM and aftermarket parts for all
              vehicle types. Genuine quality, competitive prices, and reliable
              performance guaranteed. Shop with confidence and keep your ride
              running smoothly.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-row gap-4 mb-8 sm:mb-0 fadeIn">
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
                  Book Now
                </button>
              </Link>

              <Link href="/products">
                <button className="bg-white text-black px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
                  Explore Parts
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Image (Right Half) */}
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <Image
            src="/images/heroSection.webp"
            alt="Car Background"
            fill
            className="object-cover object-center h-[400px] sm:h-full sm:w-full md:h-auto md:w-auto"
            priority
          />
          {/* add overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.65)] sm:bg-transparent"></div>
        </div>
      </section>
    </div>
  );
}
