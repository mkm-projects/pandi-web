import HeroSection from "@/components/HeroSection";
import { AboutPage } from "./about/page";
import { ProductPage } from "./product/page";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid">

      <HeroSection />
      <AboutPage />
      <ProductPage />
      {/* <h2 className="text-primary">
        {t('title')}
      </h2>

      <Button className={"bg-primary"}>
        {t('description')}
      </Button> */}
    </div>
  );
}
