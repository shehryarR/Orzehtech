import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx'
import AISecurity from './components/AISecurity.jsx'
import ErpAiSolutions from './components/ErpAiSolutions.jsx'
import About from './components/About.jsx'
import BookConsultation from './components/BookConsultation.jsx'
import Footer from './components/Footer.jsx'
import BookCallModal from './components/BookCallModal.jsx'
import ServicesOverview from './components/ServicesOverview.jsx'
import DataEngineering from './components/DataEngineering.jsx'

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')
  const [isBookCallOpen, setIsBookCallOpen] = useState(false)


  // Meta descriptions per route — from reference documents
  const metaDescriptions = {
    '#/': 'Orzeh Technologies builds secure, production-ready AI systems for growing companies: AI security and Wazuh monitoring, data engineering and DevSecOps, and Odoo ERP with custom AI.',
    '#/ai-security': 'Secure your AI systems before production. Orzeh provides AI security audits, Wazuh deployment, DevSecOps for AI, RAG and reliability improvement, and production-readiness support.',
    '#/data-engineering': 'Orzeh builds AI-ready data infrastructure: secure pipelines, real-time and streaming systems, DevSecOps and CI/CD workflows, monitoring, and multi-cloud architecture for growing companies.',
    '#/erp-ai': 'Orzeh implements Odoo ERP and builds custom AI for growing businesses, helping teams modernize operations, automate workflows, improve reporting, and scale with intelligence.',
    '#/about': 'Orzeh Technologies builds secure, production-ready systems across AI security, data engineering, DevSecOps, and ERP + AI for growing businesses: one technical partner for the systems you depend on next.',
    '#/book-consultation': 'Book a consultation with Orzeh Technologies to discuss AI security, data engineering, DevSecOps, ERP implementation, workflow automation, and custom AI for your business.',
    '#/services': 'Explore Orzeh Technologies services across AI security, data engineering, DevSecOps, ERP implementation, custom AI automation, and intelligent business systems.',
  }

  const updateMeta = (hash) => {
    const route = (hash || '#/').split('?')[0]
    const desc = metaDescriptions[route] || metaDescriptions['#/']
    const metaTag = document.querySelector('meta[name="description"]')
    if (metaTag) metaTag.setAttribute('content', desc)
  }

  useEffect(() => {
    // 1. Force scroll to top on reload/mount
    window.scrollTo(0, 0)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Set meta description on initial load
    updateMeta(window.location.hash)

    // 3. Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash || '#/'
      setCurrentHash(hash)
      updateMeta(hash)
    }
    window.addEventListener('hashchange', handleHashChange)
    
    const handlePopState = () => {
      window._isBackNavigation = true;
    }
    window.addEventListener('popstate', handlePopState)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (window._isBackNavigation) {
      window._isBackNavigation = false;
    } else {
      // Disable smooth scrolling temporarily to prevent conflict with hash jumps
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Some components take time to mount and render layout. 
      // Force scroll multiple times during the render cycle to guarantee it stays at top.
      const timeouts = [10, 50, 100, 200, 350].map(ms => 
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), ms)
      );

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
        document.body.style.scrollBehavior = '';
      }, 400);

      return () => timeouts.forEach(clearTimeout);
    }
  }, [currentHash])

  useEffect(() => {
    // 4. Link intercept click handler for modal triggers and hash routing
    const handleAnchorClick = (e) => {
      const targetLink = e.target.closest('a')
      if (!targetLink) return

      const href = targetLink.getAttribute('href')
      if (!href) return

      if (href === '#book-consultation' || href === '#book-call') {
        e.preventDefault()
        window.location.hash = '#/book-consultation?scrollTo=form'
        return
      }

      // Intercept all route links starting with #/
      if (href.startsWith('#/')) {
        // Only intercept if it's actually changing the route (not an in-page anchor like #/about#team)
        // For simplicity, we'll intercept all #/ and just force scroll to top
        e.preventDefault()
        
        // Disable smooth scroll temporarily
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        
        // Force scroll to top instantly
        window.scrollTo(0, 0);
        
        // Update the URL without triggering native browser scroll jump
        window.history.pushState(null, '', href);
        // Manually tell the app the hash changed
        window.dispatchEvent(new Event('hashchange'));

        setTimeout(() => {
          window.scrollTo(0, 0); // Double check
          document.documentElement.style.scrollBehavior = '';
          document.body.style.scrollBehavior = '';
        }, 50);
      }
    }
    document.addEventListener('click', handleAnchorClick)

    // 5. Intersection Observer for scroll entrance animations
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // Trigger only once
          }
        })
      },
      { threshold: 0.05, rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Re-run intersection observer when page route changes
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target) // Trigger only once
          }
        })
      },
      { threshold: 0.05, rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [currentHash])

  // Simple router
  const renderPage = () => {
    const route = currentHash.split('?')[0]
    switch (route) {
      case '#/':
      case '':
        return <Homepage />
      case '#/services':
        return <ServicesOverview />
      case '#/ai-security':
        return <AISecurity />
      case '#/data-engineering':
        return <DataEngineering />
      case '#/book-consultation':
        return <BookConsultation />
      case '#/erp-ai':
      case '#/erp-ai-solutions':
        return <ErpAiSolutions />
      case '#/about':
        return <About />
      case '#/contact':
        return (
          <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
            <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-lg text-text-muted mb-8">Please fill out our booking form to schedule a consultation.</p>
            <a href="#/book-consultation" className="px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-gold transition-colors">Book a Consultation</a>
          </div>
        )
      default:
        return (
          <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
            <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
            <a href="#/" className="px-6 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-gold transition-colors">Back to Home</a>
          </div>
        )
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/* Reduced padding to shift hero element upward */}
      <main style={{ flexGrow: 1, paddingTop: '0px' }}>
        {renderPage()}
      </main>
      <Footer />



      {/* Interactive Booking Modal */}
      <BookCallModal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
    </div>
  )
}

export default App
