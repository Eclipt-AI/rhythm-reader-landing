"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, ScanLine, Music2, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-0 md:pt-32 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/40 via-white to-white pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-dark">Rhythm Reader</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] leading-tight tracking-tight"
          >
            Trouble Reading{" "}
            <span className="text-primary">Sheet Music?</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 text-lg md:text-xl text-body max-w-2xl leading-relaxed"
          >
            Join Rhythm Reader to learn your score with ease!
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-colors duration-200 cursor-pointer shadow-lg shadow-primary/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-to-use"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-white text-body text-base font-medium border border-gray-200 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-pointer"
            >
              How It Works
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Feature tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: ScanLine, label: "Scan" },
              { icon: Music2, label: "Listen" },
              { icon: Play, label: "Play" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-medium text-body shadow-sm"
              >
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Three phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative mt-20 mb-[-80px] flex items-end justify-center gap-4 sm:gap-6 md:gap-10"
        >
          <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] -translate-y-20 -rotate-6">
            <div className="drop-shadow-2xl">
              <Image
                src="/assets/Camera-portrait.png"
                alt="Scanning sheet music with camera"
                width={260}
                height={562}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="relative w-[160px] sm:w-[210px] md:w-[260px] lg:w-[300px]">
            <div className="drop-shadow-2xl">
              <Image
                src="/assets/Score-Full-Screen-Mode-portrait.png"
                alt="Full screen score playback"
                width={300}
                height={649}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] -translate-y-20 rotate-6">
            <div className="drop-shadow-2xl">
              <Image
                src="/assets/Processing-portrait.png"
                alt="Processing scanned music"
                width={260}
                height={562}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
