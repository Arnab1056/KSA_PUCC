import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
            <svg
              className="w-4 h-4 text-[#03B4BC]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L15 8L22 9L17 14L18 22L12 19L6 22L7 14L2 9L9 8L12 2Z" />
            </svg>

            <span className="text-xs font-semibold tracking-widest uppercase text-[#03B4BC]">
              PUC Computer Club
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-[#FF9072]">
            Where Code
            <br />
            <span className="text-[#03B4BC]">
              Meets Community.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
            Premier University's hub for Compititive Programming, Softwere Engineering, Networking ,
            Deep Neural Research and IOT
             and
            problem-solvers. Six wings, one mission — learn by building
            things that matter.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex gap-5">

            <Link
              href="/join"
              className="rounded-full bg-[#03B4BC] px-8 py-4 text-white font-semibold transition hover:scale-105 hover:bg-cyan-600"
            >
              Join the Club →
            </Link>

            <Link
              href="/wings"
              className="rounded-full border border-gray-300 px-8 py-4 font-medium text-[#1A1A2E] transition hover:border-[#03B4BC] hover:text-[#03B4BC]"
            >
              Explore Wings →
            </Link>

          </div>
        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">

          {/* Floating Badge */}

          <div className="absolute -top-4 right-8 z-20 rounded-2xl bg-[#03B4BC] px-5 py-2 text-white font-bold shadow-lg">
            500+ Members
          </div>

          {/* Card */}

          <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-xl">

            <Image
              src="/hero-image.jpg"
              alt="Hackathon"
              width={300}
              height={200}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <div className="flex justify-between items-center">

                <span className="text-xs uppercase font-bold tracking-widest text-[#03B4BC]">
                  Current Event
                </span>

                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-gray-500">
                  July 1
                </span>

              </div>

              <h2 className="mt-4 text-2xl font-bold text-[#1A1A2E]">
                PUCC TECHFEST 2026
              </h2>

              <p className="mt-2 text-gray-500">
                
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}