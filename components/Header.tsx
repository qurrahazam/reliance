"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Specialties", href: "/specialties" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + Name */}
        <Link
            href="/"
            className="flex items-center gap-4 shrink-0 group"
            >
            <div className="relative w-[65px] h-[65px] flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg transition duration-300">
                <Image
                src="/logo.png"
                alt="Reliance RCM"
                fill
                className="object-contain p-2"
                priority
                />
            </div>

            <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold tracking-wide text-[#004aad]">
                Reliance
                </span>
                <span className="text-sm font-semibold tracking-widest text-gray-500">
                RCM
                </span>
            </div>
            </Link>

        <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 relative group"
            >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
        ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/staff-login"
            className="bg-[#004aad] text-white text-base font-semibold px-5 py-2 rounded-full hover:bg-[#38b6ff] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Staff Login
          </Link>
        </div>

        <button
          className="md:hidden text-[#0e6b5e]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#0e6b5e] hover:text-[#4ecdc4] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/staff-login"
            className="bg-[#0e6b5e] text-white text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-[#0a5449] transition-colors"
          >
            Staff Login
          </Link>
        </div>
      )}
    </header>
  );
}