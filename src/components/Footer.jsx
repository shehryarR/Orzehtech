import React from 'react'
import { config } from '../config.js'

function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        
        {/* Top Section */}
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-brand-col animate-on-scroll animate-from-left">
            <div className="footer-logo-wrap">
              <img 
                src="/images/logo.png" 
                alt="Orzeh Logo" 
                className="footer-logo" 
              />
              <span className="footer-brand-name">Orzeh Technologies</span>
            </div>
            <p className="footer-brand-desc">
              Secure, intelligent, production-ready AI systems for businesses moving beyond manual workflows.
            </p>
            <p className="footer-address">{config.address}</p>
          </div>

          {/* Column 2: Capabilities */}
          <div className="animate-on-scroll animate-zoom-in" data-delay="100">
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-links">
              <li><a href="#/ai-security">AI Security & Implementation</a></li>
              <li><a href="#/erp-ai">ERP + AI Solutions</a></li>
              <li><a href="#/services">All Services</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="animate-on-scroll animate-zoom-in" data-delay="200">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/services">Services Overview</a></li>
              <li><a href="#/book-consultation?scrollTo=form">Book a Consultation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="animate-on-scroll animate-from-right" data-delay="300">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${config.email}`}>
                  {config.email}
                </a>
              </li>
              <li>
                <span className="footer-link-static">
                  24/7 Support Available
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 {config.companyName}. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-scroll-top"
            aria-label="Scroll to top"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
