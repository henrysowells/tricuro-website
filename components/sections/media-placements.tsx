import { Reveal } from "@/components/reveal"

const outlets = [
  "60 Minutes",
  "BBC",
  "CNN",
  "Wall Street Journal",
  "New York Times",
  "Forbes",
  "Bloomberg",
  "Financial Times",
  "Reuters",
  "Washington Post",
  "Newsweek",
  "The Economist",
  "CNBC",
  "PBS",
  "Le Figaro",
  "Nikkei Asia",
  "South China Morning Post",
  "Associated Press",
  "Fox News",
  "ABC News",
  "France 24",
]

export function MediaPlacements() {
  return (
    <section className="bg-navy-deep py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold-light mb-3">
            <span className="block w-6 h-px bg-gold-light" />
            Coverage
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-white mb-3">
            Media Placements
          </h2>
          <p className="text-[16px] text-white/45 leading-relaxed mb-12 max-w-[560px]">
            Our clients have been featured in the world's most influential media outlets.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {outlets.map((outlet) => (
              <div
                key={outlet}
                className="border border-white/[0.08] -mt-px -ml-px flex items-center justify-center px-4 py-7 text-center group hover:border-gold/40 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
              >
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 group-hover:text-gold-light transition-colors duration-300 leading-tight">
                  {outlet}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
