import { useTranslations } from "next-intl";
import Image from "next/image";

export function MissionSection() {
  const t = useTranslations("AboutPage.MissionSection");
  return (
    <section className="bg-white py-10 md:py-24">
      <div className="max-w-6xl md:max-w-10xl mx-auto px-8 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="relative h-72 lg:h-[400px] w-full rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/aboutMission.png" // Replace with your actual path or use imported image
            fill
            alt="Engine Spare Part"
            className="rounded-xl object-cover lg:object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="text-[#1C1C1C] order-1 lg:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {t('titleLabel1')} <span className="text-primary font-bold">
              {t('titleLabel2')}
            </span>
          </h3>
          <p className="md:text-xl font-light text-gray-700 mb-8 leading-relaxed">
            {t('subtitle1')}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            {t('titleLabel3')} <span className="text-primary font-bold">
              {t('titleLabel4')}
            </span>
          </h3>
          <p className="md:text-xl font-light text-gray-700 leading-relaxed">
            {t('subtitle2')}
          </p>
        </div>
      </div>
    </section>
  );
}
