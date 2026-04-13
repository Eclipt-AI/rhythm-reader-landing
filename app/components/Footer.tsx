import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/app_icon.svg"
                alt="Rhythm Reader"
                width={32}
                height={32}
                className="invert brightness-200"
              />
              <span className="text-white font-bold text-lg font-[family-name:var(--font-plus-jakarta)]">
                Rhythm Reader
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Scan sheet music, read the notes, interpret the dynamics, and play back the rhythm.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#how-to-use" className="hover:text-primary transition-colors">How to Use</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#join" className="hover:text-primary transition-colors">Join</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/rhythymreader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get Started
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#join" className="hover:text-primary transition-colors">Join Community</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li>
                <a href="mailto:hello@rhythmreader.com" className="hover:text-primary transition-colors">
                  hello@rhythmreader.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          &copy; {new Date().getFullYear()} Rhythm Reader. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
