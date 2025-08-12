import React from "react";

function KeySellingPointsSection() {
  return (
    <div className="bg-primary text-white py-6 sm:py-10 pl-3 sm:pl-3 md:pl-0">
      <div className="max-w-4xl mx-auto grid grid-cols-4 gap-2 px-4">
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/parts.png"
            alt="Affordable Auto Parts"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm whitespace-nowrap">
            Affordable Auto Parts
          </p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/brand.png"
            alt="Top Brands"
            className="w-9 md:w-17 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Top Brands</p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/quality.png"
            alt="Trusted Quality"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Trusted Quality</p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/delivery.png"
            alt="Secure Delivery"
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Secure Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default KeySellingPointsSection;
