import WingCard from "./wingcard";
import { wings } from "./wingdata";

export default function Wings() {
  return (
    <section className="bg-[#F5F2ED] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#03B4BC]">
            Divisions
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#1A1A2E]">
            Six Wings. One Club.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500 leading-7">
            Each wing runs its own workshops, projects, and competitions
            with mentorship from seniors and industry professionals.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wings.map((wing) => (
            <WingCard
              key={wing.title}
              title={wing.title}
              tag={wing.tag}
              description={wing.description}
              members={wing.members}
              image={wing.image}
              color={wing.color}
              bg={wing.bg}
            />
          ))}
        </div>

      </div>
    </section>
  );
}