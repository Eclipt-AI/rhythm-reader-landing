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
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Join Our Inclusive Community
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          Hit the follow button, and be ready to upload, listen, share and mark your favorite rhythms. Our library has over 1,000 musical scores with 100+ users adding new compositions daily.
        </p>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-gray-light rounded-2xl p-6 flex flex-col items-center"
            >
              <span className="text-3xl sm:text-4xl font-bold text-orange">{s.value}</span>
              <span className="mt-2 text-sm text-gray-600 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
