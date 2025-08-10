import { useTranslations } from "next-intl";
import KeySellingPointsSection from "../common/KeySellingPointsSection";
import Link from "next/link";

export function AboutSection() {
  const t = useTranslations("HomePage.HomeAbout");

  return (
    <section className="relative bg-white text-center">
      {/* Stats Row */}
      <div className="-mt-13 z-10 relative bg-primary text-white rounded-xl shadow-md flex justify-around items-center py-6 md:py-8 px-6 w-[90%] md:w-[70%] mx-auto gap-2 ">
        <div>
          <p className="text-2xl md:text-3xl font-bold">53+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3">
            {t("counts.yearsOfExperience")}
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">50M+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3">
            {t("counts.orderServedSuccess")}
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">10M+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3">
            {t("counts.satisfiedCustomers")}
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-3xl mx-auto mt-10 px-4 py-4 sm:py-8 md:py-14">
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] text-center capitalize mb-4">
          {t("about")} <span className="text-primary">{t("us")}</span>
        </h2>
        <p className="text-gray-700 font-light text-md md:text-xl leading-relaxed fadeIn mb-6">
          {t("p1")}
        </p>
        <p className="text-gray-700 font-light text-md md:text-xl leading-relaxed fadeIn mb-8">
          {t("p2")}
        </p>
        <Link href="/about">
          <button className="bg-primary text-white px-6 py-3 rounded-full font-light hover:opacity-90 transition">
            {t("callAction")}
          </button>
        </Link>
      </div>

      {/* Icons Row */}
      <KeySellingPointsSection />
    </section>
  );
}
