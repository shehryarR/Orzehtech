import { useState, useEffect, useRef } from 'react'
function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { href: '#/', label: 'Home' },
    { 
      label: 'Services',
      isDropdown: true,
      items: [
        { 
          href: '#/services', 
          label: 'All Services',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        },
        { 
          href: '#/ai-security', 
          label: 'AI Security',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        },
        { 
          href: '#/data-engineering', 
          label: 'Data Engineering',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
        },
        { 
          href: '#/digital-transformation', 
          label: 'Digital Transformation',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
        },
        { 
          href: '#/voice-ai', 
          label: 'Voice AI',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
        },
        { 
          href: '#/ai-automation', 
          label: 'AI Automation',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        },
        { 
          href: '#/ai-cost-optimization', 
          label: 'AI Cost Optimization',
          icon: <svg className="w-full h-full text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
      ]
    },
    { href: '#/about', label: 'About' },
  ]

  const isActive = (href) => {
    const route = currentHash.split('?')[0]
    if (href === '#/' && (route === '#/' || route === '' || route === '#')) return true
    if (href !== '#/' && route === href) return true
    return false
  }

  const isDropdownActive = (items) => {
    return items.some(item => isActive(item.href))
  }

  // Determine if the current page has a dark hero section
  const currentRoute = currentHash.split('?')[0]
  const isDarkHero = 
    currentRoute === '#/voice-ai' || 
    currentRoute === '#/ai-automation' || 
    currentRoute === '#/ai-cost-optimization' ||
    currentRoute === '#/' || 
    currentRoute === '' || 
    currentRoute === '#'
  const isTransparentAndDark = !isSticky && isDarkHero

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
            className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-all duration-300"
          />
          <div className="flex items-baseline font-sora group-hover:opacity-80 transition-all duration-300">
            <span className={`font-black text-4xl md:text-[36px] tracking-tighter transition-colors ${isTransparentAndDark ? 'text-white' : 'text-slate-900'}`}>
              Orzeh
            </span>
            <span className={`font-semibold text-2xl md:text-[26px] tracking-tight ml-1.5 transition-colors ${isTransparentAndDark ? 'text-white/80' : 'text-slate-600'}`}>
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              const active = isDropdownActive(link.items)
              return (
                <div 
                  key={index} 
                  className="relative group"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 font-dmsans text-[15px] font-medium transition-colors duration-200 pb-1 ${
                      active || isServicesDropdownOpen
                        ? 'text-brand-orange font-bold'
                        : isTransparentAndDark
                          ? 'text-white/90 hover:text-white'
                          : 'text-slate-700 hover:text-brand-orange'
                    }`}
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    {link.label}
                    <svg className={`w-[14px] h-[14px] transition-all duration-300 ${isServicesDropdownOpen ? 'rotate-180 text-brand-orange' : isTransparentAndDark ? 'text-white/70' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Clean, Minimalist SaaS Dropdown */}
                  <div 
                    className={`absolute top-[100%] -left-4 pt-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top-left ${
                      isServicesDropdownOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-2 scale-95'
                    }`}
                  >
                    <div className="bg-white rounded-[14px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100/60 w-[240px] overflow-hidden py-1.5">
                      
                      <div className="px-4 py-2">
                        <span className="text-[10px] font-medium tracking-[0.1em] text-slate-400 uppercase font-dmsans">Services</span>
                      </div>
                      
                      <div className="flex flex-col">
                        {link.items.map((subItem, i) => (
                          <div key={subItem.href}>
                            <a
                              href={subItem.href}
                              className={`group flex items-center gap-3 px-4 py-[7px] transition-colors duration-200 cursor-pointer ${
                                isActive(subItem.href)
                                  ? 'bg-slate-50'
                                  : 'hover:bg-slate-50'
                              }`}
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              <div className="w-[26px] h-[26px] rounded-[6px] flex items-center justify-center shrink-0 bg-slate-50 border border-slate-100/50 text-slate-400 transition-colors group-hover:text-slate-600">
                                <div className="w-[13px] h-[13px] flex items-center justify-center opacity-70 transition-opacity group-hover:opacity-100 *:w-full *:h-full *:object-contain *:stroke-[1.5]">
                                  {subItem.icon}
                                </div>
                              </div>
                              <span className={`text-[13px] font-medium tracking-tight transition-colors ${
                                isActive(subItem.href) ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                              }`}>
                                {subItem.label}
                              </span>
                            </a>
                            {i !== link.items.length - 1 && (
                              <div className="h-[1px] w-[calc(100%-2rem)] mx-auto bg-slate-100/50 my-[2px]" />
                            )}
                          </div>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                </div>
              )
            }

            const active = isActive(link.href)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-dmsans text-[15px] font-medium transition-colors duration-200 group pb-1 ${
                  active
                    ? 'text-brand-orange font-bold'
                    : isTransparentAndDark
                      ? 'text-white/90 hover:text-white'
                      : 'text-slate-700 hover:text-brand-orange'
                }`}
              >
                {link.label}
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
            href="#/contact?scrollTo=form"
            className="relative font-sora font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full text-white bg-brand-orange transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group"
          >
            <span className="absolute -inset-[3px] rounded-full border-[1.5px] border-brand-orange transition-all duration-300 group-hover:border-[#e86a12]" />
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors ${isTransparentAndDark ? 'text-white hover:text-brand-orange' : 'text-slate-900 hover:text-brand-orange'}`}
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border-light shadow-xl transition-all duration-300 origin-top overflow-y-auto max-h-[85vh] ${
          isMobileMenuOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="py-5 px-5 flex flex-col gap-1">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              const active = isDropdownActive(link.items)
              return (
                <div key={index} className="flex flex-col border border-slate-100 rounded-xl overflow-hidden mt-1 mb-1">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`font-dmsans text-[15px] font-semibold py-3 px-4 transition-all flex items-center justify-between ${
                      active
                        ? 'text-brand-orange bg-orange-50 font-bold'
                        : 'text-text-dark hover:text-brand-orange hover:bg-orange-50/50 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                        active ? 'bg-brand-orange' : 'bg-slate-300'
                      }`} />
                      {link.label}
                    </div>
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-brand-orange' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className={`transition-all duration-300 bg-white ${
                    isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="py-2 px-3 flex flex-col gap-1">
                      {link.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`font-dmsans text-[14px] font-medium py-2.5 px-6 rounded-lg transition-colors flex items-center gap-3 ${
                            isActive(subItem.href)
                              ? 'text-brand-orange bg-orange-50 font-bold'
                              : 'text-slate-600 hover:text-brand-orange hover:bg-orange-50/30'
                          }`}
                        >
                          {subItem.icon && (
                            <div className="w-[28px] h-[28px] rounded-md flex items-center justify-center shrink-0 bg-slate-100/60 border border-slate-200/50 transition-colors group-hover:bg-orange-100/50">
                              <div className="w-[16px] h-[16px] flex items-center justify-center opacity-70 *:w-full *:h-full *:object-contain">
                                {subItem.icon}
                              </div>
                            </div>
                          )}
                          <span className="truncate">{subItem.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

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
