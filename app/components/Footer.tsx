export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Left */}
          <div>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <img
                  src="/images/ulogo.png"
                  alt="University Logo"
                  className="h-11 w-auto"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Parent Institution
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  Premier University
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Chattogram, Bangladesh
                  <br />
                  Est. 2002
                </p>
              </div>
            </div>

            <div className="my-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/20"></div>
              <span className="text-white/50">×</span>
              <div className="h-px flex-1 bg-white/20"></div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <img
                  src="/images/club-logo.png"
                  alt="Club Logo"
                  className="h-8 w-auto"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Official Student Club
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  PUC Computer Club
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Recognized by the University
                  <br />
                  500+ Active Members
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/40">
              Building the next generation of technologists — one
              project, one wing, one semester at a time.
            </p>
          </div>

          {/* Club */}
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
              Club
            </h4>

            <ul className="space-y-3 text-white/80">
              <li><a href="#about">About Us</a></li>
              <li><a href="#wings">Wings</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
              Connect
            </h4>

            <ul className="space-y-3 text-white/80">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
              Resources
            </h4>

            <ul className="space-y-3 text-white/80">
              <li><a href="#">Join Us</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-white/60 md:flex-row">
          <p>© 2026 PUC Computer Club. All rights reserved.</p>

          <p>
            Made with <span className="text-cyan-400">♥</span> by PUCC
            members
          </p>
        </div>
      </div>
    </footer>
  );
}