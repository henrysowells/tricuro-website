import { Reveal } from "@/components/reveal"

export function PullQuote() {
  return (
    <div
      className="relative py-20 px-8 md:px-16 overflow-hidden"
      style={{ background: "#0d2340" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-48deg, transparent, transparent 72px, rgba(255,255,255,0.015) 72px, rgba(255,255,255,0.015) 73px)",
        }}
      />
      <Reveal>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <span
            aria-hidden
            className="block font-serif text-[5rem] leading-[0.5] text-gold/60 mb-6"
          >
            &ldquo;
          </span>
          <p className="font-serif text-[clamp(1.3rem,2.6vw,1.9rem)] italic font-normal text-white leading-[1.55] mb-7">
            Healthy global reputations require more than influence; they need control.
          </p>
          <p className="flex items-center justify-center gap-4 text-[10.5px] font-semibold tracking-[0.26em] uppercase text-gold-light">
            <span className="block w-7 h-px bg-gold" />
            Tricuro
            <span className="block w-7 h-px bg-gold" />
          </p>
        </div>
      </Reveal>
    </div>
  )
}
