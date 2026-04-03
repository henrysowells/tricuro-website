"use client"

import RotatingEarth from "@/components/ui/wireframe-dotted-globe"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy overflow-hidden flex items-center"
    >
      {/* Diagonal stripe texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-48deg, transparent, transparent 72px, rgba(255,255,255,0.018) 72px, rgba(255,255,255,0.018) 73px)",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(30,66,112,0.55) 0%, rgba(13,35,64,0) 70%)",
        }}
      />

      {/* Gold bottom bar */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{
          background: "linear-gradient(to right, #b8902a 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

        {/* Text column */}
        <div className="flex-1 min-w-0">
          {/* Animated gold rule */}
          <div className="flex items-center gap-4 mb-8 animate-[heroUp_0.9s_0.5s_ease_forwards] opacity-0">
            <span className="block w-8 h-px bg-gold" />
            <p className="text-[10.5px] font-semibold tracking-[0.32em] uppercase text-gold-light">
              Washington, D.C. &nbsp;&middot;&nbsp; Strategic Communications
            </p>
          </div>

          <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[1.04] tracking-[-0.015em] text-white animate-[heroUp_0.9s_0.7s_ease_forwards] opacity-0">
            <span className="whitespace-nowrap">The World is</span>
            <br />
            <em className="italic text-gold-light">Listening.</em>
          </h1>

          <div className="w-12 h-px bg-gold my-8 animate-[heroUp_0.9s_0.85s_ease_forwards] opacity-0" />

          <p className="text-lg font-light text-white/60 max-w-[500px] leading-[1.85] animate-[heroUp_0.9s_0.95s_ease_forwards] opacity-0">
            In the fast-paced, always-on world of the 21st century digital age,
            healthy global reputations require more than influence; they need control.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10 animate-[heroUp_0.9s_1.1s_ease_forwards] opacity-0">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-3.5 text-[11.5px] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-200 hover:translate-x-1 transition-transform"
            >
              Our Services &thinsp;&rarr;
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-[11.5px] font-semibold tracking-[0.2em] uppercase text-white/55 border border-white/20 px-8 py-3.5 hover:text-white hover:border-white/45 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-14 text-[10px] font-semibold tracking-[0.28em] uppercase text-white/22 animate-[heroUp_0.9s_1.25s_ease_forwards] opacity-0">
            Washington, D.C.&nbsp;&middot;&nbsp;Public Diplomacy&nbsp;&middot;&nbsp;Public Affairs&nbsp;&middot;&nbsp;Global Reputation
          </p>
        </div>

        {/* Globe column — fixed 500×500, never resizes */}
        <div className="flex-shrink-0 flex items-center justify-center animate-[heroUp_0.9s_0.6s_ease_forwards] opacity-0">
          <RotatingEarth width={500} height={500} />
        </div>
      </div>

      <style>{`
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
