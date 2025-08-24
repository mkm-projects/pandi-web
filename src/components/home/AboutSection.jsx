"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import KeySellingPointsSection from "../common/KeySellingPointsSection";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-center"
      aria-labelledby="about-heading"
    >
      {/* Stats */}
      <aside className="-mt-13 z-10 relative bg-primary text-white rounded-xl shadow-md flex justify-around items-center py-6 md:py-8 px-6 w-[90%] md:w-[70%] mx-auto gap-2">
        <StatBlock
          value={53}
          suffix="+"
          label="Years Of Experience"
          visible={isVisible}
        />
        <StatBlock
          value={50}
          suffix="M+"
          label="Order Served Success"
          visible={isVisible}
        />
        <StatBlock
          value={10}
          suffix="M+"
          label="Satisfied Customers"
          visible={isVisible}
        />
      </aside>

      {/* About Text */}
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <h2
          id="about-heading"
          className="font-bold text-3xl sm:text-5xl md:text-6xl mb-4 fadeIn"
        >
          About <span className="text-primary">Us</span>
        </h2>
        <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-6 fadeIn">
          At Pandi Auto Spare in Malappuram, Kerala, we provide high-quality car
          spare parts for all vehicles. Whether you’re a car owner, mechanic, or
          retailer, we offer a wide range of genuine OEM and premium aftermarket
          parts at competitive prices, ensuring reliable performance and
          long-lasting quality.
        </p>
        <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 fadeIn">
          With a focus on genuine quality,and fast delivery, our goal is to keep
          your vehicles running safely and smoothly.
        </p>
        <Link href="/about" hrefLang="en">
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition fadeIn">
            Read More
          </button>
        </Link>
      </div>

      {/* USP Icons */}
      <KeySellingPointsSection />
    </section>
  );
}

function StatBlock({ value, suffix, label, visible }) {
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold fadeIn">
        {visible ? value : 0}
        {suffix}
      </p>
      <p className="text-[10px] md:text-2xl mt-1 md:mt-3 fadeIn">{label}</p>
    </div>
  );
}
