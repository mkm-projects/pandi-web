import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative flex items-center justify-start h-auto sm:min-h-screen text-white">
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn">
          Your <span className="text-primary">Trusted</span> Destination For{" "}
          <span className="text-primary">Quality</span> Spare Parts
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-xl font-light leading-relaxed tracking-wide fadeIn">
          Discover a wide selection of OEM and aftermarket parts for all vehicle
          types. Genuine quality, competitive prices, and reliable performance
          guaranteed. Shop with confidence and keep your ride running smoothly.
        </p>

        <nav className="mt-8 flex flex-row gap-4 fadeIn" aria-label="Hero actions">
          <Link href="/contact">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Book Now
            </button>
          </Link>
          <Link href="/products">
            <button className="bg-white text-black px-6 py-3 rounded-full hover:opacity-90 transition">
              Explore Parts
            </button>
          </Link>
        </nav>
      </div>

      {/* Background Image */}
      <Image
        src="/images/heroSection.webp"
        alt="Automotive spare parts background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
    </header>
  );
}
