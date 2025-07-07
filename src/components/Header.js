"use client";
import { Call } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="mx-auto !px-10 py-2 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        <nav className="flex space-x-6 items-center ">
          <Link href="/" className="text-[#D5202C] font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#D5202C]">
            About Us
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-[#D5202C]">
            Products
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#D5202C]">
            Contact
          </Link>

          <div className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
            <Call size="18" color="#FFFF" />
            +91 8606449640
          </div>
        </nav>
      </div>
    </header>
  );
}
