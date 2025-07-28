import Image from "next/image";

export function MissionSection() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="relative w-full h-72 md:h-[380px] rounded-xl overflow-hidden">
          <Image
            src="/images/aboutMission.png" // Replace with your actual path or use imported image
            alt="Engine Spare Part"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Right - Content */}
        <div className="text-[#1C1C1C]">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Who <span className="text-primary font-bold">We Are</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-8 leading-relaxed">
            We’re a team of auto enthusiasts and professionals with a passion for performance and precision.
            With years of industry experience, we understand the importance of using the right part — which is
            why we only offer products that meet strict standards of quality, durability, and fit.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Our <span className="text-primary font-bold">Mission</span>
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            To make spare part buying easy, reliable, and accessible for every customer — whether you’re a car
            owner, a mechanic, or a shop owner. We aim to build long-term relationships based on honesty,
            quality, and service excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
