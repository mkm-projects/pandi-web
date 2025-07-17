import Image from "next/image";
import { useTranslations } from "next-intl";
import { brandList } from "@/lib/data/brands";

export function BrandPage() {
  const t = useTranslations("Brand.HomeBrand");
  return (
    <section className="py-10 bg-white">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="font-bold text-[57.5px] leading-[100%] capitalize">
          {t("brand")} <span className="text-primary">{t("trus")}</span>
        </h2>
        <p className="text-[#4C4C4C] font-light text-[16px] leading-[34.5px] capitalize max-w-2xl mt-8">
          {t("p1")}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto my-15">
        {brandList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="relative w-30 h-18 mx-auto">
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
