import { Ship, Fuel, TriangleAlert, Clock3, Sparkles, CircleCheck, CircleDashed, RefreshCw } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const SHIPMENTS = [
  { id: 'EF-2291', route: 'Ras Tanura → Rotterdam', status: 'Rerouted', tone: 'success' },
  { id: 'EF-2292', route: 'Fujairah → Yokohama', status: 'On alternate lane', tone: 'accent' },
  { id: 'EF-2293', route: 'Jubail → Houston', status: 'Awaiting approval', tone: 'pending' },
]

const ROUTES = [
  { name: 'Hormuz direct', cost: '$1.00x', days: '9 days', disabled: true },
  { name: 'Cape of Good Hope', cost: '$1.34x', days: '21 days' },
  { name: 'East pipeline bypass', cost: '$1.18x', days: '4 days' },
]

const FUEL = [42, 46, 44, 58, 63, 60, 74, 80, 77]

export default function Dashboard() {
  const ref = useReveal()

  return (
    <section id="dashboard" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-medium text-primary mb-3">Inside the product</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            One screen for the whole disruption response.
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            A working preview of the operations dashboard. All figures below are illustrative
            sample data for this prototype.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success bg-success/10 border border-success/25 rounded-full px-3 py-1">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-success opacity-75 animate-pulseDot" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-success" />
            </span>
            Live Risk Score
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-mono">
            <RefreshCw className="w-3 h-3 animate-[spin_4s_linear_infinite]" aria-hidden="true" />
            Last updated: 12 sec ago
          </span>
        </div>

        <div ref={ref} data-reveal-group className="grid lg:grid-cols-3 gap-5">
          {/* Shipment status */}
          <div className="glass rounded-2xl p-6 lg:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.3)]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-medium flex items-center gap-2">
                <Ship className="w-4 h-4 text-accent" aria-hidden="true" /> Active shipments
              </h3>
              <span className="text-xs text-gray-500 font-mono">184 total</span>
            </div>
            <ul className="space-y-3">
              {SHIPMENTS.map((s) => (
                <li key={s.id} className="flex items-center justify-between rounded-xl bg-white/5 border border-line px-4 py-3 transition-colors hover:bg-white/[0.07] hover:border-primary/30">
                  <div>
                    <p className="text-sm font-medium text-white">{s.id}</p>
                    <p className="text-xs text-gray-500">{s.route}</p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 border ${
                      s.tone === 'success'
                        ? 'text-success bg-success/10 border-success/25'
                        : s.tone === 'accent'
                        ? 'text-accent bg-accent/10 border-accent/25'
                        : 'text-amber-300 bg-amber-400/10 border-amber-400/25'
                    }`}
                  >
                    {s.tone === 'pending' ? (
                      <CircleDashed className="w-3 h-3" aria-hidden="true" />
                    ) : (
                      <CircleCheck className="w-3 h-3" aria-hidden="true" />
                    )}
                    {s.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Risk meter */}
          <div className="glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.3)]">
            <h3 className="font-medium flex items-center gap-2 mb-5">
              <TriangleAlert className="w-4 h-4 text-accent" aria-hidden="true" /> Live Risk Score
            </h3>
            <div className="flex-1 grid place-items-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="#1B2242" strokeWidth="10" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#riskGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - 0.72)}`}
                  />
                  <defs>
                    <linearGradient id="riskGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="font-display text-3xl font-semibold">72</p>
                    <p className="text-xs text-gray-500">Elevated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Route comparison */}
          <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.3)]">
            <h3 className="font-medium flex items-center gap-2 mb-5">
              <Clock3 className="w-4 h-4 text-accent" aria-hidden="true" /> Route comparison
            </h3>
            <ul className="space-y-2.5">
              {ROUTES.map((r) => (
                <li
                  key={r.name}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors ${
                    r.disabled ? 'border-line opacity-40' : 'border-primary/25 bg-primary/5 hover:bg-primary/10 hover:border-primary/40'
                  }`}
                >
                  <span className="text-sm">{r.name}</span>
                  <span className="text-xs text-gray-400 font-mono">{r.cost} · {r.days}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fuel cost graph */}
          <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.3)]">
            <h3 className="font-medium flex items-center gap-2 mb-5">
              <Fuel className="w-4 h-4 text-accent" aria-hidden="true" /> Fuel cost index
            </h3>
            <div className="flex items-end gap-1.5 h-24">
              {FUEL.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-accent/90 transition-transform duration-300 hover:scale-y-105 origin-bottom" style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">Last 9 weeks, indexed to baseline</p>
          </div>

          {/* AI recommendation banner */}
          <div className="relative lg:col-span-3 rounded-2xl p-6 md:p-7 border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-accent/10 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_25px_55px_-25px_rgba(34,211,238,0.4)]">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-glowPulse" aria-hidden="true" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex items-center gap-3 md:w-64 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 grid place-items-center animate-nodeGlow">
                  <Sparkles className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold">AI recommendation</h3>
              </div>
              <p className="flex-1 text-sm text-gray-300 leading-relaxed">
                Shift EF-2293 to the East pipeline bypass. Delay risk drops from 61% to 9%, and
                landed cost rises only 18% versus the closed direct route.
              </p>
              <button className="flex-shrink-0 text-sm font-medium rounded-lg bg-primary hover:bg-primary-dim hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 px-5 py-2.5">
                Apply recommendation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
