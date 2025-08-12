import KeySellingPointsSection from "../common/KeySellingPointsSection";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative bg-white text-center">
      {/* Stats Row */}
      <div className="-mt-13 z-10 relative bg-primary text-white rounded-xl shadow-md flex justify-around items-center py-6 md:py-8 px-6 w-[90%] md:w-[70%] mx-auto gap-2">
        <div>
          <p className="text-2xl md:text-3xl font-bold fadeIn">53+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3 fadeIn">
            Years Of Experience
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold fadeIn">50M+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3 fadeIn">
            Order Served Success
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold fadeIn">10M+</p>
          <p className="text-[10px] md:text-2xl whitespace-nowrap mt-1 md:mt-3 fadeIn">
            Satisfied Customers
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-3xl mx-auto mt-10 px-4 py-4 sm:py-8 md:py-14">
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] text-center capitalize mb-4 fadeIn">
          About<span className="text-primary">Us</span>
        </h2>
        <p className="text-gray-700 font-light text-base md:text-xl leading-relaxed mb-6 animate-fadeIn delay-100 fadeIn">
          At Pandi Auto Spare, we specialize in providing high-quality spare
          parts for cars. Whether you're a vehicle owner, mechanic, or retailer,
          we ensure access to a wide range of OEM and premium aftermarket parts
          that meet industry standards.
        </p>
        <p className="text-gray-700 font-light text-base md:text-xl leading-relaxed mb-8 animate-fadeIn delay-100 fadeIn">
          With a focus on genuine quality, competitive pricing, and fast
          delivery, our goal is to keep your vehicles running safely and
          smoothly. From engines to accessories, our inventory is backed by
          expert support and a commitment to customer satisfaction.
        </p>
        <Link href="/about">
          <button className="bg-primary text-white px-6 py-3 rounded-full font-light hover:opacity-90 transition fadeIn">
            Read More
          </button>
        </Link>
      </div>

      {/* Icons Row */}
      <KeySellingPointsSection />
    </section>
  );
}
