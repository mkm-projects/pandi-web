import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import ProductSection from "@/components/home/ProductSection";
import { BrandSection } from "@/components/home/BrandSection";

export default function Home() {
  return (
    <div className="grid">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BrandSection />
    </div>
  );
}
