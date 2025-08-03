import { MissionSection } from "@/components/about/MissionSection";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("AboutPage.HeroSection");
  return (
    <div className="flex flex-col h-full w-full relative">
      <section className="relative text-white flex items-center justify-start h-full min-h-screen">
        {/* Left Content */}
        <div className="relative z-10 w-full">
          <div className="px-4 sm:px-6 md:px-20 py-15 sm:py-24">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-2 sm:mb-4 md:mb-0">
              {t("titleLabel1")}{" "}
              <span className="text-primary">{t("titleLabel2")}</span>
            </h1>

            <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-[40px] font-bold max-w-xs sm:max-w-max">
              <span>
                {t("subtitleLabel1")}{" "}
                <span className="text-primary">{t("subtitleLabel2")}</span>
              </span>
            </div>
            <p className="text-white font-light text-lg sm:text-xl md:text-2xl leading-[30px] sm:leading-[34.5px] tracking-wide capitalize mt-6 max-w-3xl">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Background Image (Right Half) */}
        <div className="absolute top-0 right-0 w-full h-full z-0">
          <Image
            src="/images/about-hero-section.png"
            alt="Car Background"
            fill
            priority
            className="h-full object-cover object-center w-full md:h-auto md:w-auto"
          />

          {/* add overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] sm:bg-transparent"></div>
        </div>

        {/* Mobile Overlay for Readability */}
      </section>

      <MissionSection />
      <WhatWeOffer />
      <WhyChooseUs />
    </div>
  );
}
