import { Settings2, ClipboardList, Wallet, HeartHandshake } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const TEAMS = [
  {
    icon: Settings2,
    title: 'Operations',
    desc: 'Monitors active shipments, approves AI-suggested reroutes, and keeps carriers moving without manual spreadsheets.',
  },
  {
    icon: ClipboardList,
    title: 'Supply planning',
    desc: 'Runs scenario simulations to pre-position inventory before a chokepoint closure hits the order book.',
  },
  {
    icon: Wallet,
    title: 'Finance',
    desc: 'Tracks price-forecast alerts to hedge fuel exposure and models the cost impact of each route change.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer success',
    desc: 'Pulls live delay predictions into customer updates before a customer has to ask where their shipment is.',
  },
]

export default function BusinessWorkflow() {
  const ref = useReveal()

  return (
    <section id="teams" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Across the business</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Built for the teams who feel a disruption first.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 gap-5">
          {TEAMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.3)]">
              <Icon className="w-5 h-5 text-accent mb-4" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
