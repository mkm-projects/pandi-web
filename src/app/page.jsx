import HeroSection from "@/components/HeroSection";
import { AboutPage } from "./about/page";
import { ProductPage } from "./product/page";
import { BrandPage } from "./brand/page";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid">

      <HeroSection />
      <AboutPage />
      <ProductPage />
      <BrandPage />
      {/* <h2 className="text-primary">
        {t('title')}
      </h2>

      <Button className={"bg-primary"}>
        {t('description')}
      </Button> */}
    </div>
  );
}
