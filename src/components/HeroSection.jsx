'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from './ui/button';


export default function HeroSection() {
      const t = useTranslations('HomePage.HeroSection');

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-start overflow-hidden">
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 px-4 sm:px-6 md:px-20 py-15 sm:py-24">
        <h1 className="text-[30px] sm:text-[40px] md:text-[57.5px] font-bold leading-tight">
          {t('title1')} <span className="text-primary">{t('title2')}</span>
          <br />
          {t('title3')} <span className="text-primary">{t('title4')}</span>
          <br />
          {t('title5')}
        </h1>
        <p className="text-white font-light text-[14px] sm:text-[16px] leading-[30px] sm:leading-[34.5px] capitalize mt-6 max-w-xl">
          {t('description')}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-90 transition">
            {t('callAction1')}
          </Button>
          <Button className="bg-white text-black px-6 py-3 rounded-full font-medium border border-white hover:bg-primary hover:text-white transition">
            {t('callAction2')}
          </Button>

        </div>
      </div>

      {/* Background Image (Right Half) */}
      <div className="absolute top-0 right-0 w-full h-full z-0">
        <Image
          src="/images/heroSection.png"
          alt="Car Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile Overlay for Readability */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
    </section>
  );
}
