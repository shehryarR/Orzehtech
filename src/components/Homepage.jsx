import React, { useEffect } from 'react'
import { SiDatabricks, SiGooglecloud, SiOdoo, SiSnowflake } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { VscAzure } from 'react-icons/vsc'
import CountUp from './CountUp.jsx'
import HeroRibbonAnimation from './HeroRibbonAnimation.jsx'
import ScrollAnimatedChallenges from './ScrollAnimatedChallenges.jsx'

function Homepage() {
  useEffect(() => {
    document.title = "Orzeh Technologies | AI Security, Data Engineering & ERP + AI Solutions"
  }, [])

  const steps = [
    { 
      number: '01', 
      title: 'Diagnose', 
      desc: 'We start with your current systems, workflows, and the bottlenecks slowing you down.', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, 
      color: '#f97316' 
    },
    { 
      number: '02', 
      title: 'Architect', 
      desc: 'We map the right path forward: security, data infrastructure, ERP, AI automation, or some combination of them.', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>, 
      color: '#0284c7' 
    },
    { 
      number: '03', 
      title: 'Build', 
      desc: 'We implement with real engineering and clean documentation, built for production from the start.', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>, 
      color: '#d97706' 
    },
    { 
      number: '04', 
      title: 'Deploy', 
      desc: 'We move it into your live environment with monitoring, team training, and a proper handover.', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M15 9l-9 9m9-9l3-3m-3 3l-3-3m3 3l3 3M9 15l-3 3m3-3l-3-3m3 3l3 3M19 5l-1.5 1.5M5 19l1.5-1.5M19 5a21.22 21.22 0 0 0-4.5-4.5M19 5a21.22 21.22 0 0 1 4.5 4.5"/></svg>, 
      color: '#f97316' 
    },
    { 
      number: '05', 
      title: 'Optimize', 
      desc: 'We keep improving the system as your team grows and your data becomes more valuable.', 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, 
      color: '#0284c7' 
    },
  ]

  return (
    <div className="homepage-redesign">
      
      {/* ============================================ */}
      {/* 1. HERO SECTION - Dark, Bold, Unduit-style  */}
      {/* ============================================ */}
      <section className="hero-section">
        <HeroRibbonAnimation />

        {/* Subtle dot grid overlay */}
        <div className="hero-dot-grid" />

        <div className="container hero-content">
          <div className="hero-layout">

            
            {/* Centered Copy */}
            <div className="hero-copy">
              <div className="hero-eyebrow animate-on-scroll animate-zoom-in">
                <span className="eyebrow-dot" />
                <span>AI Infrastructure Company</span>
              </div>
              
              <h1 className="hero-title animate-on-scroll" data-delay="100">
                Production-Ready AI
                <br />
                <span className="hero-gradient-text">Infrastructure for Growing Companies</span>
              </h1>
              
              <p className="hero-subtitle animate-on-scroll" data-delay="200">
                Orzeh Technologies helps businesses move past fragmented tools, manual workflows, and experimental AI. We secure AI products, build the data infrastructure behind them, and modernize operations with ERP systems that run on custom AI.
              </p>
              
              <div className="hero-actions animate-on-scroll" data-delay="300">
                <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
                <a href="#/services" className="btn-ghost-hero">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust animate-on-scroll" data-delay="400">
                <div className="hero-avatars">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&h=80&q=80" alt="" />
                </div>
                <div className="hero-trust-text">
                  <span className="hero-trust-number">85+ companies trust Orzeh</span>
                  <span className="hero-trust-rating">⭐ 4.9 avg rating</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. TRUST BANNER — Warm gradient like Unduit  */}
      {/* ============================================ */}
      <section className="trust-banner-section">
        {/* Warm gradient background */}
        <div className="trust-banner-bg" />
        
        <div className="trust-banner-content">
          <div className="trust-marquee-label">
            Trusted by fast-growing startups and enterprises
          </div>

          {/* Moving Marquee */}
          <div className="trust-marquee-container">
            <div className="trust-marquee-track">
              {[
                { name: 'Databricks', color: '#FF3621', icon: <SiDatabricks size={26} /> },
                { name: 'Odoo', color: '#714B67', icon: <SiOdoo size={26} /> },
                { name: 'GCP', color: '#4285F4', icon: <SiGooglecloud size={26} /> },
                { name: 'AWS', color: '#FF9900', icon: <FaAws size={36} /> },
                { name: 'Snowflake', color: '#29B5E8', icon: <SiSnowflake size={28} /> },
                { name: 'Azure', color: '#0078D4', icon: <VscAzure size={28} /> },
              ].concat([
                { name: 'Databricks', color: '#FF3621', icon: <SiDatabricks size={26} /> },
                { name: 'Odoo', color: '#714B67', icon: <SiOdoo size={26} /> },
                { name: 'GCP', color: '#4285F4', icon: <SiGooglecloud size={26} /> },
                { name: 'AWS', color: '#FF9900', icon: <FaAws size={36} /> },
                { name: 'Snowflake', color: '#29B5E8', icon: <SiSnowflake size={28} /> },
                { name: 'Azure', color: '#0078D4', icon: <VscAzure size={28} /> },
              ])
              .reduce((acc, curr) => {
                // Return a flat array of twice the items for marquee tracking loop
                return acc.concat(curr);
              }, [])
              .map((logo, idx) => (
                <div key={idx} className="trust-logo-item" style={{ color: logo.color }}>
                  <span className="trust-logo-svg">{logo.icon}</span>
                  <span className="trust-logo-name" style={{ color: logo.color }}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="systems-infrastructure-section py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Subtle dot background from the reference image */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Right Side: Text Content (Moves to top on mobile) */}
            <div className="space-y-8 animate-on-scroll animate-from-right order-1 lg:order-2" data-delay="100">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-[1.2] lg:leading-[1.15] mb-4 lg:mb-6">
                  We Build the Systems<br className="hidden sm:block" />
                  That Make AI Work.
                </h2>
                <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-medium">
                  When an AI project stalls, the model is rarely the first thing to blame. The data underneath it usually is. AI built on a weak foundation tends to break: it gets fragile, hard to secure, and disconnected from how the business actually runs.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[1.35rem] font-bold text-slate-900 mb-2 font-sora tracking-tight">
                  Legacy Systems Break Under AI Workloads
                </h3>
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
                  Analytics infrastructure built for dashboards does not always survive contact with AI. A report can tolerate yesterday's numbers or a broken pipeline for a few hours; a production AI workflow often can't.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-[1.35rem] font-bold text-brand-orange mb-2 font-sora tracking-tight">
                  Fix the Data Foundation
                </h3>
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
                  That foundation is what we build. We secure AI systems before they reach production, engineer data infrastructure that can carry real workloads, and implement ERP that turns manual processes into connected, AI-assisted operations.
                </p>
              </div>
            </div>

            {/* Left Side: UI Mockup Graphic (Moves to bottom on mobile) */}
            <div className="relative animate-on-scroll animate-from-left order-2 lg:order-1">
              {/* Glow Behind Mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-amber-100 rounded-[2.5rem] transform -rotate-2 scale-105 opacity-70 blur-xl"></div>
              
              {/* Tablet Frame */}
              <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-1.5 sm:p-4">
                <div className="bg-slate-950 rounded-[1.25rem] sm:rounded-[1.5rem] p-4 sm:p-6 shadow-inner overflow-hidden relative">
                  
                  {/* Mockup Header */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6 text-slate-400 text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
                    <span>Platform</span>
                    <span className="text-slate-600">/</span>
                    <span className="text-white">Pipeline Operations</span>
                  </div>

                  {/* Mockup Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-3 sm:p-5 shadow-sm">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100/50">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-xs sm:text-sm">Cluster Alpha</h4>
                          <p className="text-slate-500 text-[10px] sm:text-[11px] mb-1.5 sm:mb-2">Primary Node</p>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-3 sm:p-5 shadow-sm">
                      <p className="text-slate-500 text-[10px] sm:text-[11px] mb-1 font-medium">Processing Speed</p>
                      <h4 className="text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight mb-2 sm:mb-3 font-sora">4.2 PB/s</h4>
                      <div className="flex items-end gap-1.5 h-6 sm:h-8">
                        <div className="w-1/4 bg-emerald-200 rounded-t-sm h-1/3"></div>
                        <div className="w-1/4 bg-emerald-300 rounded-t-sm h-1/2"></div>
                        <div className="w-1/4 bg-emerald-400 rounded-t-sm h-3/4"></div>
                        <div className="w-1/4 bg-emerald-500 rounded-t-sm h-full relative">
                          <span className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-bold text-emerald-600 whitespace-nowrap">+18.34% ↗</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wide Bottom Card */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl p-4 sm:p-6 relative overflow-hidden">
                    <p className="text-slate-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4">Automated Cleansing</p>
                    <div className="flex items-center justify-between px-1 sm:px-8">
                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg bg-white shadow-sm flex items-center justify-center mb-1.5 sm:mb-2">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <span className="text-[9px] sm:text-[11px] font-bold text-slate-400">Raw Data</span>
                      </div>
                      
                      <div className="text-brand-orange animate-pulse">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>

                      <div className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg bg-white shadow-sm border border-emerald-100 flex items-center justify-center mb-1.5 sm:mb-2">
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <span className="text-[9px] sm:text-[11px] font-bold text-emerald-600">Clean Data</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. PROBLEM — Colorful, vivid cards           */}
      {/* ============================================ */}
      <section className="problem-section pb-24">
        <div className="container">
          <div className="problem-layout">
            <div className="problem-left animate-on-scroll animate-from-left">
              <span className="section-eyebrow">The Challenge</span>
              <h2 className="section-title-dark">
                Your Business Can't
                <br />
                <span className="gradient-text-orange">Scale on Broken Systems</span>
              </h2>
              <p className="section-desc-dark">
                Growth has a way of exposing whatever is weak underneath. A setup that runs fine with five people gets messy at twenty. Spreadsheets that felt manageable become a liability at scale. An AI prototype that impressed everyone in a demo turns into a risk once it is live, and a simple data setup buckles the first time it meets real demand.
              </p>
            </div>
            <div className="problem-right relative">
              <ScrollAnimatedChallenges />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. CORE CAPABILITIES — 3 Premium Visual Cards */}
      {/* ============================================ */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header-center animate-on-scroll animate-zoom-in">
            <span className="section-eyebrow-pill">Our Capabilities</span>
            <h2 className="section-title-xl">
              One Technical Partner. <span className="gradient-text-orange">Three Capabilities.</span>
            </h2>
            <p className="section-subtitle">
              Every company comes to AI from a different starting point. One team is shipping an AI product that needs securing. Others have data scattered across a dozen systems with no reliable pipeline. Plenty are still running operations out of spreadsheets. We start wherever the pressure is highest and build out from there.
            </p>
          </div>

          <div className="capabilities-grid">
            {/* Capability 1 — AI Security */}
            <div className="capability-card cap-card-security animate-on-scroll animate-from-left" data-delay="100">
              <div className="cap-card-gradient" />
              <div className="cap-card-inner">
                
                {/* Visual Header */}
                <div className="cap-card-illustration cap-ill-security">
                  <div className="mock-ui-box w-[75%] h-[80%] flex flex-col justify-between mock-float-slow">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">AI Security Monitor</span>
                      </div>
                      <span className="flex items-center gap-1 px-1.5 py-0.5 bg-green-50 text-[8px] font-bold text-green-600 rounded-full border border-green-100">
                        <span className="flashing-dot" />
                        Active
                      </span>
                    </div>
                    
                    <div className="space-y-1 my-1">
                      <div className="flex items-center justify-between text-[8px] text-slate-500 font-semibold">
                        <span>Threat Injection Guard</span>
                        <span className="font-bold text-green-600">Secure</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full w-[94%]" />
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center bg-slate-50 px-1.5 py-1 rounded border border-slate-100">
                      <span className="text-[8px] font-bold text-slate-500">System Vulnerabilities</span>
                      <span className="text-[9px] font-extrabold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">0 Risks</span>
                    </div>
                  </div>
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-[12px] right-[10px] mock-ui-box py-1 px-2 bg-red-500 border-none text-white rounded-lg shadow-lg text-[8px] font-bold flex items-center gap-1 mock-float-delay-1">
                    <span>🛡️</span>
                    <span>Injection Blocked</span>
                  </div>
                </div>

                <h3 className="capability-title">AI Security &<br />Implementation</h3>
                <p className="capability-tagline" style={{ color: '#ef4444' }}>Secure Your AI Before It Becomes a Risk</p>
                <p className="capability-desc">
                  AI systems open up a category of risk that traditional tools miss: prompt injection, model extraction, training-data poisoning, data leakage, and outputs nobody is monitoring. We help technical teams find those gaps, harden the architecture, and get the system ready for real-world deployment.
                </p>
                <div className="cap-features-grid flex flex-col gap-1.5 items-start text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">What we build:</span>
                  <span>🛡️ AI security audits</span>
                  <span>⚙️ Wazuh threat monitoring</span>
                  <span>🚀 DevSecOps for AI pipelines</span>
                  <span>🧠 RAG groundedness improvement</span>
                  <span>📋 Production-readiness reviews</span>
                </div>
                <div className="capability-footer">
                  <span className="capability-best-for">Best for: AI startups, ML engineers, technical founders, and DevOps teams putting AI into production.</span>
                  <a href="#/ai-security" className="capability-cta cap-cta-red">
                    <span>Explore AI Security</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Capability 2 — Data Engineering */}
            <div className="capability-card cap-card-data animate-on-scroll animate-from-bottom" data-delay="200">
              <div className="cap-card-gradient" />
              <div className="cap-card-inner">
                
                {/* Visual Header */}
                <div className="cap-card-illustration cap-ill-data">
                  <div className="mock-ui-box w-[75%] h-[80%] flex flex-col justify-between mock-float-delay-1">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">Pipeline Stream</span>
                      </div>
                      <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">Syncing</span>
                    </div>
                    
                    <div className="flex justify-around items-center my-1 h-[28px] relative">
                      <span className="text-[14px] z-10">💾</span>
                      <div className="flex-1 border-t border-dashed border-blue-300 relative h-0">
                        <div className="absolute -top-0.5 left-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" style={{ animationDuration: '2s' }} />
                      </div>
                      <span className="text-[14px] z-10">🧠</span>
                    </div>
                    
                    <div className="flex justify-between items-center bg-slate-50 px-1.5 py-1 rounded border border-slate-100">
                      <span className="text-[8px] font-bold text-slate-500">Pipeline Throughput</span>
                      <span className="text-[8px] font-extrabold text-slate-800 bg-white border border-slate-200 px-1.5 py-0.5 rounded">4.2 PB/s</span>
                    </div>
                  </div>
                  
                  {/* Floating Action Badge */}
                  <div className="absolute bottom-[10px] left-[15px] mock-ui-box py-1 px-2 bg-white border border-slate-200 rounded-lg shadow-md text-[8px] font-bold flex items-center gap-1 mock-float-delay-2">
                    <span className="text-blue-500">◆</span>
                    <span>Databricks Live</span>
                  </div>
                </div>

                <h3 className="capability-title">Data Engineering &<br />DevSecOps</h3>
                <p className="capability-tagline" style={{ color: '#0284c7' }}>Build the Data Foundation Your AI Depends On</p>
                <p className="capability-desc">
                  A model rarely fails on its own. It fails when the data feeding it is slow, messy, or stale. We build data infrastructure for teams that need clean pipelines, real-time visibility, and deployment workflows that hold up under load, with security built into the process instead of bolted on afterward.
                </p>
                <div className="cap-features-grid flex flex-col gap-1.5 items-start text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">What we build:</span>
                  <span>📊 Pipelines for AI & analytics</span>
                  <span>⚡ Real-time & streaming systems</span>
                  <span>☁️ Cloud & multi-cloud architecture</span>
                  <span>🔄 CI/CD & model ops deployment</span>
                  <span>🔒 DevSecOps security integration</span>
                </div>
                <div className="capability-footer">
                  <span className="capability-best-for">Best for: data teams, AI product teams, and growing companies scaling analytics and automation.</span>
                  <a href="#/services" className="capability-cta cap-cta-blue">
                    <span>Explore Data Engineering</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Capability 3 — ERP + AI */}
            <div className="capability-card cap-card-erp animate-on-scroll animate-from-right" data-delay="300">
              <div className="cap-card-gradient" />
              <div className="cap-card-inner">
                
                {/* Visual Header */}
                <div className="cap-card-illustration cap-ill-erp">
                  <div className="mock-ui-box w-[75%] h-[80%] flex flex-col justify-between mock-float-delay-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-wider">Odoo Inventory</span>
                      </div>
                      <span className="text-[8px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-100">Optimized</span>
                    </div>
                    
                    <div className="flex items-end justify-between px-3 h-[24px] my-1">
                      <div className="w-2 bg-slate-200 h-[40%] rounded-t" />
                      <div className="w-2 bg-slate-200 h-[65%] rounded-t" />
                      <div className="w-2 bg-amber-500 h-[90%] rounded-t relative">
                        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-brand-orange rounded-full" />
                      </div>
                      <div className="w-2 bg-slate-200 h-[50%] rounded-t" />
                      <div className="w-2 bg-slate-200 h-[75%] rounded-t" />
                    </div>
                    
                    <div className="flex justify-between items-center bg-slate-50 px-1.5 py-1 rounded border border-slate-100">
                      <span className="text-[8px] font-bold text-slate-500">Replenish Rule</span>
                      <span className="text-[8px] font-extrabold text-amber-600 bg-amber-50 border border-amber-200 px-1 py-0.5 rounded">Auto 🟢</span>
                    </div>
                  </div>
                  
                  {/* Floating Action Badge */}
                  <div className="absolute top-[8px] left-[10px] mock-ui-box p-1 bg-white border border-slate-200 rounded-lg shadow-md text-[8px] font-bold flex items-center gap-1 mock-float-slow">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=24&h=24&q=80" alt="" className="w-3.5 h-3.5 rounded-full" />
                    <span className="text-slate-700">Inventory AI</span>
                  </div>
                </div>

                <h3 className="capability-title">ERP + AI<br />Solutions</h3>
                <p className="capability-tagline" style={{ color: '#d97706' }}>Modern Operations Take More Than Software</p>
                <p className="capability-desc">
                  For most businesses, the first problem is not AI. It is operations. Spreadsheets, disconnected tools, manual reporting, and inventory counts that are always a little wrong make growth harder than it should be. We implement Odoo ERP and add custom AI on top, so the system starts predicting and automating rather than just recording.
                </p>
                <div className="cap-features-grid flex flex-col gap-1.5 items-start text-xs font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">What we build:</span>
                  <span>⚙️ Odoo setup & customization</span>
                  <span>📈 AI inventory & sales forecasting</span>
                  <span>🤖 Automated CRM & sales triggers</span>
                  <span>📊 Smart cross-department reports</span>
                  <span>👥 Team training & migration support</span>
                </div>
                <div className="capability-footer">
                  <span className="capability-best-for">Best for: SMBs, retail, distribution, and manufacturing teams modernizing operations.</span>
                  <a href="#/erp-ai" className="capability-cta cap-cta-amber">
                    <span>Explore ERP + AI</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 5. STATS BANNER - Vibrant Dark               */}
      {/* ============================================ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { 
                value: 85, 
                suffix: '+', 
                label: 'Clients Engaged', 
                color: '#f97316'
              },
              { 
                value: 98, 
                suffix: '%', 
                label: 'Client Satisfaction', 
                color: '#0284c7'
              },
              { 
                value: 4, 
                suffix: 'PB+', 
                label: 'Data Processed', 
                color: '#d97706'
              },
              { 
                value: 24, 
                suffix: '/7', 
                label: 'Support Available', 
                color: '#22c55e'
              },
            ].map((stat, idx) => (
              <div key={idx} className="stat-card animate-on-scroll" data-delay={`${idx * 100}`}>
                <span className="stat-value" style={{ color: stat.color }}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 6. PROCESS TIMELINE — Interactive steps      */}
      {/* ============================================ */}
      <section className="process-section">
        <div className="container">
          <div className="section-header-center animate-on-scroll">
            <span className="section-eyebrow-pill">Our Process</span>
            <h2 className="section-title-xl">
              How We <span className="gradient-text-orange">Deliver Results</span>
            </h2>
            <p className="section-subtitle">
              A structured five-stage methodology from diagnosis to continuous optimization.
            </p>
          </div>

          <div className="process-timeline">
            {steps.map((step, idx) => {
              return (
                <div
                  key={idx}
                  className="process-step animate-on-scroll"
                  data-delay={`${(idx + 1) * 100}`}
                  style={{
                    '--hover-shadow-color': `${step.color}20`,
                    '--hover-border-color': step.color,
                    borderColor: `${step.color}20`,
                    background: `linear-gradient(180deg, ${step.color}05, white)`,
                    boxShadow: `0 4px 20px rgba(15, 23, 42, 0.02)`
                  }}
                >
                  <div className="process-step-emoji-wrap" style={{ 
                    background: `${step.color}12`, 
                    borderColor: `${step.color}25`,
                    color: step.color 
                  }}>
                    <span className="process-step-icon flex items-center justify-center">{step.icon}</span>
                  </div>
                  <div className="process-step-bar">
                    <div className="process-step-bar-fill" style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}80)` }} />
                  </div>
                  <h4 className="process-step-title">{step.title}</h4>
                  <p className="process-step-desc">{step.desc}</p>
                  <span className="process-step-num" style={{ color: `${step.color}20` }}>{step.number}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 7. COMPARISON — Side by Side                 */}
      {/* ============================================ */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header-center animate-on-scroll">
            <span className="section-eyebrow-pill">Why Orzeh</span>
            <h2 className="section-title-xl">
              We Start With How Your <span className="gradient-text-orange">Business Actually Works</span>
            </h2>
            <p className="section-subtitle mt-4 max-w-3xl mx-auto">
              Most AI conversations open with tools. Ours opens with the business. Before we recommend a model, a pipeline, an ERP module, or an automation layer, we look at how your company runs day to day: where time leaks out, where data breaks down, where risk is quietly building, and where automation would actually pay off. The system gets designed around that reality, not around a template. The goal is infrastructure that ships and runs, not a deck that sits in a drive.
            </p>
          </div>

          <div className="comparison-grid">
            {/* The Hype Approach (Usually Done Style) */}
            <div className="comparison-card comparison-card-bad animate-on-scroll" data-delay="100">
              <div className="comparison-header">
                <h3 className="font-sora font-extrabold text-2xl text-slate-800">
                  The Hype <span className="font-black text-slate-900">Approach</span>
                </h3>
              </div>
              <ul className="comparison-list">
                {[
                  'Recommends tools before understanding your business',
                  "Generic templates that don't fit reality",
                  'Creates more data silos with disconnected tools',
                  'Strategy decks that never become infrastructure',
                  'Leaves you with fragile AI prototypes'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 border border-red-100 shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <span className="font-medium text-[15px] text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Orzeh Approach (How We Do It Style) */}
            <div className="comparison-card comparison-card-good animate-on-scroll" data-delay="200">
              <div className="comparison-header">
                <h3 className="font-sora font-extrabold text-2xl text-white">
                  The Orzeh <span className="text-brand-orange font-black">Approach</span>
                </h3>
              </div>
              <ul className="comparison-list">
                {[
                  'Diagnoses where time and data are breaking',
                  'Custom systems built around your reality',
                  'Centralized architectures and pipelines',
                  'Production-ready code and cloud assets',
                  'Ongoing monitoring and optimization'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/20 shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="font-medium text-[15px] text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. VALUE GRID — Rich dark section            */}
      {/* ============================================ */}
      <section className="value-section">
        <div className="container">
          <div className="value-layout">
            
            {/* Left: Title and description */}
            <div className="value-left animate-on-scroll">
              <span className="section-eyebrow">Impact</span>
              <h2 className="section-title-dark">
                AI Transformation Is About <span className="gradient-text-orange">Better Systems</span>
              </h2>
              <p className="section-desc-dark">
                Real transformation happens when systems become more secure, connected, and reliable. We embed these principles into every workflow.
              </p>
            </div>

            {/* Right: Stacked animated cards */}
            <div className="value-grid">
              {[
                { 
                  title: 'More Secure', 
                  desc: 'AI infrastructure audited and safeguarded against threats.', 
                },
                { 
                  title: 'More Connected', 
                  desc: 'Centralized data pipelines — no more manual downloads.', 
                },
                { 
                  title: 'More Automated', 
                  desc: 'System-triggered steps replace repetitive manual operations.', 
                },
                { 
                  title: 'More Visible', 
                  desc: 'Real-time telemetry and live reporting dashboards.', 
                },
                { 
                  title: 'More Intelligent', 
                  desc: 'Predictions grounded in secure, structured company data.', 
                },
                { 
                  title: 'More Reliable', 
                  desc: 'CI/CD pipelines and monitoring that reduce crash risk.', 
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="value-card animate-on-scroll" 
                  data-delay={`${idx * 80}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="value-check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="value-card-text">
                    <h4 className="value-card-title">{item.title}</h4>
                    <p className="value-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 9. AUDIENCE SECTION                          */}
      {/* ============================================ */}
      <section className="audience-section">
        <div className="container">
          <div className="audience-layout">
            <div className="audience-left animate-on-scroll">
              <span className="section-eyebrow">Who We Work With</span>
              <h2 className="section-title-dark">
                Technical Teams & <span className="gradient-text-orange">Growing Businesses</span>
              </h2>
              <p className="section-desc-dark">
                Orzeh is built for companies moving from scattered systems to something more structured:
              </p>
            </div>
            <div className="audience-right animate-on-scroll" data-delay="100">
              <div className="audience-grid">
                {[
                  'AI startups and founders putting AI products into production',
                  'DevOps and data teams responsible for AI deployment and infrastructure',
                  'SMBs replacing spreadsheets and manual processes',
                  'Manufacturing and distribution companies modernizing operations',
                  'Leadership teams that want practical results rather than vague advice',
                ].map((text, idx) => (
                  <div key={idx} className="audience-tag">
                    <div className="audience-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 10. FINAL CTA — Dark dramatic                */}
      {/* ============================================ */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-gradient-card animate-on-scroll">
            {/* Lightning bolt watermark */}
            <svg className="cta-bolt-watermark" width="140" height="200" viewBox="0 0 24 24" fill="white">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            
             <h2 className="final-cta-title">
              Build the Infrastructure<br />
              Your Business Will Depend On
            </h2>
            <p className="final-cta-subtitle">
              Secure the AI you are building, scale the data behind it, and modernize the operations that keep everything running. We will help you decide what comes first.
            </p>
            <div className="final-cta-actions">
              <a href="#/book-consultation?scrollTo=form" className="btn-cta-dark">
                <span>Book a Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a href="#/services" className="btn-cta-ghost-light">
                <span>Explore Our Services</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Homepage
