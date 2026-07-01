type TestimonialCardProps = {
  quote: string;
  name: string;
  year: string;
  wing: string;
  wingColor: string;
  avatar: string;
  achievementTitle: string;
  achievementImage: string;
};

export default function TestimonialCard({
  quote,
  name,
  year,
  wing,
  wingColor,
  avatar,
  achievementTitle,
  achievementImage,
}: TestimonialCardProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1.2fr]">
      {/* Left Testimonial */}
      <div className="flex min-h-[360px] flex-col justify-between rounded-3xl bg-[#1A1A2E] p-10">

        <div>
          <span
            className={`inline-block rounded-full px-4 py-1 text-xs font-bold ${wingColor}`}
          >
            {wing}
          </span>

          <h3 className="mt-8 text-2xl leading-relaxed font-medium text-white">
            "{quote}"
          </h3>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
          />

          <div>
            <h4 className="font-semibold text-white">
              {name}
            </h4>

            <p className="text-sm text-white/50">
              {year}
            </p>
          </div>
        </div>
      </div>

      {/* Right Achievement */}
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
          Key Achievement
        </p>

        <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#1A1A2E]">
          {achievementTitle}
        </h3>

        <img
          src={achievementImage}
          alt={achievementTitle}
          className="mt-8 h-36 w-full rounded-xl object-cover transition duration-300 hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}