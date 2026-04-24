import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'HOME',            href: '#home' },
  { label: 'SERVICES',        href: '#services' },
  { label: 'ABOUT',           href: '#about' },
  { label: 'REVIEWS',         href: '#reviews' },
  { label: 'SERVICE AREAS',   href: '#service-areas' },
  { label: 'FOR CONTRACTORS', href: '#contractors' },
  { label: 'CONTACT',         href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-ip-bg/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-ip-bg'
      } border-b border-white/5`}
    >
      <nav className="max-w-content mx-auto px-4 lg:px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0" onClick={close}>
          <span className="font-barlow font-black text-2xl lg:text-3xl uppercase tracking-tight text-white">
            IMPERIAL
            <span className="text-ip-orange"> PLUMBING</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-barlow font-bold uppercase tracking-widest text-xs text-ip-sec hover:text-ip-orange transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="tel:8048978424"
          className="hidden lg:inline-block ip-btn-primary text-xs"
        >
          CALL NOW
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ip-alt border-t border-white/5 px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-barlow font-bold uppercase tracking-widest text-sm text-ip-sec hover:text-ip-orange transition-colors"
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:8048978424"
            className="mt-6 ip-btn-primary w-full text-center block"
            onClick={close}
          >
            CALL NOW — (804) 897-8424
          </a>
        </div>
      )}
    </header>
  )
}
