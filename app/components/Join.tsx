"use client";

import { QRCodeSVG } from "qrcode.react";

export default function Join() {
  return (
    <section id="join" className="py-24 bg-gray-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Become a Rhythm Reader
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          Got the seating audition blues? Are you breaking a sweat trying to nail that entrance? Struggling to learn multiple compositions on the fly without having to sightread?
        </p>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto font-medium">
          Don&apos;t get frazzled, you&apos;ll earn that seat and land that part because Rhythm Reader is here to help you scan, store, and learn the rhythm in seconds.
        </p>
        <p className="mt-6 text-orange font-semibold text-xl">
          Ready? Become a Rhythm Reader in a NY Minute and scan online and play back anytime!
        </p>

        {/* 3 Easy Steps */}
        <h3 className="mt-16 text-2xl font-bold text-gray-900">
          Get that rhythm down in 3 Easy Steps
        </h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Scan", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" },
            { step: "2", title: "Listen", icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" },
            { step: "3", title: "Play", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-white mb-4">
                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">{item.title}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-orange text-white font-semibold rounded-full hover:bg-orange/90 transition-colors"
          >
            Join Our Community
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-orange text-orange font-semibold rounded-full hover:bg-orange hover:text-white transition-colors"
          >
            Concert Master
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange hover:text-orange transition-colors"
          >
            Section Leaders
          </a>
        </div>

        {/* QR Code */}
        <div className="mt-10 inline-flex flex-col items-center">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <QRCodeSVG
              value="https://google.com"
              size={128}
              fgColor="#F5761A"
              level="M"
            />
          </div>
          <span className="mt-2 text-sm text-gray-500">Scan to join</span>
        </div>
      </div>
    </section>
  );
}
