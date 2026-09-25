import { FlaskConical, Building2, Landmark, Globe2 } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const PHASES = [
  { icon: FlaskConical, title: 'Pilot', desc: 'Ship the core dashboard to 3–5 mid-size importers with direct Gulf exposure, validate the risk model against real routing decisions.' },
  { icon: Building2, title: 'Enterprise', desc: 'Add multi-team approvals, audit trails, and ERP integrations to sell into larger energy and logistics organizations.' },
  { icon: Landmark, title: 'Government', desc: 'Package aggregated, anonymized risk intelligence for national energy security and strategic reserve agencies.' },
  { icon: Globe2, title: 'Global expansion', desc: 'Extend the same model to other chokepoints — the Suez Canal, the Strait of Malacca — under one platform.' },
]

export default function GTM() {
  const ref = useReveal()

  return (
    <section id="gtm" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-3">Go-to-market</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            A path from pilot to global coverage.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-line" aria-hidden="true" />
          {PHASES.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative">
              <div className="w-12 h-12 rounded-full bg-surface border border-primary/40 grid place-items-center mb-5 relative z-10">
                <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <p className="text-xs font-mono text-gray-500 mb-1">Phase {i + 1}</p>
              <h3 className="font-display font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
