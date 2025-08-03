import { useTranslations } from "next-intl";
import Image from "next/image";


export function WhatWeOffer() {
  const t = useTranslations("AboutPage.OfferSection");
  const offerList = t.raw("offerList");
  return (
    <section className="text-white">
      {/* Header with background image */}
      <div
        className="bg-cover bg-center text-center bg-primary mx-auto overflow-hidden"
      >
        <div className="flex justify-between items-center max-w-9xl mx-auto">
         <Image
          src="/images/offer_bg_1.svg" // Replace with your actual path or use imported image
          alt="Offer spare part"
          width={200}
          height={200}
          className="translate-y-3 h-[100px] w-[100px] lg:w-auto"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-secondary w-full">
          {t("titleLabel1")} <span className="text-white">
            {t("titleLabel2")}
          </span>
        </h2>
         <Image
          src="/images/offer_bg_2.svg" // Replace with your actual path or use imported image
          alt="Offer spare part"
          width={200}
          height={200}
          className="-translate-y-3 h-[100px] w-[100px] lg:w-auto"
        />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-10xl mx-auto py-10 px-8 sm:px-10">
        {offerList.map((item, index) => (
          <div
            key={index}
            className="bg-card-custom-1 text-gray-900 rounded-xl py-10 px-6 transition"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
            <p className="text-lg md:text-xl font-light leading-relaxed text-text-color">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
