"use client";

import KeySellingPointsSection from "@/components/common/KeySellingPointsSection";
import ProductDetails from "@/components/product/ProductDetails";
import ProductHeroSection from "@/components/product/ProductHeroSection";
import { WhyByFromUs } from "@/components/product/WhyByFromUs";

export default function Products() {
  return (
    <>
      <ProductHeroSection />
      <ProductDetails />
      <KeySellingPointsSection />
      <WhyByFromUs />
    </>
  );
}
