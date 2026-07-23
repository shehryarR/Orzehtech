import React, { useState, useEffect } from 'react'
import { SiDatabricks, SiGooglecloud, SiOdoo, SiSnowflake } from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { VscAzure } from 'react-icons/vsc'
import CountUp from './CountUp.jsx'
import HeroRibbonAnimation from './HeroRibbonAnimation.jsx'

function Homepage() {
  const [toggleTab, setToggleTab] = useState('growing') // 'growing' or 'enterprise'

  useEffect(() => {
    document.title = "Secure AI, ERP & Automation, Built for ROI | Orzeh Technologies"
  }, [])

  const handleSmoothScroll = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Audience toggle card proof points
  const audienceProofData = {
    growing: {
      heading: "For Growing Businesses",
      tagline: "Get Enterprise Advantages without Enterprise Overhead",
      points: [
        {
          title: "No Specialist Hiring Required",
          desc: "Get access to AI engineers, Wazuh security auditors, and Odoo ERP developers under one single team without hiring four different full-time specialists.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="17" y1="8" x2="23" y2="14" />
              <line x1="23" y1="8" x2="17" y2="14" />
            </svg>
          )
        },
        {
          title: "Single Point of Accountability",
          desc: "We own the entire pipeline—from database security and cloud infrastructure to custom Odoo workflows and AI integrations. No vendor finger-pointing.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          )
        },
        {
          title: "Lean & ROI-Driven AI",
          desc: "We skip the expensive experiments. Every automation step and custom LLM prompt is engineered to show immediate, measurable operational cost savings.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          )
        }
      ]
    },
    enterprise: {
      heading: "For Enterprise Teams",
      tagline: "One Accountable Partner to Consolidate Your Stack",
      points: [
        {
          title: "Integrated Vendor Replacement",
          desc: "Replace separate security auditors, data consultants, Odoo custom development firms, and automation shops. We run it as one connected framework.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          )
        },
        {
          title: "Production DevSecOps & Wazuh Monitoring",
          desc: "Enterprise-grade threat monitoring and hardened server deployments that integrate with your corporate compliance guidelines from day one.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          )
        },
        {
          title: "PB-Scale Data Pipelines & Cloud Security",
          desc: "Databricks structures, real-time streaming data pipelines, and CI/CD operations that survive heavy multi-cloud (AWS/GCP/Azure) workloads.",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          )
        }
      ]
    }
  }

  return (
    <div className="homepage-redesign bg-white text-slate-800">
      
      {/* ============================================ */}
      {/* 1. HERO SECTION - Premium Dark Hero          */}
      {/* ============================================ */}
      <section className="hero-section relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-32" style={{ background: '#0a0f1d' }}>
        <HeroRibbonAnimation />

        {/* Subtle dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-1 opacity-70" />

        <div className="container relative z-10">
          <div className="max-w-[850px] mx-auto text-center flex flex-col items-center">
            
            {/* Eyebrow tag */}
            <div className="hero-eyebrow animate-on-scroll border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 rounded-full mb-8 inline-flex items-center gap-2">
              <span className="eyebrow-dot w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Secure AI-Enabling Digital Transformation
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 font-sora tracking-tight animate-on-scroll" data-delay="100">
              Turn AI, ERP, and Automation <br />
              <span className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-gold bg-clip-text text-transparent">
                Into Real ROI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[700px] mb-10 font-medium opacity-90 animate-on-scroll" data-delay="200">
              We build the secure, connected foundation your business runs on—ERP, clean data, and real security—then put AI and automation to work on top of it. One team, one system, and a return you can measure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-on-scroll" data-delay="300">
              <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-gold hover:to-brand-orange text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2">
                <span>Book a Digital Transformation Assessment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a href="#outcomes" onClick={(e) => handleSmoothScroll(e, 'outcomes')} className="px-6 py-4 border border-slate-700 hover:border-brand-orange bg-slate-900/60 hover:bg-slate-950 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300">
                See How It Works
              </a>
            </div>

            {/* Trust line */}
            <div className="hero-trust mt-12 animate-on-scroll" data-delay="400">
              <div className="hero-avatars flex -space-x-2">
                <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 1" />
                <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 2" />
                <img className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&h=80&q=80" alt="Client 3" />
              </div>
              <div className="hero-trust-text ml-3 text-left">
                <span className="block text-xs font-bold text-slate-300">Secure, Production-Grade Digital Architectures</span>
                <span className="text-[11px] text-slate-400">Trusted by SMEs and Enterprise operations alike</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. TRUST BANNER - Logo Marquee               */}
      {/* ============================================ */}
      <section className="logo-marquee-section py-8 bg-[#070b14] border-t border-b border-slate-900 overflow-hidden">
        <div className="marquee-label text-[10px] uppercase font-bold tracking-widest text-slate-500 text-center mb-6">
          Hardened Integrations Across Modern Cloud & ERP Technologies
        </div>
        <div className="marquee-track relative flex items-center">
          {/* Faders removed based on user request */}

          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[
              { name: 'Odoo', color: '#a259ff', icon: <SiOdoo size={24} /> },
              { name: 'Databricks', color: '#ff3621', icon: <SiDatabricks size={22} /> },
              { name: 'GCP', color: '#4285F4', icon: <SiGooglecloud size={22} /> },
              { name: 'AWS', color: '#FF9900', icon: <FaAws size={30} /> },
              { name: 'Snowflake', color: '#29B5E8', icon: <SiSnowflake size={24} /> },
              { name: 'Azure', color: '#0078D4', icon: <VscAzure size={24} /> },
            ].concat([
              { name: 'Odoo', color: '#a259ff', icon: <SiOdoo size={24} /> },
              { name: 'Databricks', color: '#ff3621', icon: <SiDatabricks size={22} /> },
              { name: 'GCP', color: '#4285F4', icon: <SiGooglecloud size={22} /> },
              { name: 'AWS', color: '#FF9900', icon: <FaAws size={30} /> },
              { name: 'Snowflake', color: '#29B5E8', icon: <SiSnowflake size={24} /> },
              { name: 'Azure', color: '#0078D4', icon: <VscAzure size={24} /> },
            ]).map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 hover:opacity-100 transition-opacity" style={{ color: logo.color }}>
                <span>{logo.icon}</span>
                <span className="font-sora text-sm font-semibold tracking-wider uppercase text-slate-400 hover:text-white">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. WHY US SECTION - Fragmented vs Integrated */}
      {/* ============================================ */}
      <section className="why-us-section py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container relative z-10">
          
          <div className="section-header-center max-w-[800px] mx-auto text-center mb-16 animate-on-scroll">
            <span className="section-eyebrow-pill">Why Orzeh</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight">
              Why You Get a Return, <br className="hidden sm:block" />
              <span className="gradient-text-orange">Not Just More Software</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16 relative">
            
            {/* Connector (Desktop only) */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center w-14 h-14 rounded-full bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-slate-400">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
               </svg>
            </div>

            {/* Fragmented Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-slate-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between animate-on-scroll animate-from-left hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500">
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center text-red-500 shadow-inner">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-sora tracking-tight">The Fragmented Approach</h3>
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  Most providers cover only one corner of the problem. A security firm will not build your ERP. An ERP consultant will not secure your infrastructure. An AI vendor rarely understands your operations, and an automation shop will not touch your data security. 
                </p>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  As a result, businesses end up stitching three or four separate vendors together, paying for the technical gaps, communication overhead, and overlapping license fees between them.
                </p>
              </div>
              <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100/50">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest block mb-4">Resulting Bottlenecks</span>
                <ul className="text-sm text-slate-600 space-y-3 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </span>
                    <span>Multiple billing loops and uncoordinated code bases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </span>
                    <span>Security risks growing silently inside data gaps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-red-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </span>
                    <span>AI experiments that fail to integrate with core ERP data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Integrated Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex flex-col justify-between relative overflow-hidden animate-on-scroll animate-from-right hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
              {/* Refined subtle backglow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-brand-orange/10 to-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-gold flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 font-sora tracking-tight">The Orzeh Integrated Approach</h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
                  Orzeh brings AI security, data engineering, Odoo ERP, and automation under one roof. The systems we build are secured, structured, and integrated from the start, laying a solid, unified base.
                </p>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                  That foundation is what lets AI actually work in your business rather than stall as an experiment. When one accountable team owns the whole picture, the pieces pull in the same direction, converting technical tasks into real operational returns.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 border border-slate-100 relative z-10">
                <span className="text-[11px] font-bold text-brand-orange uppercase tracking-widest block mb-4">Our Key Advantages</span>
                <ul className="text-sm text-slate-700 space-y-3 font-semibold">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-orange">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span>One single, accountable team managing the full solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-orange">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span>Seamless connectivity between databases, processes, and AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-orange">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span>Concrete ROI measured directly in your business numbers</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Core Proof Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                title: "One Accountable Team",
                desc: "Your money goes directly to results instead of managing four vendors and negotiating the operational gaps between them.",
                color: "border-t-orange-500"
              },
              {
                title: "Security Built In",
                desc: "Hardened infrastructure built in from day one, ensuring your company's growth does not quietly turn into security exposure.",
                color: "border-t-blue-500"
              },
              {
                title: "Measured in Your Numbers",
                desc: "AI and automation tied directly to ROI and day-to-day team efficiency, rather than run as unmonitored software experiments.",
                color: "border-t-amber-500"
              },
              {
                title: "Integrated For All Sizes",
                desc: "The exact same integrated, high-fidelity engineering approach whether you are a growing SME or an enterprise.",
                color: "border-t-emerald-500"
              }
            ].map((point, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border-t-4 ${point.color} border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll`} data-delay={index * 100}>
                <h4 className="font-sora font-extrabold text-slate-800 text-[15px] mb-3">{point.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{point.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* 4. OUTCOMES SECTION - What You Actually Get */}
      {/* ============================================ */}
      <section id="outcomes" className="outcomes-section py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
        {/* Glow indicators */}
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container relative z-10">
          
          <div className="section-header-center max-w-[800px] mx-auto text-center mb-16 animate-on-scroll">
            <span className="section-eyebrow-pill">What You Actually Get</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight mb-4">
              Strip Away the Technology, <br />
              <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">
                Here Is What Changes
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-[550px] mx-auto">
              Behind the code and integrations lie real, measurable business improvements.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Outcome 1 */}
            <div className="bg-orange-50/70 rounded-3xl p-8 sm:p-10 border border-orange-100/50 hover:border-orange-200 hover:shadow-[0_8px_40px_rgba(249,115,22,0.08)] transition-all duration-500 group animate-on-scroll relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Graphic Background */}
              <div className="absolute -right-8 -bottom-8 opacity-40 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-orange-200">
                 <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M60 0 H180 A60 60 0 0 1 240 60 V180 A60 60 0 0 1 180 240 H60 A60 60 0 0 1 0 180 V60 A60 60 0 0 1 60 0 Z" fill="currentColor" />
                 </svg>
              </div>

              <div className="relative z-10 mb-8">
                <div className="inline-block bg-white text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm mb-8 border border-slate-100">
                  Workflow Optimization
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-sora mb-4 pr-8">More done with the team you have</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium max-w-[90%]">
                  Automation clears the repetitive work—invoicing, approvals, reporting, and manual data entry—so your people spend their time on customers instead of clicks, and the business scales without the headcount climbing to match.
                </p>
              </div>
              
              <div className="relative z-10 flex gap-4">
                <a href="#/ai-automation" className="text-[13px] font-bold text-slate-700 hover:text-brand-orange transition-colors flex items-center gap-1.5 border-b-2 border-orange-200 hover:border-brand-orange pb-1">
                  Automation <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#/digital-transformation" className="text-[13px] font-bold text-slate-700 hover:text-brand-orange transition-colors flex items-center gap-1.5 border-b-2 border-orange-200 hover:border-brand-orange pb-1">
                  ERP <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="bg-blue-50/70 rounded-3xl p-8 sm:p-10 border border-blue-100/50 hover:border-blue-200 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)] transition-all duration-500 group animate-on-scroll relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Graphic Background */}
              <div className="absolute -right-8 -bottom-8 opacity-40 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-blue-200">
                 <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="0" y="0" width="120" height="120" rx="30" fill="currentColor" opacity="0.8" />
                   <rect x="120" y="120" width="120" height="120" rx="30" fill="currentColor" opacity="0.6" />
                   <rect x="0" y="120" width="120" height="120" rx="30" fill="currentColor" opacity="0.3" />
                 </svg>
              </div>

              <div className="relative z-10 mb-8">
                <div className="inline-block bg-white text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm mb-8 border border-slate-100">
                  Customer Operations
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-sora mb-4 pr-8">Every customer captured</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium max-w-[90%]">
                  Voice AI answers your calls, books appointments, and follows up with leads around the clock, in a voice that sounds human. The customers you were losing to voicemail and slow follow-up stay customers.
                </p>
              </div>
              
              <div className="relative z-10 flex gap-4">
                <a href="#/ai-automation" className="text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5 border-b-2 border-blue-200 hover:border-blue-500 pb-1">
                  AI <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#/voice-ai" className="text-[13px] font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1.5 border-b-2 border-blue-200 hover:border-blue-500 pb-1">
                  Voice AI <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="bg-purple-50/70 rounded-3xl p-8 sm:p-10 border border-purple-100/50 hover:border-purple-200 hover:shadow-[0_8px_40px_rgba(168,85,247,0.08)] transition-all duration-500 group animate-on-scroll relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Graphic Background */}
              <div className="absolute -right-8 -top-8 opacity-40 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-purple-200">
                 <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="120" cy="120" r="120" fill="currentColor" opacity="0.5" />
                   <circle cx="180" cy="60" r="60" fill="currentColor" />
                 </svg>
              </div>

              <div className="relative z-10 mb-8">
                <div className="inline-block bg-white text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm mb-8 border border-slate-100">
                  Unified ERP Systems
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-sora mb-4 pr-8">One place to run and see everything</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium max-w-[90%]">
                  Odoo ERP unifies sales, inventory, finance, and HR, with custom AI built directly into the workflows, so leadership makes key operational decisions on live, accurate data instead of last month's spreadsheet.
                </p>
              </div>
              
              <div className="relative z-10 flex gap-4">
                <a href="#/digital-transformation" className="text-[13px] font-bold text-slate-700 hover:text-purple-600 transition-colors flex items-center gap-1.5 border-b-2 border-purple-200 hover:border-purple-500 pb-1">
                  ERP <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#/ai-automation" className="text-[13px] font-bold text-slate-700 hover:text-purple-600 transition-colors flex items-center gap-1.5 border-b-2 border-purple-200 hover:border-purple-500 pb-1">
                  AI <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            {/* Outcome 4 */}
            <div className="bg-emerald-50/70 rounded-3xl p-8 sm:p-10 border border-emerald-100/50 hover:border-emerald-200 hover:shadow-[0_8px_40px_rgba(16,185,129,0.08)] transition-all duration-500 group animate-on-scroll relative overflow-hidden flex flex-col justify-between">
              {/* Abstract Graphic Background */}
              <div className="absolute -right-12 -bottom-12 opacity-40 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-emerald-200">
                 <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M140 0 L280 140 L140 280 L0 140 Z" fill="currentColor" opacity="0.6"/>
                   <path d="M140 40 L240 140 L140 240 L40 140 Z" fill="currentColor" opacity="0.9"/>
                 </svg>
              </div>

              <div className="relative z-10 mb-8">
                <div className="inline-block bg-white text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm mb-8 border border-slate-100">
                  Secure Operations
                </div>
                <h3 className="text-2xl font-bold text-slate-800 font-sora mb-4 pr-8">AI you can trust, at a cost you control</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium max-w-[90%]">
                  The AI you deploy is secure, monitored, and governed, with human-in-the-loop control and its running cost kept in check. What you put into production stays an asset rather than a liability or a runaway API bill.
                </p>
              </div>
              
              <div className="relative z-10 flex gap-4">
                <a href="#/ai-security" className="text-[13px] font-bold text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1.5 border-b-2 border-emerald-200 hover:border-emerald-500 pb-1">
                  Security <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#/ai-cost-optimization" className="text-[13px] font-bold text-slate-700 hover:text-emerald-600 transition-colors flex items-center gap-1.5 border-b-2 border-emerald-200 hover:border-emerald-500 pb-1">
                  AI Cost Optimization <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* 5. ANY SIZE - Growing vs Enterprise Toggle   */}
      {/* ============================================ */}
      <section className="any-size-section py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
        <div className="container relative z-10">
          
          <div className="section-header-center max-w-[800px] mx-auto text-center mb-10 animate-on-scroll">
            <span className="section-eyebrow-pill">Any Size, Same Advantage</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight mb-4">
              Scale Your Advantage, <br />
              <span className="gradient-text-orange">Wherever You Are</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[650px] mx-auto">
              Growing businesses get enterprise-grade security and AI without hiring four specialists. Larger teams get one integrated partner instead of separate security, data, ERP, and automation vendors that do not line up. Same approach, scaled to where you are.
            </p>
          </div>

          {/* Modern Interactive Switcher */}
          <div className="flex justify-center mb-16 animate-on-scroll">
            <div className="bg-[#0b1120] p-1.5 rounded-[2rem] flex items-center border border-slate-800 shadow-xl relative overflow-hidden w-full max-w-[400px]">
              {/* Sliding Pill Background */}
              <div
                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-gradient-to-r from-brand-orange to-brand-gold transition-all duration-300 ease-out z-0"
                style={{
                  transform: toggleTab === 'growing' ? 'translateX(0)' : 'translateX(100%)',
                  left: '6px'
                }}
              />
              <button
                onClick={() => setToggleTab('growing')}
                className={`flex-1 py-3.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 relative z-10 ${
                  toggleTab === 'growing' ? 'text-white font-black' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Growing Business
              </button>
              <button
                onClick={() => setToggleTab('enterprise')}
                className={`flex-1 py-3.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-widest transition-all duration-300 relative z-10 ${
                  toggleTab === 'enterprise' ? 'text-white font-black' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Enterprise
              </button>
            </div>
          </div>

          {/* Dynamic Switcher Content */}
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
              {audienceProofData[toggleTab].points.map((point, index) => (
                <div
                  key={toggleTab + index}
                  className="bg-white rounded-[24px] p-8 border border-slate-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col justify-start"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <span className="text-6xl font-extrabold bg-gradient-to-b from-slate-200 to-slate-400 text-transparent bg-clip-text font-sora tracking-tighter">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-sora font-bold text-[18px] text-slate-800 mb-4 tracking-tight">{point.title}</h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{point.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Swapped Case/Proof highlight */}
            <div className="bg-[#0b1120] rounded-2xl p-8 border border-slate-800 shadow-md mt-10 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden animate-on-scroll">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl" />
              <div className="mb-6 md:mb-0 md:mr-8 relative z-10 max-w-[600px]">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full block w-fit mb-3">
                  {audienceProofData[toggleTab].heading} Accent
                </span>
                <h4 className="font-sora font-bold text-lg mb-2">{audienceProofData[toggleTab].tagline}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  We deploy production-grade code bases and secure infrastructure customized for your scope of work. Scale on demand without the standard friction of disjointed tools.
                </p>
              </div>
              <a href="#/book-consultation?scrollTo=form" className="shrink-0 px-6 py-3 bg-brand-orange hover:bg-brand-gold text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap z-10 shadow-lg">
                Request {toggleTab === 'growing' ? 'SME' : 'Enterprise'} Blueprint
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* 6. PROOF / TRUST LINE - Ship Production       */}
      {/* ============================================ */}
      <section className="proof-section py-20 lg:py-28 bg-white border-t border-b border-slate-100 relative overflow-hidden">
        <div className="container relative z-10">
          
          <div className="section-header-center max-w-[800px] mx-auto text-center mb-16 animate-on-scroll">
            <span className="section-eyebrow-pill">Real Production Results</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight mb-4">
              Built by Engineers Who <br />
              <span className="gradient-text-orange">Ship Production Systems</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[550px] mx-auto">
              Not prototypes, and not slideware. Real systems, running in real businesses, delivering measurable outcomes.
            </p>
          </div>

          {/* Stats count grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto mb-16">
            {[
              { value: 5, suffix: '+ Years', label: 'Operating Production Systems', color: 'text-orange-500' },
              { value: 85, suffix: '+ Clients', label: 'Served Across SME & Enterprise Operations', color: 'text-blue-500' },
              { value: 4, suffix: ' PB+', label: 'Secure Real-Time Data Pipelines', color: 'text-amber-500' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-center animate-on-scroll" data-delay={idx * 100}>
                <span className={`block font-sora font-extrabold text-3xl sm:text-4xl ${stat.color} mb-2`}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="block text-slate-600 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Before & After Transformation - Clean Spacious Cards */}
          <div className="max-w-[1100px] mx-auto mt-4 animate-on-scroll relative">
            
            {/* Header badges with curved orange arrow */}
            <div className="relative flex items-center justify-between max-w-[800px] mx-auto mb-8 px-4">
              {/* Before Badge */}
              <div className="flex items-center gap-2 bg-slate-100/90 border border-slate-200/80 px-5 py-2 rounded-full shadow-sm whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest text-slate-700 font-sora">Before</span>
              </div>

              <div className="hidden sm:flex items-center justify-center flex-1 px-4 sm:px-8">
                <svg width="220" height="50" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px]">
                  <defs>
                    <linearGradient id="cleanArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M 0 0 L 7 3 L 0 6 Z" fill="#f97316" />
                    </marker>
                  </defs>
                  <path d="M 12,36 Q 110,2 200,30" stroke="url(#cleanArrowGrad)" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="6 3" markerEnd="url(#arrowHead)" />
                </svg>
              </div>


              {/* After Badge */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-brand-orange to-brand-gold text-white px-5 py-2 rounded-full shadow-md shadow-brand-orange/20 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest font-sora">After (With Orzeh)</span>
              </div>
            </div>

            {/* 2-Column Spacious Cards (Left: Before, Right: After) */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Card: BEFORE */}
              <div className="bg-slate-50/70 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                <div className="flex items-center justify-between pb-4 mb-6">
                  <span className="text-xs font-extrabold text-red-500 uppercase tracking-widest flex items-center gap-2 font-sora">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Unoptimized Legacy State
                  </span>
                  <span className="text-[10px] font-extrabold bg-red-100/70 text-red-700 px-3 py-1 rounded-full border border-red-200/60 uppercase tracking-wider">Before</span>
                </div>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-800 mb-1">Stitched Spreadsheets & Delays</h4>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-medium">
                        Manual operations requiring 24-hour delays for invoicing, reporting, and database synchronization. Teams wasting hours copying clicks.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-800 mb-1">Fragile Prototypes & Data Leak Risks</h4>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-medium">
                        LLM prompts and custom scripts exposed to training data poisoning, raw threat injections, and lack of internal access audit governance.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✕</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-800 mb-1">Experimental AI API Bills Scaling Unchecked</h4>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-medium">
                        Production LLM calls scaling expenses linearly without proper prompt routing, response caching, or model efficiency profiling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card: AFTER */}
              <div className="bg-orange-50/30 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300">
                <div className="flex items-center justify-between pb-4 mb-6">
                  <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest flex items-center gap-2 font-sora">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" /> Hardened Infrastructure
                  </span>
                  <span className="text-[10px] font-extrabold bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full border border-orange-300/50 uppercase tracking-wider">Orzeh Optimized</span>
                </div>

                <div className="space-y-6">
                  {/* Point 1 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-brand-orange text-white flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✓</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-900 mb-1">Integrated Odoo ERP & Real-Time Triggers</h4>
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium">
                        Instant cross-department reporting, real-time asset tracking, and system-triggered actions replacing human entry clicks entirely.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-brand-orange text-white flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✓</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-900 mb-1">Secure LLM Gateways & Wazuh Audits</h4>
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium">
                        Fully audited AI models protected by custom validation filters, secure pipelines, and real-time Wazuh compliance monitoring.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-xs">
                    <span className="w-4 h-4 rounded bg-brand-orange text-white flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">✓</span>
                    <div>
                      <h4 className="text-[15px] font-bold font-sora text-slate-900 mb-1">Up to 40% Optimized LLM Runs</h4>
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-medium">
                        Langfuse utilization telemetry, smart caching endpoints, and precision model routing delivering extreme output matching at lower costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* 7. HOW WE START - Transformation Assessment  */}
      {/* ============================================ */}
      <section className="how-we-start-section py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-[900px] mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-lg p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden animate-on-scroll">
            
            {/* Background aura */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <span className="section-eyebrow-pill">Get Started</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora leading-tight mb-6 mt-4">
              Start With a Digital <br className="hidden sm:block" />
              <span className="gradient-text-orange">Transformation Assessment</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[650px] mx-auto mb-10 font-medium">
              The first step is an assessment. We look at your systems, your security, and your operations, then map where AI, ERP, and automation would deliver the most ROI, and in what order. You come away with a clear plan and a sense of the return, whether or not you build it with us.
            </p>

            <div className="flex flex-col items-center gap-3">
              <a href="#/book-consultation?scrollTo=form" className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-gold hover:to-brand-orange text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                <span>Book a Digital Transformation Assessment</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <span className="text-xs font-semibold text-slate-400 italic">
                A focused review of your systems and where transformation pays off first.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 8. FINAL CTA - One Team, One Return         */}
      {/* ============================================ */}
      <section 
        className="final-cta-section py-24 lg:py-32 relative overflow-hidden text-white"
        style={{ background: '#0a0f1d' }}
      >
        {/* Background Image with High Visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')` }}
        />
        
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/75 via-[#0a0f1d]/60 to-[#0a0f1d]/85 pointer-events-none" />

        {/* Glowing Orange Backdrop Aura */}
        <div className="absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container relative z-10 text-center max-w-[850px] mx-auto px-4">
          
          {/* Authentic Team Badge (Replaced generic lightning bolt icon) */}
          <div className="flex justify-center mb-8 animate-on-scroll">
            <div className="inline-flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-brand-orange/40 px-5 py-2.5 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.2)]">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="Team Member 1" />
                <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="Team Member 2" />
                <img className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&h=80&q=80" alt="Team Member 3" />
              </div>
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sora">
                One Accountable Engineering Team
              </span>
            </div>
          </div>

          {/* Heading with Forced White + Gradient Text */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-sora leading-tight mb-6 tracking-tight animate-on-scroll">
            One Team, One Return <br />
            <span className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-gold bg-clip-text text-transparent">
              to Show for It
            </span>
          </h2>

          {/* Body Text with High Contrast Slate */}
          <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[700px] mx-auto mb-12 font-medium animate-on-scroll" data-delay="100">
            Secure it, enable the AI, run the ERP, and automate the rest—all handled by one team pointed at your numbers. Tell us where you want to get to, and we will map the way there and what it is worth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-on-scroll" data-delay="200">
            <a 
              href="#/book-consultation?scrollTo=form" 
              className="px-8 py-4.5 bg-gradient-to-r from-brand-orange to-brand-gold hover:from-brand-gold hover:to-brand-orange text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Book a Digital Transformation Assessment</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
            <a 
              href="#/services" 
              className="px-7 py-4.5 border border-slate-700/80 hover:border-brand-orange bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Services
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Homepage
