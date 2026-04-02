import { Reveal } from "@/components/reveal"

export function GlobalPerspectives() {
  return (
    <section id="global" className="bg-white border-t border-black/[0.08] py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[340px_1fr] gap-16 md:gap-28 items-start">

        {/* Left */}
        <Reveal direction="left">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-4">
            <span className="block w-6 h-px bg-gold" />
            Perspective
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-navy leading-[1.28]">
            Global Perspectives
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-8" />
        </Reveal>

        {/* Right */}
        <Reveal delay={2}>
          <p className="text-[19.5px] font-light text-navy leading-[1.75] mb-6">
            The world has never been more connected — or more contentious. A single story,
            statement, or social post can cross time zones in seconds, reshaping how governments,
            investors, and publics perceive your organization.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9] mb-5">
            At Tricuro, we understand that effective communications in the modern era demands a
            global perspective informed by local knowledge. Our team has operated across North
            America, Europe, the Middle East, and Africa, giving us the cultural fluency and
            regional expertise to advise clients on how their messages land — and how they can be
            optimized — in any arena.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9]">
            We help clients move beyond reactive communications to proactive, strategically
            coherent engagement that builds trust over time and positions them as credible,
            authoritative voices in the global conversation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
