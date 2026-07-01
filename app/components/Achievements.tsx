import AchievementCard from "./AchievementCard";

const achievements = [
  {
    image: "/achievements/sih.jpg",
    badge: "National Winners",
    badgeColor: "bg-orange-500/80",
    year: "2024",
    title: "Smart India Hackathon 2024",
    description:
      "First place among 12,000+ teams nationwide for an AI-powered crop disease detection system.",
    members: "Arjun Menon • Priya Nair • Rohan Das",
  },
  {
    image: "/achievements/google.jpg",
    badge: "Top 100 Global",
    badgeColor: "bg-indigo-500/80",
    year: "2024",
    title: "Google Solution Challenge",
    description:
      "Selected as one of the Top 100 teams globally from over 12,000 submissions.",
    members: "Sneha Iyer • Karthik R. • Meera Pillai",
  },
  {
    image: "/achievements/icpc.jpg",
    badge: "Rank 4 - Region",
    badgeColor: "bg-red-500/80",
    year: "2024",
    title: "ICPC Asia Regional",
    description:
      "Competitive programming team secured 4th place in the Asia-Pacific regional finals.",
    members: "Aditya Sharma • Vishal K. • Neeraj P.",
  },
  {
    image: "/achievements/he.jpg",
    badge: "1st Place",
    badgeColor: "bg-yellow-500/80",
    year: "2024",
    title: "HackerEarth University League",
    description:
      "Won the national university league with consistent top performances across eight rounds.",
    members: "Divya M. • Rahul Nair • Tanvi G.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-[#1A1A2E] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#03B4BC]">
            Track Record
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Built to win.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Our members compete nationally and globally—and bring home results.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {achievements.map((item) => (
            <AchievementCard
              key={item.title}
              image={item.image}
              badge={item.badge}
              badgeColor={item.badgeColor}
              year={item.year}
              title={item.title}
              description={item.description}
              members={item.members}
            />
          ))}
        </div>
      </div>
    </section>
  );
}