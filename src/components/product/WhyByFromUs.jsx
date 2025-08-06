import { useTranslations } from "next-intl";
import Image from "next/image";

export function WhyByFromUs({reasons}) {
  const t = useTranslations("ProductPage.WhyByFromUs");
  // const reasons = t.raw("reasons");

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-black leading-tight whitespace-nowrap">
              {t("titleLabel1")}{" "}
              <span className="text-red-600">
                {t("titleLabel2")}
                <span className="text-black"> {t("?")}</span>
              </span>
            </h2>

            <ul className="space-y-3 lg:space-y-4 text-left">
              {reasons.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Image
                      src="/images/check-icon.png"
                      alt="check"
                      width={20}
                      height={20}
                      className="w-5 h-5 text-red-600"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[280px] md:h-[320px] lg:h-[350px] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
            <Image
              src="/images/product_car.webp"
              alt="Engine Spare Part"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
