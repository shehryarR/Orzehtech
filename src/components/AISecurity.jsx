import React, { useEffect } from 'react'
import { MdRocketLaunch, MdPsychology, MdArchitecture, MdSecurity, MdCloudDone, MdAccountTree } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function AISecurity() {

  useEffect(() => {
    document.title = "AI Security & Implementation | Orzeh Technologies"
    window.scrollTo(0, 0)
  }, [])
  
  // Custom style variables for each of the 6 services to provide rich, unique coloring
  const serviceStyles = {
    audit: {
      accent: 'from-orange-500 to-amber-500',
      iconBg: 'bg-orange-500/10 text-orange-600 border-orange-500/15',
      hoverIconBg: 'group-hover:bg-orange-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-orange-500/30',
      hoverText: 'group-hover:text-orange-600',
      hoverCta: 'hover:bg-orange-500 hover:border-orange-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)]'
    },
    wazuh: {
      accent: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/15',
      hoverIconBg: 'group-hover:bg-emerald-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-emerald-500/30',
      hoverText: 'group-hover:text-emerald-600',
      hoverCta: 'hover:bg-emerald-500 hover:border-emerald-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]'
    },
    implementation: {
      accent: 'from-blue-500 to-indigo-500',
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-500/15',
      hoverIconBg: 'group-hover:bg-blue-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-blue-500/30',
      hoverText: 'group-hover:text-blue-600',
      hoverCta: 'hover:bg-blue-500 hover:border-blue-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)]'
    },
    support: {
      accent: 'from-violet-500 to-purple-500',
      iconBg: 'bg-violet-500/10 text-violet-600 border-violet-500/15',
      hoverIconBg: 'group-hover:bg-violet-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-violet-500/30',
      hoverText: 'group-hover:text-violet-600',
      hoverCta: 'hover:bg-violet-500 hover:border-violet-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.06)]'
    },
    reliability: {
      accent: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/15',
      hoverIconBg: 'group-hover:bg-amber-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-amber-500/30',
      hoverText: 'group-hover:text-amber-600',
      hoverCta: 'hover:bg-amber-500 hover:border-amber-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)]'
    },
    devsecops: {
      accent: 'from-cyan-500 to-teal-500',
      iconBg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/15',
      hoverIconBg: 'group-hover:bg-cyan-500 group-hover:text-white',
      hoverBorder: 'group-hover:border-cyan-500/30',
      hoverText: 'group-hover:text-cyan-600',
      hoverCta: 'hover:bg-cyan-500 hover:border-cyan-500 hover:text-white',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)]'
    }
  }

  // Custom high-end SVG icons for each of the 6 services
  const getServiceIcon = (key) => {
    switch (key) {
      case 'audit':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v5h5" />
          </svg>
        )
      case 'wazuh':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'implementation':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        )
      case 'support':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case 'reliability':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )
      case 'devsecops':
        return (
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5M9 11l3 3L22 4" />
          </svg>
        )
      default:
        return null
    }
  }

  const servicesData = {
    audit: {
      num: '01',
      title: 'AI Security Audit',
      desc: 'A focused assessment of your AI system architecture, model integrations, and RAG pipelines to identify security gaps, reliability risks, and production-readiness issues.',
      deliverables: [
        'Security assessment report',
        'Prioritized risk list',
        'AI vulnerability review',
        'Recommended code fixes',
        'Production readiness roadmap'
      ],
      bestFor: 'Teams with an AI system in development, testing, or early production.',
      cta: 'Start With an AI Security Audit'
    },
    wazuh: {
      num: '02',
      title: 'Wazuh Deployment & Security Monitoring',
      desc: 'We deploy and configure Wazuh to monitor your AI infrastructure logs, detect suspicious activity, and improve visibility across your systems.',
      deliverables: [
        'Wazuh installation and configuration',
        'Custom AI threat monitoring rules',
        'Security dashboards',
        'Alerting workflows',
        'Team training & documentation'
      ],
      bestFor: 'DevOps and technical teams that need practical AI infrastructure monitoring.',
      cta: 'Deploy AI Security Monitoring'
    },
    implementation: {
      num: '03',
      title: 'Complete AI Security Implementation',
      desc: 'End-to-end security support for companies preparing AI systems for real-world production use.',
      deliverables: [
        'AI security audit',
        'Threat detection setup',
        'Wazuh monitoring',
        'Incident response workflows',
        'Security documentation & support'
      ],
      bestFor: 'Startups and companies launching AI-powered products or internal AI systems.',
      cta: 'Make Your AI Production-Ready'
    },
    support: {
      num: '04',
      title: 'AI Implementation Support',
      desc: 'We help teams implement AI correctly from the beginning with secure architecture, better workflows, and practical engineering guidance.',
      deliverables: [
        'Architecture review',
        'Implementation guidance',
        'Security best practices',
        'Deployment support',
        'Technical documentation'
      ],
      bestFor: 'Teams starting their AI journey or building new AI-powered features.',
      cta: 'Build AI the Right Way'
    },
    reliability: {
      num: '05',
      title: 'AI Maturity & Reliability Improvement',
      desc: 'If your AI system works but is inconsistent, unreliable, or hallucinating too often, we help improve quality, groundedness, and trust.',
      deliverables: [
        'Model behavior review',
        'RAG implementation support',
        'Knowledge base structuring',
        'Groundedness improvement',
        'Confidence scoring workflows'
      ],
      bestFor: 'Companies with working AI systems that need better accuracy, reliability, and production quality.',
      cta: 'Improve AI Reliability'
    },
    devsecops: {
      num: '06',
      title: 'DevSecOps for AI Systems',
      desc: 'We integrate security into your AI development and deployment workflows so your team can build faster without creating hidden risk.',
      deliverables: [
        'Security testing in CI/CD',
        'AI threat modeling',
        'Secure development workflows',
        'Deployment security practices',
        'Monitoring and alerting recommendations'
      ],
      bestFor: 'Engineering teams building AI systems that need security embedded from day one.',
      cta: 'Add DevSecOps to Your AI Workflow'
    }
  }

  const targetAudiences = [
    {
      title: 'AI Startups',
      desc: 'Preparing for launch and needing to verify prompt boundaries, data flows, and secure APIs to build customer trust.',
      iconColor: '#7c3aed',
      iconBg: '#f5f3ff',
      icon: <MdRocketLaunch className="w-14 h-14" />
    },
    {
      title: 'ML Engineers',
      desc: 'Building and fine-tuning models, production RAG pipelines, or vector databases, needing metrics on hallucination and security.',
      iconColor: '#0284c7',
      iconBg: '#f0f9ff',
      icon: <MdPsychology className="w-14 h-14" />
    },
    {
      title: 'Technical Founders & CTOs',
      desc: 'Seeking complete risk visibility, architecture mapping, and an actionable roadmap to protect intellectual property and customer data.',
      iconColor: '#ea580c',
      iconBg: '#fff7ed',
      icon: <MdArchitecture className="w-14 h-14" />
    },
    {
      title: 'DevOps & DevSecOps Teams',
      desc: 'Adding AI workloads into continuous integration, setting up automated vulnerability scans, and configuring system log rules in Wazuh.',
      iconColor: '#16a34a',
      iconBg: '#f0fdf4',
      icon: <MdSecurity className="w-14 h-14" />
    },
    {
      title: 'SaaS Companies',
      desc: 'Integrating complex LLM features into existing software interfaces without introducing OWASP Top 10 vulnerabilities for LLMs.',
      iconColor: '#d946ef',
      iconBg: '#fdf4ff',
      icon: <MdCloudDone className="w-14 h-14" />
    },
    {
      title: 'Enterprise Workflows',
      desc: 'Deploying agents and secure pipelines to automate internal operations, requiring structured data privacy and reliable grounding.',
      iconColor: '#0f172a',
      iconBg: '#f8fafc',
      icon: <MdAccountTree className="w-14 h-14" />
    }
  ]

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      
      {/* SECTION 1. HERO SECTION */}
      <section className="services-hero-section relative">
        {/* Subtle grid and background orbs */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="hero-orb hero-orb-1" style={{ top: '-10%', right: '5%' }}></div>
        <div className="hero-orb hero-orb-2" style={{ bottom: '10%', left: '5%' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <span 
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider rounded-full animate-on-scroll animate-zoom-in"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  AI Security Consulting
                </span>
                
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight font-sora animate-on-scroll animate-from-bottom"
                  style={{ transitionDelay: '100ms' }}
                >
                  Secure Your AI <br />
                  <span className="hero-gradient-text">
                    Before It Reaches Production
                  </span>
                </h1>
                
                <p 
                  className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium animate-on-scroll animate-from-bottom"
                  style={{ transitionDelay: '200ms' }}
                >
                  AI systems are powerful, but they introduce risks that traditional security was not designed to handle. Orzeh helps startups, technical teams, and growing companies identify AI security gaps, strengthen architecture, deploy monitoring, and prepare AI systems for real-world use.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 animate-on-scroll animate-from-bottom" style={{ transitionDelay: '300ms' }}>
                <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
                  <span>Book an AI Security Audit</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
                <a href="#/services" className="btn-ghost-hero">
                  <span>Explore Security Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              {/* Core Focus Trust Line */}
              <div className="pt-8 border-t border-slate-100 animate-on-scroll animate-from-left" style={{ transitionDelay: '300ms' }}>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em] block mb-3">
                  CORE CAPABILITIES
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] sm:text-[13.5px] font-bold font-sora text-slate-600">
                  <span className="hover:text-brand-orange transition-colors duration-300 cursor-default">AI Security Audits</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span className="hover:text-brand-orange transition-colors duration-300 cursor-default">Wazuh Deployment</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span className="hover:text-brand-orange transition-colors duration-300 cursor-default">DevSecOps for AI</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span className="hover:text-brand-orange transition-colors duration-300 cursor-default">RAG Reliability</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span className="hover:text-brand-orange transition-colors duration-300 cursor-default">Production Readiness</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup Column */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 animate-on-scroll animate-from-right" style={{ transitionDelay: '300ms' }}>
              <div className="security-dashboard-container">
                
                {/* Floating groundedness indicator */}
                <div className="floating-status-card">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">AI Groundedness</span>
                    <span className="text-[15px] font-black text-emerald-600 font-sora">+99.8%</span>
                  </div>
                  {/* Sparkline trend graphic */}
                  <svg className="w-14 h-8" viewBox="0 0 50 20" fill="none">
                    <path
                      className="sparkline-svg"
                      d="M2 15 L10 12 L18 16 L26 8 L34 10 L42 4 L48 2"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Dashboard Header */}
                <div className="security-console-header">
                  <div className="security-console-tabs">
                    <span className="security-console-tab active">Threat Center</span>
                    <span className="security-console-tab">Prompt Logs</span>
                  </div>
                  <div className="status-indicator-green">
                    <span className="flashing-dot-green" />
                    Secure
                  </div>
                </div>

                {/* Stat Row */}
                <div className="security-stat-grid">
                  <div className="security-stat-mini-card">
                    <span className="security-stat-label">Queries Audited</span>
                    <div className="security-stat-value-box">
                      <span className="security-stat-value">12,842</span>
                      <span className="security-stat-trend trend-green">↑ 12%</span>
                    </div>
                  </div>
                  <div className="security-stat-mini-card">
                    <span className="security-stat-label">Threats Blocked</span>
                    <div className="security-stat-value-box">
                      <span className="security-stat-value">184</span>
                      <span className="security-stat-trend trend-red">0 active</span>
                    </div>
                  </div>
                </div>

                {/* Monospace Simulated Live Log Console */}
                <div className="security-terminal-box">
                  <div className="security-terminal-lines">
                    <div className="terminal-line line-1 flex items-start gap-1.5">
                      <span className="terminal-prefix prefix-ok">[INFO]</span>
                      <span className="terminal-msg">Prompt filter initialized: OK</span>
                    </div>
                    <div className="terminal-line line-2 flex items-start gap-1.5">
                      <span className="terminal-prefix prefix-ok">[INFO]</span>
                      <span className="terminal-msg">Vector database connection: secure</span>
                    </div>
                    <div className="terminal-line line-3 flex items-start gap-1.5">
                      <span className="terminal-prefix prefix-warn">[WARN]</span>
                      <span className="terminal-msg">Suspicious RAG override attempt blocked</span>
                    </div>
                    <div className="terminal-line line-4 flex items-start gap-1.5">
                      <span className="terminal-prefix prefix-ok">[INFO]</span>
                      <span className="terminal-msg">VectorDB query: PII masked & logged</span>
                    </div>
                    <div className="terminal-line line-5 flex items-start gap-1.5">
                      <span className="terminal-prefix prefix-alert">[ALERT]</span>
                      <span className="terminal-msg">Active threat monitoring: 0 threats active</span>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 2. CORE POSITIONING — Unduit Style */}
      <section className="py-28 sm:py-36 bg-white relative overflow-hidden">
        {/* Subtle dot-grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Warm ambient glow behind diagram */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[420px] h-[420px] bg-brand-orange/[0.06] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* ── Left: Unduit-style headline ── */}
            <div className="text-left space-y-6 animate-on-scroll animate-from-left">
              <span className="text-[13px] text-slate-400 font-medium tracking-wide">
                By <span className="text-slate-600 font-bold">AI Security</span> Operations
              </span>
              
              <h2 className="text-[40px] sm:text-[52px] lg:text-[58px] font-black leading-[1.05] tracking-tight font-sora">
                Getting AI to Work <br />
                Is Only <span className="text-brand-orange">Half the Job</span>
              </h2>
              
              <p className="text-[16px] sm:text-[17px] text-slate-500 leading-relaxed max-w-[480px] font-medium">
                Companies are shipping AI fast. Models are being wired into customer data, chatbots are landing in products, internal copilots are in daily use, and AI workflows are starting to make real decisions inside operations. Most of it reaches production with thin visibility, little monitoring, and no plan for what happens when something goes wrong. That is where the risk sits: prompt injection, data leakage, model misuse, hallucinated outputs, exposed training data, and infrastructure nobody is watching. We help teams close the distance between an AI system that works and one that is secure, monitored, and genuinely ready for production.
              </p>
            </div>

            {/* ── Right: Circular AI Security Lifecycle Diagram ── */}
            <div className="relative flex items-center justify-center animate-on-scroll animate-from-right" style={{ transitionDelay: '200ms' }}>
              
              {/* Floating mini-card: top-left */}
              <div className="absolute -top-6 sm:-top-2 left-0 sm:left-4 lg:left-0 bg-white border border-slate-200/60 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)] z-20 flex items-center gap-2 sm:gap-3 lifecycle-float-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Audit</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-slate-700">Active</span>
                </div>
              </div>

              {/* Floating mini-card: bottom-right */}
              <div className="absolute -bottom-8 sm:-bottom-2 right-0 sm:right-4 lg:right-0 bg-white border border-slate-200/60 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)] z-20 flex items-center gap-2 sm:gap-3 lifecycle-float-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Status</span>
                  <span className="text-[11px] sm:text-[12px] font-bold text-emerald-600">Protected</span>
                </div>
              </div>

              {/* Main circular diagram */}
              <svg viewBox="0 0 540 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px]">
                
                {/* ── Concentric circles (outermost → innermost) ── */}
                {/* Ring 1 — outermost, faint decorative */}
                <circle cx="260" cy="230" r="200" stroke="#f1f5f9" strokeWidth="1" />
                
                {/* Ring 2 — main dashed orbit (nodes sit here) */}
                <circle cx="260" cy="230" r="165" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 4" className="lifecycle-rotate" style={{ transformOrigin: '260px 230px' }} />
                
                {/* Ring 3 — middle decorative, dashed */}
                <circle cx="260" cy="230" r="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 6" />
                
                {/* Ring 4 — inner decorative, solid */}
                <circle cx="260" cy="230" r="80" stroke="#f8fafc" strokeWidth="1" />

                {/* ── Decorative dots on the main orbit at 45° diagonals ── */}
                <circle cx="377" cy="113" r="3" fill="#f1f5f9" />
                <circle cx="377" cy="347" r="3" fill="#f1f5f9" />
                <circle cx="143" cy="347" r="3" fill="#f1f5f9" />
                <circle cx="143" cy="113" r="3" fill="#f1f5f9" />

                {/* ── Tiny accent dots on the outermost ring ── */}
                <circle cx="433" cy="130" r="2.5" fill="#e2e8f0" />
                <circle cx="433" cy="330" r="2.5" fill="#e2e8f0" />
                <circle cx="87" cy="330" r="2.5" fill="#e2e8f0" />
                <circle cx="87" cy="130" r="2.5" fill="#e2e8f0" />

                {/* ── Quarter-arc connectors between nodes (on r=165) ── */}
                <path d="M 260 65 A 165 165 0 0 1 425 230" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 5" fill="none" className="ill-flow-line" />
                <path d="M 425 230 A 165 165 0 0 1 260 395" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 5" fill="none" className="ill-flow-line" />
                <path d="M 260 395 A 165 165 0 0 1 95 230" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 5" fill="none" className="ill-flow-line" />
                <path d="M 95 230 A 165 165 0 0 1 260 65" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5 5" fill="none" className="ill-flow-line" />
                
                {/* ── Center Hub: "AI Security" ── */}
                <g>
                  <rect x="200" y="190" width="120" height="80" rx="18" fill="#f97316" />
                  <rect x="200" y="190" width="120" height="80" rx="18" fill="url(#centerGlow)" />
                  <text x="260" y="224" fill="#ffffff" fontSize="13" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">AI</text>
                  <text x="260" y="244" fill="#ffffff" fontSize="13" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">Security</text>
                </g>

                {/* ── Node 1: Security Audit — 12 o'clock (top) ── */}
                <g className="ill-flow-node" style={{ animationDelay: '0.2s' }}>
                  <circle cx="260" cy="65" r="14" fill="#f97316" />
                  <text x="260" y="69" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">1</text>
                  <rect x="278" y="39" width="110" height="52" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="333" y="61" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Security</text>
                  <text x="333" y="77" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Audit</text>
                </g>

                {/* ── Node 2: Threat Detection — 3 o'clock (right) ── */}
                <g className="ill-flow-node" style={{ animationDelay: '0.4s' }}>
                  <circle cx="425" cy="230" r="14" fill="#f97316" />
                  <text x="425" y="234" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">2</text>
                  <rect x="443" y="204" width="90" height="52" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="488" y="226" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Threat</text>
                  <text x="488" y="242" fill="#1e293b" fontSize="11" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Detection</text>
                </g>

                {/* ── Node 3: Monitoring & Response — 6 o'clock (bottom) ── */}
                <g className="ill-flow-node" style={{ animationDelay: '0.6s' }}>
                  <circle cx="260" cy="395" r="14" fill="#f97316" />
                  <text x="260" y="399" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">3</text>
                  <rect x="278" y="369" width="120" height="52" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="338" y="391" fill="#1e293b" fontSize="10" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Monitoring &</text>
                  <text x="338" y="407" fill="#1e293b" fontSize="10" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Response</text>
                </g>

                {/* ── Node 4: Continuous Improvement — 9 o'clock (left) ── */}
                <g className="ill-flow-node" style={{ animationDelay: '0.8s' }}>
                  <circle cx="95" cy="230" r="14" fill="#f97316" />
                  <text x="95" y="234" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="'Sora', sans-serif" textAnchor="middle">4</text>
                  <rect x="1" y="204" width="80" height="52" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                  <text x="41" y="226" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Continuous</text>
                  <text x="41" y="242" fill="#1e293b" fontSize="9" fontWeight="700" fontFamily="'Sora', sans-serif" textAnchor="middle">Improvement</text>
                </g>

                {/* Gradient definition */}
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3. PROBLEM SECTION */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Copy */}
            <div className="lg:col-span-6 text-left space-y-6 animate-on-scroll animate-from-left">
              <span className="eyebrow-label block">
                THE ATTACK SURFACE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora leading-tight">
                Traditional Security Was Not Built for <span className="hero-gradient-text">AI Systems</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Firewalls, access controls, and standard DevOps still matter, but they were not built for the way AI fails. AI adds new attack surfaces those tools never accounted for. Users can manipulate prompts to bypass safety logic, models can be coaxed into revealing sensitive data, APIs can be abused to extract the model itself, and training data can be poisoned or exposed.
              </p>
              <div className="bg-brand-orange border border-brand-orange/20 rounded-2xl p-6 space-y-3 font-medium text-[13.5px] text-white shadow-sm">
                <p className="text-white/90">
                  Worst of all, most teams have no way to tell when any of it is happening. The gap usually becomes obvious only after the system is already live.
                </p>
                <p className="text-white font-extrabold">
                  We help you find and close it first.
                </p>
              </div>
            </div>

            {/* Attack Surface Grid */}
            <div className="lg:col-span-6">
              {(() => {
                const items = [
                  { title: 'Manipulative Prompts', desc: 'Users can craft prompts that bypass system instructions.' },
                  { title: 'Information Exposure', desc: 'Models can unintentionally reveal sensitive database files.' },
                  { title: 'Unreliable Logic', desc: 'Outputs can become ungrounded and generate false metrics.' },
                  { title: 'API Exploitation', desc: 'LLM APIs can be recursively called, incurring massive costs.' },
                  { title: 'Data Poisoning', desc: 'Vector databases and training sets can be poisoned.' },
                  { title: 'Blind Operations', desc: 'Teams cannot see when a model is undergoing an active prompt attack.' }
                ];
                
                const renderCard = (item, idx) => (
                  <div key={idx} className="animate-on-scroll animate-zoom-in" data-delay={100 * (idx + 1)}>
                    <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-orange/20 transition-all duration-300 h-full flex flex-col justify-start text-left">
                      <h4 className="font-sora font-bold text-[14px] text-slate-900 tracking-tight transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[12.5px] text-slate-500 mt-2 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
                
                return (
                  <>
                    <div className="hidden sm:grid grid-cols-2 gap-4 text-left">
                      {items.map(renderCard)}
                    </div>
                    <div className="sm:hidden -mx-6 px-6">
                      <Swiper
                        modules={[Pagination]}
                        spaceBetween={12}
                        slidesPerView={1.2}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="pb-10 !pt-2 text-left"
                      >
                        {items.map((item, idx) => (
                          <SwiperSlide key={idx} className="h-auto">
                            {renderCard(item, idx)}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </>
                );
              })()}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4. WHO THIS IS FOR */}
      <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-on-scroll animate-zoom-in">
            <span className="eyebrow-label block">
              TARGET AUDIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight font-sora">
              Built for Teams Taking <span className="hero-gradient-text">AI Seriously</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              This service is designed for organizations that are building, deploying, or scaling AI systems and need a robust, enterprise-grade security posture.
            </p>
          </div>

          <div>
            {(() => {
              const renderCard = (audience, idx) => (
                <div
                  key={idx}
                  className="animate-on-scroll animate-from-bottom bg-white border border-slate-200/60 rounded-[28px] p-6 pb-6 text-center shadow-[0_4px_12px_-4px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-brand-orange/20 hover:-translate-y-1.5 transition-all duration-500 relative group overflow-hidden h-full flex flex-col justify-between"
                  style={{ transitionDelay: `${100 * (idx + 1)}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-100/80 group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-gold transition-all duration-500" />
                  
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[11px] font-bold text-slate-300 group-hover:text-brand-orange/45 tracking-wider mb-2 transition-colors duration-300">
                      0{idx + 1}
                    </span>

                    <h3 className="font-sora font-extrabold text-[18px] text-slate-900 tracking-tight group-hover:text-brand-orange transition-colors duration-300 mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors duration-300 mb-6 max-w-[280px]">
                      {audience.desc}
                    </p>
                  </div>

                  {/* Bottom Icon Container */}
                  <div 
                    className="w-full rounded-2xl p-5 flex items-center justify-center h-36 mt-auto transition-all duration-300 overflow-hidden relative"
                    style={{ backgroundColor: audience.iconBg }}
                  >
                    <div 
                      className="group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                      style={{ color: audience.iconColor }}
                    >
                      {audience.icon}
                    </div>
                  </div>
                </div>
              );

              return (
                <>
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {targetAudiences.map(renderCard)}
                  </div>
                  <div className="md:hidden -mx-6 px-6">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.2}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {targetAudiences.map((audience, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                          {renderCard(audience, idx)}
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

      {/* SECTION 5. WHAT WE SECURE */}
      <section className="py-24 bg-slate-50/40 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-on-scroll animate-zoom-in">
            <span className="eyebrow-label block">
              SYSTEM COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora leading-tight">
              Security for the <span className="hero-gradient-text">Full AI System</span>, Not Just the Model
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              AI security is not only about the model weights. It includes the data pipelines, cloud infrastructure, prompts, APIs, users, logs, monitoring, and deployment workflows around it.
            </p>
          </div>

          <div>
            {(() => {
              const scopes = [
                {
                  title: 'AI Application Architecture',
                  desc: 'Checking system logic, orchestrator patterns, and key integrations.'
                },
                {
                  title: 'LLM and Model Usage',
                  desc: 'Evaluating safe parameters, temperature boundaries, and response structures.'
                },
                {
                  title: 'Prompt Handling & Input Risks',
                  desc: 'Mitigating malicious prompt templates and system instruction overrides.'
                },
                {
                  title: 'Data Access & Leakage Points',
                  desc: 'Restricting vector database chunks and securing PII logs.'
                },
                {
                  title: 'API Abuse Patterns',
                  desc: 'Establishing rate limiting, key monitoring, and cost gateways.'
                },
                {
                  title: 'Logging & Monitoring Gaps',
                  desc: 'Auditing security logs and routing key triggers to dashboards.'
                },
                {
                  title: 'Deployment & CI/CD Workflows',
                  desc: 'Ensuring security pipelines scan configurations before they push to cloud.'
                },
                {
                  title: 'Hallucination & Reliability',
                  desc: 'Measuring RAG source relevance, grounding, and output confidence.'
                },
                {
                  title: 'Incident Response Readiness',
                  desc: 'Documenting clear protocols if a model begins behaving unexpectedly.'
                }
              ];

              const renderIllustration = (idx) => {
                switch (idx) {
                  case 0:
                    return (
                      <div className="coverage-card-illustration">
                        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                          <path d="M54 55 H88" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="ill-flow-line" />
                          <path d="M132 55 H166" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="ill-flow-line" />
                          
                          <rect x="10" y="33" width="44" height="44" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="ill-flow-node" />
                          <text x="32" y="59" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">UI</text>
                          
                          <rect x="88" y="29" width="44" height="52" rx="12" fill="#ffffff" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="2" className="ill-flow-node-delay" />
                          <circle cx="110" cy="55" r="10" fill="rgba(249, 115, 22, 0.1)" />
                          <path d="M106 55h8M110 51v8" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                          
                          <rect x="166" y="33" width="44" height="44" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="ill-flow-node" />
                          <text x="188" y="59" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">LLM</text>
                        </svg>
                      </div>
                    );
                  case 1:
                    return (
                      <div className="coverage-card-illustration">
                        <div className="w-[180px] bg-white border border-slate-100 rounded-xl p-3 shadow-2xs mt-4 flex flex-col gap-2.5">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                              <span>Temperature</span>
                              <span className="text-brand-orange">0.70</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full relative">
                              <div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-brand-orange to-brand-gold rounded-full" />
                              <div className="absolute top-1/2 -translate-y-1/2 left-[70%] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-brand-orange shadow-sm ill-slider-thumb" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">Structured Output</span>
                            <div className="w-8 h-4.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full p-0.5 flex items-center justify-start cursor-pointer relative">
                              <div className="w-3.5 h-3.5 rounded-full bg-brand-orange shadow-2xs ill-toggle-switch" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case 2:
                    return (
                      <div className="coverage-card-illustration">
                        <div className="w-[190px] h-[95px] bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-md mt-4 font-mono text-[9px] relative overflow-hidden flex flex-col justify-between">
                          <div className="ill-scan-line" />
                          <div className="space-y-1.5 text-left text-slate-400">
                            <div className="flex items-center gap-1.5">
                              <span className="text-brand-orange font-bold">&gt;</span>
                              <span className="text-slate-200 truncate max-w-[140px]">"Ignore previous rules..."</span>
                            </div>
                            <div className="text-[8px] text-slate-500">// Scanning input...</div>
                          </div>
                          <div className="flex items-center justify-between border-t border-slate-800/80 pt-2">
                            <span className="text-red-400 font-bold uppercase tracking-wider text-[8px] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                              INJECTION
                            </span>
                            <span className="bg-red-950/40 border border-red-800/50 text-red-400 px-1.5 py-0.5 rounded text-[8px] font-bold">BLOCKED</span>
                          </div>
                        </div>
                      </div>
                    );
                  case 3:
                    return (
                      <div className="coverage-card-illustration">
                        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                          <g transform="translate(45, 15)">
                            <rect x="0" y="25" width="55" height="35" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="ill-db-cyl" />
                            <ellipse cx="27.5" cy="25" rx="27.5" ry="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                            <line x1="0" y1="42" x2="55" y2="42" stroke="#f1f5f9" strokeWidth="1.5" />
                          </g>
                          <g transform="translate(115, 20)">
                            <rect x="0" y="25" width="55" height="35" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" className="ill-db-cyl" />
                            <ellipse cx="27.5" cy="25" rx="27.5" ry="7" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                            <line x1="0" y1="42" x2="55" y2="42" stroke="#f1f5f9" strokeWidth="1.5" />
                          </g>
                          <g transform="translate(90, 32)" className="ill-db-shield">
                            <rect x="0" y="0" width="36" height="38" rx="8" fill="rgba(249, 115, 22, 0.9)" />
                            <circle cx="18" cy="15" r="4" fill="#ffffff" />
                            <path d="M18 19v9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                          </g>
                        </svg>
                      </div>
                    );
                  case 4:
                    return (
                      <div className="coverage-card-illustration">
                        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                          <line x1="20" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="20" y1="50" x2="200" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                          <line x1="20" y1="80" x2="200" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                          
                          <line x1="20" y1="35" x2="200" y2="35" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
                          <text x="25" y="30" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">LIMIT: 100 REQ/S</text>

                          <path d="M20 75 Q 50 65, 75 72 T 120 40 T 145 28 T 170 82 T 200 70" fill="none" stroke="url(#apiGrad)" strokeWidth="3" className="ill-chart-line" />
                          
                          <g transform="translate(145, 28)">
                            <circle cx="0" cy="0" r="5" fill="#ef4444" className="ill-chart-dot" />
                            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
                          </g>
                          <defs>
                            <linearGradient id="apiGrad" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#f97316" />
                              <stop offset="60%" stopColor="#f97316" />
                              <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    );
                  case 5:
                    return (
                      <div className="coverage-card-illustration">
                        <div className="w-[180px] bg-white border border-slate-100 rounded-xl p-3 shadow-2xs mt-4 flex flex-col gap-2">
                          <div className="flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                            <span>Query logs</span>
                            <span className="text-emerald-500">Live</span>
                          </div>
                          
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-[8px] font-semibold text-slate-600">
                              <span>Tokens / day</span>
                              <span className="font-mono">4.2M</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-orange rounded-full ill-dashboard-bar" style={{ width: '75%' }} />
                            </div>
                          </div>

                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between text-[8px] font-semibold text-slate-600">
                              <span>Anomaly Rate</span>
                              <span className="font-mono">0.02%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full ill-dashboard-bar" style={{ width: '30%', animationDelay: '0.5s' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case 6:
                    return (
                      <div className="coverage-card-illustration">
                        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                          <path d="M20 55 H80 Q100 55, 110 35 T140 15 H200" stroke="#cbd5e1" strokeWidth="2" />
                          <path d="M80 55 H200" stroke="#cbd5e1" strokeWidth="2" />
                          
                          <circle cx="50" cy="55" r="8" fill="#ffffff" stroke="#10b981" strokeWidth="2" />
                          <path d="M47 55l2 2 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="50" y="75" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Build</text>

                          <circle cx="110" cy="55" r="8" fill="#ffffff" stroke="#f97316" strokeWidth="2" />
                          <circle cx="110" cy="55" r="4" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" className="ill-pipeline-running" />
                          <text x="110" y="75" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Scan</text>

                          <circle cx="170" cy="55" r="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                          <text x="170" y="75" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Deploy</text>
                        </svg>
                      </div>
                    );
                  case 7:
                    return (
                      <div className="coverage-card-illustration">
                        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                          <path d="M70 70 A 32 32 0 0 1 150 70" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
                          <path d="M70 70 A 32 32 0 0 1 146 62" stroke="url(#gaugeGrad)" strokeWidth="6" strokeLinecap="round" />
                          
                          <circle cx="110" cy="70" r="5" fill="#475569" />
                          <line x1="110" y1="70" x2="135" y2="52" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" className="ill-dial-needle" />
                          
                          <text x="110" y="90" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">99.2%</text>
                          <text x="110" y="101" fill="#94a3b8" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">GROUNDEDNESS</text>
                          <defs>
                            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#f97316" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    );
                  case 8:
                    return (
                      <div className="coverage-card-illustration">
                        <div className="w-[180px] bg-white border border-red-100 rounded-xl p-2.5 shadow-2xs mt-4 flex items-start gap-2.5 ill-alert-card text-left">
                          <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-bold text-red-600 uppercase tracking-wider">Alert: Drift</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            </div>
                            <p className="text-[8px] text-slate-500 font-semibold leading-normal mt-0.5">
                              Accuracy dropped below threshold. Rolling back.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              };

              const renderCard = (scope, idx) => (
                <div
                  key={idx}
                  className="animate-on-scroll animate-from-bottom bg-white border border-slate-200/60 rounded-[32px] pt-9 px-8 pb-0 text-center shadow-sm hover:shadow-xl hover:border-brand-orange/25 hover:-translate-y-1.5 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between h-full"
                  style={{ transitionDelay: `${100 * (idx + 1)}ms` }}
                >
                  <div>
                    <h4 className="font-sora font-bold text-[18px] text-slate-900 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                      {scope.title}
                    </h4>
                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed mt-2.5 mb-6 max-w-[280px] mx-auto">
                      {scope.desc}
                    </p>
                  </div>
                  {renderIllustration(idx)}
                </div>
              );

              return (
                <>
                  <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {scopes.map(renderCard)}
                  </div>
                  <div className="sm:hidden -mx-6 px-6">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.2}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {scopes.map((scope, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                          {renderCard(scope, idx)}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              );
            })()}
          </div>

          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 text-center font-medium text-slate-700 text-sm max-w-2xl mx-auto shadow-3xs">
            Orzeh reviews the full system so security risks do not hide between tools.
          </div>

        </div>
      </section>

      {/* SECTION 6. SERVICES CATALOGUE GRID (ELEGANT REDESIGN WITH ACCENTED ICONS & DYNAMIC COLORING) */}
      <section id="services-section" className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3 animate-on-scroll">
            <span className="eyebrow-label block">
              SOLUTIONS & CATALOGUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora">
              Our Security & <span className="hero-gradient-text">Implementation Services</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              We provide six core engineering and auditing services to make your AI safe, reliable, and ready for production enterprise workloads.
            </p>
          </div>

          <div>
            {(() => {
              const renderCard = (key, idx) => {
                const service = servicesData[key]
                const styles = serviceStyles[key] || serviceStyles.audit
                return (
                  <div
                    key={key}
                    className={`animate-on-scroll animate-from-bottom bg-gradient-to-br from-white via-white to-slate-50/20 border border-slate-200/60 rounded-3xl p-7 flex flex-col justify-between text-left group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 h-full ${styles.glow}`}
                    style={{ transitionDelay: `${100 * (idx + 1)}ms` }}
                  >
                    {/* Expanding Top Border Accent Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-slate-100/60" />
                    <div className={`absolute top-0 left-0 w-0 group-hover:w-full h-[3px] bg-gradient-to-r ${styles.accent} transition-all duration-500`} />

                    <div>
                      {/* Header: Icon & Service Index */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${styles.iconBg} ${styles.hoverIconBg} group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(15,23,42,0.03)]`}>
                          {getServiceIcon(key)}
                        </div>
                      </div>
                      
                      <h3 className={`font-sora font-extrabold text-[19px] text-slate-900 tracking-tight transition-colors duration-300 ${styles.hoverText}`}>
                        {service.title}
                      </h3>
                      
                      <p className="text-[13px] text-slate-500 leading-relaxed font-medium mt-3">
                        {service.desc}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="border-t border-slate-100 pt-5 mt-6">
                        <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                          WHAT YOU GET // DELIVERABLES:
                        </span>
                        <ul className="space-y-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-[12.5px] text-slate-700 font-medium group/item hover:translate-x-0.5 transition-transform duration-200">
                              <span className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${styles.iconBg} ${styles.hoverIconBg}`}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best Suited For info */}
                      <div className="border-t border-slate-100 pt-4 mt-6">
                        <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                          BEST FOR:
                        </span>
                        <p className="text-[12px] text-slate-600 font-semibold mt-1.5 leading-relaxed">
                          {service.bestFor}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6 mt-8">
                      <a
                        href="#/book-consultation?scrollTo=form"
                        className={`flex items-center justify-center w-full h-[46px] bg-slate-50 text-slate-800 border border-slate-200 font-sora text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${styles.hoverCta}`}
                      >
                        {service.cta}
                      </a>
                    </div>
                  </div>
                );
              };

              return (
                <>
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.keys(servicesData).map((key, idx) => renderCard(key, idx))}
                  </div>
                  <div className="md:hidden -mx-6 px-6">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.15}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {Object.keys(servicesData).map((key, idx) => (
                        <SwiperSlide key={key} className="h-auto">
                          {renderCard(key, idx)}
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

      {/* SECTION 7. COMMON RISKS WE HELP REDUCE */}
      <section className="py-24 bg-slate-50/40 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-5 text-left space-y-5 animate-on-scroll animate-from-left">
              <span className="eyebrow-label block">
                RISK ASSESSMENT DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora leading-tight">
                AI Security Gaps Become <span className="hero-gradient-text">Expensive When Ignored</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Security incidents in production destroy customer trust, disrupt operations, and increase LLM token costs. We help teams proactively find, track, and patch gaps.
              </p>
              <div className="p-5 bg-white border border-slate-200 rounded-2xl text-[13px] font-bold text-slate-800 shadow-3xs">
                The goal is simple: make your AI system safer, more reliable, and easier to operate.
              </div>
            </div>

            {/* Right Checklist column */}
            <div className="lg:col-span-7 text-left pl-0 lg:pl-8 space-y-6">
              <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                RISKS WE MITIGATE & PREVENT:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {[
                  'Prompt injection attacks',
                  'Sensitive data leakage',
                  'Model extraction attempts',
                  'Unreliable AI outputs',
                  'Hallucinated responses',
                  'Weak access controls',
                  'Unmonitored AI APIs',
                  'Poor logging and visibility',
                  'Training data exposure',
                  'Lack of incident response',
                  'Security gaps in deployment pipelines'
                ].map((risk, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 py-3 border-b border-slate-100/70 group hover:border-brand-orange/30 transition-all duration-300 animate-on-scroll animate-from-bottom"
                    style={{ transitionDelay: `${idx * 40}ms` }}
                  >
                    <svg className="w-4.5 h-4.5 text-brand-orange shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[13.5px] text-slate-700 font-semibold tracking-tight group-hover:text-slate-950 transition-colors">
                      {risk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8. HOW WE WORK (VERTICAL TIMELINE MATCHING REFERENCE) */}
      <section className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3 animate-on-scroll">
            <span className="eyebrow-label block">
              THE ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora">
              From Risk Discovery to <span className="hero-gradient-text">Secure Deployment</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              We guide your team through a clear, structured technical process to establish trust and maintain safety metrics.
            </p>
          </div>

          {/* Vertical Timeline container */}
          <div className="relative max-w-3xl mx-auto">
            
            {/* Vertical Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />
            
            {/* Timeline Steps */}
            <div className="space-y-16">
              {[
                {
                  stepNum: '1',
                  title: '01. Review',
                  desc: 'We study your AI system, infrastructure, data flow, deployment process, and current security posture.'
                },
                {
                  stepNum: '2',
                  title: '02. Identify',
                  desc: 'We identify the risks most likely to affect your business, product, users, or operations.'
                },
                {
                  stepNum: '3',
                  title: '03. Prioritize',
                  desc: 'We separate urgent security issues from lower-priority improvements so your team knows exactly what to fix first.'
                },
                {
                  stepNum: '4',
                  title: '04. Implement',
                  desc: 'We help deploy monitoring, improve architecture, add security workflows, and reduce AI-specific vulnerabilities.'
                },
                {
                  stepNum: '5',
                  title: '05. Handover',
                  desc: 'We document the system, train your team, and leave you with security practices your team can maintain.'
                }
              ].map((step, idx) => {
                const isEven = idx % 2 === 1
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                    
                    {/* Circle Node */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-[0px] md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-sora font-extrabold text-[15px] border-4 border-orange-100 shadow-md relative z-10 hover:scale-105 transition-transform">
                        {step.stepNum}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:text-left md:ml-auto'}`}>
                      <div 
                        className={`bg-slate-50/50 hover:bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-3xs transition-all duration-500 text-left animate-on-scroll ${isEven ? 'animate-from-left' : 'animate-from-right'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <h4 className="font-sora font-black text-[16px] text-slate-900 tracking-tight">
                          {step.title}
                        </h4>
                        <p className="text-[13px] text-slate-500 mt-2 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9. WHY ORZEH */}
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left space-y-6 animate-on-scroll animate-from-left">
              <span className="eyebrow-label block">
                PRACTICAL APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight font-sora leading-[1.15]">
                Practical AI Security, Built for <span className="hero-gradient-text">Real Teams</span>
              </h2>
              <p className="text-slate-600 font-medium text-[15.5px] leading-relaxed max-w-md">
                AI security does not need to become a six-month consulting exercise. Most engineering teams need clear, immediate answers.
              </p>
              
              <div className="pt-4">
                <div className="relative bg-slate-50 border border-slate-200/60 rounded-2xl p-6 shadow-sm">
                  {/* Subtle left orange accent inside the box */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-orange rounded-l-2xl" />
                  <p className="text-[14.5px] text-slate-700 leading-relaxed font-medium">
                    Orzeh gives technical teams a practical path from uncertainty to action. <span className="text-slate-900 font-extrabold block mt-2">We do not just point at problems. We help you fix them.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Questions Column (Typography-led) */}
            <div className="lg:col-span-7 relative animate-on-scroll animate-from-right" style={{ transitionDelay: '200ms' }}>
              {/* Subtle ambient background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-slate-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />
              
              <div className="flex flex-col gap-8 sm:gap-10 pl-0 lg:pl-12">
                {[
                  'What is risky?',
                  'What needs to be fixed first?',
                  'What can we monitor now?',
                  'How do we make this safe without slowing development?'
                ].map((question, idx) => (
                  <div key={idx} className="flex items-start gap-5 sm:gap-6 group">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-brand-orange/40 transition-colors duration-500 mt-0.5 shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="font-sora font-semibold text-[22px] sm:text-[28px] text-slate-800 leading-tight tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                      {question}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10. WHAT YOUR TEAM GAINS (BUSINESS IMPACT) */}
      <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full animate-on-scroll animate-zoom-in">
          
          {/* Centered Business Impact Container with Warm Gradient Background */}
          <div className="business-impact-container">
            
            {/* Centered Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-sora">
                Business <span className="hero-gradient-text">Impact</span>
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                Boost your operations with Orzeh's secure AI infrastructure. Cut LLM redundancy, stay compliant, and strengthen your security posture.
              </p>
            </div>

            {/* 3-column Grid for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Clear Risk Visibility', desc: 'Identify system gaps from prompt handlers down to database rules.' },
                { title: 'Prioritized Roadmap', desc: 'Separate critical prompt fixes from lower-priority operational changes.' },
                { title: 'Stronger Monitoring & Alerting', desc: 'Deploy automated Wazuh system alerts straight to Slack or email channels.' },
                { title: 'Improved Launch Readiness', desc: 'Pass enterprise vendor reviews and deploy code to production faster.' },
                { title: 'RAG Groundedness Optimization', desc: 'Reduce model hallucinations and verify prompt-source relevance.' },
                { title: 'Maintainable Workflows', desc: 'Handoff clean, documented controls your engineering team can run.' },
                { title: 'Safer Foundation to Scale', desc: 'Protect user identity logs and stop prompt injections on day one.' }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-slate-100/70 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-brand-orange/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start text-left ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <h3 className="font-sora font-extrabold text-[15.5px] text-slate-900 tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11 & FINAL CTA */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 animate-on-scroll animate-zoom-in">
          <div className="bg-slate-50 border border-slate-200/60 rounded-[32px] p-10 sm:p-16 lg:p-20 shadow-[0_8px_40px_rgba(15,23,42,0.03)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-orange/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent pointer-events-none" />

            {/* Left Narrative */}
            <div className="lg:w-1/2 space-y-6 text-left relative z-10">
              <div className="inline-flex items-center gap-3">
                 <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                 </span>
                 <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                   PRODUCTION READINESS
                 </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight font-sora leading-[1.05]">
                Before You Ship AI, Know What Can Break.
              </h2>
              
              <p className="text-slate-600 text-[15.5px] leading-relaxed font-medium max-w-lg">
                If your AI is heading toward production, security cannot stay on the “later” list. A focused audit shows where the system is exposed, what needs fixing, and how to move forward with confidence.
              </p>
            </div>

            {/* Right Action Panels */}
            <div className="lg:w-1/2 flex flex-col gap-4 w-full max-w-md relative z-10">
              <a
                href="#/book-consultation?scrollTo=form"
                className="group flex items-center justify-between bg-slate-900 hover:bg-slate-800 text-white p-5 sm:p-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)] hover:-translate-y-1"
              >
                <div className="flex flex-col text-left pr-4">
                  <span className="font-sora font-bold text-[17px] group-hover:text-brand-orange transition-colors duration-300">
                    Book an AI Security Audit
                  </span>
                  <span className="text-[12.5px] text-slate-400 font-medium mt-1.5 leading-relaxed">
                    Technical review of your AI system: security gaps, monitoring needs, and production-readiness risks.
                  </span>
                </div>
                <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>

              <a
                href="#/services"
                className="group flex items-center justify-between bg-white border border-slate-200/80 hover:border-brand-orange/30 text-slate-800 p-5 sm:p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(249,115,22,0.06)]"
              >
                <div className="flex flex-col text-left pr-4">
                  <span className="font-sora font-bold text-[15px] text-slate-800 group-hover:text-brand-orange transition-colors duration-300">
                    Explore Full AI Security Services
                  </span>
                  <span className="text-[12.5px] text-slate-500 font-medium mt-1.5 leading-relaxed">
                    See how we can secure your entire AI pipeline.
                  </span>
                </div>
                <div className="w-9 h-9 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/5 group-hover:text-brand-orange transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default AISecurity
