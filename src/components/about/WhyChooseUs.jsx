import Image from "next/image";

const reasons = [
  "100% Genuine Products",
  "Wide Compatibility Across Vehicles",
  "Secure Payments & Hassle-Free Returns",
  "Trusted By Customers Nationwide",
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-10 md:py-20">
     <div className="flex justify-center max-w-7xl mx-auto items-center">
         {/* Left content */}
      <div className="w-full lg:w-1/2 p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          Why <span className="text-red-600">Choose Us?</span>
        </h2>

        <ul className="space-y-5">
          {reasons.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Image
                src="/images/check-icon.png" // place check icon here
                alt="check"
                width={24}
                height={24}
                className="mt-1"
              />
              <span className="text-gray-400 text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right image */}
      <div className="relative w-full h-72 md:h-[380px] hidden lg:block md:w-1/2">
        <Image
          src="/images/about-engine-parts.png" // Replace with your actual path or use imported image
          alt="Engine Spare Part"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
     </div>
    </section>
  );
}
