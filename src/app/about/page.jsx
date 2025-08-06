'use client';

import { MissionSection } from "@/components/about/MissionSection";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
import { CommonQuestions } from "@/components/common/CommonQuestions";
import { CHOOSE_AS_QUESTIONS } from "@/lib/data/common";
import { scrollAnimation } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {

  const t = useTranslations("AboutPage.HeroSection");
    useEffect(() => {
    scrollAnimation();
  }, []);
  return (
    <div className="flex flex-col h-full w-full relative">
      <section className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full">
        {/* Left Content */}
        <div className="relative z-10 w-full">
          <div className="px-6 sm:px-10 md:px-20 py-15 sm:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 sm:mb-4 md:mb-0 fadeIn">
              {t("titleLabel1")}{" "}
              <span className="text-primary">{t("titleLabel2")}</span>
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold max-w-xs sm:max-w-max">
              <span className="fadeIn delay-75">
                {t("subtitleLabel1")}{" "}
                <span className="text-primary fadeIn">{t("subtitleLabel2")}</span>
              </span>
            </div>
            <p className="text-white font-light text-md sm:text-xl leading-[30px] sm:leading-[34.5px] tracking-wide capitalize mt-6 max-w-3xl fadeIn delay-100">
              {t("description")}
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

        {/* Mobile Overlay for Readability */}
      </section>

      <MissionSection />
      <WhatWeOffer />
      <CommonQuestions reasons={CHOOSE_AS_QUESTIONS} title1={"Why"} title2={"Choose Us?"} imgSrc={"/images/about-engine-parts.webp"} />
    </div>
  );
}
