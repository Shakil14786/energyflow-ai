import { Route, ShieldAlert, LineChart, DollarSign, BellRing, FlaskConical } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const CAPS = [
  { icon: Route, title: 'Route optimization', desc: 'Ranks sea, pipeline, and rail alternatives on live cost and transit-time data, not static tables.' },
  { icon: ShieldAlert, title: 'Risk prediction', desc: 'Learns from historical disruptions to estimate the probability a route degrades in the next 72 hours.' },
  { icon: LineChart, title: 'Demand forecasting', desc: 'Projects regional demand shifts as buyers react to a supply shock, ahead of the order data itself.' },
  { icon: DollarSign, title: 'Price forecasting', desc: 'Models freight and spot-price movement so finance can hedge before the market re-prices.' },
  { icon: BellRing, title: 'Smart alerts', desc: 'Ranks alerts by business impact so teams see the three that matter, not three hundred that don\u2019t.' },
  { icon: FlaskConical, title: 'Scenario simulation', desc: 'Lets planners test "what if the strait closes for 30 days" against the live network before it happens.' },
]

export default function AICapabilities() {
  const ref = useReveal()

  return (
    <section id="ai" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Where AI helps</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Six places the model earns its keep.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-line p-6 hover:border-primary/40 hover:bg-white/[0.03] transition-colors">
              <Icon className="w-5 h-5 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-medium mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
