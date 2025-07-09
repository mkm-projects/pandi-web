"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setUserLocale } from "@/services/locale";
import { Call, Menu } from "iconsax-reactjs";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();

  const [userLocale, setLocale] = useState(locale); // Default locale

  const handleLocaleChange = (value) => {
    setLocale(value);
    setUserLocale(value); // Update the locale in cookies or any storage
  };

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-14">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#D5202C] font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#D5202C]">
              About Us
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#D5202C]"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#D5202C]"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side (Call & Menu) */}
          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium whitespace-nowrap">
              <Call size="18" color="#FFFF" />
              +91 8606449640
            </div>

            {/* Language Selector */}
            <div className="relative">
              <Select
                value={userLocale}
                onValueChange={handleLocaleChange}
                className="w-[180px]"
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <Menu size="24" color="#000" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-200">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[#D5202C] font-semibold"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#D5202C]"
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#D5202C]"
          >
            Products
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#D5202C]"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
