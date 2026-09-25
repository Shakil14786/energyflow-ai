import { ArrowRight, ShieldCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal()

  return (
    <section id="final-cta" className="py-24 md:py-32 border-t border-line relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div ref={ref} data-reveal-group className="section-shell relative text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 border border-accent/25 rounded-full px-3 py-1 mb-6">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          Built for business continuity
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-gradient mb-6">
          Resilience isn't optional when a trade route this critical can stop.
        </h2>

        <p className="text-gray-400 leading-relaxed mb-9 max-w-xl mx-auto">
          EnergyFlow AI is a working demonstration of what AI-powered business continuity looks
          like — a live risk view, faster rerouting decisions, and a system built to keep energy
          moving when the world's most important chokepoint can't. This is the case for building
          it for real.
        </p>

        <a
          href="#dashboard"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-base font-semibold shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_25px_50px_-15px_rgba(34,211,238,0.45)] hover:shadow-[0_0_0_1px_rgba(34,211,238,0.55),0_30px_60px_-12px_rgba(59,130,246,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
        >
          See the full prototype
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
