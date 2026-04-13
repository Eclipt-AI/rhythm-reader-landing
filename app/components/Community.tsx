import { Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const stats = [
  { value: "1,000+", label: "Musical Scores" },
  { value: "100+", label: "Users Adding Daily" },
  { value: "25+", label: "Schools" },
  { value: "10+", label: "Colleges & Universities" },
  { value: "5", label: "Marching/Pep Bands" },
  { value: "20+", label: "Musical Ensembles" },
  { value: "3", label: "Music Conservatories" },
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll>
            <SectionBadge icon={<Users className="w-4 h-4 text-primary" />}>
              Community
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Join Our <span className="text-primary">Inclusive Community</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg max-w-2xl mx-auto leading-relaxed">
              Hit the follow button, and be ready to upload, listen, share and mark your favorite rhythms. Our library has over 1,000 musical scores with 100+ users adding new compositions daily.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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
      </div>
    </section>
  );
}
