import Image from "next/image";

const steps = [
  {
    title: "Scan your sheets.",
    image: "/assets/Camera-portrait.png",
    alt: "Scan sheet music",
  },
  {
    title: "Wait for AI to do its magic.",
    image: "/assets/Processing-portrait.png",
    alt: "AI processes your music",
  },
  {
    title: "Start playing.",
    image: "/assets/Score-Full-Screen-Mode-portrait.png",
    alt: "Play back the rhythm",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="relative z-10 pt-[104px] pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            How to Use
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900">
          Getting Started with Rhythm Reader
        </h2>
        <p className="mt-4 text-center text-gray-500 text-lg max-w-xl mx-auto">
          Follow these simple steps to play your first composition.
        </p>

        {/* 3 cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gray-light rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {step.title}
              </h3>
              <div className="w-[180px] sm:w-[200px] drop-shadow-lg">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={200}
                  height={433}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
