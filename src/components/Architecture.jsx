import useReveal from '../hooks/useReveal.js'

const NODES = [
  { y: 30, label: 'Business user', sub: 'Ops, planning & finance teams' },
  { y: 110, label: 'Web dashboard', sub: 'React front end' },
  { y: 190, label: 'API layer', sub: 'Auth, rate limiting, routing' },
  { y: 270, label: 'AI recommendation engine', sub: 'Route, risk & demand models' },
  { y: 350, label: 'Database', sub: 'Shipments, routes, signals' },
  { y: 430, label: 'Notifications', sub: 'Alerts to the right team' },
  { y: 510, label: 'Logistics partners', sub: 'Carriers & port systems' },
]

export default function Architecture() {
  const ref = useReveal()
  const cx = 160

  return (
    <section id="architecture" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <div ref={ref} data-reveal-group>
          <p className="text-sm font-medium text-primary mb-3">System design</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-5">
            A simple, defensible architecture.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Requests flow from the dashboard through a single API layer into the recommendation
            engine, which reads and writes shipment state in the database and pushes alerts
            outward to notifications and logistics partners. Nothing exotic — every layer can be
            explained, scaled, or replaced on its own.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 overflow-x-auto">
          <svg viewBox="0 0 320 560" className="w-full h-auto min-w-[260px]" role="img" aria-label="Architecture diagram showing data flowing from the business user through the web dashboard, API layer, AI recommendation engine, database, notifications, and out to logistics partners">
            <defs>
              <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#141B3E" />
                <stop offset="100%" stopColor="#0D1330" />
              </linearGradient>
            </defs>

            {NODES.slice(0, -1).map((n, i) => (
              <line
                key={i}
                x1={cx}
                y1={n.y + 24}
                x2={cx}
                y2={NODES[i + 1].y}
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="5 7"
                className="animate-flow"
                pathLength="60"
                opacity="0.7"
              />
            ))}

            {NODES.map((n) => (
              <g key={n.label}>
                <rect x={cx - 140} y={n.y} width="280" height="52" rx="12" fill="url(#nodeGrad)" stroke="#1B2242" />
                <circle cx={cx - 122} cy={n.y + 26} r="4" fill="#22D3EE" />
                <text x={cx - 105} y={n.y + 22} fill="#F8FAFC" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">
                  {n.label}
                </text>
                <text x={cx - 105} y={n.y + 38} fill="#94A3B8" fontSize="10.5" fontFamily="Inter, sans-serif">
                  {n.sub}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
