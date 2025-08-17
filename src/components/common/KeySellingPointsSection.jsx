
function KeySellingPointsSection() {
  // Direct mapping from en.json
  const iconsText = {
    parts: "Affordable Auto Parts",
    brand: "Top Brands",
    quality: "Trusted Quality",
    delivery: "Secure Delivery",
  };

  return (
    <div className="bg-primary text-white py-6 sm:py-10 pl-3 sm:pl-3 md:pl-0">
      <div className="max-w-4xl mx-auto grid grid-cols-4 gap-2 px-4">
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/parts.png"
            alt={iconsText.parts}
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm whitespace-nowrap">
            Affordable Auto Parts
          </p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/brand.png"
            alt={iconsText.brand}
            className="w-9 md:w-17 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Top Brands</p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/quality.png"
            alt={iconsText.quality}
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Trusted Quality</p>
        </div>
        <div className="flex flex-col items-center fadeIn">
          <img
            src="/images/delivery.png"
            alt={iconsText.delivery}
            className="w-8 md:w-15 h-8 md:h-15 mb-5"
          />
          <p className="text-[10px] md:text-sm">Secure Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default KeySellingPointsSection;
