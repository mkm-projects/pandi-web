"use client";
import { productList } from "@/lib/data/products";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 max-w-6xl mx-auto my-8 md:my-16">
      {productList.map((item) => (
        <div
          key={item.key}
          className="bg-[#f7f7f7] rounded-xl p-4 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-tight">
            <span className={item.heading.first.color}>
              {item.heading.first.text}
            </span>
            {item.heading.second && (
              <>
                {" "}
                <span className={item.heading.second.color}>
                  {item.heading.second.text}
                </span>
              </>
            )}
            {item.heading.third && (
              <>
                {" "}
                <span className={item.heading.third.color}>
                  {item.heading.third.text}
                </span>
              </>
            )}
          </h2>

          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 fadeIn">
            <Image
              src={item.image}
              alt={item.key}
              fill
              className="object-contain"
            />
          </div>

          <p className="md:text-lg text-sm font-light leading-relaxed text-text-color fadeIn delay-100 fadeIn">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
