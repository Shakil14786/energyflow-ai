import { Check } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const PLANS = [
  {
    name: 'Starter',
    price: '$1.2K',
    period: '/month',
    desc: 'For teams testing exposure on a handful of trade lanes.',
    features: ['Up to 25 tracked shipments', 'Risk intelligence dashboard', 'Email alerts', 'Standard route comparison'],
  },
  {
    name: 'Enterprise',
    price: '$8K',
    period: '/month',
    desc: 'For logistics and energy teams running live operations.',
    features: ['Unlimited shipments', 'AI route optimizer & simulations', 'ERP & carrier integrations', 'Dedicated success manager'],
    highlighted: true,
  },
  {
    name: 'Government',
    price: 'Custom',
    period: '',
    desc: 'For national agencies managing strategic energy reserves.',
    features: ['Aggregated national risk view', 'On-premise deployment option', 'Custom compliance & audit', 'Direct policy briefings'],
  },
]

export default function Pricing() {
  const ref = useReveal()

  return (
    <section id="pricing" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Business model</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            SaaS subscriptions, with room for enterprise partnerships.
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Recurring platform revenue from operations teams, plus custom partnerships with
            carriers and terminals who plug their capacity into the routing engine.
          </p>
        </div>

        <div ref={ref} data-reveal-group className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'glass border-primary/50 shadow-[0_0_0_1px_rgba(59,130,246,0.35)] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.5),0_25px_50px_-20px_rgba(34,211,238,0.4)]'
                  : 'border border-line hover:border-accent/30 hover:shadow-[0_20px_45px_-22px_rgba(34,211,238,0.25)]'
              }`}
            >
              <h3 className="font-display font-semibold text-lg mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>
              <p className="mb-6">
                <span className="font-display text-3xl font-semibold">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-sm font-medium rounded-lg py-2.5 transition-all duration-300 active:scale-[0.98] ${
                  plan.highlighted ? 'bg-primary hover:bg-primary-dim hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)]' : 'border border-line hover:bg-white/5 hover:border-accent/30'
                }`}
              >
                Talk to us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
