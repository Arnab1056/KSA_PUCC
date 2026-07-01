type EventCardProps = {
  image: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  date: string;
};

export default function EventCard({
  image,
  badge,
  category,
  title,
  description,
  date,
}: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#EDE9E3] bg-[#FAF7F3] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#03B4BC] px-3 py-1 text-[11px] font-bold text-white">
          {badge}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#1A1A2E]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
            />
          </svg>

          {date}
        </div>
      </div>
    </div>
  );
}