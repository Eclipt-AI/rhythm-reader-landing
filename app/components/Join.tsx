"use client";

import { QRCodeSVG } from "qrcode.react";
import { ScanLine, Headphones, Play, ArrowRight, Rocket } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const APP_URL = "https://apps.apple.com/us/app/rhythm-reader-scan-play/id6757306525";

const easySteps = [
  { step: "01", title: "Scan", icon: ScanLine },
  { step: "02", title: "Listen", icon: Headphones },
  { step: "03", title: "Play", icon: Play },
];

export default function Join() {
  return (
    <section id="join" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <SectionBadge icon={<Rocket className="w-4 h-4 text-primary" />}>
              Start Now
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Become a <span className="text-primary">Rhythm Reader</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg max-w-2xl mx-auto leading-relaxed">
              Need help nailing that seating audition? Don&apos;t worry, we&apos;ve got you!
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3 Easy Steps */}
        <AnimateOnScroll delay={0.1}>
          <h3 className="mt-20 text-center text-2xl font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
            3 Easy Steps
          </h3>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {easySteps.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={item.step}
                delay={0.15 + i * 0.12}
                className="relative rounded-2xl bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute top-4 left-4 text-xs font-bold text-primary/60 font-[family-name:var(--font-plus-jakarta)]">
                  {item.step}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/25 mb-5">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-xl font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
                  {item.title}
                </span>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA button */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-14 flex justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Join Our Musical Community
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* QR Code */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-14 flex justify-center">
            <div className="inline-flex flex-col items-center rounded-2xl bg-white border border-gray-100 p-6 shadow-lg">
              <div className="bg-white rounded-xl">
                <QRCodeSVG
                  value={APP_URL}
                  size={128}
                  fgColor="#F5761A"
                  level="M"
                />
              </div>
              <span className="mt-4 text-base font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
                Ready to Make Music?
              </span>
              <span className="mt-1 text-sm font-medium text-body">
                Scan to Play Along!
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
