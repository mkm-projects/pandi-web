import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("HomePage.HomeAbout");

  return (
    <section className="relative bg-white text-center">
      {/* Stats Row */}
      <div className="-mt-13 z-10 relative bg-primary text-white rounded-xl shadow-md flex justify-around items-center py-6 md:py-8 px-6 w-[90%] md:w-[70%] mx-auto">
        <div>
          <p className="text-1xl md:text-3xl font-bold">53+</p>
          <p className="text-[10px] md:text-sm mt-1 md:mt-3">
            {t("counts.yearsOfExperience")}
          </p>
        </div>
        <div>
          <p className="text-1xl md:text-3xl font-bold">50M+</p>
          <p className="text-[10px] md:text-sm mt-1 md:mt-3">
            {t("counts.orderServedSuccess")}
          </p>
        </div>
        <div>
          <p className="text-1xl md:text-3xl font-bold">10M+</p>
          <p className="text-[10px] md:text-sm mt-1 md:mt-3">
            {t("counts.satisfiedCustomers")}
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-3xl mx-auto mt-10 px-4 py-4 sm:py-8 md:py-14">
        <h2 className="font-bold text-[38px] sm:text-[57.5px] leading-[100%] text-center capitalize mb-4">
          {t("about")} <span className="text-primary">{t("us")}</span>
        </h2>
        <p className="text-[#4C4C4C] font-light text-[14px] sm:text-[16px] leading-[30px] sm:leading-[34.5px] text-center capitalize mb-6">
          {t("p1")}
        </p>
        <p className="text-[#4C4C4C] font-light text-[14px] sm:text-[16px] leading-[30px] text-center capitalize mb-6">
          {t("p2")}
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
          {t("callAction")}
        </button>
      </div>

      {/* Icons Row */}
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
    </section>
  );
}
