import { useState, useEffect } from 'react'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash || '#/')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/services', label: 'Services' },
    { href: '#/ai-security', label: 'AI Security' },
    { href: '#/data-engineering', label: 'Data Engineering' },
    { href: '#/erp-ai', label: 'ERP + AI' },
    { href: '#/about', label: 'About' },
  ]

  const isActive = (href) => {
    const route = currentHash.split('?')[0]
    if (href === '#/' && (route === '#/' || route === '' || route === '#')) return true
    if (href !== '#/' && route === href) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isSticky
          ? 'bg-white/95 backdrop-blur-xl border-b border-border-light shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ padding: isSticky ? '10px 0' : '16px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#/"
          onClick={() => {
            window.location.hash = '#/'
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/images/logo.png"
            alt="Orzeh Logo"
            className="h-8 md:h-9 w-auto object-contain group-hover:scale-105 transition-all duration-300"
          />
          <div className="flex items-baseline font-sora group-hover:opacity-80 transition-opacity duration-300">
            <span className="font-black text-slate-900 text-2xl md:text-[26px] tracking-tighter">
              Orzeh
            </span>
            <span className="font-semibold text-slate-500 text-lg md:text-[20px] tracking-tight ml-1.5">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-dmsans text-[14px] font-medium transition-colors duration-200 group pb-1 ${
                  active
                    ? 'text-brand-orange font-bold'
                    : 'text-text-muted hover:text-text-dark'
                }`}
              >
                {link.label}
                {/* Active underline bar */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    active
                      ? 'bg-brand-orange scale-x-100'
                      : 'bg-brand-orange/40 scale-x-0 group-hover:scale-x-100'
                  } origin-left`}
                />
              </a>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#/book-consultation?scrollTo=form"
            className="font-sora font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 bg-brand-orange hover:bg-brand-gold text-white shadow-sm hover:shadow-md"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none transition-colors text-text-dark hover:text-brand-orange"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border-light shadow-xl transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="py-5 px-5 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-dmsans text-[15px] font-semibold py-3 px-4 rounded-xl transition-all flex items-center gap-2.5 ${
                  active
                    ? 'text-brand-orange bg-orange-50 font-bold border border-brand-orange/20'
                    : 'text-text-dark hover:text-brand-orange hover:bg-orange-50/50'
                }`}
              >
                {/* Orange dot for active page */}
                <span className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                  active ? 'bg-brand-orange' : 'bg-slate-200'
                }`} />
                {link.label}
              </a>
            )
          })}

          <a
            href="#/book-consultation?scrollTo=form"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-brand-orange text-white text-center font-sora font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-md mt-3 hover:bg-brand-gold transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
