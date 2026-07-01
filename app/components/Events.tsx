import EventCard from "./Eventcard";

const events = [
  {
    image: "/events/event1.jpg",
    badge: "Flagship",
    category: "Hackathon",
    title: "HackPUC 2025",
    description:
      "48-hour flagship hackathon. Build anything that solves a real problem. ₹1L+ in prizes.",
    date: "Aug 15–17, 2025",
  },
  {
    image: "/events/event2.jpg",
    badge: "Upcoming",
    category: "Speaker Series",
    title: "DevTalks: AI Edition",
    description:
      "Industry experts from Google Brain and Hugging Face share what's next in generative AI.",
    date: "Jul 28, 2025",
  },
  {
    image: "/events/event3.jpg",
    badge: "Register Now",
    category: "Competition",
    title: "CTF Championship",
    description:
      "Capture-the-flag across web, binary, crypto and forensics. Compete solo or in teams of 3.",
    date: "Sep 6, 2025",
  },
];

export default function Events() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#03B4BC]">
              What's On
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#1A1A2E]">
              Upcoming Events
            </h2>
          </div>

          <button className="group flex items-center gap-2 font-semibold text-[#03B4BC]">
            See full calendar

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {events.map((event) => (
            <EventCard
              key={event.title}
              image={event.image}
              badge={event.badge}
              category={event.category}
              title={event.title}
              description={event.description}
              date={event.date}
            />
          ))}

        </div>

      </div>
    </section>
  );
}