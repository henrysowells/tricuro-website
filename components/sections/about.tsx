import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="bg-off-white border-t-4 border-navy py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[380px_1fr] gap-16 md:gap-28 items-start">

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
            In the fast-paced, always-on world of the 21st century digital age, healthy global
            reputations require more than influence; they need control.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9] mb-5">
            Tricuro is a Washington, D.C.-based strategic communications firm with deep roots
            in the corridors of K Street and Capitol Hill. We specialize in public diplomacy,
            public affairs, and international reputation management — serving governments,
            corporations, and institutions seeking to shape and protect their narratives in an
            increasingly complex media environment.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9]">
            Our team brings decades of experience at the intersection of policy, media, and
            international affairs. From the halls of Congress to global media markets, we give
            our clients the strategic command they need to communicate with confidence on the
            world stage.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
