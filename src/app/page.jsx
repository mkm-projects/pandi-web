import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BrandSection } from "@/components/home/BrandSection";
import ProductSection from "@/components/home/ProductSection";
import MainLayout from "@/components/mainLayout";

export const metadata = {
  title: "Pandi Web — Automotive Spare Parts",
  description: "OEM & aftermarket spare parts from trusted brands — fast delivery, competitive prices, and expert support to keep your vehicle running reliably."
};

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BrandSection />
    </MainLayout>
  );
}
