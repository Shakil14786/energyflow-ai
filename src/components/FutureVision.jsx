import { Satellite, Boxes, Leaf } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const IDEAS = [
  { icon: Satellite, title: 'Satellite data integration', desc: 'Pull vessel and port-congestion imagery directly into the risk model for near real-time ground truth.' },
  { icon: Boxes, title: 'Digital twin simulations', desc: 'Model the entire supply network as a living twin, so a "what if" scenario updates every downstream forecast at once.' },
  { icon: Leaf, title: 'Carbon-aware routing', desc: 'Weigh emissions alongside cost and risk, so resilience planning doesn\u2019t come at the expense of climate goals.' },
]

export default function FutureVision() {
  const ref = useReveal()

  return (
    <section id="future" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">What's next</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Where this goes after the hackathon.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="grid sm:grid-cols-3 gap-5">
          {IDEAS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-line p-7 hover:border-accent/40 transition-colors">
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
