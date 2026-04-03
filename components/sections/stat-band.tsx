import { Reveal } from "@/components/reveal"

const stats = [
  { number: "6",   label: "Continents" },
  { number: "25+", label: "Clients" },
  { number: "40+", label: "Media Placements" },
  { number: "3",   label: "Offices" },
]

export function StatBand() {
  return (
    <div className="bg-navy-deep border-y border-gold/20">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <div className={`px-8 py-10 text-center ${i < stats.length - 1 ? "border-r border-gold/20" : ""}`}>
              <span className="block font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-normal text-gold-light leading-none mb-2">
                {s.number}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-white/38">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
