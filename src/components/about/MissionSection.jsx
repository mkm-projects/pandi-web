import Image from "next/image";

export function MissionSection() {
  return (
    <section className="bg-white py-10 md:py-24">
      <div className="max-w-6xl md:max-w-10xl mx-auto px-8 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="relative h-72 lg:h-[400px] w-full rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/aboutMission.webp"
            fill
            alt="Engine Spare Part"
            className="rounded-xl object-cover lg:object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="text-[#1C1C1C] order-1 lg:order-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 fadeIn">
            Our <span className="text-primary font-bold">Mission</span>
          </h3>
          <p className="md:text-xl text-md font-light text-gray-700 mb-8 leading-relaxed fadeIn">
            To deliver high-quality, reliable auto parts that meet the needs of every customer while ensuring excellent service and support.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 fadeIn">
            Our <span className="text-primary font-bold">Vision</span>
          </h3>
          <p className="md:text-xl text-md font-light text-gray-700 leading-relaxed fadeIn">
            To become the most trusted and customer-focused auto spare parts provider, recognized for quality and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
