export default function Stats() {
  const stats = [
    {
      number: "600+",
      label: "Active Members",
    },
    {
      number: "6",
      label: "Specialized Wings",
    },
    {
      number: "19+",
      label: "Events / Year",
    },
    {
      number: "10",
      label: "Years Running",
    },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h2 className="text-5xl font-extrabold text-[#03B4BC]">
                {stat.number}
              </h2>

              <p className="mt-3 text-sm font-medium text-white/60">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}