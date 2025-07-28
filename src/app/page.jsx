import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import ProductSection from "@/components/home/ProductSection";
import { BrandPage } from "./brand/page";

export default function Home() {
  return (
    <div className="grid">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BrandPage />
    </div>
  );
}
