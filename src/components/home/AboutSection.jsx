import { useTranslations } from "next-intl";
import KeySellingPointsSection from "../common/KeySellingPointsSection";

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
      <KeySellingPointsSection />
    </section>
  );
}
