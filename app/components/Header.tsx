"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image src="/assets/app_icon.svg" alt="Rhythm Reader" width={36} height={36} />
          <span className="text-orange font-semibold text-lg">Rhythm Reader</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-orange transition-colors">About</a>
          <a href="#community" className="hover:text-orange transition-colors">Play</a>
          <a href="#join" className="hover:text-orange transition-colors">Join</a>
          <a href="#reviews" className="hover:text-orange transition-colors">Take Note</a>
          <a href="#contact" className="hover:text-orange transition-colors">Contact</a>
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#join"
            className="px-5 py-2 bg-orange text-white text-sm font-medium rounded-full hover:bg-orange/90 transition-colors"
          >
            Join Community
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 text-sm">
          <a href="#about" className="block text-gray-700 hover:text-orange" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#community" className="block text-gray-700 hover:text-orange" onClick={() => setMobileOpen(false)}>Play</a>
          <a href="#join" className="block text-gray-700 hover:text-orange" onClick={() => setMobileOpen(false)}>Join</a>
          <a href="#reviews" className="block text-gray-700 hover:text-orange" onClick={() => setMobileOpen(false)}>Take Note</a>
          <a href="#contact" className="block text-gray-700 hover:text-orange" onClick={() => setMobileOpen(false)}>Contact</a>
          <a href="#join" className="block px-5 py-2 bg-orange text-white text-center rounded-full font-medium" onClick={() => setMobileOpen(false)}>Join Community</a>
        </div>
      )}
    </header>
  );
}
