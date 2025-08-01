
const offerList = [
  {
    title: "OEM & Aftermarket Parts",
    description:
      "We supply genuine Original Equipment Manufacturer (OEM) parts along with trusted aftermarket alternatives for all major brands and vehicle types.",
  },
  {
    title: "Wide Product Range",
    description:
      "From engine components to electrical systems, filters, brakes, body parts, accessories, and more — we’ve got everything under one roof.",
  },
  {
    title: "Trusted Brands",
    description:
      "We work with renowned brands like Bosch, NGK, TVS, Castrol, Exide, Minda, and many more.",
  },
  {
    title: "Affordable Prices",
    description:
      "Competitive pricing without compromising on quality. We believe great parts shouldn’t break the bank.",
  },
  {
    title: "Fast Delivery & Support",
    description:
      "Timely shipping, easy returns, and dedicated customer service to assist you every step of the way.",
  },
  {
    title: "Easy Part Search & Filtering",
    description:
      "Our user-friendly website makes it simple to search, filter, and find the exact part you need — by vehicle model, brand, category, or part number.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="text-white">
      {/* Header with background image */}
      <div
        className="bg-cover bg-center py-10 md:py-14 text-center bg-primary"
        style={{
          backgroundImage: "url('/images/offer-bg.png')", // replace with your path
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
          What <span className="text-white">We Offer</span>
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto py-20">
        {offerList.map((item, index) => (
          <div
            key={index}
            className="bg-card-custom-1 text-gray-900 rounded-xl py-10 px-6 transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-secondary">{item.title}</h3>
            <p className="text-lg font-light leading-relaxed text-text-color">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
