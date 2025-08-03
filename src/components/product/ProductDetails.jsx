"use client";
import Image from "next/image";
import { productList } from "@/lib/data/products";
import { useTranslations } from "next-intl";

export default function ProductDetails() {
  const t = useTranslations("HomePage.HomeProduct");
  const tr = useTranslations("HomePage.HomeProduct.parts");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-4 max-w-6xl mx-auto my-9 md:my-15">
      {productList.map((item) => (
        <div
          key={item.key}
          className="bg-[#f7f7f7] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-[28px] font-bold mb-4 text-gray-800">
            <span className="text-black">{tr(`${item.key}_first`)}</span>{" "}
            <span className="text-red-600">{tr(`${item.key}_second`)}</span>
            {!tr(`${item.key}_third`).includes(
              "HomePage.HomeProduct.parts"
            ) && <span className="text-black">{tr(`${item.key}_third`)}</span>}
          </h2>

          <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4">
            <Image
              src={item.image}
              alt={tr(item.key)}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
            {tr(`${item.key}_desc`)}
          </p>
        </div>
      ))}
    </div>
  );
}
