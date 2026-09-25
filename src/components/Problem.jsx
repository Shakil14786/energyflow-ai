import { Fuel, Ship, Clock, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import WorldMapSVG from './WorldMapSVG.jsx'

const STATS = [
  { icon: Ship, value: '~21%', label: 'of global petroleum liquids consumption passes through the strait' },
  { icon: Fuel, value: '~17M', label: 'barrels per day of oil and condensate transiting on average' },
  { icon: Clock, value: '1', label: 'narrow, 33km-wide shipping lane with no practical substitute at sea' },
  { icon: TrendingUp, value: 'Days', label: 'before spot energy prices and freight rates begin to spike' },
]

export default function Problem() {
  const ref = useReveal()

  return (
    <section id="problem" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">The problem</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            One narrow strait carries an outsized share of the world's energy.
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            The Strait of Hormuz sits between Iran and Oman, connecting the oil fields of the
            Persian Gulf to open water. It is the only sea route out of the Gulf — every tanker
            headed to Asia, Europe, or the Americas passes through it. If the strait were closed
            or restricted for a sustained period, businesses that depend on predictable energy
            supply would face compounding shortages, freight delays, and price volatility within
            days, not months.
          </p>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass rounded-xl p-5">
              <Icon className="w-5 h-5 text-accent mb-4" aria-hidden="true" />
              <p className="font-display text-2xl font-semibold text-white mb-1.5">{value}</p>
              <p className="text-sm text-gray-400 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 md:p-10">
          <p className="text-sm text-gray-400 mb-6">
            Simplified illustration — not a cartographic reference
          </p>
          <WorldMapSVG />
        </div>
      </div>
    </section>
  )
}
