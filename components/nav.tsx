"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Our Work" },
  { href: "#team",     label: "Team" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4",
          "bg-navy/97 backdrop-blur-md border-b border-gold/20",
          "transition-shadow duration-300",
          scrolled && "shadow-[0_4px_32px_rgba(9,26,46,0.3)]"
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-xl font-medium tracking-[0.12em] text-white"
        >
          TRICURO<span className="text-gold-light">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60 hover:text-gold-light transition-colors duration-200 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold-light after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-light border border-gold/40 px-5 py-2 hover:bg-gold hover:text-white hover:border-gold transition-all duration-200"
        >
          Get in Touch
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
        >
          <span className={cn("block w-[22px] h-px bg-gold-light transition-all duration-300", open && "translate-y-[6.5px] rotate-45")} />
          <span className={cn("block w-[22px] h-px bg-gold-light transition-all duration-300", open && "opacity-0")} />
          <span className={cn("block w-[22px] h-px bg-gold-light transition-all duration-300", open && "-translate-y-[6.5px] -rotate-45")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-[60px] left-0 right-0 z-40 bg-navy-deep border-b border-gold/20 px-8 transition-all duration-300",
          open ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
        )}
      >
        {[...links, { href: "#contact", label: "Contact" }].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            className="block text-[12px] font-semibold tracking-[0.18em] uppercase text-white/75 hover:text-gold-light py-3 border-b border-white/[0.07] last:border-0 transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
