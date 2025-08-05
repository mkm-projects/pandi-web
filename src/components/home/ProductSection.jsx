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
        <p className="text-[#4C4C4C] font-light text-[14px] sm:text-[16px] leading-[30px] sm:leading-[34.5px] capitalize max-w-2xl mt-6 md:mt-8">
          {t("p1")}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 px-4 max-w-6xl mx-auto my-9 md:my-15">
        {productList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-3 md:p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="relative w-28 md:w-38 h-26 md:h-38 mx-auto mb-1 md:mb-4">
              <Image
                src={item.image}
                alt={tr(item.key)}
                fill
                objectFit="contain"
              />
            </div>
            <h3 className="text-[16px] md:text-[24px] font-light leading-[100%] tracking-normal text-center capitalize font-roboto">
              {tr(item.key)}
            </h3>
          </div>
        ))}
      </div>

      <div className="relative h-[150px] md:h-[260px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('/images/bg2.png')` }}
        ></div>
        <div className="absolute inset-0 bg-[#17181C]/70" />

        <div className="relative z-10 px-4 py-6 rounded text-white">
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] capitalize">
            {t("everything")}
          </h2>
          <h3 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] capitalize mt-6">
            {t("all")} <span className="text-primary">{t("place")}</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
