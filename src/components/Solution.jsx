import { Route, ShieldAlert, BellRing, LineChart } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const FEATURES = [
  {
    icon: Route,
    title: 'AI Route Optimizer',
    desc: 'Continuously scores every viable shipping and pipeline route on cost, transit time, and disruption risk, then proposes the best swap the moment conditions change.',
  },
  {
    icon: ShieldAlert,
    title: 'Risk Intelligence',
    desc: 'Blends geopolitical signals, vessel tracking, and insurance data into a single exposure score for each shipment, region, and supplier.',
  },
  {
    icon: BellRing,
    title: 'Live Supply Alerts',
    desc: 'Pushes ranked, actionable alerts to operations teams before a delay becomes a shortage — not another feed to babysit.',
  },
  {
    icon: LineChart,
    title: 'Demand Forecasting',
    desc: 'Projects downstream demand against constrained supply so planning and finance teams can act on the same numbers.',
  },
]

export default function Solution() {
  const ref = useReveal()

  return (
    <section id="solution" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">The platform</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            EnergyFlow AI turns a fragile supply chain into a responsive one.
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            One system for operations, planning, and finance teams to see exposure, compare
            alternatives, and act — before a chokepoint closure becomes a business emergency.
          </p>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 grid place-items-center mb-5 transition-colors group-hover:bg-primary/20">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
