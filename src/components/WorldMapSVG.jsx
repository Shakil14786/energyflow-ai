export default function WorldMapSVG() {
  return (
    <svg
      viewBox="0 0 800 380"
      className="w-full h-auto"
      role="img"
      aria-label="Simplified map highlighting the Strait of Hormuz chokepoint and alternative shipping routes around Africa"
    >
      <defs>
        <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141B3E" />
          <stop offset="100%" stopColor="#0D1330" />
        </linearGradient>
      </defs>

      {/* simplified landmasses as soft blobs — not a real cartographic map */}
      <g fill="url(#landGrad)" stroke="#1B2242" strokeWidth="1">
        <path d="M60 90 Q140 40 240 70 Q300 90 280 150 Q260 210 180 220 Q100 230 70 170 Q40 120 60 90Z" />
        <path d="M330 60 Q430 20 520 50 Q560 65 540 110 Q590 130 560 190 Q520 260 440 250 Q380 320 320 280 Q280 240 310 190 Q270 150 300 110 Q300 75 330 60Z" />
        <path d="M560 40 Q680 20 740 70 Q770 110 720 140 Q660 160 610 120 Q560 90 560 40Z" />
        <path d="M120 260 Q180 250 200 300 Q210 340 160 350 Q110 355 100 310 Q95 280 120 260Z" />
      </g>

      {/* Strait of Hormuz marker */}
      <g>
        <circle cx="470" cy="150" r="26" fill="#EF4444" opacity="0.15" className="animate-pulseDot" />
        <circle cx="470" cy="150" r="7" fill="#EF4444" />
        <text x="486" y="146" fill="#F87171" fontSize="13" fontFamily="IBM Plex Mono, monospace">
          Strait of Hormuz
        </text>
        <text x="486" y="163" fill="#94A3B8" fontSize="11" fontFamily="Inter, sans-serif">
          Primary chokepoint
        </text>
      </g>

      {/* Blocked route */}
      <path
        d="M470 150 L560 220 L610 300"
        fill="none"
        stroke="#EF4444"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.6"
      />
      <text x="540" y="270" fill="#F87171" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        Route unavailable
      </text>

      {/* Alternative route via Cape of Good Hope */}
      <path
        d="M470 150 C 380 200, 220 260, 140 300"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="2.5"
        strokeDasharray="4 6"
        className="animate-flow"
        pathLength="240"
      />
      <circle cx="140" cy="300" r="5" fill="#22D3EE" />
      <text x="60" y="325" fill="#67E8F9" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        Cape of Good Hope reroute
      </text>

      {/* Pipeline bypass route */}
      <path
        d="M470 150 C 440 110, 400 80, 350 75"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2.5"
        strokeDasharray="4 6"
        className="animate-flow"
        pathLength="240"
      />
      <text x="200" y="70" fill="#93C5FD" fontSize="11" fontFamily="IBM Plex Mono, monospace">
        Land pipeline bypass
      </text>
    </svg>
  )
}
