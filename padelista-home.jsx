// padelista-home.jsx — Homepage component for Padelista.
// Single component renders the full homepage; takes `mode` ("desktop" | "mobile")
// and `tweaks` object so the design canvas can render both at the same time.

const PD_LOCATIONS = [
  {
    id: "sheikha-fatima",
    name: "Sheikha Fatima Park",
    area: "Corniche · Al Bateen",
    blurb: "Flagship courts at one of Abu Dhabi's most-loved waterfront parks.",
    courts: "5 panoramic courts",
    hours: "06:00 – 00:00 daily",
    book: "https://playtomic.com/clubs/padelista-sheikha-fatima-park",
    maps: "https://www.google.com/maps/search/?api=1&query=Padelista%20Sheikha%20Fatima%20Park%20Abu%20Dhabi",
    imgClass: "pd-img--court",
  },
  {
    id: "makers-district",
    name: "Makers District",
    area: "Reem Island",
    blurb: "Rooftop-style padel in Abu Dhabi's design and lifestyle quarter.",
    courts: "4 premium courts",
    hours: "06:00 – 00:00 daily",
    book: "https://playtomic.com/clubs/padelista-makers-district",
    maps: "https://www.google.com/maps/search/?api=1&query=Padelista%20Makers%20District%20Reem%20Island%20Abu%20Dhabi",
    imgClass: "pd-img--court-2",
  },
  {
    id: "rawdhat",
    name: "Rawdhat Sports Complex",
    area: "Rawdhat Abu Dhabi",
    blurb: "Community-first courts inside a full sports complex.",
    courts: "5 indoor & outdoor",
    hours: "06:00 – 00:00 daily",
    book: "https://playtomic.com/clubs/padelista-rawdhat-branch",
    maps: "https://www.google.com/maps/search/?api=1&query=Padelista%20Rawdhat%20Sports%20Complex%20Abu%20Dhabi",
    imgClass: "pd-img--court-3",
  },
];

const PD_WHY = [
  { kw: "01", t: "Tournament-grade courts", d: "Glass-walled panoramic courts built to club-level standard, lit for night play." },
  { kw: "02", t: "Coaches who actually coach", d: "Structured pathways from first racket to competitive league play." },
  { kw: "03", t: "A real community", d: "Open mixers, weekly socials, and tournaments running year-round." },
  { kw: "04", t: "Easy booking", d: "Powered by Playtomic — see live availability and book in seconds." },
];

const PD_NAV = [
  { label: "Locations", href: "#locations" },
  { label: "Coaching",  href: "#coaching" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Corporate", href: "#corporate" },
  { label: "Contact",  href: "#contact" },
];

// ──────────────────────────────────────────────────────────────────────────
// Atomic bits
// ──────────────────────────────────────────────────────────────────────────

function PdLogo({ size = 28, color }) {
  // Reproduces the rounded-square mark + green dot from the Padelista logo,
  // sized for header use. (Original logo PNG is also available at /assets.)
  const c = color || "var(--pd-fg)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <rect x="2" y="2" width="60" height="60" rx="14" fill={c}/>
        <path d="M18 18h22v6H24v22h-6V18Z" fill="var(--pd-bg)"/>
        <circle cx="42" cy="42" r="6" fill="var(--pd-accent)"/>
      </svg>
      <span style={{
        fontFamily: "var(--pd-font-display)",
        fontWeight: 800, fontSize: size * 0.62,
        letterSpacing: "-0.02em", lineHeight: 1,
      }}>PADELISTA</span>
    </span>
  );
}

function PdHeader({ mode }) {
  const isMobile = mode === "mobile";
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  return (
    <React.Fragment>
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: isMobile ? "14px 18px" : "20px 40px",
      background: "color-mix(in srgb, var(--pd-bg) 72%, transparent)",
      backdropFilter: "blur(20px) saturate(140%)",
      WebkitBackdropFilter: "blur(20px) saturate(140%)",
      borderBottom: "1px solid var(--pd-line)",
    }}>
      <PdLogo size={isMobile ? 26 : 30}/>
      {!isMobile && (
        <nav style={{ display: "flex", gap: 28 }}>
          {PD_NAV.map(n => (
            <a key={n.label} href={n.href} className="pd-nav-link" style={{
              fontSize: 14, fontWeight: 500,
            }}>{n.label}</a>
          ))}
        </nav>
      )}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {!isMobile ? (
          <React.Fragment>
            <a href="https://www.instagram.com/padelista.ae/" className="pd-btn pd-btn--ghost pd-btn--sm" aria-label="Instagram">
              <PdIconInstagram size={15}/> @padelista.ae
            </a>
            <a href="https://playtomic.com/clubs/padelista-sheikha-fatima-park"
               className="pd-btn pd-btn--accent pd-btn--book pd-btn--sm"
               aria-label="Book on Playtomic">
              Book on Playtomic <PdIconArrowUpRight size={14}/>
            </a>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a
              href="https://www.instagram.com/padelista.ae/"
              className="pd-btn pd-btn--ghost pd-btn--sm"
              style={{ padding: 9 }}
              aria-label="Padelista on Instagram"
            >
              <PdIconInstagram size={18}/>
            </a>
            <button
              className="pd-btn pd-btn--ghost pd-btn--sm"
              style={{ padding: 9 }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? <PdIconClose size={18}/> : <PdIconMenu/>}
            </button>
          </React.Fragment>
        )}
      </div>
    </header>
    {isMobile && menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, top: 56, zIndex: 19,
            background: "var(--pd-bg)",
            display: "flex", flexDirection: "column", padding: "24px 22px 32px",
            gap: 6,
            overflowY: "auto",
          }}
        >
          <nav onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column" }}>
            {PD_NAV.map(n => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--pd-font-display)",
                  fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--pd-line)",
                  color: "var(--pd-fg)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                {n.label}
                <PdIconArrow size={16}/>
              </a>
            ))}
          </nav>
          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
            <a
              href="https://playtomic.com/clubs/padelista-sheikha-fatima-park"
              onClick={() => setMenuOpen(false)}
              className="pd-btn pd-btn--accent pd-btn--book pd-btn--lg"
              style={{ justifyContent: "center" }}
            >
              Book on Playtomic <PdIconArrowUpRight size={16}/>
            </a>
            <a
              href="https://wa.me/971503987702"
              onClick={() => setMenuOpen(false)}
              className="pd-btn pd-btn--ghost pd-btn--lg"
              style={{ justifyContent: "center" }}
            >
              <PdIconWhatsApp size={16}/> WhatsApp Us
            </a>
            <a
              href="https://www.instagram.com/padelista.ae/"
              onClick={() => setMenuOpen(false)}
              className="pd-btn pd-btn--ghost pd-btn--sm"
              style={{ justifyContent: "center", marginTop: 4 }}
            >
              <PdIconInstagram size={14}/> @padelista.ae
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Hero — three variants chosen via tweak
// ──────────────────────────────────────────────────────────────────────────

function PdHero({ mode, variant }) {
  const isMobile = mode === "mobile";
  const headline  = "Padel, the Abu Dhabi way.";
  const subhead   = "Premium padel courts, coaching, tournaments and corporate events across three locations in the capital.";
  const chips = (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {PD_LOCATIONS.map(l => (
        <span key={l.id} className="pd-chip">
          <span className="pin"/>{l.name}
        </span>
      ))}
    </div>
  );
  const ctas = (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      <a href="#locations" className="pd-btn pd-btn--accent pd-btn--book pd-btn--lg">
        Book on Playtomic <PdIconArrowUpRight size={16}/>
      </a>
      <a href="https://wa.me/971503987702" className="pd-btn pd-btn--ghost pd-btn--lg">
        <PdIconWhatsApp size={16}/> WhatsApp Us
      </a>
    </div>
  );

  // Variant A — Editorial split (default)
  if (variant === "split") {
    return (
      <section className="pd-section" style={{
        padding: isMobile ? "32px 20px 48px" : "56px 56px 80px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1.05fr) minmax(0,1fr)",
          gap: isMobile ? 28 : 56, alignItems: "center",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 22 : 28 }}>
            <span className="pd-eyebrow"><span className="dot"/>Abu Dhabi · Est. with Koora Sports</span>
            <h1 className="pd-h-display" style={{ fontSize: isMobile ? 56 : 108 }}>
              Padel,<br/>the Abu Dhabi<br/>way.
            </h1>
            <p className="pd-body" style={{ fontSize: isMobile ? 16 : 19, maxWidth: 480 }}>
              {subhead}
            </p>
            {ctas}
            {chips}
          </div>
          <div style={{
            position: "relative",
            height: isMobile ? 280 : 620,
            borderRadius: "var(--pd-r-xl)",
            overflow: "hidden",
            border: "1px solid var(--pd-line)",
          }} className="pd-img pd-img--court">
            <PdHeroOverlay mode={mode}/>
          </div>
        </div>
      </section>
    );
  }

  // Variant B — Full-bleed video
  if (variant === "fullbleed") {
    return (
      <section className="pd-video-hero pd-img pd-img--court-3" style={{
        position: "relative",
        minHeight: isMobile ? "calc(100svh - 56px)" : "calc(100svh - 73px)",
        padding: isMobile ? "28px 20px 30px" : "44px 56px 48px",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        overflow: "hidden",
      }}>
        <video
          className="pd-video-hero__media"
          src="assets/realpadelherovid.mp4"
          poster="assets/hero-court.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="pd-video-hero__shade"/>
        <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", gap: isMobile ? 16 : 22, maxWidth: 920 }}>
          <span className="pd-eyebrow"><span className="dot"/>Abu Dhabi · Est. with Koora Sports</span>
          <h1 className="pd-h-display" style={{ fontSize: isMobile ? 56 : "clamp(84px, 9.8vw, 126px)" }}>
            Padel,<br/>the Abu Dhabi way.
          </h1>
          <p className="pd-body" style={{ fontSize: isMobile ? 16 : 19, maxWidth: 560, color: "rgba(244,245,243,0.86)" }}>
            {subhead}
          </p>
          {ctas}
          {chips}
        </div>
      </section>
    );
  }

  // Variant C — Asymmetric grid (4 tiles)
  return (
    <section className="pd-section" style={{ padding: isMobile ? "28px 20px 48px" : "44px 56px 72px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 24 : 36 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span className="pd-eyebrow"><span className="dot"/>Abu Dhabi · Est. with Koora Sports</span>
          <h1 className="pd-h-display" style={{ fontSize: isMobile ? 54 : 116, maxWidth: 1100 }}>
            Padel, the Abu Dhabi way.
          </h1>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr 1fr",
          gridTemplateRows: isMobile ? "320px auto auto" : "440px",
          gap: isMobile ? 12 : 14,
        }}>
          <div className="pd-img pd-img--court" style={{
            borderRadius: "var(--pd-r-xl)", overflow: "hidden", position: "relative",
            border: "1px solid var(--pd-line)",
          }}>
            <PdHeroOverlay mode={mode}/>
          </div>
          <div className="pd-card" style={{
            padding: isMobile ? 22 : 28,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            gap: 18,
          }}>
            <p className="pd-body" style={{ fontSize: isMobile ? 16 : 17 }}>{subhead}</p>
            {ctas}
          </div>
          <div className="pd-card" style={{
            padding: isMobile ? 22 : 28,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            gap: 14,
          }}>
            <span className="pd-eyebrow">Locations</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PD_LOCATIONS.map(l => (
                <div key={l.id} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0", borderTop: "1px solid var(--pd-line)",
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{l.name}</div>
                    <div style={{ fontSize: 11.5, color: "var(--pd-fg-dim)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{l.area}</div>
                  </div>
                  <PdIconArrowUpRight size={14}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PdHeroOverlay({ mode }) {
  // Floating quick-book card, also acts as visual centerpiece
  const isMobile = mode === "mobile";
  return (
    <div style={{
      position: "absolute",
      left: isMobile ? 14 : 22, right: isMobile ? 14 : "auto", bottom: isMobile ? 14 : 22,
      maxWidth: isMobile ? "none" : 320,
      background: "color-mix(in srgb, var(--pd-bg) 78%, transparent)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "var(--pd-r-md)",
      padding: 14,
      display: "flex", alignItems: "center", gap: 12,
    }}>
      <div className="pd-iconbox pd-iconbox--accent">
        <PdIconBall size={18}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="pd-kbd">Tonight at 8:00 PM</div>
        <div style={{ fontWeight: 600, fontSize: 14 }}>Doubles · Sheikha Fatima Park</div>
      </div>
      <a href="#locations" className="pd-btn pd-btn--accent pd-btn--book pd-btn--sm" style={{ padding: "8px 12px" }}>
        Book <PdIconArrow size={12}/>
      </a>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────

function PdMarquee() {
  const items = [
    "Padel Abu Dhabi", "Sheikha Fatima Park", "Makers District", "Reem Island",
    "Rawdhat Sports Complex", "Coaching", "Weekly Tournaments", "Corporate Padel",
  ];
  return (
    <div className="pd-marquee" aria-hidden>
      <div className="pd-marquee__track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="pd-marquee__item">{t}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  PD_LOCATIONS, PD_WHY, PD_NAV,
  PdLogo, PdHeader, PdHero, PdMarquee,
});
