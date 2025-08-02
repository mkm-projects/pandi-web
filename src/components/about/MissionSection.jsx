import Image from "next/image";

export function MissionSection() {
  return (
    <section className="bg-white py-10 md:py-24">
      <div className="max-w-6xl md:max-w-8xl mx-auto px-8 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="relative h-72 lg:h-[400px] w-full rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/aboutMission.png" // Replace with your actual path or use imported image
            fill
            alt="Engine Spare Part"
            className="rounded-xl object-cover lg:object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="text-[#1C1C1C] order-1 lg:order-2">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Who <span className="text-primary font-bold">We Are</span>
          </h3>
          <p className="text-sm sm:text-base font-light text-gray-700 mb-8 leading-relaxed">
            We’re a team of auto enthusiasts and professionals with a passion for performance and precision.
            With years of industry experience, we understand the importance of using the right part — which is
            why we only offer products that meet strict standards of quality, durability, and fit.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our <span className="text-primary font-bold">Mission</span>
          </h3>
          <p className="text-sm sm:text-base font-light text-gray-700 leading-relaxed">
            To make spare part buying easy, reliable, and accessible for every customer — whether you’re a car
            owner, a mechanic, or a shop owner. We aim to build long-term relationships based on honesty,
            quality, and service excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
