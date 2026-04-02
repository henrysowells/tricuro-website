const stops = [
  "Washington, D.C.",
  "Capitol Hill",
  "K Street",
  "Dupont Circle",
  "Georgetown",
  "The National Mall",
  "Embassy Row",
  "Foggy Bottom",
  "Pennsylvania Avenue",
  "The White House",
  "Lafayette Square",
  "Chinatown",
  "Adams Morgan",
  "The Kennedy Center",
  "Arlington",
]

const separator = <span className="mx-5 text-gold/50" aria-hidden>·</span>

const Track = () => (
  <>
    {stops.map((s, i) => (
      <span key={i} className="inline-flex items-center shrink-0">
        <span>{s}</span>
        {separator}
      </span>
    ))}
  </>
)

export function DCTicker() {
  return (
    <div
      className="bg-navy-deep border-t border-b border-gold/15 py-2.5 overflow-hidden"
      aria-label="Washington D.C. landmarks"
    >
      <div className="dc-marquee-track flex whitespace-nowrap text-[10px] font-semibold tracking-[0.28em] uppercase text-white/30 select-none">
        {/* Two identical copies for seamless loop */}
        <Track />
        <Track />
      </div>
    </div>
  )
}
