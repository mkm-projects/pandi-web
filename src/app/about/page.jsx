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
      <div className="max-w-9xl mx-auto">

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
      </div>
 
       {/* Background Image (Right Half) */}
       <div className="absolute top-0 right-0 w-full h-full z-0">
         <Image
           src="/images/about-hero-section.png"
           alt="Car Background"
          fill
           priority
           className="h-full object-cover w-full "
         />
       {/* <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black via-black/70 to-transparent z-0" /> */}
       </div>
 
       {/* Mobile Overlay for Readability */}
     </section>

     <MissionSection />
     <WhatWeOffer />
     <WhyChooseUs />
    </div>

  );
}
