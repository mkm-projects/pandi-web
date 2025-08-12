import Image from "next/image";
import { productList } from "@/lib/data/products";

export default function ProductSection() {
  return (
    <section className="py-15 md:py-20 bg-white">
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-[100%] capitalize fadeIn">
          Explore Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-gray-700 text-base md:text-xl font-light leading-relaxed max-w-2xl mt-6 md:mt-8 fadeIn">
          Browse our wide range of high-quality spare parts designed to fit
          perfectly and perform reliably. Whether you’re upgrading, replacing,
          or repairing — we’ve got the right part for you.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-4 max-w-6xl mx-auto mt-8 md:mt-16 mb-8 md:mb-20 ">
        {productList.map((item) => (
          <div
            key={item.key}
            className="bg-gray-100 rounded-xl p-3 md:p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 fadeIn"
          >
            <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 h-20 sm:h-24 md:h-28 lg:h-32 mx-auto mb-2 md:mb-4">
              <Image
                src={item.image}
                alt={item.key}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-tight text-center capitalize font-roboto">
              {item.key}
            </h3>
          </div>
        ))}
      </div>

      <div className="relative min-h-[150px] md:h-[260px] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url('/images/bg2.png')` }}
        ></div>
        <div className="absolute inset-0 bg-[#17181C]/70" />

        <div className="relative z-10 px-4 sm:px-6 py-6 sm:py-8 rounded text-white max-w-full">
          <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight capitalize break-words fadeIn">
            Everything Your Vehicle Needs
          </h2>
          <h3 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight capitalize mt-3 sm:mt-4 md:mt-6 break-words fadeIn">
            All In One <span className="text-primary">Place</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
