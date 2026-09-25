import { Globe2, TrendingUp, BrainCircuit } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const REASONS = [
  {
    icon: Globe2,
    title: 'Geopolitical disruptions',
    desc: 'Tensions around the Gulf have moved from background risk to a recurring headline — the kind of event businesses can no longer treat as unlikely.',
  },
  {
    icon: TrendingUp,
    title: 'Energy price volatility',
    desc: 'Freight and fuel costs already swing on rumor alone. A real closure would move markets faster than any manual planning process can track.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-powered decision making',
    desc: 'The models needed to score risk, compare routes, and forecast demand in real time are finally fast and accessible enough to run inside a live dashboard.',
  },
]

export default function WhyNow() {
  const ref = useReveal()

  return (
    <section id="why-now" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Why now</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Three forces make this the moment to build it.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-20px_rgba(34,211,238,0.35)]"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 grid place-items-center mb-5 transition-colors group-hover:bg-accent/15 group-hover:border-accent/30">
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
