import { X, Check } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const ROWS = [
  { label: 'Speed', old: 'Manual reroute decisions take days of calls and spreadsheets', ef: 'AI-ranked alternatives ready in seconds' },
  { label: 'Visibility', old: 'Exposure spread across carrier emails and PDFs', ef: 'One live view of every shipment and lane' },
  { label: 'AI insight', old: 'Reactive — teams learn about risk after it hits', ef: 'Predictive alerts before disruption cascades' },
  { label: 'Cost optimization', old: 'Static contracted rates, renegotiated quarterly', ef: 'Continuous cost-vs-risk tradeoffs per shipment' },
  { label: 'Resilience', old: 'One plan, hoped to survive any scenario', ef: 'Simulated scenarios tested before they happen' },
]

export default function Comparison() {
  const ref = useReveal()

  return (
    <section id="comparison" className="py-24 md:py-32 border-t border-line">
      <div className="section-shell">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-primary mb-3">Why it stands out</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            Not a faster spreadsheet. A different way of planning.
          </h2>
        </div>

        <div ref={ref} data-reveal-group className="glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[1fr] md:grid-cols-[0.7fr_1.15fr_1.15fr]">
            <div className="hidden md:block" />
            <div className="hidden md:block px-6 py-4 text-sm text-gray-500 border-b border-line">Traditional planning</div>
            <div className="hidden md:block px-6 py-4 text-sm text-accent border-b border-line border-l border-line">EnergyFlow AI</div>

            {ROWS.map((row) => (
              <div key={row.label} className="contents">
                <div className="px-6 py-5 border-b border-line font-medium text-sm text-white bg-white/[0.02] md:bg-transparent">
                  {row.label}
                </div>
                <div className="px-6 py-5 border-b border-line flex items-start gap-2.5 text-sm text-gray-400">
                  <X className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0 md:hidden" aria-hidden="true" />
                  <span className="md:hidden text-xs text-gray-500 mr-1">Traditional:</span>
                  {row.old}
                </div>
                <div className="px-6 py-5 border-b border-line md:border-l border-line flex items-start gap-2.5 text-sm text-gray-200">
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {row.ef}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
