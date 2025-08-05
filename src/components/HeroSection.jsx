"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <section className="relative bg-black text-white flex items-center justify-start overflow-hidden py-22 sm:py-18 md:py-14 min-h-screen">
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-7/12 px-4 sm:px-6 md:px-40 py-15 sm:py-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight whitespace-nowrap">
          {t("title1")} <span className="text-primary">{t("title2")}</span>
          <br />
          {t("title3")} <span className="text-primary">{t("title4")}</span>
          <br />
          {t("title5")}
        </h1>
        <p className="text-white font-light text-lg sm:text-xl md:text-2xl leading-[30px] sm:leading-[34.5px] tracking-wide capitalize mt-6 max-w-3xl">
          {t("description")}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-row gap-4">
          {/* <Button className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
            {t('callAction1')}
          </Button>
          <Button className="bg-white text-black px-6 py-3 rounded-full font-medium border border-white hover:bg-primary hover:text-white transition">
            {t('callAction2')}
          </Button> */}
          <button className="bg-primary text-white px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
            {t("callAction1")}
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
            {t("callAction2")}
          </button>
        </div>
      </div>

      {/* Background Image (Right Half) */}
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Image
          src="/images/heroSection.png"
          alt="Car Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile Overlay for Readability */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
    </section>
  );
}
