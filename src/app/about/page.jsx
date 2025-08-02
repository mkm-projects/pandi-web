import { MissionSection } from "@/components/about/MissionSection";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col h-full w-full relative ">
     <section className="relative text-white flex items-center justify-start h-full min-h-screen">
       {/* Left Content */}
         <div className="relative z-10 w-full">
      <div className="max-w-10xl mx-auto px-6 sm:px-10 xl:px-20">

         <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-2 sm:mb-4 md:mb-0">
           {t("HeroSection.title")} <span className="text-primary">{t("HeroSection.title1")}</span>
         </h1>

           <div className="flex items-center gap-2 text-3xl md:text-4xl font-bold max-w-xs sm:max-w-max">
            <span>
{t("HeroSection.title2")} <span className="text-primary">{t("HeroSection.title3")}</span>
            </span>
           
           </div>
         <p className="text-white font-light text-sm sm:text-lg leading-[30px] sm:leading-[34.5px] capitalize mt-6 max-w-xl">
           {t("HeroSection.description")}
         </p>
       </div>
      </div>
 
       {/* Background Image (Right Half) */}
       <div className="absolute top-0 right-0 w-full h-full z-0">
         <Image
           src="/images/about-hero-section.png"
           alt="Car Background"
          fill
           priority
           className="h-full object-cover object-center w-full md:h-auto md:w-auto"
         />
       </div>
 
       {/* Mobile Overlay for Readability */}
     </section>

     <MissionSection />
     <WhatWeOffer />
     <WhyChooseUs />
    </div>

  );
}
