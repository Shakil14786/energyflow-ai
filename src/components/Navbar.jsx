import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Platform', href: '#solution' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-lg border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 md:h-20" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent">
            <Zap className="w-4 h-4 text-base" strokeWidth={2.5} aria-hidden="true" />
          </span>
          EnergyFlow<span className="text-accent">AI</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#footer"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#solution"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-base hover:bg-gray-200 transition-colors"
          >
            Explore the Prototype
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-base border-t border-line">
          <ul className="section-shell py-4 flex flex-col gap-4 text-gray-300">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-1">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#solution"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 text-sm font-medium px-4 py-2 rounded-lg bg-white text-base"
              >
                Explore the Prototype
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
