import { Download, Linkedin, Github, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line py-16">
      <div className="section-shell">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 mb-12">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg mb-4">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Zap className="w-4 h-4 text-base" strokeWidth={2.5} aria-hidden="true" />
              </span>
              EnergyFlow<span className="text-accent">AI</span>
            </a>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              About the prototype — this is a conceptual product built for a hackathon challenge
              on maintaining energy supply if the Strait of Hormuz became unavailable. No backend,
              no live data: every figure on this site is illustrative.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-3 sm:items-start">
            <a
              href="/resume.pdf"
              download="Shakeel_Miyya_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-line hover:bg-white/5 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/shakeel-miyya-2869b22bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-line hover:bg-white/5 transition-colors text-sm font-medium"
              aria-label="Shakeel Miyya's LinkedIn profile (opens in a new tab)"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Shakil14786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-line hover:bg-white/5 transition-colors text-sm font-medium"
              aria-label="Shakeel Miyya's GitHub profile (opens in a new tab)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} EnergyFlow AI. A hackathon prototype, not a live product.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
