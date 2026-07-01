// app/components/CTASection.tsx

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F1A] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F0F1A_0%,rgba(15,15,26,.85)_50%,rgba(3,180,188,.2)_100%)]" />
      </div>

      {/* Blur */}
      <div className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[90px]" />
      <div className="absolute left-56 bottom-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-[90px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Applications Open · 2025–26 Batch
          </div>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Ready to build
            <br />
            <span className="text-cyan-400">
              something great?
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">
            Join the club, pick a wing, and ship real projects alongside
            500 builders who care as much as you do.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400">
              Apply Now →
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 font-medium text-white/80 transition hover:bg-white/10">
              Learn More
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="/images/avatar1.jpg"
                className="h-10 w-10 rounded-full border-2 border-[#0F0F1A]"
                alt=""
              />
              <img
                src="/images/avatar2.jpg"
                className="h-10 w-10 rounded-full border-2 border-[#0F0F1A]"
                alt=""
              />
              <img
                src="/images/avatar3.jpg"
                className="h-10 w-10 rounded-full border-2 border-[#0F0F1A]"
                alt=""
              />
              <img
                src="/images/avatar4.jpg"
                className="h-10 w-10 rounded-full border-2 border-[#0F0F1A]"
                alt=""
              />
              <img
                src="/images/avatar5.jpg"
                className="h-10 w-10 rounded-full border-2 border-[#0F0F1A]"
                alt=""
              />
            </div>

            <div>
              <h4 className="font-semibold text-white">
                500+ members
              </h4>
              <p className="text-sm text-white/50">
                already building. your turn.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-5">

          <div className="relative overflow-hidden rounded-2xl bg-white/5">
            <img
              src="/images/hackathon.jpg"
              alt=""
              className="h-56 w-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] to-transparent" />

            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-bold text-white">
                HackPUC 2024 — 300+ participants,
                <br />
                72 projects shipped.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            {[
              "Build real projects from day one",
              "500+ member community",
              "Win national competitions",
              "40+ events every year",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/15">
                  <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
                </div>

                <p className="text-sm text-white/70">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}