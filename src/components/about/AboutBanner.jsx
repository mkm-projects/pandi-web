'use client'

import { scrollAnimation } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export function AboutBanner() {
      useEffect(() => {
    scrollAnimation();
  }, []);
    return (
           <section className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full">
                {/* Left Content */}
                <div className="relative z-10 w-full">
                  <div className="px-6 sm:px-10 md:px-20 py-15 sm:py-24">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 sm:mb-4 md:mb-0 fadeIn">
                      About <span className="text-primary">Us</span>
                    </h1>
        
                    <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold max-w-xs sm:max-w-max">
                      <span className="fadeIn delay-75">
                        Trusted by Customers Since{" "}
                        <span className="text-primary fadeIn">1972</span>
                      </span>
                    </div>
        
                    <p className="text-white font-light text-md sm:text-xl leading-[30px] sm:leading-[34.5px] tracking-wide capitalize mt-6 max-w-3xl fadeIn delay-100">
                      Welcome to pandi Auto spare, your one-stop destination for high-quality spare parts for all types of vehicles. From everyday commuters to heavy-duty machines, we provide reliable solutions to keep you moving with confidence.
                    </p>
                  </div>
                </div>
        
                {/* Background Image (Right Half) */}
                <div className="absolute top-0 right-0 w-full h-full z-0">
                  <Image
                    src="/images/about-hero-section.webp"
                    alt="Car Background"
                    fill
                    priority
                    className="object-cover object-center h-[400px] sm:h-full sm:w-full md:h-auto md:w-auto"
                  />
        
                  {/* add overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.65)] sm:bg-transparent"></div>
                </div>
              </section>
    )
}