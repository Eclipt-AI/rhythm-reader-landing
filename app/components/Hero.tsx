import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-light pt-20 pb-0">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
          Trouble Reading Sheet Music?
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
          Join Rhythm Reader to instantly follow along the lines!
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#join"
            className="px-8 py-3 bg-orange text-white font-semibold rounded-full hover:bg-orange/90 transition-colors text-base"
          >
            Get Started
          </a>
          <a
            href="#how-to-use"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-orange hover:text-orange transition-colors text-base"
          >
            How It Works
          </a>
        </div>

        {/* Three phone mockups - overflow into next section */}
        <div className="relative mt-16 mb-[-80px] flex items-end justify-center gap-4 sm:gap-6 md:gap-10">
          {/* Left phone - Camera */}
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

          {/* Center phone - Score Full Screen (behind next section) */}
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

          {/* Right phone - Processing */}
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
        </div>
      </div>
    </section>
  );
}
