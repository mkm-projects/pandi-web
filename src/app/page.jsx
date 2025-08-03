import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BrandSection } from "@/components/home/BrandSection";
import ProductSection from "@/components/home/ProductSection";

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
