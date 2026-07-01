type AchievementCardProps = {
  image: string;
  badge: string;
  badgeColor: string;
  year: string;
  title: string;
  description: string;
  members: string;
};

export default function AchievementCard({
  image,
  badge,
  badgeColor,
  year,
  title,
  description,
  members,
}: AchievementCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl">

      <div className="relative h-52 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-transparent"></div>

        <div
          className={`absolute left-4 top-4 rounded-full px-4 py-1 text-xs font-bold text-white ${badgeColor}`}
        >
          {badge}
        </div>

        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white">
          {year}
        </div>

        <div className="absolute bottom-4 left-4 text-sm text-white/70">
          {members}
        </div>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-white/60">
          {description}
        </p>

      </div>

    </div>
  );
}