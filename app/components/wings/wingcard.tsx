import Image from "next/image";
import Link from "next/link";

interface WingCardProps {
  title: string;
  tag: string;
  description: string;
  members: string;
  image: string;
  color: string;
  bg: string;
}

export default function WingCard({
  title,
  tag,
  description,
  members,
  image,
  color,
  bg,
}: WingCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className={`relative h-40 overflow-hidden ${bg}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

        {/* Tag */}
        <div
          className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold"
          style={{
            backgroundColor: `${color}20`,
            color: color,
          }}
        >
          {tag}
        </div>

        {/* Icon */}
        <div
          className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl shadow-md"
          style={{
            backgroundColor: `${color}20`,
          }}
        >
          <span
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#1A1A2E]">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-gray-400">{members}</span>

          <Link
            href="/wings"
            style={{ color }}
            className="group/link flex items-center gap-2 text-sm font-semibold"
          >
            Learn More

            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
    
  );
}