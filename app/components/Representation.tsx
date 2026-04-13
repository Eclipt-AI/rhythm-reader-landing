import Image from "next/image";
import { Award, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const organizations = [
  "MYO",
  "Nassau-Suffolk Band",
  "LIYO",
  "MSM",
  "Honors Performance Series",
  "UPenn Band",
  "UVA Cavalier Band",
  "GWOYA",
  "ARIA Music Academy",
  "Tanglewood Music Festival",
  "Williamstown Theater Festival",
  "International Musical Grand Concourse",
  "USDAN",
];

export default function Representation() {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <SectionBadge icon={<Award className="w-4 h-4 text-primary" />}>
              Trusted By
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Musical <span className="text-primary">Representation</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg max-w-3xl mx-auto leading-relaxed">
              Members of the Rhythm Reader Community are actively performing, training, teaching, and participating in the following musical and performing arts organizations.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Scrolling logos row */}
      <AnimateOnScroll delay={0.2}>
        <div className="mt-16 relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
            {[...organizations, ...organizations].map((org, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 px-6 py-3.5 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/app_icon.svg"
                    alt=""
                    width={22}
                    height={22}
                    className="opacity-60"
                  />
                  <span className="text-sm font-medium text-body whitespace-nowrap">
                    {org}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Take Note link */}
      <AnimateOnScroll delay={0.3}>
        <div className="mt-12 text-center">
          <a
            href="#reviews"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Take Note: Read Reviews
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
