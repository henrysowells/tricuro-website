import { Reveal } from "@/components/reveal"

export function DigitalControl() {
  return (
    <section id="digital" className="relative overflow-hidden bg-warm-grey py-16 px-8 md:px-16">
      {/* Paper texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(0,0,0,0.02) 18px, rgba(0,0,0,0.02) 19px)",
            "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(0,0,0,0.015) 24px, rgba(0,0,0,0.015) 25px)",
            "repeating-linear-gradient(-52deg, transparent, transparent 40px, rgba(0,0,0,0.012) 40px, rgba(0,0,0,0.012) 41px)",
          ].join(", "),
        }}
      />
      <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-[1fr_320px] gap-16 md:gap-28 items-start">

        {/* Left — body */}
        <Reveal delay={2}>
          <p className="text-[19.5px] font-light text-navy leading-[1.75] mb-6">
            Controlling your digital narrative is no longer optional — it is foundational to
            organizational success in the modern world.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9] mb-5">
            Tricuro&rsquo;s integrated digital practice combines sophisticated monitoring, rapid
            response capabilities, and long-range content strategy to ensure our clients maintain
            authority over their stories online. We work with communications teams to develop the
            protocols, messaging frameworks, and platform-specific strategies needed to respond
            decisively when reputational threats emerge.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9]">
            Whether managing a breaking crisis or building sustained visibility over months and
            years, our approach is the same: disciplined, data-informed, and anchored in a deep
            understanding of how modern media ecosystems actually work.
          </p>
        </Reveal>

        {/* Right — heading + signal graphic */}
        <Reveal direction="left" className="md:order-none order-first">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-4">
            <span className="block w-6 h-px bg-gold" />
            Digital Strategy
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-navy leading-[1.28]">
            Digital Control
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-8 mb-10" />

          {/* Signal broadcast / network graphic */}
          <svg
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[160px] h-[144px] opacity-60"
            aria-hidden
          >
            {/* Central node */}
            <circle cx="100" cy="90" r="5" fill="#b8902a" />
            {/* Inner ring */}
            <circle cx="100" cy="90" r="28" stroke="#b8902a" strokeWidth="1" opacity="0.7" />
            {/* Mid ring */}
            <circle cx="100" cy="90" r="55" stroke="#b8902a" strokeWidth="0.8" opacity="0.45" strokeDasharray="4 5" />
            {/* Outer ring */}
            <circle cx="100" cy="90" r="82" stroke="#b8902a" strokeWidth="0.7" opacity="0.22" strokeDasharray="3 6" />
            {/* Network nodes */}
            <circle cx="100" cy="62" r="3"  fill="#b8902a" opacity="0.7" />
            <circle cx="124" cy="104" r="3" fill="#b8902a" opacity="0.7" />
            <circle cx="76"  cy="104" r="3" fill="#b8902a" opacity="0.7" />
            {/* Connector lines */}
            <line x1="100" y1="90" x2="100" y2="62"  stroke="#b8902a" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="90" x2="124" y2="104" stroke="#b8902a" strokeWidth="0.8" opacity="0.5" />
            <line x1="100" y1="90" x2="76"  y2="104" stroke="#b8902a" strokeWidth="0.8" opacity="0.5" />
            {/* Outer satellite nodes */}
            <circle cx="58"  cy="42"  r="2.5" fill="#b8902a" opacity="0.45" />
            <circle cx="152" cy="55"  r="2.5" fill="#b8902a" opacity="0.45" />
            <circle cx="160" cy="130" r="2.5" fill="#b8902a" opacity="0.45" />
            <circle cx="40"  cy="130" r="2.5" fill="#b8902a" opacity="0.45" />
            {/* Lines to outer nodes */}
            <line x1="100" y1="62"  x2="58"  y2="42"  stroke="#b8902a" strokeWidth="0.6" opacity="0.3" strokeDasharray="3 4" />
            <line x1="124" y1="104" x2="152" y2="55"  stroke="#b8902a" strokeWidth="0.6" opacity="0.3" strokeDasharray="3 4" />
            <line x1="124" y1="104" x2="160" y2="130" stroke="#b8902a" strokeWidth="0.6" opacity="0.3" strokeDasharray="3 4" />
            <line x1="76"  y1="104" x2="40"  y2="130" stroke="#b8902a" strokeWidth="0.6" opacity="0.3" strokeDasharray="3 4" />
          </svg>
        </Reveal>
      </div>
    </section>
  )
}
