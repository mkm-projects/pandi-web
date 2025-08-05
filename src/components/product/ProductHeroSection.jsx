"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProductHeroSection() {
  const t = useTranslations("ProductPage.HeroSection");
  return (
    <section className="relative  bg-black text-white flex items-center justify-start overflow-hidden py-22 sm:py-18 md:py-14">
      <div className="relative z-10 w-full md:w-1/2 px-4 sm:px-6 md:px-20 py-15 sm:py-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          {t("our")} <span className="text-primary">{t("products")} </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight whitespace-nowrap mt-8">
          {t("subtitle")}
        </h2>
        <p className="text-white font-light text-sm sm:text-xl leading-[30px] sm:leading-[34.5px] capitalize mt-8 max-w-xl">
          {t("description")}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Image
          src="/images/products_tyre.webp"
          alt="Car Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
    </section>
  );
}
