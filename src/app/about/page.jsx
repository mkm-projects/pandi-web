import { MissionSection } from "@/components/about/MissionSection";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col h-full">
     <section className="relative bg-black text-white flex items-center justify-start overflow-hidden py-22 sm:py-18 md:14">
       {/* Left Content */}
       <div className="relative z-10 w-full md:w-1/2 px-4 sm:px-6 md:px-20 py-15 sm:py-24">

         <h1 className="text-[30px] sm:text-[40px] md:text-[60px] font-bold leading-tight">
           {t("HeroSection.title")} <span className="text-primary">{t("HeroSection.title1")}</span>
         </h1>

           <div className="flex items-center gap-2 text-[40px] font-bold">
            <span>
{t("HeroSection.title2")} 
            </span>

            <span className="text-primary">{t("HeroSection.title3")}</span>
           
           </div>
         <p className="text-white font-light text-[14px] sm:text-[16px] leading-[30px] sm:leading-[34.5px] capitalize mt-6 max-w-xl">
           {t("HeroSection.description")}
         </p>
       </div>
 
       {/* Background Image (Right Half) */}
       <div className="absolute top-0 right-0 w-full h-full z-0">
         <Image
           src="/images/about-hero-section.png"
           alt="Car Background"
           fill
           className="object-cover object-center"
           priority
         />
       </div>
 
       {/* Mobile Overlay for Readability */}
       <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black via-black/70 to-transparent z-0" />
     </section>

     <MissionSection />
     <WhatWeOffer />
     <WhyChooseUs />
    </div>

  );
}
