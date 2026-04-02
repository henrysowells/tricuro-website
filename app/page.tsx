import { Nav }                  from "@/components/nav"
import { Hero }                 from "@/components/sections/hero"
import { StatBand }             from "@/components/sections/stat-band"
import { About }                from "@/components/sections/about"
import { PullQuote }            from "@/components/pull-quote"
import { Services }             from "@/components/sections/services"
import { GlobalPerspectives }   from "@/components/sections/global-perspectives"
import { DigitalControl }       from "@/components/sections/digital-control"
import { OurWork }              from "@/components/sections/our-work"
import { Team }                 from "@/components/sections/team"
import { Contact }              from "@/components/sections/contact"
import { Footer }               from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatBand />
        <About />
        <PullQuote />
        <Services />
        <GlobalPerspectives />
        <DigitalControl />
        <OurWork />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
