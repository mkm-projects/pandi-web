"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("HomePage.HeroSection");

  return (
    <div className="flex flex-col h-full w-full relative">
      <section className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full">
        {/* Left Content */}
        <div className="relative z-10 w-full">
          <div className="px-6 sm:px-10 md:px-20 py-15 sm:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
              {t("title1")} <span className="text-primary">{t("title2")}</span>
              <br />
              {t("title3")} <span className="text-primary">{t("title4")}</span>
              <br />
              {t("title5")}
            </h1>
            <p className="text-white font-light text-base sm:text-xl leading-relaxed sm:leading-relaxed tracking-wide capitalize mt-6 max-w-3xl animate-fadeIn delay-100">
              {t("description")}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-row gap-4 mb-8 sm:mb-0">
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
                  {t("callAction1")}
                </button>
              </Link>

              <Link href="/products">
                <button className="bg-white text-black px-6 py-3 rounded-full font-thin hover:opacity-90 transition">
                  {t("callAction2")}
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
