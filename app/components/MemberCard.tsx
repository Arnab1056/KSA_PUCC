type MemberCardProps = {
  name: string;
  year: string;
  wing: string;
  wingColor: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
};

export default function MemberCard({
  name,
  year,
  wing,
  wingColor,
  image,
  active = false,
  onClick,
}: MemberCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        active
          ? "border-cyan-400 bg-white shadow-lg"
          : "border-[#EDE9E3] bg-white/60 hover:bg-white"
      }`}
    >
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded-full object-cover border-2 border-white"
      />

      <div className="flex-1">
        <h4 className="font-semibold text-[#1A1A2E]">
          {name}
        </h4>

        <p className="mt-1 text-sm text-[#1A1A2E]/50">
          {year}
        </p>

        <span
          className={`mt-2 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${wingColor}`}
        >
          {wing}
        </span>
      </div>

      {active && (
        <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
      )}
    </button>
  );
}