import { brandList } from "@/lib/data/brands";
import Image from "next/image";

export function BrandSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight capitalize fadeIn">
          Brands We <span className="text-primary">Trust</span>
        </h2>
        <p className="text-base md:text-xl font-light text-gray-700 leading-relaxed max-w-2xl mt-6 md:mt-8 fadeIn">
          Browse our wide range of high-quality spare parts designed to fit
          perfectly and perform reliably. Whether you’re upgrading, replacing,
          or repairing — we’ve got the right part for you
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-4 max-w-6xl mx-auto mt-8 md:mt-12 lg:mt-16 fadeIn">
        {brandList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-3 sm:p-4 md:p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-16 sm:w-20 md:w-24 lg:w-32 h-8 sm:h-10 md:h-12 lg:h-16 mx-auto fadeIn">
              <Image
                src={item.image}
                alt={item.key}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
