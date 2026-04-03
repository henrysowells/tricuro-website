import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-off-white border-t-4 border-navy py-24 px-8 md:px-16">
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
      <div className="relative z-10 max-w-[1100px] mx-auto grid md:grid-cols-[380px_1fr] gap-16 md:gap-28 items-start">

        {/* Left */}
        <Reveal direction="left">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-4">
            <span className="block w-6 h-px bg-gold" />
            About Tricuro
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.25] text-navy">
            Global Reputation.<br />
            <em className="italic text-gold">Precisely Managed.</em>
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-8" />

          {/* DC badge */}
          <div className="inline-flex items-center gap-2.5 border border-navy/20 px-3.5 py-2 mt-8">
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden>
              <path d="M5.5 0C2.46 0 0 2.46 0 5.5c0 3.85 5.5 8.5 5.5 8.5S11 9.35 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#b8902a"/>
            </svg>
            <span className="text-[9px] font-bold tracking-[0.28em] uppercase text-navy/60">
              Based in Washington, D.C.
            </span>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={2}>
          <p className="text-[19.5px] font-light text-navy leading-[1.75] mb-6">
            Helping governments and multinational corporations enhance and protect their global
            reputations.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9]">
            Tricuro Communications is a strategic communications agency that helps governments
            and multinational corporations enhance and protect their global reputations. Our
            expertise spans international media relations, strategic messaging, speechwriting,
            script development, crisis communications, and public affairs — ensuring our clients
            stand out in an increasingly competitive global marketplace.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
