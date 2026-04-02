import { Reveal } from "@/components/reveal"

const team = [
  {
    initials: "DS",
    name: "David Sowells",
    title: "Principal",
    bio: "Began his career as a political economist, campaign strategist and speechwriter at the UK House of Commons. Advised governments, corporations, NGOs and HNWIs including HSBC and McDonald's on political engagement, numerous governments on media relations, and Ericsson on crisis communications. Previously served as Public Affairs Europe Director at CNN International and Time Warner. Studied at the London School of Economics and Harvard Business School. Led communications consultancies in Washington DC, London and Brussels.",
  },
  {
    initials: "NH",
    name: "Nicolla Hewitt",
    title: "Principal",
    bio: "30+ years experience in U.S. and international media including ABC, CBS, NBC and Yahoo. Adviser to HM King Charles III for the Turquoise Mountain Foundation. Advises Sir Richard Branson and Virgin Unite. Board member of the Foreign Press Correspondents of the United States and the International Women's Media Foundation. Degree in Broadcast Journalism from Pepperdine University. Media Fellow at the Hoover Institution at Stanford. Speaks English, French and Arabic.",
  },
]

export function Team() {
  return (
    <section id="team" className="bg-off-white py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">

        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-3">
            <span className="block w-6 h-px bg-gold" />
            Leadership
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-navy mb-12">
            Our Team
          </h2>
        </Reveal>

        <div className="divide-y divide-black/[0.08] border-t border-black/[0.08]">
          {team.map((member) => (
            <Reveal key={member.name}>
              <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-16 py-12 items-start">
                <div>
                  <div className="w-12 h-12 bg-navy flex items-center justify-center font-serif text-base font-medium text-gold-light border-b-2 border-gold mb-5">
                    {member.initials}
                  </div>
                  <p className="font-serif text-[1.25rem] font-medium text-navy leading-tight mb-1.5">
                    {member.name}
                  </p>
                  <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-gold">
                    {member.title}
                  </p>
                </div>
                <p className="text-[16px] text-[#383838] leading-[1.88] pt-0.5">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
