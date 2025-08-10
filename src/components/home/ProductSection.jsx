import { productList } from "@/lib/data/products";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProductSection() {
  const t = useTranslations("HomePage.HomeProduct");
  const tr = useTranslations("HomePage.HomeProduct.parts");

  return (
    <section className="py-15 md:py-20 bg-white">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] capitalize">
          {t("explore")} <span className="text-primary">{t("products")}</span>
        </h2>
        <p className="text-gray-700 text-base md:text-xl font-light leading-relaxed fadeIne max-w-2xl mt-6 md:mt-8">
          {t("p1")}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 max-w-6xl mx-auto my-8 md:my-16">
        {productList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-3 md:p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 h-20 sm:h-24 md:h-28 lg:h-32 mx-auto mb-2 md:mb-4">
              <Image
                src={item.image}
                alt={tr(item.key)}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-tight text-center capitalize font-roboto">
              {tr(item.key)}
            </h3>
          </div>
        ))}
      </div>

      <div className="relative min-h-[150px] md:h-[260px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('/images/bg2.png')` }}
        ></div>
        <div className="absolute inset-0 bg-[#17181C]/70" />

        <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 rounded text-white max-w-full">
          <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight capitalize break-words">
            {t("everything")}
          </h2>
          <h3 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight capitalize mt-3 sm:mt-4 md:mt-6 break-words">
            {t("all")} <span className="text-primary">{t("place")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
