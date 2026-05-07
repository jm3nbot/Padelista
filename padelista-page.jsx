// padelista-page.jsx — Composes the full homepage. Used at desktop and mobile widths.

function PadelistaPage({ mode = "desktop", tweaks }) {
  const t = tweaks || {};
  const isMobile = mode === "mobile";
  const [showStickyCta, setShowStickyCta] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile) return;
    const onScroll = () => {
      setShowStickyCta(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Apply tweak-driven CSS variables to the root.
  // Derive a soft surface lighter than bgAlt for placeholders
  const lighten = (hex, amt = 0.04) => {
    const m = /^#?([a-f\d]{6})$/i.exec(hex || "");
    if (!m) return hex;
    const n = parseInt(m[1], 16);
    const r = Math.min(255, ((n >> 16) & 255) + Math.round(255 * amt));
    const g = Math.min(255, ((n >>  8) & 255) + Math.round(255 * amt));
    const b = Math.min(255, ( n        & 255) + Math.round(255 * amt));
    return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
  };
  // Pick a readable ink for accent buttons (light bg → dark text, dark bg → light)
  const isLight = (hex) => {
    const m = /^#?([a-f\d]{6})$/i.exec(hex || "");
    if (!m) return false;
    const n = parseInt(m[1], 16);
    const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 140;
  };
  const accent = t.accent || "#3ee07a";
  const rootStyle = {
    "--pd-bg":    t.bg    || "#0e0f10",
    "--pd-bg-alt":t.bgAlt || "#16181a",
    "--pd-bg-soft": lighten(t.bgAlt || "#16181a", 0.03),
    "--pd-accent": accent,
    "--pd-accent-ink": isLight(accent) ? "#0b1410" : "#f4f5f3",
    "--pd-fg":    t.fg    || "#f4f5f3",
    "--pd-font-display": t.font || "'Archivo', 'Inter', system-ui, sans-serif",
    "--pd-font-body":    t.font || "'Archivo', 'Inter', system-ui, sans-serif",
    minHeight: "100%",
    width: "100%",
  };

  return (
    <div className={`padelista-root ${isMobile ? "is-mobile" : ""}`}
         data-screen-label={mode === "mobile" ? "Homepage · Mobile" : "Homepage · Desktop"}
         style={rootStyle}>
      <PdHeader mode={mode}/>
      <PdHero mode={mode} variant={t.hero || "split"}/>
      <PdMarquee/>
      <PdAbout mode={mode}/>
      <PdWhy mode={mode}/>
      <PdLocations mode={mode}/>
      <PdCoaching mode={mode}/>
      <PdTournaments mode={mode}/>
      <PdCorporate mode={mode}/>
      <PdGallery mode={mode}/>
      <PdFinalCTA mode={mode}/>
      <PdFooter mode={mode}/>
      {isMobile && showStickyCta && (
        <div className="pd-sticky-cta">
          <a href="https://playtomic.com/clubs/padelista-sheikha-fatima-park"
             className="pd-btn pd-btn--accent pd-btn--book">
            <PdIconBall size={14}/> Book on Playtomic
          </a>
          <a href="https://wa.me/971503987702" className="pd-btn pd-btn--ghost">
            <PdIconWhatsApp size={16}/> WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

window.PadelistaPage = PadelistaPage;
