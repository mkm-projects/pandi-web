import React from "react";
import { useTranslations } from "next-intl";

function KeySellingPointsSection() {
  const t = useTranslations("HomePage.HomeAbout");
  return (
    <div className="bg-primary text-white mt-10 sm:mt-16 py-6 sm:py-10 pl-3 sm:pl-3 md:pl-0">
      <div className="max-w-4xl mx-auto grid grid-cols-4 gap-2 px-4">
        <div className="flex flex-col items-center">
          <img
            src="/images/parts.png"
            alt="Affordable Auto Parts"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm whitespace-nowrap">
            {t("icons.parts")}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/brand.png"
            alt="Top Brands"
            className="w-9 md:w-17 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">{t("icons.brand")}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/quality.png"
            alt="Trusted Quality"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">{t("icons.quality")}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/images/delivery.png"
            alt="Secure Delivery"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">{t("icons.delivery")}</p>
        </div>
      </div>
    </div>
  );
}

export default KeySellingPointsSection;
