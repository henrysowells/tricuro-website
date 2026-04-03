import { Reveal } from "@/components/reveal"

const items = [
  "Council for the Development of Cambodia — international media strategy and investment promotion",
  "Kingdom of Saudi Arabia — international media relations",
  "Ericsson (Sweden) — crisis communications during DOJ and SEC investigations",
  "Trafigura (Switzerland) — media relations, congressional and public affairs campaign",
  "Government of Bahrain — online reputation management and strategic messaging",
  "Government of Mexico — media training for G20 and B20 summits",
  "Greif Fortune 500 — 24/7 crisis communications support amid labor challenges",
  "African Parks — media placement and opinion article drafting for global conservation",
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
