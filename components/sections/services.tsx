import { Reveal } from "@/components/reveal"

const services = [
  {
    num: "01",
    title: "Public Diplomacy",
    body: "We help nations and international organizations communicate their positions, values, and objectives to foreign publics and policy communities. Our public diplomacy programs build lasting credibility across borders, bridging cultural and political divides through strategic narrative and engagement.",
  },
  {
    num: "02",
    title: "Public Affairs",
    body: "Navigating the intersection of government, policy, and public opinion requires experience and relationships. Tricuro helps clients advance their legislative and regulatory objectives by developing compelling communications strategies tailored to decision-makers and the stakeholders who influence them.",
  },
  {
    num: "03",
    title: "Public Relations",
    body: "Reputation is your most valuable asset. We craft and protect the stories that define how the world sees you — through media relations, crisis communications, executive positioning, and sustained earned-media campaigns that reinforce your credibility and authority over time.",
  },
  {
    num: "04",
    title: "Social Media",
    body: "The digital conversation never stops. Our social media practice helps clients build authoritative presences, engage strategically with key audiences, and respond swiftly and effectively when narratives shift. From content strategy to real-time monitoring, we keep you in control of your digital voice.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-navy py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold-light mb-3">
            <span className="block w-6 h-px bg-gold-light" />
            What We Do
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-white mb-12">
            Our Services
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={((i % 2) + 1) as 1 | 2}>
              <div className="group bg-navy px-10 py-12 relative overflow-hidden hover:bg-white/[0.025] transition-colors duration-300 cursor-default">
                {/* Gold slide-in bottom border */}
                <span className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <span className="block text-[10px] font-bold tracking-[0.22em] text-gold mb-7">{s.num}</span>
                <h3 className="font-serif text-[1.4rem] font-medium text-white mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[15.5px] text-white/52 leading-[1.85]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
