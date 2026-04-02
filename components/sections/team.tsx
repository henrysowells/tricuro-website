import { Reveal } from "@/components/reveal"

const principals = [
  {
    initials: "DS",
    name: "David Sowells",
    title: "Founder & Managing Director",
    bio: [
      "David Sowells is the founder and managing director of Tricuro. A seasoned communications strategist with deep experience at the nexus of international affairs and media, David has counseled governments, multinational corporations, and advocacy organizations across four continents.",
      "Prior to founding Tricuro, David held senior communications roles in Washington, D.C., working on high-profile public diplomacy, public affairs, and reputation management engagements. He brings a rigorous, outcomes-focused approach to every client relationship, with particular expertise in building and protecting global reputations under pressure.",
      "David is a graduate of Howard University and has completed advanced studies in international communications and policy. He is a frequent speaker on the intersection of media, diplomacy, and reputation management.",
    ],
  },
  {
    initials: "CC",
    name: "Chuck Conconi",
    title: "Senior Advisor, Media & Government Relations",
    bio: [
      "Chuck Conconi is one of Washington's most respected journalists and political observers, with a career spanning decades at the heart of the capital's media and political establishment. For many years he wrote the celebrated Personalities column for The Washington Post, covering the intersection of power, politics, and culture in the nation's capital.",
      "A veteran of Washington journalism with unparalleled access and institutional knowledge, Chuck advises Tricuro's clients on media strategy, political communications, and the dynamics of Washington's ever-shifting landscape. His insight into how stories are made — and how they can be shaped — is an irreplaceable asset for clients seeking to navigate the nation's capital with credibility and confidence.",
    ],
  },
  {
    initials: "CA",
    name: "Charles Andreae",
    title: "Senior Advisor, International Affairs",
    bio: [
      "Charles Andreae brings more than three decades of experience in international affairs, public diplomacy, and government relations to the Tricuro team. A veteran of multiple high-level diplomatic and governmental assignments, Charles has worked extensively across Europe, the Middle East, and Africa, developing expertise in the complex communications challenges that arise at the intersection of sovereign interests and international public opinion.",
      "His counsel is particularly valued by governments and international organizations navigating sensitive bilateral relationships and multilateral processes. Charles combines an astute understanding of geopolitical dynamics with practical expertise in how communications strategy can serve diplomatic objectives.",
    ],
  },
]

const associates = [
  {
    initials: "JN",
    name: "Joey Nichols",
    title: "Digital & Social Media Strategy",
    bio: [
      "Joey Nichols leads Tricuro's digital and social media practice, bringing a sophisticated understanding of how digital platforms shape public discourse and reputational dynamics for governments and institutions. He specializes in building integrated digital communications programs that align social media strategy with broader public affairs and public diplomacy objectives.",
      "Joey has managed digital communications operations for high-profile clients across the political and corporate sectors, with particular expertise in real-time monitoring, rapid response, and platform-specific content strategy. His work bridges the gap between strategic communications goals and the tactical realities of the modern digital information environment.",
    ],
  },
  {
    initials: "SS",
    name: "Samantha Sault",
    title: "Public Affairs & Policy Communications",
    bio: [
      "Samantha Sault is a communications strategist with deep expertise in public affairs and policy advocacy. She has worked extensively with clients navigating the legislative and regulatory environment in Washington, developing communications strategies that effectively advance policy objectives and build coalitions among key stakeholders.",
      "Samantha's background spans work with advocacy organizations, trade associations, and corporations engaged in significant federal policy processes. She brings particular skill in translating complex policy issues into clear, compelling public narratives that engage both decision-makers and the broader publics whose views shape the policy environment.",
    ],
  },
  {
    initials: "SC",
    name: "Sandra Charles",
    title: "International Media & Public Relations",
    bio: [
      "Sandra Charles specializes in international media relations and public relations strategy, with experience working across the Americas, Europe, and the Caribbean. She has built and managed media programs for governments, diplomatic missions, and international organizations seeking to engage English-language and international press effectively.",
      "Sandra's expertise encompasses executive media preparation, press program development, and the management of complex, multi-market communications campaigns. Her relationships with international journalists and editors — and her understanding of what drives editorial interest in Washington — are a significant asset for Tricuro's international clients.",
    ],
  },
  {
    initials: "AM",
    name: "Allen Mgaieth",
    title: "Middle East & Africa Practice",
    bio: [
      "Allen Mgaieth leads Tricuro's practice focused on the Middle East and Africa, bringing firsthand experience living and working across these regions to his strategic communications work. He advises governments, institutions, and corporations navigating the communications challenges that arise from operating in — or engaging with — these dynamic and often complex environments.",
      "Allen's regional expertise encompasses an understanding of local media ecosystems, political dynamics, and the cultural dimensions of effective communications — knowledge that is essential for clients whose reputations and objectives extend beyond Washington to audiences in these regions and the international actors focused on them.",
    ],
  },
]

const advisory = [
  {
    name: "Bill McSweeny",
    title: "Advisory Board",
    bio: [
      "Bill McSweeny brings a distinguished record of public service and international engagement to Tricuro's advisory board. A respected figure in Washington's national security and foreign policy community, Bill has held senior positions that have given him unparalleled insight into the intersection of American foreign policy, international organizations, and strategic communications.",
      "His counsel informs Tricuro's approach to public diplomacy engagements and our work with clients operating in sensitive geopolitical environments. Bill's network and perspective are an invaluable resource for clients navigating the U.S. policy establishment.",
    ],
  },
  {
    name: "Col. Charles McFetridge",
    title: "Advisory Board",
    bio: [
      "Colonel Charles McFetridge brings a distinguished military career and deep expertise in strategic communications, information operations, and civil-military affairs to Tricuro's advisory board. His experience encompasses senior leadership roles across a range of operational and institutional environments, giving him a unique understanding of how communications strategy operates under conditions of complexity and high stakes.",
      "Colonel McFetridge advises Tricuro on defense and national security-related communications engagements, and brings a rigorous, mission-oriented perspective to our work with government and institutional clients.",
    ],
  },
]

function MemberRow({
  initials,
  name,
  title,
  bio,
}: {
  initials?: string
  name: string
  title: string
  bio: string[]
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-14 py-10 border-t border-black/[0.08] last:border-b last:border-black/[0.08] items-start">
        <div>
          {initials && (
            <div className="w-12 h-12 bg-navy flex items-center justify-center font-serif text-base font-medium text-gold-light border-b-2 border-gold mb-5 flex-shrink-0">
              {initials}
            </div>
          )}
          <p className="font-serif text-[1.2rem] font-medium text-navy leading-tight mb-1.5">{name}</p>
          <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-gold leading-relaxed">{title}</p>
        </div>
        <div className="space-y-3">
          {bio.map((p, i) => (
            <p key={i} className="text-[15.5px] text-[#383838] leading-[1.88]">{p}</p>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function Team() {
  return (
    <section id="team" className="bg-off-white py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <Reveal>
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-3">
            <span className="block w-6 h-px bg-gold" />
            Leadership
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.7rem)] font-normal text-navy mb-12">
            Our Team
          </h2>
        </Reveal>

        {/* Principals */}
        <SectionDivider label="Principals" />
        {principals.map(m => <MemberRow key={m.name} {...m} />)}

        {/* Associates */}
        <SectionDivider label="Associates" />
        {associates.map(m => <MemberRow key={m.name} {...m} />)}

        {/* Advisory Board */}
        <SectionDivider label="Advisory Board" />
        <div className="grid md:grid-cols-2 gap-6 mt-0">
          {advisory.map((m, i) => (
            <Reveal key={m.name} delay={(i + 1) as 1 | 2}>
              <div className="bg-white border border-black/[0.08] border-t-[3px] border-t-navy p-10">
                <p className="font-serif text-[1.2rem] font-medium text-navy mb-1.5">{m.name}</p>
                <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-gold mb-5">{m.title}</p>
                <div className="space-y-3">
                  {m.bio.map((p, j) => (
                    <p key={j} className="text-[15px] text-[#383838] leading-[1.88]">{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mt-16 mb-0 pb-4 border-b border-gold/28">
      <span className="block w-5 h-px bg-gold flex-shrink-0" />
      <p className="text-[10px] font-bold tracking-[0.32em] uppercase text-gold">{label}</p>
    </div>
  )
}
