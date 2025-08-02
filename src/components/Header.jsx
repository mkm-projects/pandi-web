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
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showNumber, setShowNumber] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();

  const [userLocale, setLocale] = useState(locale); // Default locale

  const handleLocaleChange = (value) => {
    setLocale(value);
    setUserLocale(value); // Update the locale in cookies or any storage
  };

  const t = useTranslations("Header.MenuNames");

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-14 py-4 flex items-center justify-between">
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
          <nav className="hidden xl:flex items-center space-x-8">
            <Link href="/" className="text-primary font-semibold">
              {t("home")}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              {t("aboutUs")}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary">
              {t("products")}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              {t("contact")}
            </Link>
          </nav>

          {/* Right Side (Call & Menu) */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* <div className="bg-primary text-white px-2 sm:px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium whitespace-nowrap">
              <Call size="18" color="#FFFF" />
              <span className="hidden sm:block">+91 8606449640</span>
            </div> */}
            <div
              className={`bg-primary text-white px-2 sm:px-4 py-2 rounded-full flex items-center text-sm font-medium whitespace-nowrap cursor-pointer ${showNumber ? 'gap-2' : 'gap-0.5'}`}
              onClick={() => setShowNumber((prev) => !prev)}
            >
              <Call size="18" color="#FFF" />

              <span
                className={`sm:hidden overflow-hidden transition-all duration-300 ${
                  showNumber
                    ? "max-w-[200px] opacity-100"
                    : "max-w-0 opacity-0"
                }`}
              >
                +91 8606449640
              </span>

              <span className="hidden sm:block">+91 8606449640</span>
            </div>

            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <Select value={userLocale} onValueChange={handleLocaleChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  {/* <SelectItem value="fr">Français</SelectItem> */}
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
            className="block text-[#D5202C] font-semibold mt-3"
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

          <div className="relative">
            <Select value={userLocale} onValueChange={handleLocaleChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                {/* <SelectItem value="fr">Français</SelectItem> */}
                <SelectItem value="ar">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </header>
  );
}
