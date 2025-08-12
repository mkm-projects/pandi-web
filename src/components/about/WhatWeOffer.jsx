import Image from "next/image";

export function WhatWeOffer() {
  // Hardcoded offer list from en.json
  const offerList = [
    {
      title: "Wide Range of Products",
      description:
        "We stock an extensive selection of auto spare parts for all makes and models, ensuring you find exactly what you need.",
    },
    {
      title: "Quality You Can Trust",
      description:
        "Every product is sourced from trusted manufacturers, meeting high industry standards for performance and safety.",
    },
    {
      title: "Expert Customer Support",
      description:
        "Our knowledgeable team is here to help you choose the right parts and provide technical advice when needed.",
    },
  ];

  return (
    <section className="text-white">
      {/* Header with background image */}
      <div className="bg-cover bg-center text-center bg-primary mx-auto overflow-hidden">
        <div className="flex justify-between items-center max-w-9xl mx-auto">
          <Image
            src="/images/offer_bg_1.svg"
            alt="Offer spare part"
            width={200}
            height={200}
            className="translate-y-3 h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:w-auto"
          />
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-secondary w-full fadeIn">
            What We <span className="text-white">Offer</span>
          </h2>
          <Image
            src="/images/offer_bg_2.svg"
            alt="Offer spare part"
            width={200}
            height={200}
            className="-translate-y-3 h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:w-auto"
          />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-10xl mx-auto py-10 md:py-15 px-8 sm:px-10">
        {offerList.map((item, index) => (
          <div
            key={index}
            className="bg-card-custom-1 text-gray-900 rounded-xl py-10 px-6 transition"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-secondary fadeIn delay-75">
              {item.title}
            </h3>
            <p className="md:text-lg text-sm font-light leading-relaxed text-text-color fadeIn delay-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
