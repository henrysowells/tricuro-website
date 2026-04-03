import { Reveal } from "@/components/reveal"

const items = [
  "Advised Ericsson (Sweden) on crisis communications during a high-stakes international regulatory investigation, protecting brand reputation across global markets.",
  "Led international media relations for the Kingdom of Saudi Arabia, managing sustained narratives across U.S., European, and Asian press markets.",
  "Served as Public Affairs Europe Director at CNN International and Time Warner, shaping communications strategy at the highest levels of global media.",
  "Advised HSBC and McDonald's on political engagement strategy, navigating complex regulatory and reputational environments across multiple jurisdictions.",
  "Developed strategic messaging and media programs for the Governments of Bahrain, Mexico, and Sri Lanka, building credibility with international press.",
  "Provided crisis communications counsel to Trafigura (Switzerland), one of the world's largest commodity trading companies, during periods of intense media scrutiny.",
  "Built reputation programs for African Parks, Wildlife Alliance, and Vital Voices Global Partnership — elevating mission-driven organizations on the world stage.",
  "Counseled Sandals Resorts on international public relations, driving editorial coverage across luxury travel and lifestyle media.",
  "Provided strategic communications support to the Council for the Development of Cambodia, shaping the country's narrative for international investors and diplomatic audiences.",
  "Advised Inmarsat (UK) on public affairs communications, positioning the company in key policy debates affecting the global satellite industry.",
  "Speechwriting and media preparation for heads of state, senior government ministers, and Fortune 500 C-suite executives across Asia, the Middle East, Europe, and the Americas.",
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
