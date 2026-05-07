// padelista-sections.jsx — All non-hero homepage sections.

function PdSectionHeader({ eyebrow, title, lede, action, mode }) {
  const isMobile = mode === "mobile";
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) auto",
      gap: isMobile ? 18 : 40,
      alignItems: "end",
      marginBottom: isMobile ? 28 : 48,
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 10 : 14 }}>
        <span className="pd-eyebrow"><span className="dot"/>{eyebrow}</span>
        <h2 className="pd-h1" style={{ fontSize: isMobile ? 38 : 64, maxWidth: 720 }}>{title}</h2>
        {lede && <p className="pd-body" style={{ fontSize: isMobile ? 15 : 17, maxWidth: 540 }}>{lede}</p>}
      </div>
      {action}
    </div>
  );
}

// ── About ──────────────────────────────────────────────────────────────
function PdAbout({ mode }) {
  const isMobile = mode === "mobile";
  return (
    <section id="about" className="pd-section">
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1.1fr) minmax(0,1fr)",
        gap: isMobile ? 28 : 64, alignItems: "start",
      }}>
        <div>
          <span className="pd-eyebrow"><span className="dot"/>About Padelista</span>
          <h2 className="pd-h1" style={{ fontSize: isMobile ? 36 : 60, marginTop: 14 }}>
            Abu Dhabi's home for padel.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p className="pd-body" style={{ fontSize: isMobile ? 16 : 18 }}>
            Padelista runs three premium padel venues across Abu Dhabi, built and operated with Koora Sports. We focus on the things that actually matter: court quality, coaching, and a community you want to come back to.
          </p>
          <p className="pd-body" style={{ fontSize: isMobile ? 16 : 18 }}>
            Whether you're picking up a racket for the first time or playing five times a week, there's a court, a coach and a session for you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 8 }}>
            <PdStat n="3" l="Locations"/>
            <PdStat n="14" l="Courts"/>
            <PdStat n="06–24" l="Daily hours"/>
          </div>
        </div>
      </div>
    </section>
  );
}
function PdStat({ n, l }) {
  return (
    <div style={{ borderTop: "1px solid var(--pd-line)", paddingTop: 14 }}>
      <div className="pd-num" style={{ fontSize: 44 }}>{n}</div>
      <div className="pd-kbd" style={{ marginTop: 6 }}>{l}</div>
    </div>
  );
}

// ── Why Padelista ───────────────────────────────────────────────────────
function PdWhy({ mode }) {
  const isMobile = mode === "mobile";
  return (
    <section className="pd-section pd-section--alt pd-why-section">
      <div className="pd-reel-showcase">
        <div className="pd-reel-showcase__main">
          <div className="pd-reel-showcase__header">
            <span className="pd-eyebrow"><span className="dot"/>Why play here</span>
            <h2 className="pd-h1" style={{ fontSize: isMobile ? 38 : 64 }}>
              A serious club. Without the seriousness.
            </h2>
            <p className="pd-body" style={{ fontSize: isMobile ? 15 : 17, maxWidth: 560 }}>
              Built for players who care about the game — and the people they play it with.
            </p>
          </div>
          <div className="pd-reel-showcase__copy">
          {PD_WHY.map(w => (
            <div key={w.kw} className="pd-reel-point">
              <span className="pd-kbd">{w.kw}</span>
              <div>
                <h3 className="pd-h2" style={{ fontSize: isMobile ? 20 : 21, marginBottom: 6 }}>{w.t}</h3>
                <p className="pd-body" style={{ fontSize: 14.5 }}>{w.d}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="pd-reel-showcase__frame">
          <video
            src="assets/videodistrictmaker.mp4"
            poster="assets/makersdistrict.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Makers District reel"
          />
          <div className="pd-reel-showcase__caption">
            <span className="pd-kbd">Makers District</span>
            <strong>Rooftop-style padel in motion.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Locations ──────────────────────────────────────────────────────────
function PdLocations({ mode }) {
  const isMobile = mode === "mobile";
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const mapLinks = {
    "sheikha-fatima": "https://www.google.com/maps/search/?api=1&query=Padelista%20Sheikha%20Fatima%20Park%20Abu%20Dhabi",
    "makers-district": "https://www.google.com/maps/search/?api=1&query=Padelista%20Makers%20District%20Reem%20Island%20Abu%20Dhabi",
    rawdhat: "https://www.google.com/maps/search/?api=1&query=Padelista%20Rawdhat%20Sports%20Complex%20Abu%20Dhabi",
  };
  const mapImages = {
    "sheikha-fatima": "assets/map-sheikha-fatima.png",
    "makers-district": "assets/map-makers-district.png",
    rawdhat: "assets/map-rawdhat.png",
  };
  return (
    <section id="locations" className="pd-section pd-locations-section">
      <PdSectionHeader
        mode={mode}
        eyebrow="Three locations · Abu Dhabi"
        title="Pick your court."
        lede="Live availability runs through Playtomic — tap any location to book."
        action={!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <div className="pd-playtomic-badge">
              <img src="assets/playtomic logo.jpg" alt="Playtomic"/>
              <span>Bookings powered by Playtomic</span>
            </div>
            <a href="#contact" className="pd-btn pd-btn--ghost pd-btn--sm">All venues <PdIconArrow size={14}/></a>
          </div>
        )}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? 16 : 18,
      }}>
        {PD_LOCATIONS.map((l, i) => (
          <article key={l.id} className="pd-card" style={{ display: "flex", flexDirection: "column" }}>
            <div className={`pd-img ${l.imgClass}`} style={{
              height: isMobile ? 200 : 260,
              position: "relative",
            }}>
              <span className="pd-kbd" style={{
                position: "absolute", top: 14, left: 14,
                background: "color-mix(in srgb, var(--pd-bg) 65%, transparent)", padding: "6px 10px",
                borderRadius: 999, color: "var(--pd-fg)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}>0{i + 1} · {l.area}</span>
            </div>
            <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <div>
                <h3 className="pd-h2" style={{ fontSize: 26, marginBottom: 6 }}>{l.name}</h3>
                <p className="pd-body" style={{ fontSize: 14.5 }}>{l.blurb}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 10, borderTop: "1px solid var(--pd-line)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5 }}>
                  <PdIconRacket size={15}/><span style={{ color: "var(--pd-fg-mute)" }}>{l.courts}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5 }}>
                  <PdIconClock size={15}/><span style={{ color: "var(--pd-fg-mute)" }}>{l.hours}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
                <a href={l.book} className="pd-btn pd-btn--accent pd-btn--book pd-btn--sm">Book on Playtomic <PdIconArrowUpRight size={13}/></a>
                <button type="button" className="pd-btn pd-btn--ghost pd-btn--sm pd-directions-btn" onClick={() => setSelectedLocation(l)}><PdIconPin size={13}/> Directions</button>
                <a href="https://wa.me/971503987702" className="pd-btn pd-btn--ghost pd-btn--sm" aria-label="WhatsApp"><PdIconWhatsApp size={14}/></a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selectedLocation && (
        <div className="pd-map-modal" role="dialog" aria-modal="true" aria-label={`${selectedLocation.name} directions`} onClick={() => setSelectedLocation(null)}>
          <div className="pd-map-modal__card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="pd-modal-close" onClick={() => setSelectedLocation(null)} aria-label="Close directions">
              <PdIconClose size={18}/>
            </button>
            <div className="pd-map-modal__media">
              <img src={mapImages[selectedLocation.id]} alt={`${selectedLocation.name} map preview`}/>
            </div>
            <div className="pd-map-modal__content">
              <span className="pd-eyebrow"><span className="dot"/>Directions</span>
              <h3 className="pd-h2">{selectedLocation.name}</h3>
              <p className="pd-body">{selectedLocation.area}</p>
              <div className="pd-map-modal__actions">
                <a href={selectedLocation.maps || mapLinks[selectedLocation.id]} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn--accent pd-btn--sm">
                  Open in Google Maps <PdIconArrowUpRight size={13}/>
                </a>
                <a href={selectedLocation.book} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn--ghost pd-btn--sm">
                  View Playtomic <PdIconArrowUpRight size={13}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Coaching ──────────────────────────────────────────────────────────
function PdCoaching({ mode }) {
  const isMobile = mode === "mobile";
  const [selectedTrack, setSelectedTrack] = React.useState(null);
  const whatsappNumber = "+971 50 398 7702";
  const tracks = [
    { t: "Beginner", d: "Build the fundamentals — grip, footwork and the wall. 4-week intro blocks." },
    { t: "Intermediate", d: "Tactics, positioning and consistency for players ready to compete." },
    { t: "Private 1-on-1", d: "Personal sessions with a head coach. Booked on request." },
    { t: "Group & doubles", d: "Train with your regular partner or join a 4-player squad." },
    { t: "Kids & juniors", d: "Age-appropriate coaching that builds love of the game first." },
    { t: "Ladies sessions", d: "Dedicated mid-morning and evening blocks across all levels." },
  ];
  return (
    <section id="coaching" className="pd-section pd-section--alt">
      <PdSectionHeader
        mode={mode}
        eyebrow="Coaching & Academy"
        title="Coaching that actually moves you up a level."
        lede="Structured pathways from your first racket to competitive play, led by certified padel coaches."
        action={!isMobile && (
          <a href="https://wa.me/971503987702?text=Hi%20Padelista%2C%20I%27d%20like%20to%20ask%20about%20coaching."
             className="pd-btn pd-btn--accent pd-btn--sm">
            <PdIconWhatsApp size={14}/> Ask about coaching
          </a>
        )}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
        gap: isMobile ? 10 : 14,
      }}>
        {tracks.map((t, i) => (
          <button key={t.t} type="button" className="pd-card pd-coaching-card" onClick={() => setSelectedTrack(t)} style={{
            padding: isMobile ? 14 : 22,
            display: "flex", flexDirection: "column", gap: isMobile ? 8 : 14,
            background: i === 0 ? "var(--pd-accent)" : "var(--pd-bg-alt)",
            color: i === 0 ? "var(--pd-accent-ink)" : "var(--pd-fg)",
            borderColor: i === 0 ? "var(--pd-accent)" : "var(--pd-line)",
            minHeight: isMobile ? 110 : 170,
            textAlign: "left",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--pd-font-mono)", fontSize: isMobile ? 10 : 11, letterSpacing: "0.16em", textTransform: "uppercase",
                opacity: 0.7,
              }}>{String(i + 1).padStart(2, "0")}</span>
              <PdIconArrowUpRight size={isMobile ? 12 : 14}/>
            </div>
            <div style={{ marginTop: "auto" }}>
              <h3 className="pd-h2" style={{ fontSize: isMobile ? 18 : 24, marginBottom: isMobile ? 4 : 8 }}>{t.t}</h3>
              <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.4, opacity: i === 0 ? 0.78 : 1, color: i === 0 ? "rgba(11,20,16,0.78)" : "var(--pd-fg-mute)" }}>{t.d}</p>
            </div>
          </button>
        ))}
      </div>
      {selectedTrack && (
        <div className="pd-session-modal" role="dialog" aria-modal="true" aria-labelledby="pd-session-modal-title" onClick={() => setSelectedTrack(null)}>
          <div className="pd-session-modal__card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "start" }}>
              <div>
                <span className="pd-eyebrow"><span className="dot"/>Start booking</span>
                <h3 id="pd-session-modal-title" className="pd-h2" style={{ fontSize: isMobile ? 26 : 32, marginTop: 10 }}>
                  {selectedTrack.t} sessions
                </h3>
              </div>
              <button type="button" className="pd-btn pd-btn--ghost pd-btn--sm" aria-label="Close" onClick={() => setSelectedTrack(null)} style={{ padding: 10 }}>
                <PdIconClose size={16}/>
              </button>
            </div>
            <p className="pd-body" style={{ fontSize: 15.5, marginTop: 18 }}>
              Contact us on WhatsApp at <strong style={{ color: "var(--pd-fg)" }}>{whatsappNumber}</strong> to start booking your {selectedTrack.t.toLowerCase()} sessions.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
              <a
                href={`https://wa.me/971503987702?text=${encodeURIComponent(`Hi Padelista, I'd like to start booking ${selectedTrack.t} sessions.`)}`}
                className="pd-btn pd-btn--accent"
              >
                <PdIconWhatsApp size={16}/> Contact on WhatsApp
              </a>
              <button type="button" className="pd-btn pd-btn--ghost" onClick={() => setSelectedTrack(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ── Tournaments ───────────────────────────────────────────────────────
function PdTournaments({ mode }) {
  const isMobile = mode === "mobile";
  const items = [
    { day: "Tuesday", t: "Mixed Social", level: "All levels", time: "20:00", place: "Sheikha Fatima Park" },
    { day: "Thursday", t: "Ladies Night", level: "Intermediate", time: "19:30", place: "Makers District" },
    { day: "Friday", t: "Americano", level: "Open draw", time: "18:00", place: "Rawdhat" },
    { day: "Saturday", t: "Padelista Cup", level: "Competitive", time: "15:00", place: "Sheikha Fatima Park" },
  ];
  return (
    <section id="tournaments" className="pd-section">
      <PdSectionHeader
        mode={mode}
        eyebrow="Tournaments & Community"
        title="Weekly socials. Real tournaments."
        lede="Open mixers, themed nights and competitive draws every week."
        action={!isMobile && (
          <a href="https://wa.me/971503987702?text=Hi%20Padelista%2C%20I%27d%20like%20to%20register%20interest%20for%20a%20tournament."
             className="pd-btn pd-btn--ghost pd-btn--sm">Register interest <PdIconArrow size={14}/></a>
        )}
      />
      <div className="pd-card" style={{ overflow: "hidden" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "auto 1fr auto" : "120px 1fr 1fr 120px 140px",
          padding: isMobile ? "14px 18px" : "16px 24px",
          fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--pd-fg-dim)", borderBottom: "1px solid var(--pd-line)",
          fontFamily: "var(--pd-font-mono)",
          gap: isMobile ? 12 : 16,
        }}>
          <div>Day</div>
          <div>Format</div>
          {!isMobile && <div>Venue</div>}
          {!isMobile && <div>Time</div>}
          <div style={{ textAlign: "right" }}>Level</div>
        </div>
        {items.map((it, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "auto 1fr auto" : "120px 1fr 1fr 120px 140px",
            padding: isMobile ? "16px 18px" : "20px 24px",
            alignItems: "center",
            gap: isMobile ? 12 : 16,
            borderTop: i === 0 ? "none" : "1px solid var(--pd-line)",
          }}>
            <div style={{ fontWeight: 600, fontSize: isMobile ? 14 : 15 }}>{it.day}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: isMobile ? 15 : 17, fontFamily: "var(--pd-font-display)", letterSpacing: "-0.01em" }}>{it.t}</div>
              {isMobile && <div style={{ fontSize: 12.5, color: "var(--pd-fg-dim)", marginTop: 2 }}>{it.place} · {it.time}</div>}
            </div>
            {!isMobile && <div style={{ color: "var(--pd-fg-mute)", fontSize: 14 }}>{it.place}</div>}
            {!isMobile && <div style={{ color: "var(--pd-fg-mute)", fontSize: 14 }}>{it.time}</div>}
            <div style={{ textAlign: "right" }}>
              <span className="pd-chip" style={{ padding: "6px 10px", fontSize: 11.5 }}>{it.level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Corporate ─────────────────────────────────────────────────────────
function PdCorporate({ mode }) {
  const isMobile = mode === "mobile";
  const offers = [
    { i: <PdIconUsers/>, t: "Team-building events", d: "Half- or full-day sessions with coaches, format design and prizes." },
    { i: <PdIconBuilding/>, t: "Corporate leagues", d: "Multi-week leagues across companies, with standings and finals night." },
    { i: <PdIconRacket/>, t: "Staff wellness days", d: "Open-court sessions where everyone — first-timer to player — gets on court." },
    { i: <PdIconTrophy/>, t: "Branded tournaments", d: "Full event production: branding, scoring, photography, catering partners." },
  ];
  return (
    <section id="corporate" className="pd-section" style={{
      background: "var(--pd-fg)",
      color: "var(--pd-bg)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) minmax(0,1fr)",
        gap: isMobile ? 28 : 56,
        alignItems: "start",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 18 : 28 }}>
          <span className="pd-eyebrow" style={{ color: "color-mix(in srgb, var(--pd-bg) 60%, transparent)" }}>
            <span className="dot" style={{ background: "var(--pd-bg)" }}/>Corporate Events
          </span>
          <h2 className="pd-h1" style={{ fontSize: isMobile ? 40 : 76, color: "var(--pd-bg)" }}>
            The best off-site<br/>your team will have.
          </h2>
          <p style={{ fontSize: isMobile ? 16 : 18, color: "color-mix(in srgb, var(--pd-bg) 70%, transparent)", maxWidth: 460 }}>
            Run by Koora Sports' event team — from a 12-person away-day to multi-month corporate leagues. We handle courts, coaches, formats, branding and catering.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#corporate-form" className="pd-btn pd-btn--ink"
               style={{ background: "var(--pd-bg)", color: "var(--pd-fg)", borderColor: "var(--pd-bg)" }}>
              Request a proposal <PdIconArrow size={14}/>
            </a>
            <a href="https://wa.me/971554138388" className="pd-btn pd-btn--ghost"
               style={{ borderColor: "color-mix(in srgb, var(--pd-bg) 20%, transparent)", color: "var(--pd-bg)" }}>
              <PdIconWhatsApp size={14}/> Koora Sports team
            </a>
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
          gap: isMobile ? 10 : 12,
        }}>
          {offers.map((o, i) => (
            <div key={i} style={{
              padding: isMobile ? 14 : 22,
              border: "1px solid color-mix(in srgb, var(--pd-bg) 12%, transparent)",
              borderRadius: "var(--pd-r-md)",
              background: "color-mix(in srgb, var(--pd-bg) 4%, transparent)",
              display: "flex", flexDirection: "column", gap: isMobile ? 10 : 14,
              minHeight: isMobile ? 0 : 170,
            }}>
              <span style={{
                width: isMobile ? 30 : 36, height: isMobile ? 30 : 36, borderRadius: 10,
                background: "var(--pd-bg)", color: "var(--pd-fg)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{o.i}</span>
              <div>
                <h3 className="pd-h2" style={{ fontSize: isMobile ? 15 : 19, marginBottom: isMobile ? 4 : 6, color: "var(--pd-bg)" }}>{o.t}</h3>
                <p style={{ fontSize: isMobile ? 12 : 13.5, color: "color-mix(in srgb, var(--pd-bg) 65%, transparent)", lineHeight: 1.4 }}>{o.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PdCorporateForm mode={mode}/>
    </section>
  );
}

function PdCorporateForm({ mode }) {
  const isMobile = mode === "mobile";
  const [submitted, setSubmitted] = React.useState(false);
  const Field = ({ label, children, span = 1 }) => (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, gridColumn: `span ${span}` }}>
      <span className="pd-kbd" style={{ color: "color-mix(in srgb, var(--pd-bg) 55%, transparent)" }}>{label}</span>
      {children}
    </label>
  );
  const inputStyle = {
    height: 46, padding: "0 14px",
    border: "1px solid rgba(14,15,16,0.18)",
    borderRadius: 10,
    background: "var(--pd-fg)",
    color: "var(--pd-bg)",
    fontFamily: "inherit", fontSize: 14.5,
    outline: "none",
  };
  return (
    <div id="corporate-form" style={{
      marginTop: isMobile ? 32 : 56,
      padding: isMobile ? 24 : 36,
      borderRadius: "var(--pd-r-xl)",
      background: "var(--pd-bg)",
      color: "var(--pd-fg)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 14, marginBottom: 22 }}>
        <div>
          <span className="pd-eyebrow"><span className="dot"/>Corporate inquiry</span>
          <h3 className="pd-h2" style={{ fontSize: isMobile ? 26 : 34, marginTop: 10 }}>Tell us about your event.</h3>
        </div>
        <div className="pd-kbd">We reply within 1 business day</div>
      </div>
      {submitted ? (
        <div style={{
          padding: 28, borderRadius: 14,
          background: "color-mix(in srgb, var(--pd-accent) 12%, transparent)", border: "1px solid color-mix(in srgb, var(--pd-accent) 40%, transparent)",
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <span className="pd-iconbox pd-iconbox--accent"><PdIconCheck/></span>
          <div>
            <div style={{ fontWeight: 600 }}>Inquiry received.</div>
            <div style={{ fontSize: 14, color: "var(--pd-fg-mute)" }}>The Koora Sports team will be in touch shortly.</div>
          </div>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 14,
              }}>
          <Field label="Name"><input required style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }} placeholder="Your full name"/></Field>
          <Field label="Company"><input required style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }} placeholder="Company name"/></Field>
          <Field label="Email"><input required type="email" style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }} placeholder="name@company.com"/></Field>
          <Field label="Phone"><input style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }} placeholder="+971 …"/></Field>
          <Field label="Event type">
            <select style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }}>
              <option>Team-building day</option>
              <option>Corporate league</option>
              <option>Wellness day</option>
              <option>Branded tournament</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Preferred location">
            <select style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }}>
              <option>No preference</option>
              <option>Sheikha Fatima Park</option>
              <option>Makers District</option>
              <option>Rawdhat Sports Complex</option>
            </select>
          </Field>
          <Field label="Number of players">
            <input type="number" min={4} placeholder="e.g. 24" style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }}/>
          </Field>
          <Field label="Date (approx.)"><input placeholder="e.g. June 2026" style={{ ...inputStyle, background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)" }}/></Field>
          <Field label="Message" span={isMobile ? 1 : 2}>
            <textarea rows={4} placeholder="Tell us a bit about the event you have in mind…"
                      style={{ ...inputStyle, height: "auto", padding: "12px 14px", background: "rgba(255,255,255,0.04)", color: "var(--pd-fg)", borderColor: "var(--pd-line-strong)", resize: "vertical", lineHeight: 1.5 }}/>
          </Field>
          <div style={{ gridColumn: isMobile ? "span 1" : "span 2", display: "flex", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            <button type="submit" className="pd-btn pd-btn--accent pd-btn--lg">Send inquiry <PdIconArrow size={14}/></button>
          </div>
        </form>
      )}
    </div>
  );
}

// ── Gallery ──────────────────────────────────────────────────────────
function PdGallery({ mode }) {
  const isMobile = mode === "mobile";
  const tiles = [
    { v: "assets/showcasevid.mp4", poster: "assets/showcaseimg.png", label: "Padelista showcase" },
    { img: "assets/showcaseimg.png", label: "Courtside moments" },
    { img: "assets/padel1.png", label: "Rawdhat Sports Complex" },
  ];
  return (
    <section className="pd-section">
      <PdSectionHeader
        mode={mode}
        eyebrow="Gallery"
        title="On the courts."
        lede="Real moments from Padelista venues across Abu Dhabi."
        action={!isMobile && (
          <a href="https://www.instagram.com/padelista.ae/" className="pd-btn pd-btn--ghost pd-btn--sm">
            <PdIconInstagram size={14}/> @padelista.ae
          </a>
        )}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
        gridAutoRows: isMobile ? "260px" : "330px",
        gap: isMobile ? 12 : 14,
      }}>
        {tiles.map((t, i) => {
          const span = !isMobile && i === 0 ? 1 : 1;
          const rowSpan = !isMobile && i === 0 ? 2 : 1;
          const tileStyle = {
              gridColumn: `span ${span}`,
              gridRow: `span ${rowSpan}`,
              borderRadius: "var(--pd-r-md)",
              border: "1px solid var(--pd-line)",
            };
          return (
            <div key={i} className={`pd-gallery-tile ${t.c ? `pd-img ${t.c}` : ""}`} style={tileStyle}>
              {t.v && (
                <video
                  src={t.v}
                  poster={t.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t.label}
                />
              )}
              {t.img && <img src={t.img} alt={t.label}/>}
              <span>{t.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Final CTA + Footer ─────────────────────────────────────────────────
function PdFinalCTA({ mode }) {
  const isMobile = mode === "mobile";
  return (
    <section id="contact" className="pd-section" style={{
      padding: isMobile ? "72px 20px" : "120px 56px",
      textAlign: "center",
      borderTop: "1px solid var(--pd-line)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--pd-accent) 22%, transparent) 0%, transparent 55%)",
        pointerEvents: "none",
      }}/>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? 22 : 32 }}>
        <span className="pd-eyebrow"><span className="dot"/>Padelista Abu Dhabi</span>
        <h2 className="pd-h-display" style={{ fontSize: isMobile ? 56 : 128, maxWidth: 1100 }}>
          See you on the court.
        </h2>
        <p className="pd-body" style={{ fontSize: isMobile ? 16 : 19, maxWidth: 520 }}>
          Three locations across Abu Dhabi. Live availability through Playtomic. WhatsApp us for anything else.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://playtomic.com/clubs/padelista-sheikha-fatima-park"
             className="pd-btn pd-btn--accent pd-btn--book pd-btn--lg">Book on Playtomic <PdIconArrowUpRight size={16}/></a>
          <a href="https://wa.me/971503987702"
             className="pd-btn pd-btn--ghost pd-btn--lg"><PdIconWhatsApp size={16}/> WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

function PdFooter({ mode }) {
  const isMobile = mode === "mobile";
  const cols = [
    { h: "Locations", links: PD_LOCATIONS.map(l => l.name) },
    { h: "Play", links: ["Court bookings", "Coaching & Academy", "Tournaments", "Social padel"] },
    { h: "Business", links: ["Corporate events", "Branded tournaments", "Facility management", "Koora Sports"] },
    { h: "Contact", links: ["+971 50 398 7702", "+971 2 666 6504", "@padelista.ae", "WhatsApp"] },
  ];
  return (
    <footer style={{
      padding: isMobile ? "48px 20px 24px" : "72px 56px 32px",
      background: "var(--pd-bg)",
      borderTop: "1px solid var(--pd-line)",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.4fr repeat(4, 1fr)",
        gap: isMobile ? 32 : 40,
        marginBottom: isMobile ? 32 : 56,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <PdLogo size={28}/>
          <p className="pd-body" style={{ fontSize: 14, maxWidth: 280 }}>
            Padelista is operated by Koora Sports. Premium padel courts, coaching, tournaments and corporate events across Abu Dhabi.
          </p>
        </div>
        {cols.map(c => (
          <div key={c.h} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="pd-kbd">{c.h}</span>
            {c.links.map(l => (
              <a key={l} href="#" style={{ fontSize: 14, color: "var(--pd-fg-mute)" }}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
        paddingTop: 20, borderTop: "1px solid var(--pd-line)",
      }}>
        <div className="pd-kbd">© 2026 Padelista · Operated by Koora Sports</div>
        <div className="pd-kbd">Padel Abu Dhabi · Coaching · Corporate Events</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  PdAbout, PdWhy, PdLocations, PdCoaching, PdTournaments,
  PdCorporate, PdGallery, PdFinalCTA, PdFooter,
});
