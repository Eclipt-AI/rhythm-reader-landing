"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#community", label: "Play" },
    { href: "#join", label: "Join" },
    { href: "#reviews", label: "Take Note" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/assets/app_icon.svg"
            alt="Rhythm Reader"
            width={36}
            height={36}
          />
          <span className="text-primary font-bold text-lg font-[family-name:var(--font-plus-jakarta)]">
            Rhythm Reader
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-body">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#join"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Join
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dark"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 text-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-body hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-2 w-full h-10 px-5 rounded-lg bg-primary text-white font-semibold shadow-lg shadow-primary/25"
            onClick={() => setMobileOpen(false)}
          >
            Join
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
