import { ArrowRight, Download } from 'lucide-react'
import HeroDashboardMockup from './HeroDashboardMockup.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[560px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="section-shell relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="animate-fadeUp" style={{ animationDelay: '80ms' }}>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulseDot" aria-hidden="true" />
            Hackathon prototype — Strait of Hormuz disruption scenario
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-gradient">
            Keeping energy moving when critical trade routes stop.
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            About a fifth of the world's oil moves through the Strait of Hormuz. EnergyFlow AI
            gives energy-dependent businesses a live view of that exposure — and an AI engine
            that re-routes, re-prices, and re-plans supply the moment the strait closes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#dashboard"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dim shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_20px_40px_-15px_rgba(59,130,246,0.55)] transition-all font-medium"
            >
              Explore the Prototype
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              download="Shakeel_Miyya_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-gray-200 hover:border-gray-500 hover:bg-white/5 transition-colors font-medium"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <img
              src="/photo.jpg"
              alt="Portrait of Shakeel Miyya"
              className="w-11 h-11 rounded-full object-cover border border-line flex-shrink-0"
            />
            <p className="text-sm text-gray-500">
              <span className="text-gray-300">Shakeel Miyya</span> · Designed &amp; built for the challenge above
            </p>
          </div>
        </div>

        <HeroDashboardMockup />
      </div>
    </section>
  )
}
