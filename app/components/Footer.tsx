import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
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
              <span className="text-white font-semibold text-lg">
                Rhythm Reader
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Scan sheet music, read the notes, interpret the dynamics, and play
              back the rhythm.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-to-use"
                  className="hover:text-orange transition-colors"
                >
                  How to Use
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-orange transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-orange transition-colors">
                  Join
                </a>
              </li>
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
                  className="hover:text-orange transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange transition-colors"
                >
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
              <li>
                <a href="#join" className="hover:text-orange transition-colors">
                  Join
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-orange transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@rhythmreader.com"
                  className="hover:text-orange transition-colors"
                >
                  hello@rhythmreader.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Rhythm Reader. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
