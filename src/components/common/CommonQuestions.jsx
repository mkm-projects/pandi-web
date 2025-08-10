import Image from "next/image";


export function CommonQuestions({reasons, title1, title2, imgSrc}) {
  return (
    <section className="bg-white py-10 md:py-20">
     <div className="flex justify-between max-w-10xl mx-auto items-center px-8 flex-col md:flex-row gap-8 lg:gap-4">
         {/* Left content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black fadeIn">
          {title1} <span className="text-red-600">
            {title2}
          </span>
        </h2>

        <ul className="space-y-6">
          {reasons.map((item, index) => (
            <li key={index} className="flex items-start gap-3 fadeIn delay-75">
              <Image
                src="/images/check-icon.png" // place check icon here
                alt="check"
                width={24}
                height={24}
                className="mt-1"
              />
              <span className="text-text-color font-normal text-md md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right image */}
      <div className="relative w-full h-[300px] md:h-[300px] lg:h-[400px] lg:w-1/2">
        <Image
          src={imgSrc} // Replace with your actual path or use imported image
          alt="Engine Spare Part"
          fill
          className="rounded-xl object-cover lg:object-contain"
        />
      </div>
     </div>
    </section>
  );
}
