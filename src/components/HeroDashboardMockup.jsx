import { Ship, TrendingUp, TriangleAlert } from 'lucide-react'

export default function HeroDashboardMockup() {
  return (
    <div
      className="relative animate-fadeUp"
      style={{ animationDelay: '220ms' }}
      role="img"
      aria-label="Preview of the EnergyFlow AI dashboard showing shipment risk and route comparison"
    >
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-[2rem] blur-2xl" aria-hidden="true" />

      <div className="relative glass rounded-2xl p-5 shadow-2xl animate-drift">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-gray-400 font-mono">LIVE OVERVIEW</p>
            <p className="text-sm font-medium text-white">Gulf Corridor Exposure</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-success bg-success/10 border border-success/25 rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            Monitoring
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl bg-white/5 border border-line p-3.5">
            <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
              <TriangleAlert className="w-3.5 h-3.5" aria-hidden="true" /> Risk index
            </div>
            <p className="font-display text-2xl font-semibold text-white">72<span className="text-sm text-gray-500">/100</span></p>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-amber-400 to-red-400" />
            </div>
          </div>
          <div className="rounded-xl bg-white/5 border border-line p-3.5">
            <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
              <Ship className="w-3.5 h-3.5" aria-hidden="true" /> Shipments rerouted
            </div>
            <p className="font-display text-2xl font-semibold text-white">184</p>
            <p className="mt-2 text-xs text-success flex items-center gap-1">
              <TrendingUp className="w-3 h-3" aria-hidden="true" /> +12% vs last week
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-white/5 border border-line p-3.5 mb-4">
          <p className="text-xs text-gray-400 mb-2.5">Route cost comparison</p>
          <div className="flex items-end gap-2 h-16">
            {[38, 52, 30, 64, 46, 70, 58].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-primary/70 to-accent/80" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary/10 border border-primary/25 p-3.5">
          <p className="text-xs font-mono text-accent mb-1">AI RECOMMENDATION</p>
          <p className="text-sm text-gray-200 leading-snug">
            Reroute via Cape of Good Hope for 3 pending shipments — saves an estimated 4.2 days of delay risk.
          </p>
        </div>
      </div>
    </div>
  )
}
