import { brandList } from "@/lib/data/brands";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function BrandSection() {
  const t = useTranslations("HomePage.HomeBrand");

  return (
    <section className="py-2 md:py-10 bg-white">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="font-bold text-[38px] sm:text-[57.5px] leading-[100%] capitalize">
          {t("brand")} <span className="text-primary">{t("trus")}</span>
        </h2>
        <p className="text-[#4C4C4C] font-light text-[14px] sm:text-[16px] leading-[30px] sm:leading-[34.5px] capitalize max-w-2xl mt-8">
          {t("p1")}
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 px-4 max-w-6xl mx-auto my-8 md:my-15">
        {brandList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="relative w-15 md:w-30 h-9 md:h-18 mx-auto">
              <Image
                src={item.image}
                alt={item.key}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
