import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="bg-off-white border-t-4 border-navy py-24 px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-[380px_1fr] gap-16 md:gap-28 items-start">

        {/* Left */}
        <Reveal direction="left">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.32em] uppercase text-gold mb-4">
            <span className="block w-6 h-px bg-gold" />
            About Tricuro
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.25] text-navy">
            Global Reputation.<br />
            <em className="italic text-gold">Precisely Managed.</em>
          </h2>
          <div className="w-10 h-0.5 bg-gold mt-8" />
        </Reveal>

        {/* Right */}
        <Reveal delay={2}>
          <p className="text-[19.5px] font-light text-navy leading-[1.75] mb-6">
            In the fast-paced, always-on world of the 21st century digital age, healthy global
            reputations require more than influence; they need control.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9] mb-5">
            Tricuro is a Washington, D.C.-based strategic communications firm specializing in
            public diplomacy, public affairs, and international reputation management. We serve
            governments, corporations, and institutions seeking to shape and protect their
            narratives in an increasingly complex media environment.
          </p>
          <p className="text-[17px] text-[#383838] leading-[1.9]">
            Our team brings decades of experience at the intersection of policy, media, and
            international affairs — giving our clients the strategic command they need to
            communicate with confidence on the world stage.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
