import { Accessibility, Check, Music } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const accessibilityFeatures = [
  "Magnification 200%",
  "Color/Contrast Adjustment",
  "Enlarged Notes",
  "Score Notation",
  "Screen Reader",
  "Musical Recognition",
  "Talking Score",
];

const stats = [
  { value: "+1200", label: "Compositions" },
  { value: "+2500", label: "Musicians" },
  { value: "+25", label: "Schools" },
  { value: "+10", label: "Universities" },
  { value: "+8", label: "Marching/Pep Bands" },
  { value: "+25", label: "Musical Ensembles" },
  { value: "3", label: "Musical Conservatories" },
  { value: "5", label: "Musical Productions" },
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <SectionBadge icon={<Music className="w-4 h-4 text-primary" />}>
              Learn the Beat
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Find Your Rhythm <span className="text-primary">Anytime, Anywhere!</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg max-w-2xl mx-auto leading-relaxed">
              Rhythm Reader makes reading, listening, and playing music accessible for musicians with optical and auditory impairments.
            </p>
            <p className="mt-3 text-dark text-lg font-semibold">
              Read and play back the rhythm online, anytime!
            </p>
          </AnimateOnScroll>
        </div>

        {/* Accessibility features */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-surface border border-gray-100 p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Accessibility className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              Accessibility Features
            </h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {accessibilityFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-black flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  <span className="text-base font-medium text-dark">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Rhythm by the numbers */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Bridging the Musical Divide
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Learning Without Boundaries: <span className="text-primary">Rhythm by the Numbers</span>
            </h3>
          </AnimateOnScroll>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <AnimateOnScroll
              key={s.label}
              delay={0.1 + i * 0.05}
              className="rounded-2xl bg-white border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-primary font-[family-name:var(--font-plus-jakarta)]">
                {s.value}
              </span>
              <span className="mt-2 text-sm text-body font-medium">
                {s.label}
              </span>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <p className="mt-12 text-center text-xl font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
            We&apos;ll help you find your rhythm, so you can confidently play on!
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
