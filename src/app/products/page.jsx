"use client";

import { CommonQuestions } from "@/components/common/CommonQuestions";
import KeySellingPointsSection from "@/components/common/KeySellingPointsSection";
import ProductDetails from "@/components/product/ProductDetails";
import ProductHeroSection from "@/components/product/ProductHeroSection";
import { BUY_FROM_AS_QUESTIONS } from "@/lib/data/common";
import { scrollAnimation } from "@/lib/utils";
import { useEffect } from "react";

export default function Products() {
      useEffect(() => {
      scrollAnimation();
    }, []);
  return (
    <>
      <ProductHeroSection />
      <ProductDetails />
      <KeySellingPointsSection />
      <CommonQuestions reasons={BUY_FROM_AS_QUESTIONS} title1={"Why"} title2={"Buy From Us?"} imgSrc={"/images/product_car.png"}/>
    </>
  );
}
