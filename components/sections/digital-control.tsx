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
          <div className="w-10 h-0.5 bg-gold mt-8" />
        </Reveal>
      </div>
    </section>
  )
}
