import { Reveal } from "@/components/reveal"

const clients = [
  "Council for the Development of Cambodia",
  "African Parks",
  "Vital Voices Global Partnership",
  "Kingdom of Saudi Arabia",
  "Ericsson",
  "Trafigura",
  "Government of Bahrain",
  "Government of Mexico",
  "Government of Sri Lanka",
  "Inmarsat",
  "Greif",
  "Sandals Resorts",
  "Wildlife Alliance",
]

const clientMeta: Record<string, string> = {
  "Ericsson":   "Sweden",
  "Trafigura":  "Switzerland",
  "Inmarsat":   "UK",
  "Greif":      "Fortune 500",
}

export function Clients() {
  return (
    <section className="bg-off-white py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-3">
            <span className="block w-6 h-px bg-gold" />
            Clients
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-navy mb-3">
            Selected Clients
          </h2>
          <p className="text-[16px] text-[#555] leading-relaxed mb-12 max-w-[560px]">
            We are proud to have advised some of the world's most consequential governments,
            corporations, and institutions.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-black/[0.07]">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-off-white px-8 py-7 group hover:bg-white transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-serif text-[1.05rem] text-navy leading-snug font-medium">
                    {client}
                  </p>
                  {clientMeta[client] && (
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-gold border border-gold/30 px-2 py-1 flex-shrink-0 mt-0.5">
                      {clientMeta[client]}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {/* Fill last row so no gap-background shows through */}
            {Array.from({ length: (3 - (clients.length % 3)) % 3 }).map((_, i) => (
              <div key={`filler-${i}`} aria-hidden className="bg-off-white px-8 py-7" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
