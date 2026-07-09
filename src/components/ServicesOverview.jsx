import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ServicesOverview() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const integrationNodes = {
    google: {
      title: "Google Workspace",
      type: "input",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" />
        </svg>
      ),
      desc: "Sync calendar events, emails, and Workspace docs into your secure RAG system without exposing credentials."
    },
    salesforce: {
      title: "Salesforce CRM",
      type: "input",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00A1E0">
          <path d="M17.75 9c-.31-3.69-3.41-6.5-7.14-6.5C7.42 2.5 4.81 4.7 4.19 7.7 2.39 8.2 1 9.8 1 11.75 1 13.99 2.76 15.8 4.93 15.8h12.56c2.32 0 4.2-1.9 4.2-4.25 0-2.25-1.74-4.1-3.94-4.55zM17.5 14H5c-1.25 0-2.25-1-2.25-2.25S3.75 9.5 5 9.5c.3 0 .5-.1.6-.3.6-1.9 2.3-3.2 4.4-3.2 2.6 0 4.7 2.1 4.7 4.75v.5c0 .3.2.5.5.5h2.3c1.25 0 2.25 1 2.25 2.25S18.75 14 17.5 14z" />
        </svg>
      ),
      desc: "Extract sales records, customer history, and pipeline updates into your central operational database."
    },
    cloud: {
      title: "Cloud Infrastructure",
      type: "input",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0284c7" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      desc: "Securely aggregate database logs, API calls, and audit trails across AWS, GCP, and Microsoft Azure."
    },
    slack: {
      title: "Slack Workspace",
      type: "input",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#e11d48" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      desc: "Publish automated event notifications, security warnings, and run conversational ChatOps reports."
    },
    wazuh: {
      title: "Wazuh Security SIEM",
      type: "output",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0f172a" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      desc: "Stream AI application audits and prompt injection block logs directly into your centralized Wazuh dashboard."
    },
    odoo: {
      title: "Odoo ERP System",
      type: "output",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#714B67" strokeWidth="2.5">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      ),
      desc: "Read and write ERP inventory rows, customer leads, and accounting transactions through secure APIs."
    },
    ai: {
      title: "Custom AI & RAG",
      type: "output",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#f97316" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      desc: "Query vector databases, prompt filters, and enterprise LLMs safely in isolated, threat-monitored environments."
    },
    cicd: {
      title: "DevSecOps Pipelines",
      type: "output",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#10b981" strokeWidth="2">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9v6M18 15v-3a4 4 0 00-4-4h-4" />
        </svg>
      ),
      desc: "Automate code quality scans, vulnerability detection, and secure container deployments."
    }
  };

  useEffect(() => {
    document.title = "Services | AI Security, Data Engineering & ERP + AI | Orzeh Technologies";
    window.scrollTo(0, 0);
    // Trigger the animation flow on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How does Orzeh ensure AI system security?",
      a: "We conduct comprehensive AI audits covering prompt injection threat modeling, training data protection, and model leakage vectors. We also deploy open-source DevSecOps tools like Wazuh to detect and alert on anomalous behaviors in real-time."
    },
    {
      q: "Can we start with data engineering before implementing ERP or AI?",
      a: "Yes. Building a clean, reliable, and secure data infrastructure is actually the best first step. It ensures that any subsequent AI models or ERP migrations have a solid foundation to pull real-time data from."
    },
    {
      q: "What ERP platforms do you customize and deploy?",
      a: "We specialize in Odoo ERP implementations. We customize modules for Accounting, Inventory, CRM, Sales, Manufacturing, eCommerce, and HRMS to streamline and centralize your business operations."
    },
    {
      q: "How do you merge ERP with custom AI capabilities?",
      a: "We add custom intelligence layers on top of your central Odoo data, enabling automated sales follow-ups, smart inventory forecasting, predictive replenishment, and conversational AI customer service agents."
    },
    {
      q: "What is the average timeline for an Orzeh implementation?",
      a: "A focused AI security audit or data pipeline project ranges from 2 to 4 weeks. A full Odoo ERP deployment or complex multi-system AI transformation typically takes between 2 to 4 months."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange/30 selection:text-brand-orange text-slate-900 font-sans">

      {/* SECTION 1: HERO */}
      <section className="services-hero-section relative">
        {/* Subtle grid and background orbs */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="hero-orb hero-orb-1" style={{ top: '-10%', right: '5%' }}></div>
        <div className="hero-orb hero-orb-2" style={{ bottom: '10%', left: '5%' }}></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left text column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="hero-eyebrow animate-on-scroll animate-zoom-in">
                <span className="eyebrow-dot" />
                <span>Orzeh Capabilities</span>
              </div>

              <h1 className="hero-title animate-on-scroll" data-delay="100" style={{ fontSize: 'clamp(32px, 5vw, 54px)' }}>
                AI, Data, Security, and ERP Systems
                <br />
                <span className="hero-gradient-text">Built for Real Execution</span>
              </h1>

              <p className="hero-subtitle animate-on-scroll" data-delay="200" style={{ maxWidth: '620px', marginBottom: '28px' }}>
                Orzeh Technologies helps companies build the systems intelligent operations depend on, from securing AI products and engineering scalable data infrastructure to implementing ERP enhanced with custom AI. Whether you are preparing AI for production, scaling your data stack, or modernizing operations, we help you pick the right starting point and build it properly.
              </p>

              <div className="flex flex-wrap gap-4 animate-on-scroll" data-delay="300">
                <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('service-areas')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-ghost-hero"
                >
                  <span>Explore Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Trust Badge Line */}
              <div className="pt-8 border-t border-slate-200/50 animate-on-scroll animate-from-left" data-delay="400">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Core Systems</span>
                <div className="flex flex-wrap gap-3">
                  <span className="trust-badge-item">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    AI Security
                  </span>
                  <span className="trust-badge-item">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    Data Engineering
                  </span>
                  <span className="trust-badge-item">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    DevSecOps
                  </span>
                  <span className="trust-badge-item">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    ERP + AI
                  </span>
                  <span className="trust-badge-item">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    Workflow Automation
                  </span>
                </div>
              </div>
            </div>

            {/* Right mockup column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-on-scroll animate-from-right" data-delay="200">
              <div className="services-dashboard-mockup">
                {/* Browser Header */}
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100/80 px-4 py-1 rounded-md border border-slate-200/40">
                    api.orzeh.io/v1/systems
                  </div>
                  <div className="w-8" />
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* System Status Banner */}
                  <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">Total Systems Health</span>
                      <span className="text-xs font-bold text-slate-800 font-sora">Operational & Secure</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-green-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      99.98%
                    </div>
                  </div>

                  {/* Metric Cards Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">AI Vulnerability</span>
                      <span className="text-sm font-bold text-slate-800 font-sora block mt-0.5">0% Risks</span>
                      <span className="text-[9px] font-bold text-green-500">✓ Audited & Active</span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-xl">
                      <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">ERP Sync</span>
                      <span className="text-sm font-bold text-slate-800 font-sora block mt-0.5">Connected</span>
                      <span className="text-[9px] font-bold text-orange-500">✓ Workflows Automated</span>
                    </div>
                  </div>

                  {/* Live Stream Logs */}
                  <div className="bg-slate-900 text-slate-300 font-mono text-[9px] p-3 rounded-xl border border-slate-800 space-y-1.5 overflow-hidden relative">
                    <div className="text-brand-orange font-bold text-[8px] uppercase tracking-wider mb-1">Live Event Log</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">[12:44:02]</span>
                      <span className="text-green-400 font-bold">SECURE</span>
                      <span className="truncate">Wazuh: Prompt injection blocked</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">[12:44:05]</span>
                      <span className="text-blue-400 font-bold">SYNC</span>
                      <span className="truncate">Odoo Inventory: Sync complete</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">[12:44:08]</span>
                      <span className="text-orange-400 font-bold">FLOW</span>
                      <span className="truncate">RAG pipeline queried (0.04s)</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Badges */}
                <div className="services-mockup-badge mockup-badge-top-right">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase font-bold text-slate-400">AI DevSecOps</span>
                    <span className="text-[10px] font-bold text-slate-800">100% Secure</span>
                  </div>
                </div>

                <div className="services-mockup-badge mockup-badge-bottom-left">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase font-bold text-slate-400">Data pipelines</span>
                    <span className="text-[10px] font-bold text-green-600">Real-time active</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: POSITIONING & PROBLEMS */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Title and pills */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block">
                Services Positioning
              </span>
              <h2 className="font-sora font-black text-3xl md:text-5xl leading-tight text-slate-900 animate-on-scroll animate-from-left">
                <span className="hero-gradient-text">One Technical Partner</span>
                <br />
                for the Systems Your Business Depends On
              </h2>
            </div>

            <div className="space-y-4">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Core Architecture Requirements</span>
              <div className="pillar-badge-grid">
                {['Secure', 'Reliable', 'Connected', 'Automated', 'AI-Ready', 'Built for Production'].map((pillar, i) => (
                  <span key={i} className="pillar-badge-item">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Disconnected tools, fragile data, unsecured AI, and manual operations all become liabilities as a company scales. Growing past them takes infrastructure that is secure, reliable, connected, automated, and ready for both AI and production use. Orzeh brings those technical layers together, AI security, data engineering, DevSecOps, ERP, and custom AI automation, and builds the systems underneath the business rather than selling another isolated tool.
            </p>

            <div className="p-5 bg-orange-50/50 border-l-4 border-brand-orange rounded-r-xl">
              <p className="text-base font-bold text-slate-800 leading-snug">
                We do not sell isolated tools. We build the systems underneath the business.
              </p>
            </div>
          </div>

          {/* Right Column: Concentric Circles Diagram representing Problems */}
          <div className="lg:col-span-6 flex justify-center items-center relative animate-on-scroll animate-zoom-in" data-delay="200">
            <div className={`concentric-circles-wrapper ${isLoaded ? 'is-visible' : ''}`}>

              {/* Circles */}
              <div className="concentric-circle-container">
                <div className="concentric-circle-line circle-line-1" />
                <div className="concentric-circle-line circle-line-2" />
                <div className="concentric-circle-line circle-line-3" />
              </div>

              {/* Floating Problem Cards (Staggered Animation with is-visible fallback) */}
              <div className="concentric-problem-card problem-pos-1">
                <span className="problem-card-icon">!</span>
                <span className="text-xs font-bold text-slate-900 font-sora">Spreadsheets Sprawl</span>
              </div>

              {/* Remove icon just from these two: Delayed Sales Loops (pos-3) and Leadership Friction (pos-5) */}
              <div className="concentric-problem-card problem-pos-2">
                <span className="problem-card-icon">!</span>
                <span className="text-xs font-bold text-slate-900 font-sora">Inventory Blind Spots</span>
              </div>

              <div className="concentric-problem-card problem-pos-3">
                <span className="text-xs font-bold text-slate-900 font-sora">Delayed Sales Loops</span>
              </div>

              <div className="concentric-problem-card problem-pos-4">
                <span className="problem-card-icon">!</span>
                <span className="text-xs font-bold text-slate-900 font-sora">Manual Chores & Overhead</span>
              </div>

              <div className="concentric-problem-card problem-pos-5">
                <span className="text-xs font-bold text-slate-900 font-sora">Leadership Friction</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICE AREAS OVERVIEW (Unduit-style 3-card layout) */}
      <section id="service-areas" className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto">

          <div className="mb-16 max-w-[800px] text-left">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block mb-3">Service Areas</span>
            <h2 className="font-sora font-black text-3xl md:text-5xl leading-tight text-slate-900 mb-5">
              Comprehensive Capabilities, One <span className="hero-gradient-text">Implementation Partner</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Companies arrive with different problems: securing AI before launch, fixing shaky data infrastructure, digital transformation, or automation. The services are structured so you can start where the need is strongest. Each has a dedicated page with full detail; here is the short version.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1: AI Security */}
            <div className="services-capability-card animate-on-scroll animate-from-left" data-delay="100">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="card-title">AI Security & Implementation</h3>
                <p className="card-desc">
                  Secure AI Systems Before They Become Business Risk. We identify AI-specific risks, harden the architecture, deploy monitoring, reduce hallucinations, and get systems production-ready.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">AI security audits; Wazuh deployment and monitoring; DevSecOps for AI; prompt-injection and data-leakage review; RAG and groundedness improvement; production-readiness planning.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">AI that is safer, more visible, more reliable, and easier to operate in production.</p>
                </div>
              </div>
              <a href="#/ai-security" className="card-link mt-auto">
                Explore AI Security <span>→</span>
              </a>
            </div>

            {/* Card 2: Data Engineering */}
            <div className="services-capability-card animate-on-scroll animate-from-bottom" data-delay="200">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="12" cy="5" rx="9" ry="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}></ellipse>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}></path>
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}></path>
                  </svg>
                </div>
                <h3 className="card-title">Data Engineering & DevSecOps</h3>
                <p className="card-desc">
                  Build the Data Foundation Your AI and Operations Need. We design and build data infrastructure for teams that need stronger pipelines, real-time visibility, cloud-ready architecture, and deployment workflows that hold up.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">data pipeline development; batch, micro-batch, and real-time workflows; cloud and multi-cloud architecture; CI/CD for AI; monitoring and alerting; DevSecOps integration.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">data that is easier to move, trust, monitor, secure, and use for AI-powered decisions.</p>
                </div>
              </div>
              <a href="#/data-engineering" className="card-link mt-auto">
                Explore Data Engineering <span>→</span>
              </a>
            </div>

            {/* Card 3: Digital Transformation */}
            <div className="services-capability-card animate-on-scroll animate-from-right" data-delay="300">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2}></path>
                  </svg>
                </div>
                <h3 className="card-title">Digital Transformation</h3>
                <p className="card-desc">
                  Modernize Operations With ERP and Custom AI. Growing businesses outgrow spreadsheets, disconnected apps, and manual reporting. We implement ERP and add custom AI on top.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Odoo implementation; core and advanced modules; AI inventory prediction; sales automation; smart reporting; financial forecasting.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">a move from manual operations to connected, intelligent workflows.</p>
                </div>
              </div>
              <a href="#/digital-transformation" className="card-link mt-auto">
                Explore Digital Transformation <span>→</span>
              </a>
            </div>

            {/* Card 4: Voice AI */}
            <div className="services-capability-card animate-on-scroll animate-from-left" data-delay="400">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23" strokeWidth={2.2} strokeLinecap="round"></line>
                    <line x1="8" y1="23" x2="16" y2="23" strokeWidth={2.2} strokeLinecap="round"></line>
                  </svg>
                </div>
                <h3 className="card-title">Voice AI</h3>
                <p className="card-desc">
                  Voice AI Agents That Handle Real Phone Calls. We build agents that pick up the phone, make outbound calls, book appointments, and answer customers.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Inbound & Outbound calls; Appointment Booking; CRM Integration; WhatsApp & Human Transfer.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">every call answered and routine work handled without a person.</p>
                </div>
              </div>
              <a href="#/voice-ai" className="card-link mt-auto">
                Explore Voice AI <span>→</span>
              </a>
            </div>

            {/* Card 5: AI Automation */}
            <div className="services-capability-card animate-on-scroll animate-from-bottom" data-delay="500">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"></rect>
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"></line>
                  </svg>
                </div>
                <h3 className="card-title">AI Automation</h3>
                <p className="card-desc">
                  Automate the Work That's Slowing Your Team Down. We find repetitive work and automate it across workflows, documents, email and CRM.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Workflow Automation; Document Processing; CRM & Email routing; System Integrations; AI Agents.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">more output from the same team, at lower cost.</p>
                </div>
              </div>
              <a href="#/ai-automation" className="card-link mt-auto">
                Explore AI Automation <span>→</span>
              </a>
            </div>

            {/* Card 6: AI Cost Optimization */}
            <div className="services-capability-card animate-on-scroll animate-from-right" data-delay="600">
              <div>
                <div className="card-icon-box">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3 className="card-title">AI Cost Optimization</h3>
                <p className="card-desc">
                  Cut the Cost of Running AI in Production. We bring your AI running costs under control with full visibility into where the money goes.
                </p>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key capabilities</span>
                  <p className="text-xs text-slate-600 leading-relaxed">Cost Visibility; Prompt Optimization; Model Routing; Caching; Cost Monitoring via Langfuse.</p>
                </div>
                <div className="mb-6">
                  <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Outcome</span>
                  <p className="text-xs text-slate-700 font-bold">a leaner setup that delivers the same quality for less.</p>
                </div>
              </div>
              <a href="#/ai-cost-optimization" className="card-link mt-auto">
                Explore AI Cost Optimization <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: CROSS-VERTICAL SOLUTIONS */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block mb-3 animate-on-scroll animate-zoom-in">Combined Packages</span>
          <h2 className="font-sora font-black text-3xl md:text-5xl text-slate-900 max-w-[800px] mx-auto leading-tight animate-on-scroll animate-from-bottom" data-delay="100">
            When One System Needs More Than <span className="hero-gradient-text">One Capability</span>
          </h2>
          <p className="text-lg text-slate-600 mt-5 max-w-[700px] mx-auto animate-on-scroll animate-from-bottom" data-delay="200">
            Some problems do not sit neatly in one category. An AI product might need data pipelines and security monitoring at once; an ERP rollout might need AI automation and data integration; a scaling company might need modern operations, secure infrastructure, and AI-ready data together. When the business case calls for it, we combine service areas into a single engagement.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          {(() => {
            const solutions = [
              {
                title: "Complete AI Stack",
                desc: "For companies launching or scaling AI that need security, data infrastructure, and implementation support together.",
                bestFor: "companies building serious AI systems that need a complete technical foundation.",
                includes: ["AI security review", "data infrastructure planning", "AI implementation support", "monitoring and deployment workflows", "production-readiness guidance"]
              },
              {
                title: "Intelligent ERP",
                desc: "For businesses that want ERP implementation backed by AI automation and connected data.",
                bestFor: "companies that want modern operations with intelligence built into the system.",
                includes: ["ERP implementation", "custom AI features", "data pipelines", "workflow automation", "smart reporting", "team training"]
              },
              {
                title: "Enterprise Digital Transformation",
                desc: "For companies ready to modernize operations, data, AI, and security together.",
                bestFor: "businesses that need a long-term technical partner across multiple systems.",
                includes: ["ERP + AI", "data engineering", "AI security", "DevSecOps", "automation strategy", "implementation and support"]
              }
            ];

            const renderCard = (sol, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-brand-orange/50 transition-colors group h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-sora font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-orange transition-colors">{sol.title}</h3>
                  <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">{sol.desc}</p>
                  <p className="text-xs text-slate-500 italic mb-6"><strong>Best for:</strong> {sol.bestFor}</p>
                </div>
                <div className="border-t border-slate-200/60 pt-5 mt-auto">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Includes</span>
                  <ul className="space-y-2">
                    {sol.includes.map((inc, i) => (
                      <li key={i} className="flex gap-2 text-xs text-slate-700 font-medium items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );

            return (
              <>
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                  {solutions.map((sol, idx) => (
                    <div key={idx} className="animate-on-scroll animate-zoom-in" data-delay={100 * (idx + 1)}>
                      {renderCard(sol, idx)}
                    </div>
                  ))}
                </div>
                <div className="md:hidden -mx-6 px-6">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.15}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="pb-10 !pt-2"
                  >
                    {solutions.map((sol, idx) => (
                      <SwiperSlide key={idx} className="h-auto">
                        {renderCard(sol, idx)}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* SECTION: POWERFUL ALONE INTEGRATIONS MAP */}
      <section className="integrations-section py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto text-center mb-12">
          <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block mb-3 animate-on-scroll animate-zoom-in">Unified Architecture</span>
          <h2 className="font-sora font-black text-3xl md:text-5xl text-slate-900 max-w-[800px] mx-auto leading-tight animate-on-scroll animate-from-bottom" data-delay="100">
            Powerful Alone. <span className="hero-gradient-text">Connected Together.</span>
          </h2>
          <p className="text-lg text-slate-600 mt-5 max-w-[700px] mx-auto animate-on-scroll animate-from-bottom" data-delay="200">
            We don't force you to rebuild your software stack. We connect your existing business tools to modern, automated, and secure endpoints.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto relative animate-on-scroll animate-zoom-in" data-delay="300">

          {/* Desktop Version */}
          <div className="integrations-interactive-container">
            {/* SVG Connector lines */}
            <svg viewBox="0 0 960 400" className="integrations-svg-canvas">
              {/* Left bracket [ facing right */}
              <path
                d="M 160 60 Q 190 60 190 90 L 190 310 Q 190 340 160 340"
                className={`integration-bracket ${hoveredNode && integrationNodes[hoveredNode].type === 'input' ? 'is-active' : ''}`}
              />

              {/* Right bracket ] facing left */}
              <path
                d="M 740 60 Q 710 60 710 90 L 710 310 Q 710 340 740 340"
                className={`integration-bracket ${hoveredNode && integrationNodes[hoveredNode].type === 'output' ? 'is-active' : ''}`}
              />

              {/* Connecting lines */}
              {/* Google */}
              <path
                d="M 60 60 L 160 60"
                className={`integration-path path-google ${hoveredNode === 'google' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* Salesforce */}
              <path
                d="M 60 140 C 120 140, 130 140, 190 140"
                className={`integration-path path-salesforce ${hoveredNode === 'salesforce' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* Cloud */}
              <path
                d="M 60 260 C 120 260, 130 260, 190 260"
                className={`integration-path path-cloud ${hoveredNode === 'cloud' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* Slack */}
              <path
                d="M 60 340 L 160 340"
                className={`integration-path path-slack ${hoveredNode === 'slack' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />

              {/* Wazuh */}
              <path
                d="M 840 60 L 740 60"
                className={`integration-path path-wazuh ${hoveredNode === 'wazuh' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* Odoo */}
              <path
                d="M 840 140 C 780 140, 770 140, 710 140"
                className={`integration-path path-odoo ${hoveredNode === 'odoo' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* Custom AI */}
              <path
                d="M 840 260 C 780 260, 770 260, 710 260"
                className={`integration-path path-ai ${hoveredNode === 'ai' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
              {/* CI/CD */}
              <path
                d="M 840 340 L 740 340"
                className={`integration-path path-cicd ${hoveredNode === 'cicd' ? 'is-active' : hoveredNode ? 'is-dimmed' : ''}`}
              />
            </svg>

            {/* Nodes Left (Inputs) */}
            <div
              className={`integration-node left-node node-pos-1 ${hoveredNode === 'google' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('google')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.google.icon}</div>
              <span className="integration-node-label">{integrationNodes.google.title}</span>
            </div>

            <div
              className={`integration-node left-node node-pos-2 ${hoveredNode === 'salesforce' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('salesforce')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.salesforce.icon}</div>
              <span className="integration-node-label">{integrationNodes.salesforce.title}</span>
            </div>

            <div
              className={`integration-node left-node node-pos-3 ${hoveredNode === 'cloud' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('cloud')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.cloud.icon}</div>
              <span className="integration-node-label">{integrationNodes.cloud.title}</span>
            </div>

            <div
              className={`integration-node left-node node-pos-4 ${hoveredNode === 'slack' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('slack')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.slack.icon}</div>
              <span className="integration-node-label">{integrationNodes.slack.title}</span>
            </div>

            {/* Center Content Panel */}
            <div className="integrations-center-panel">
              <div className="integrations-brand-badge" onClick={() => setHoveredNode(null)}>
                <img src="/images/logo.png" alt="Orzeh Logo" className="integrations-brand-logo" />
              </div>
              <h3 className="integrations-center-title">Powerful Alone</h3>

              <div className="integrations-tooltip-box">
                {hoveredNode ? (
                  <div className="integrations-active-tooltip">
                    <h4 className="integrations-tooltip-title">{integrationNodes[hoveredNode].title}</h4>
                    <p className="integrations-tooltip-desc">{integrationNodes[hoveredNode].desc}</p>
                  </div>
                ) : (
                  <div className="integrations-default-view">
                    <span className="integrations-default-item">Built on existing infrastructure</span>
                    <span className="integrations-default-item">No disruption to systems</span>
                    <span className="integrations-default-item">Consistent predictable IT outcomes</span>
                  </div>
                )}
              </div>
            </div>

            {/* Nodes Right (Outputs) */}
            <div
              className={`integration-node right-node node-pos-1 ${hoveredNode === 'wazuh' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('wazuh')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.wazuh.icon}</div>
              <span className="integration-node-label">{integrationNodes.wazuh.title}</span>
            </div>

            <div
              className={`integration-node right-node node-pos-2 ${hoveredNode === 'odoo' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('odoo')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.odoo.icon}</div>
              <span className="integration-node-label">{integrationNodes.odoo.title}</span>
            </div>

            <div
              className={`integration-node right-node node-pos-3 ${hoveredNode === 'ai' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('ai')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.ai.icon}</div>
              <span className="integration-node-label">{integrationNodes.ai.title}</span>
            </div>

            <div
              className={`integration-node right-node node-pos-4 ${hoveredNode === 'cicd' ? 'is-active' : ''}`}
              onMouseEnter={() => setHoveredNode('cicd')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="integration-node-icon">{integrationNodes.cicd.icon}</div>
              <span className="integration-node-label">{integrationNodes.cicd.title}</span>
            </div>

          </div>

          {/* Mobile Version */}
          <div className="integrations-mobile-cards">
            <h3 className="integrations-mobile-title">System Connectors Map</h3>

            <div className="integrations-mobile-section-header">Existing Systems We Support (Inputs)</div>
            <div className="integrations-mobile-grid">
              {Object.entries(integrationNodes).filter(([_, node]) => node.type === 'input').map(([key, node]) => (
                <div key={key} className="integrations-mobile-card">
                  <div className="integrations-mobile-icon-box">{node.icon}</div>
                  <div className="integrations-mobile-text-box">
                    <h4 className="integrations-mobile-card-title">{node.title}</h4>
                    <p className="integrations-mobile-card-desc">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="integrations-mobile-section-header">Automated Systems We Integrate (Outputs)</div>
            <div className="integrations-mobile-grid">
              {Object.entries(integrationNodes).filter(([_, node]) => node.type === 'output').map(([key, node]) => (
                <div key={key} className="integrations-mobile-card">
                  <div className="integrations-mobile-icon-box">{node.icon}</div>
                  <div className="integrations-mobile-text-box">
                    <h4 className="integrations-mobile-card-title">{node.title}</h4>
                    <p className="integrations-mobile-card-desc">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW TO CHOOSE (Unduit-style Redesign) */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Call to Action */}
            <div className="lg:col-span-5 text-left space-y-6 animate-on-scroll">
              <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase bg-brand-orange/10 px-3 py-1.5 rounded-full w-fit block">
                Start with pain
              </span>
              <h2 className="font-sora font-black text-3xl sm:text-5xl leading-tight text-slate-900">
                Start With the Problem You Feel Most Clearly
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                You do not need to know the exact technical solution before talking to us. Start with the pain.
              </p>
              <div className="pt-4">
                <a
                  href="#/book-consultation?scrollTo=form"
                  className="inline-flex items-center justify-center h-14 px-8 bg-slate-900 hover:bg-brand-orange text-white font-sora font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Right Side: 2x2 Grid of White Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 animate-on-scroll" data-delay="100">
              {[
                {
                  title: "AI Security",
                  if: "If your AI system feels risky:",
                  desc: "Start with an audit, monitoring, DevSecOps, RAG improvement, or production-readiness support."
                },
                {
                  title: "Data & DevOps",
                  if: "If your data is scattered or unreliable:",
                  desc: "Start with pipelines, better architecture, real-time infrastructure, monitoring, or deployment workflows."
                },
                {
                  title: "ERP + AI",
                  if: "If your operations are too manual:",
                  desc: "Start with ERP implementation, workflow automation, reporting, inventory control, CRM visibility, or custom AI."
                },
                {
                  title: "Consultation",
                  if: "If everything feels connected:",
                  desc: "Start with a systems consultation, and we will find the highest-impact place to begin."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.02)] hover:border-brand-orange/30 hover:shadow-[0_16px_48px_rgba(249,115,22,0.06)] hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between">
                  <div>
                    <span className="font-sora font-black text-3xl sm:text-4xl text-brand-orange block">
                      {item.title}
                    </span>
                    <h4 className="font-sora font-bold text-sm text-slate-800 mt-4">
                      {item.if}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: HOW WE WORK (PROCESS) */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-16 text-center">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block mb-3 animate-on-scroll">Our Process</span>
            <h2 className="font-sora font-black text-3xl md:text-5xl text-slate-900 animate-on-scroll" data-delay="100">
              From Business Problem to <span className="hero-gradient-text">Working System</span>
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto">
            {(() => {
              const steps = [
                { num: "01", title: "Understand", desc: "We review your business model, workflows, technical environment, and current pain points." },
                { num: "02", title: "Diagnose", desc: "We pin down what is creating the most friction: security risk, data weakness, operational drag, or disconnected systems." },
                { num: "03", title: "Design", desc: "We shape the technical path around your priority, timeline, and stage of growth." },
                { num: "04", title: "Build", desc: "We implement with practical engineering and documentation, aimed at production from the start." },
                { num: "05", title: "Deploy", desc: "We move the system into real operations with testing, monitoring, and team handover." },
                { num: "06", title: "Improve", desc: "We keep refining as your business grows and your needs change." }
              ];

              const renderStep = (step, i) => (
                <div key={i} className="process-step-card">
                  <span className="process-step-number">{step.num}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              );

              return (
                <>
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                      <div key={i} className="animate-on-scroll" data-delay={80 * (i + 1)}>
                        {renderStep(step, i)}
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden -mx-6 px-6">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.15}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {steps.map((step, i) => (
                        <SwiperSlide key={i} className="h-auto">
                          {renderStep(step, i)}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY ORZEH & PHILOSOPHY */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">

          <div className="why-philosophy-card-light animate-on-scroll" data-delay="100">
            <div>
              <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block mb-4">Approach</span>
              <h2 className="font-sora font-black text-2xl lg:text-3xl leading-snug text-slate-900 mb-6">
                Built for Execution, Not More <span className="hero-gradient-text">Complexity</span>
              </h2>
              <div className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                <p>Orzeh is an implementation partner, not a strategy-only consultancy. The work is about getting you from unclear problems to systems that run: risky AI made safe to deploy, scattered data turned into reliable infrastructure, manual operations turned into intelligent workflows.</p>
                <p>We do not start by forcing a particular platform or model onto your company. We start by understanding how the business actually operates, where data moves and where it breaks, where work is repeated by hand, where AI is creating risk, and where automation would genuinely help, then recommend the systems that fit.</p>
              </div>
            </div>
            <p className="text-xs font-bold text-brand-orange mt-6 pt-4 border-t border-slate-100">
              Because we bring AI, data, security, and ERP together, you do not have to manage each layer through a different vendor.
            </p>
          </div>

          <div className="why-philosophy-card-dark animate-on-scroll" data-delay="200">
            <div>
              <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block mb-4">Philosophy</span>
              <h2 className="font-sora font-black text-2xl lg:text-3xl leading-snug mb-6 text-white">
                One Vendor, Unified Engineering Outcomes
              </h2>
              <div className="space-y-5 text-sm text-slate-400 font-medium leading-relaxed">
                <p>Across all of it, the services are built to produce the same kind of result: safer AI, more reliable data, cleaner reporting, less manual work, stronger deployment workflows, and systems that scale with the business.</p>
                <ul className="philosophy-vertical-accent">
                  <li>AI security verified and continuously monitored</li>
                  <li>Modern data pipes built on cloud architecture</li>
                  <li>Odoo ERP configured around real workflows</li>
                </ul>
              </div>
            </div>
            <p className="text-brand-orange font-bold text-xs mt-6 pt-4 border-t border-slate-800">
              Reliable, secure systems built to support growth.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 9: FAQ SECTION */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[13px] uppercase block mb-3">Questions & Answers</span>
            <h2 className="font-sora font-black text-3xl md:text-5xl text-slate-900 leading-tight">
              Frequently Asked <span className="hero-gradient-text">Questions</span>
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Everything you need to know about our services, process, and technical capabilities.
            </p>
          </div>

          {/* Accordion Component */}
          <div className="faq-accordion-container">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`faq-accordion-item ${activeFaq === i ? 'is-open' : ''}`}
              >
                <button
                  className="faq-accordion-header"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={activeFaq === i}
                >
                  <span className="faq-accordion-question">
                    {i + 1}. {faq.q}
                  </span>
                  <svg
                    className="faq-accordion-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-accordion-content">
                  <p className="faq-accordion-answer">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: OUTCOMES & CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-[1000px] mx-auto">

          {/* Redesigned CTA Card */}
          <div className="final-cta-gradient-card">
            {/* SVG Bolt Watermark */}
            <svg
              className="cta-bolt-watermark"
              width="140"
              height="200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
            </svg>

            <div className="relative z-10 max-w-[700px] mx-auto text-center space-y-6">
              <h2 className="final-cta-title font-sora font-black text-3xl md:text-5xl leading-tight">
                Build the Right System First
              </h2>
              <p className="final-cta-subtitle text-base md:text-lg leading-relaxed">
                Whether your priority is AI security, data infrastructure, ERP modernization, or custom AI automation, the next step is figuring out where the highest-impact opportunity sits. We will help you find that starting point and build from there.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#/book-consultation?scrollTo=form" className="btn-cta-dark w-full sm:w-auto justify-center">
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
                <a href="#/services" className="btn-cta-ghost-light w-full sm:w-auto justify-center">
                  <span>Explore Our Capabilities</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              <p className="text-[11px] font-bold text-white uppercase tracking-widest pt-4">
                Thirty minutes to map your systems, surface the risks, and pick the highest-impact place to start.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ServicesOverview;
