import { PackagePlus, BrainCircuit, GitCompare, Stamp, Radar, PackageCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const STEPS = [
  { icon: PackagePlus, title: 'Shipment added', desc: 'A shipment or purchase order enters the system.' },
  { icon: BrainCircuit, title: 'AI analysis', desc: 'Risk and cost are scored against live conditions.' },
  { icon: GitCompare, title: 'Route comparison', desc: 'Viable alternatives are ranked side by side.' },
  { icon: Stamp, title: 'Executive approval', desc: 'A team lead signs off in one click.' },
  { icon: Radar, title: 'Live tracking', desc: 'The shipment is monitored end to end.' },
  { icon: PackageCheck, title: 'Delivery complete', desc: 'Outcome data feeds back into the model.' },
]

export default function Workflow() {
  const ref = useReveal()

  return (
    <section id="workflow" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            From a new shipment to a delivered one, in six steps.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="relative">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent"
            aria-hidden="true"
          />
          <ol className="grid md:grid-cols-6 gap-8 md:gap-4">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative flex md:flex-col gap-4 md:gap-0">
                <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full bg-surface border border-primary/40 grid place-items-center md:mb-5">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 mb-1">Step {i + 1}</p>
                  <h3 className="font-medium text-sm mb-1.5">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
