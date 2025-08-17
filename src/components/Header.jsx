"use client";
import { Call, Menu } from "iconsax-reactjs";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [showNumber, setShowNumber] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // get current page path
  const path = usePathname();

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50" role="banner">
      <div className="mx-auto relative w-full px-4 sm:px-6 lg:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Go to Pandi Web homepage">
          <Image
            src="/images/logo.png"
            alt="Pandi Web Logo - Home"
            width={120}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-14">
          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  aria-label="Navigate to Home page"
                  className={`${
                    path === "/" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-label="Learn more About Us"
                  className={`${
                    path === "/about" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  aria-label="View our Products"
                  className={`${
                    path === "/products" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact us"
                  className={`${
                    path === "/contact" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Side (Call & Menu) */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Show phone number"
              className={`bg-primary text-white px-2 sm:px-4 py-2 rounded-full flex items-center text-sm font-medium whitespace-nowrap cursor-pointer ${
                showNumber ? "gap-2" : "gap-0.5"
              }`}
              onClick={() => setShowNumber((prev) => !prev)}
            >
              <Call size="18" color="#FFF" />

              <span
                className={`sm:hidden overflow-hidden transition-all duration-300 ${
                  showNumber ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                +91 8606449640
              </span>

              <span className="hidden sm:block">+91 8606449640</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <XIcon size="24" color="#000" />
              ) : (
                <Menu size="24" color="#000" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-200 shadow absolute top-full left-0 w-full"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              aria-label="Navigate to Home page"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block ${
                path === "/" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              } mt-3`}
            >
              Home
            </Link>
            <Link
              href="/about"
              aria-label="Learn more About Us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block ${
                path === "/about" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/products"
              aria-label="View our Products"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block ${
                path === "/products" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              }`}
            >
              Products
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block ${
                path === "/contact" ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
