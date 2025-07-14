import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutPage() {
  const t = useTranslations("About.HomeAbout");
  return (
    <section className="relative bg-white text-center">
      <div className="-mt-13 z-10 relative bg-primary text-white rounded-xl mx-auto max-w-4xl shadow-md flex justify-around items-center py-8 px-6">
        <div>
          <p className="text-3xl font-bold">53+</p>
          <p className="text-sm mt-3">{t("counts.yearsOfExperience")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold">50M+</p>
          <p className="text-sm mt-3">{t("counts.orderServedSuccess")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold">10M+</p>
          <p className="text-sm mt-3">{t("counts.satisfiedCustomers")}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 px-4 py-14">
        <h2 className="font-bold text-[57.5px] leading-[100%] text-center capitalize mb-4">
          {t("about")} <span className="text-primary">{t("us")} </span>
        </h2>
        <p className="text-[#4C4C4C] font-light text-[16px] leading-[34.5px] text-center capitalize mb-6">
          {t("p1")}
        </p>
        <p className="text-[#4C4C4C] font-light text-[16px] leading-[34.5px] text-center capitalize mb-6">
          {t("p2")}
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full font-medium  hover:opacity-90 transition">
          {t("callAction")}
        </button>
      </div>

      <div className="bg-primary text-white mt-16 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/images/parts.png"
              alt="Affordable Auto Parts"
              className="w-15 h-15 mb-5"
            />
            <p className="text-sm">{t("icons.parts")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/brand.png"
              alt="Top Brands"
              className="w-17 h-15 mb-5"
            />
            <p className="text-sm">{t("icons.brand")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/quality.png"
              alt="Trusted Quality"
              className="w-15 h-15 mb-5"
            />
            <p className="text-sm">{t("icons.quality")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/delivery.png"
              alt="Secure Delivery"
              className="w-15 h-15 mb-5"
            />
            <p className="text-sm">{t("icons.delivery")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
