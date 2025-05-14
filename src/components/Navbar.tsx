"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600">
                Saif Bhaai&apos;s
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-orange-600">
              Our Menu
            </Link>
            <Link
              href="/offers"
              className="text-gray-700 hover:text-orange-600"
            >
              Offers
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
            >
              Our Menu
            </Link>
            <Link
              href="/offers"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
            >
              Offers
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-600"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <button className="w-full mt-4 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
