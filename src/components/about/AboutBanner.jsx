import Image from "next/image";

export function AboutBanner() {
  return (
    <header
      className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full"
      aria-labelledby="about-banner-title"
    >
      {/* Left Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1
          id="about-banner-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn"
        >
          About <span className="text-primary">Us</span>
        </h1>

        <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold fadeIn">
          Trusted by Customers Since <span className="text-primary">1972</span>
        </p>

        <p className="mt-6 max-w-3xl text-md sm:text-xl font-light leading-relaxed fadeIn delay-100">
          <p>
            At Pandi Auto Spares in Perinthalmanna, Malappuram, Kerala, we are
            your one-stop destination for high-quality car spare parts. From
            daily commuter cars to heavy-duty commercial vehicles, we offer a
            wide range of genuine OEM parts and premium aftermarket solutions to
            keep your car running reliably. With over five decades of
            experience, we have been trusted by customers since 1972 for our
            commitment to quality, competitive pricing, and excellent service.
          </p>
          <p className="mt-5">
            Our extensive inventory includes engine components, brake systems,
            suspension parts, filters, lubricants, and electrical spares,
            ensuring you find everything you need under one roof. At Pandi Auto
            Spares, we focus on fast delivery, customer satisfaction, and
            long-lasting product performance, helping car owners, mechanics, and
            retailers keep vehicles safe, smooth, and road-ready across Kerala
            and beyond.
          </p>
        </p>
      </div>

      {/* Background Image */}
      <Image
        src="/images/about-hero-sectionAutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"
        alt="Automotive spare parts background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
    </header>
  );
}
