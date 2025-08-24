import { productList } from "@/lib/data/products";
import Image from "next/image";

export default function ProductSection() {
  return (
    <section
      className="py-15 md:py-20 bg-white"
      aria-labelledby="products-heading"
    >
      <div className="px-4 max-w-6xl mx-auto">
        <h2
          id="products-heading"
          className="font-bold text-3xl sm:text-5xl md:text-6xl fadeIn"
        >
          Explore Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-gray-700 text-base md:text-xl max-w-2xl mt-6 fadeIn">
          Browse a wide range of high-quality spare parts in Malappuram, Kerala.
          Whether you’re upgrading, replacing, or repairing, we have the right
          OEM and aftermarket parts to keep your vehicle running reliably.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto mt-8">
        {productList.map((item) => (
          <article
            key={item.key}
            className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition fadeIn"
          >
            <div className="relative w-28 h-24 mx-auto mb-4">
              <Image
                src={item.image}
                alt={`${item.key} spare part`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-light capitalize">{item.key}</h3>
          </article>
        ))}
      </div>

      {/* Callout */}
      <div className="relative min-h-[150px] md:h-[260px] flex items-center justify-center text-center overflow-hidden mt-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('/images/AutosparePartsBackgroundinPerinthamlmannaKeralaPandiSpares.webp')` }}
        ></div>
        <div className="absolute inset-0 bg-[#17181C]/70" />
        <div className="relative z-10 px-6 py-8 text-white">
          <h2 className="font-bold text-4xl sm:text-5xl capitalize fadeIn">
            Everything Your Vehicle Needs <br />
            <span className="text-primary">All In One Place</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
