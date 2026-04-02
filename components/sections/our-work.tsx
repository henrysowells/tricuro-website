import { Reveal } from "@/components/reveal"

const items = [
  "Developed and executed public diplomacy communications strategies for sovereign governments seeking to strengthen bilateral relations with the United States.",
  "Managed high-stakes crisis communications for Fortune 500 companies navigating regulatory investigations and media scrutiny.",
  "Advised international organizations on stakeholder engagement strategies for major multilateral negotiations and summits.",
  "Designed and implemented sustained public affairs campaigns that shaped legislative outcomes on Capitol Hill.",
  "Established social media command centers for governments and institutions requiring real-time narrative monitoring and response.",
  "Positioned senior executives and heads of state for international media, including broadcast interviews, op-ed placement, and speaking programs.",
  "Produced editorial and multimedia content for embassies, diplomatic missions, and international trade bodies operating in Washington.",
  "Built and executed reputation restoration programs for clients emerging from periods of intense public and media scrutiny.",
  "Coordinated press and public affairs operations in support of humanitarian and development initiatives across multiple continents.",
  "Guided multinational corporations through the communications dimensions of mergers, acquisitions, and market-entry strategies.",
  "Provided strategic communications counsel to advocacy organizations pursuing policy change at the federal, state, and international levels.",
]

export function OurWork() {
  return (
    <section id="work" className="bg-navy py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold-light mb-3">
            <span className="block w-6 h-px bg-gold-light" />
            Experience
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-white mb-12">
            Our Work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2">
          {items.map((text, i) => (
            <Reveal key={i} delay={((i % 2) + 1) as 1 | 2}>
              <div
                className={[
                  "flex gap-5 py-8 border-t border-white/[0.07]",
                  i % 2 === 0 ? "md:pr-14" : "md:pl-14 md:border-l md:border-l-white/[0.07]",
                ].join(" ")}
              >
                <span className="text-[10px] font-bold tracking-[0.1em] text-gold pt-1 flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] text-white/65 leading-[1.75]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
