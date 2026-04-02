const links = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work",     label: "Our Work" },
  { href: "#team",     label: "Team" },
  { href: "#contact",  label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-gold/20 overflow-hidden">

      {/* DC Skyline silhouette */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <svg
          viewBox="0 0 1400 90"
          preserveAspectRatio="xMidYMax meet"
          className="w-full"
          style={{ opacity: 0.07, display: "block" }}
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Far-left generic buildings ── */}
          <rect x="0"   y="65" width="55"  height="25" />
          <rect x="58"  y="50" width="38"  height="40" />
          <rect x="100" y="60" width="28"  height="30" />
          <rect x="132" y="55" width="45"  height="35" />
          <rect x="180" y="68" width="35"  height="22" />

          {/* ── Lincoln Memorial (wide colonnade) ── */}
          <rect x="230" y="70" width="115" height="20" />  {/* steps */}
          <rect x="238" y="64" width="99"  height="8"  />  {/* stylobate */}
          <rect x="244" y="52" width="87"  height="13" />  {/* colonnade body */}
          <rect x="238" y="48" width="99"  height="6"  />  {/* entablature */}
          <rect x="244" y="42" width="87"  height="8"  />  {/* pediment */}

          {/* ── Gap buildings ── */}
          <rect x="365" y="62" width="32"  height="28" />
          <rect x="401" y="70" width="22"  height="20" />

          {/* ── Washington Monument (obelisk) ── */}
          <polygon points="445,8 455,8 464,68 436,68" />    {/* shaft */}
          <polygon points="445,8 450,2 455,8" />             {/* pyramidion */}
          <rect    x="432" y="68" width="36"  height="7"  /> {/* base */}
          <rect    x="428" y="75" width="44"  height="5"  /> {/* wider base */}

          {/* ── Mid buildings ── */}
          <rect x="495" y="55" width="42"  height="35" />
          <rect x="541" y="62" width="35"  height="28" />
          <rect x="580" y="50" width="48"  height="40" />
          <rect x="632" y="65" width="30"  height="25" />

          {/* ── Capitol Building ── */}
          {/* Wide wings */}
          <rect x="670" y="62" width="175" height="28" />
          {/* Central body */}
          <rect x="700" y="55" width="115" height="35" />
          {/* Drum (base of dome) */}
          <rect x="740" y="43" width="35"  height="14" />
          {/* Dome */}
          <ellipse cx="757" cy="43" rx="28" ry="20" />
          {/* Lantern */}
          <rect x="754" y="23" width="6"   height="20" />
          {/* Finial */}
          <polygon points="754,23 757,18 760,23" />

          {/* ── Right mid buildings ── */}
          <rect x="870" y="58" width="45"  height="32" />
          <rect x="919" y="66" width="38"  height="24" />
          <rect x="961" y="52" width="40"  height="38" />
          <rect x="1005" y="61" width="50" height="29" />
          <rect x="1059" y="70" width="35" height="20" />

          {/* ── Far-right generic buildings ── */}
          <rect x="1100" y="54" width="42"  height="36" />
          <rect x="1146" y="62" width="55"  height="28" />
          <rect x="1205" y="46" width="38"  height="44" />
          <rect x="1247" y="58" width="50"  height="32" />
          <rect x="1301" y="65" width="40"  height="25" />
          <rect x="1345" y="55" width="55"  height="35" />

          {/* ── Ground line ── */}
          <rect x="0" y="89" width="1400" height="1" />
        </svg>
      </div>

      {/* Footer content */}
      <div className="relative z-10 px-8 md:px-16 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 flex-wrap">
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
      </div>
    </footer>
  )
}
