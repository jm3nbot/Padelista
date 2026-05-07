// padelista-icons.jsx — Stroked line icons matched to the bold geometric vibe.
// All icons take size + color. Stroke is consistent at ~1.6.

const _ico = (size = 18) => ({
  width: size, height: size, viewBox: "0 0 24 24",
  fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
});

const PdIconArrow = ({ size = 16 }) => (
  <svg {..._ico(size)}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);
const PdIconArrowUpRight = ({ size = 16 }) => (
  <svg {..._ico(size)}><path d="M7 17 17 7M9 7h8v8"/></svg>
);
const PdIconWhatsApp = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 3.5A10.4 10.4 0 0 0 12 0C5.9 0 1 4.9 1 11a10.9 10.9 0 0 0 1.5 5.6L1 23l6.6-1.7A11 11 0 0 0 12 22c6.1 0 11-4.9 11-11 0-2.9-1.1-5.7-2.5-7.5Zm-8.5 17a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-3.9 1 1-3.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.6.1-.2.2-.3.3-.5 0-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1 2.9 1.2 3.1.2.3 2.2 3.4 5.3 4.7.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4Z"/>
  </svg>
);
const PdIconInstagram = ({ size = 18 }) => (
  <svg {..._ico(size)}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/>
  </svg>
);
const PdIconPin = ({ size = 16 }) => (
  <svg {..._ico(size)}><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>
);
const PdIconClock = ({ size = 16 }) => (
  <svg {..._ico(size)}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
);
const PdIconRacket = ({ size = 18 }) => (
  <svg {..._ico(size)}>
    <path d="M9.5 14.5 4 20l1 1 5.5-5.5"/>
    <ellipse cx="14" cy="9" rx="6" ry="6.5" transform="rotate(-30 14 9)"/>
    <path d="M11 9.5h6M14 6.5v6"/>
  </svg>
);
const PdIconTrophy = ({ size = 18 }) => (
  <svg {..._ico(size)}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/>
    <path d="M7 6H4a3 3 0 0 0 3 3M17 6h3a3 3 0 0 1-3 3"/>
    <path d="M9 17h6M10 13v4M14 13v4M8 21h8"/>
  </svg>
);
const PdIconBuilding = ({ size = 18 }) => (
  <svg {..._ico(size)}>
    <path d="M4 21V6l8-3 8 3v15"/>
    <path d="M4 21h16M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/>
  </svg>
);
const PdIconUsers = ({ size = 18 }) => (
  <svg {..._ico(size)}>
    <circle cx="9" cy="8" r="3.2"/>
    <path d="M3 20a6 6 0 0 1 12 0"/>
    <circle cx="17" cy="9" r="2.5"/>
    <path d="M15.5 14a5 5 0 0 1 5.5 5"/>
  </svg>
);
const PdIconStar = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 14.7 9l6.8.6-5.2 4.5 1.6 6.7L12 17.3l-5.9 3.5 1.6-6.7L2.5 9.6 9.3 9 12 2.5Z"/></svg>
);
const PdIconChevron = ({ size = 14, dir = "right" }) => (
  <svg {..._ico(size)} style={{ transform: dir === "down" ? "rotate(90deg)" : dir === "left" ? "rotate(180deg)" : "none" }}><path d="M9 6l6 6-6 6"/></svg>
);
const PdIconMenu = ({ size = 18 }) => (
  <svg {..._ico(size)}><path d="M4 7h16M4 17h16"/></svg>
);
const PdIconClose = ({ size = 18 }) => (
  <svg {..._ico(size)}><path d="M6 6l12 12M6 18 18 6"/></svg>
);
const PdIconBall = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M2.6 9C7.5 8 12 12 12 12s4.5-4 9.4-3M2.6 15c4.9-1 9.4 3 9.4 3s4.5-4 9.4-3" stroke="rgba(0,0,0,.3)" strokeWidth="1.2" fill="none"/></svg>
);
const PdIconPhone = ({ size = 16 }) => (
  <svg {..._ico(size)}><path d="M5 4h3l1.5 4-2 1a11 11 0 0 0 7.5 7.5l1-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
);
const PdIconMail = ({ size = 16 }) => (
  <svg {..._ico(size)}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
);
const PdIconCheck = ({ size = 14 }) => (
  <svg {..._ico(size)}><path d="m5 12 4 4 10-10"/></svg>
);

Object.assign(window, {
  PdIconArrow, PdIconArrowUpRight, PdIconWhatsApp, PdIconInstagram,
  PdIconPin, PdIconClock, PdIconRacket, PdIconTrophy, PdIconBuilding,
  PdIconUsers, PdIconStar, PdIconChevron, PdIconMenu, PdIconClose,
  PdIconBall, PdIconPhone, PdIconMail, PdIconCheck,
});
