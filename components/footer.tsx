const links = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Our Work" },
  { href: "#team",     label: "Team" },
  { href: "#contact",  label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/20 px-8 md:px-16 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 flex-wrap">
      <a href="#home" className="font-serif text-[17px] font-medium tracking-[0.1em] text-white/50">
        TRICURO<span className="text-gold">.</span>
      </a>

      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap gap-6 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[10.5px] tracking-[0.16em] uppercase text-white/30 hover:text-gold-light transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-[11.5px] text-white/22 tracking-[0.04em]">
        &copy; 2025 Tricuro. Washington, D.C. All rights reserved.
      </p>
    </footer>
  )
}
