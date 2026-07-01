import Image from "next/image";
import Link from "next/link";

export default function Snapshot() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Images */}
          <div className="space-y-4">

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/snapshot-1.jpg"
                alt="Club Activity"
                width={550}
                height={400}
                className="w-full h-[240px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/snapshot-2.jpg"
                  alt="Students"
                  width={260}
                  height={180}
                  className="w-full h-[160px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/snapshot-3.jpg"
                  alt="Hackathon"
                  width={260}
                  height={180}
                  className="w-full h-[160px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="text-[#03B4BC] text-sm font-semibold uppercase tracking-wider">
              Who We Are
            </p>

            <h2 className="mt-4 text-5xl font-extrabold leading-tight text-[#1A1A2E]">
              A community that
              <br />
              builds, breaks, and
              <br />
              ships together.
            </h2>

            <p className="mt-6 text-gray-500 leading-8 text-lg">
              Founded in 2012, the PUC Computer Club is the largest student
              technical society at Pontifical University. We run six
              specialized wings spanning web, AI, security, mobile,
              design, and hardware.
            </p>

            <p className="mt-6 text-gray-500 leading-8 text-lg">
              Whether you're in your first semester or final year,
              there's a wing for you. We believe the best way to learn
              is by building real things — and by doing it alongside
              people who care as much as you do.
            </p>

            <Link
              href="/wings"
              className="mt-8 inline-flex items-center gap-2 text-[#03B4BC] font-semibold hover:gap-4 transition-all duration-300"
            >
              Explore our wings →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}