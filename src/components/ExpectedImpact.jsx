import { Zap, Eye, Route, ShieldCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const OUTCOMES = [
  {
    icon: Zap,
    title: 'Faster decision-making',
    desc: 'Teams expected to move from a multi-day manual reroute process to an AI-ranked decision in minutes.',
  },
  {
    icon: Eye,
    title: 'Better supply visibility',
    desc: 'One live dashboard designed to replace scattered carrier emails and spreadsheets with a single source of truth.',
  },
  {
    icon: Route,
    title: 'Smarter route planning',
    desc: 'Every route continuously compared on cost, time, and risk, so the best alternative is known before it is needed.',
  },
  {
    icon: ShieldCheck,
    title: 'Improved business continuity',
    desc: 'Supply decisions built to hold up under disruption, keeping operations, finance, and customers aligned.',
  },
]

export default function ExpectedImpact() {
  const ref = useReveal()

  return (
    <section id="impact" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Expected business impact</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            What this is designed to change for a business.
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            These are the outcomes EnergyFlow AI is built to deliver, not measured results from a
            live deployment.
          </p>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OUTCOMES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.03]"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 grid place-items-center mb-5 animate-floaty">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-medium mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
