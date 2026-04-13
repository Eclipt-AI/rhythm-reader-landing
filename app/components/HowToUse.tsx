import Image from "next/image";
import { Zap, ScanLine, Sparkles, Play } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Scan your sheets.",
    image: "/assets/Camera-portrait.png",
    alt: "Scan sheet music",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Wait for AI to do its magic.",
    image: "/assets/Processing-portrait.png",
    alt: "AI processes your music",
  },
  {
    number: "03",
    icon: Play,
    title: "Start playing.",
    image: "/assets/Score-Full-Screen-Mode-portrait.png",
    alt: "Play back the rhythm",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="relative z-10 pt-[104px] pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <SectionBadge icon={<Zap className="w-4 h-4 text-primary" />}>
              How to Use
            </SectionBadge>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Getting Started with{" "}
              <span className="text-primary">Rhythm Reader</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg max-w-xl mx-auto leading-relaxed">
              Follow these simple steps to play your first composition.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimateOnScroll
                key={step.number}
                delay={0.15 + i * 0.12}
                className="group relative rounded-2xl bg-white border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-4 left-4 text-xs font-bold text-primary/60 font-[family-name:var(--font-plus-jakarta)]">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark font-[family-name:var(--font-plus-jakarta)] mb-6">
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
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
