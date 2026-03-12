import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Musical Representation
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-3xl mx-auto">
          Members of the Rhythm Reader Community are actively performing, training, teaching, and participating in the following musical and performing arts organizations.
        </p>
      </div>

      {/* Scrolling logos row */}
      <div className="mt-16 relative">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {/* Duplicate for seamless loop */}
          {[...organizations, ...organizations].map((org, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 px-8 py-4 bg-gray-light rounded-xl flex items-center justify-center"
            >
              <div className="flex items-center gap-3">
                <Image src="/assets/app_icon.svg" alt="" width={24} height={24} className="opacity-40" />
                <span className="text-sm font-medium text-gray-600 whitespace-nowrap">{org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Take Note link */}
      <div className="mt-12 text-center">
        <a
          href="#reviews"
          className="inline-flex items-center gap-2 text-orange font-semibold hover:underline"
        >
          Take Note: Read Reviews
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    </section>
  );
}
