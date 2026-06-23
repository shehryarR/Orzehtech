import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function DataEngineering() {
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    document.title = "Data Engineering & DevSecOps | Orzeh Technologies";
    window.scrollTo(0, 0);
  }, []);

  const serviceStyles = {
    consulting: {
      accent: 'from-brand-orange to-indigo-500',
      iconBg: 'bg-brand-orange/10 text-brand-orange border-brand-orange/15',
      hoverBorder: 'group-hover:border-brand-orange/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)]'
    },
    pipelines: {
      accent: 'from-brand-gold to-brand-orange',
      iconBg: 'bg-brand-gold/10 text-cyan-600 border-brand-gold/15',
      hoverBorder: 'group-hover:border-brand-gold/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)]'
    },
    realtime: {
      accent: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/15',
      hoverBorder: 'group-hover:border-emerald-500/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]'
    },
    devops: {
      accent: 'from-violet-500 to-purple-500',
      iconBg: 'bg-violet-500/10 text-violet-600 border-violet-500/15',
      hoverBorder: 'group-hover:border-violet-500/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(139,92,246,0.06)]'
    },
    devsecops: {
      accent: 'from-rose-500 to-orange-500',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-500/15',
      hoverBorder: 'group-hover:border-rose-500/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(244,63,94,0.06)]'
    },
    multicloud: {
      accent: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-500/15',
      hoverBorder: 'group-hover:border-amber-500/30',
      glow: 'group-hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)]'
    }
  }

  const servicesData = {
    consulting: {
      num: '01',
      title: 'Data Infrastructure Consulting',
      desc: 'A focused review of your current data setup: architecture, pipeline risks, and how ready it is for AI.',
      deliverables: [
        'Current-state assessment',
        'Architecture recommendations',
        'AI-readiness review',
        'Pipeline risk analysis',
        'Implementation roadmap & priorities'
      ],
      bestFor: 'Companies planning to scale their data systems or prepare infrastructure for AI workloads.',
      cta: 'Start With a Data Architecture Review'
    },
    pipelines: {
      num: '02',
      title: 'Data Pipeline Development',
      desc: 'We design and build reliable pipelines that move data from your source systems into the places your business can actually use it.',
      deliverables: [
        'Source-to-destination pipeline development',
        'Data transformation workflows',
        'Monitoring and alerting setup',
        'Error handling & auto-recovery',
        'Technical documentation & deployment'
      ],
      bestFor: 'Companies with scattered data sources, manual reporting, or pipelines they can\'t rely on.',
      cta: 'Build Reliable Data Pipelines'
    },
    realtime: {
      num: '03',
      title: 'Real-Time Data Infrastructure',
      desc: 'We build streaming and near-real-time systems for teams that need fast, dependable data movement for AI, analytics, or operational decisions.',
      deliverables: [
        'Real-time architecture design',
        'Streaming infrastructure setup',
        'Event-driven workflows',
        'Monitoring dashboards',
        'Performance optimization & scaling support'
      ],
      bestFor: 'Teams needing live data for AI workflows, customer-facing products, fraud detection, or operational monitoring.',
      cta: 'Build Real-Time Infrastructure'
    },
    devops: {
      num: '04',
      title: 'DevOps for AI Systems',
      desc: 'We build the deployment workflows that move AI systems from development into production with structure, monitoring, and reliability.',
      deliverables: [
        'CI/CD pipeline setup',
        'Model deployment automation',
        'Infrastructure monitoring',
        'Environment management',
        'Rollback workflows & ops documentation'
      ],
      bestFor: 'AI teams that need dependable deployment, monitoring, and operational infrastructure.',
      cta: 'Deploy AI Systems Properly'
    },
    devsecops: {
      num: '05',
      title: 'DevSecOps Integration',
      desc: 'We fold security into your development and deployment workflows, so data and AI systems are protected from the start rather than secured after the fact.',
      deliverables: [
        'Secure CI/CD workflows',
        'Access control recommendations',
        'Security monitoring integration',
        'Risk-reduction practices',
        'Infrastructure hardening & team training'
      ],
      bestFor: 'Companies that want secure data and AI workflows without slowing their engineers down.',
      cta: 'Add Security to Your Data Workflows'
    },
    multicloud: {
      num: '06',
      title: 'Multi-Cloud Data Architecture',
      desc: 'We design and implement cloud architecture for businesses working across multiple platforms, tools, or environments.',
      deliverables: [
        'Multi-cloud architecture design',
        'Data synchronization strategy',
        'Cloud cost optimization',
        'Security and access planning',
        'Deployment recommendations & scaling roadmap'
      ],
      bestFor: 'Enterprises and growing companies with complex cloud, data, or infrastructure requirements.',
      cta: 'Design a Multi-Cloud Data Strategy'
    }
  }

  const targetAudiences = [
    { title: 'Data & AI Teams', desc: 'DevOps and data teams responsible for AI deployment, infrastructure, and analytics pipelines.', img: '/images/devops.png' },
    { title: 'AI Startups', desc: 'Startups and founders putting AI products into production who need a robust, clean data stack.', img: '/images/ai_startup.jpg' },
    { title: 'Operations Heavy', desc: 'Operations-heavy businesses scaling their data and moving from batch to real-time workflows.', img: '/images/enterprise.png' }
  ]

  const workflowStages = [
    { num: '01', title: 'Assess', desc: 'We review your current data sources, pipelines, cloud setup, workflows, and business requirements.' },
    { num: '02', title: 'Architect', desc: 'We design the right infrastructure for your actual needs, whether that is batch, micro-batch, real-time, cloud, or multi-cloud.' },
    { num: '03', title: 'Build', desc: 'We implement the pipelines, deployment workflows, monitoring, and secure infrastructure.' },
    { num: '04', title: 'Validate', desc: 'We test performance, reliability, data quality, and operational readiness before anything goes live.' },
    { num: '05', title: 'Handover', desc: 'We document the build and train your team, so the infrastructure holds up long after we wrap.' }
  ]

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="services-hero-section relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="hero-orb" style={{ top: '-10%', right: '5%', background: 'radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 80%)' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider rounded-full animate-on-scroll animate-zoom-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  Data Engineering & DevSecOps
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight font-sora animate-on-scroll animate-from-bottom" style={{ transitionDelay: '100ms' }}>
                  Data Infrastructure <br />
                  <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">
                    Built for AI and Scale
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium animate-on-scroll animate-from-bottom" style={{ transitionDelay: '200ms' }}>
                  AI systems can't run on data that's messy, stale, or scattered. Orzeh designs and builds secure, scalable data infrastructure: reliable pipelines, real-time visibility, cloud-ready architecture, and DevSecOps workflows that hold up under production workloads.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 animate-on-scroll animate-from-bottom" style={{ transitionDelay: '300ms' }}>
                <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              <div className="pt-8 border-t border-slate-100 animate-on-scroll animate-from-left" style={{ transitionDelay: '300ms' }}>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em] block mb-3">CORE FOCUS</span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] sm:text-[13.5px] font-bold font-sora text-slate-600">
                  <span>Data Pipelines</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span>Real-Time Infrastructure</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span>DevSecOps</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span>CI/CD Automation</span>
                  <span className="text-brand-orange/40 select-none">•</span>
                  <span>Multi-Cloud Architecture</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Pipeline Dashboard Mockup */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 animate-on-scroll animate-from-right" style={{ transitionDelay: '300ms' }}>
              
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-brand-orange/5 via-brand-orange/10 to-transparent rounded-full blur-3xl -z-10" />

              {/* Floating pipeline status card */}
              <div className="floating-status-card">
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sync Quality</span>
                  <span className="text-[15px] font-black text-brand-orange font-sora">99.98%</span>
                </div>
                {/* Sparkline trend graphic */}
                <svg className="w-14 h-8" viewBox="0 0 50 20" fill="none">
                  <path
                    className="sparkline-svg"
                    d="M2 18 L10 10 L18 14 L26 4 L34 8 L42 2 L48 6"
                    stroke="#f97316"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Dashboard Container */}
              <div className="security-dashboard-container">
                
                {/* Dashboard Header */}
                <div className="security-console-header">
                  <div className="security-console-tabs">
                    <span className="security-console-tab active">Stream Monitor</span>
                    <span className="security-console-tab">Active Syncs</span>
                  </div>
                  <div className="status-indicator-blue">
                    <span className="flashing-dot-blue" />
                    Syncing
                  </div>
                </div>

                {/* Stat Row */}
                <div className="security-stat-grid">
                  <div className="security-stat-mini-card">
                    <span className="security-stat-label">Ingest Velocity</span>
                    <div className="security-stat-value-box">
                      <span className="security-stat-value text-slate-900">4.2 PB/s</span>
                      <span className="security-stat-trend trend-green">↑ 18%</span>
                    </div>
                  </div>
                  <div className="security-stat-mini-card">
                    <span className="security-stat-label">Active Pipes</span>
                    <div className="security-stat-value-box">
                      <span className="security-stat-value text-slate-900">42/42</span>
                      <span className="security-stat-trend trend-green">0 lag</span>
                    </div>
                  </div>
                </div>

                {/* Animated Pipeline Panel */}
                <div className="relative bg-slate-950 rounded-2xl h-56 border border-slate-900 overflow-hidden flex items-center justify-center">
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                  
                  {/* Animated Flows */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 220" fill="none">
                    {/* Background paths */}
                    <path d="M 20 60 C 90 60, 110 110, 160 110" stroke="rgba(2, 132, 199, 0.15)" strokeWidth="1.5" />
                    <path d="M 20 110 C 90 110, 110 110, 160 110" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1.5" />
                    <path d="M 20 160 C 90 160, 110 110, 160 110" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1.5" />
                    
                    <path d="M 160 110 C 210 110, 230 60, 300 60" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1.5" />
                    <path d="M 160 110 C 210 110, 230 160, 300 160" stroke="rgba(2, 132, 199, 0.15)" strokeWidth="1.5" />

                    {/* Animated dashes */}
                    <path d="M 20 60 C 90 60, 110 110, 160 110" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 80" strokeDashoffset="86" className="animate-dash" />
                    <path d="M 20 110 C 90 110, 110 110, 160 110" stroke="#f97316" strokeWidth="2" strokeDasharray="6 80" strokeDashoffset="86" className="animate-dash" style={{ animationDelay: '0.8s' }} />
                    <path d="M 20 160 C 90 160, 110 110, 160 110" stroke="#10b981" strokeWidth="2" strokeDasharray="6 80" strokeDashoffset="86" className="animate-dash" style={{ animationDelay: '1.6s' }} />

                    <path d="M 160 110 C 210 110, 230 60, 300 60" stroke="#f97316" strokeWidth="2" strokeDasharray="6 80" strokeDashoffset="86" className="animate-dash" style={{ animationDelay: '0.4s' }} />
                    <path d="M 160 110 C 210 110, 230 160, 300 160" stroke="#0284c7" strokeWidth="2" strokeDasharray="6 80" strokeDashoffset="86" className="animate-dash" style={{ animationDelay: '1.2s' }} />
                  </svg>

                  {/* Central Node Orb */}
                  <div className="relative w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(249,115,22,0.25)] flex items-center justify-center z-10 border border-slate-100">
                    <img 
                      src="/images/logo.png" 
                      alt="Orzeh Logo" 
                      className="w-9 h-auto object-contain"
                    />
                  </div>

                  {/* Floating node label cards inside the dark dashboard screen */}
                  <span className="absolute top-[15%] left-[6%] bg-slate-900/90 border border-slate-800/80 rounded-md px-2 py-0.5 text-[8.5px] font-bold text-slate-300 font-mono">
                    Ingest
                  </span>
                  <span className="absolute top-[38%] left-[2%] bg-slate-900/90 border border-slate-800/80 rounded-md px-2 py-0.5 text-[8.5px] font-bold text-brand-orange font-mono">
                    Real-time
                  </span>
                  <span className="absolute bottom-[15%] left-[6%] bg-slate-900/90 border border-slate-800/80 rounded-md px-2 py-0.5 text-[8.5px] font-bold text-slate-300 font-mono">
                    Load
                  </span>
                  
                  <span className="absolute top-[18%] right-[8%] bg-slate-900/90 border border-slate-800/80 rounded-md px-2 py-0.5 text-[8.5px] font-bold text-emerald-400 font-mono">
                    Clean
                  </span>
                  <span className="absolute bottom-[18%] right-[8%] bg-slate-900/90 border border-slate-800/80 rounded-md px-2 py-0.5 text-[8.5px] font-bold text-blue-400 font-mono">
                    AI Ready
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE POSITIONING (Split Layout with Tablet Mockup) */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Graphic: Tablet Mockup */}
            <div className="animate-on-scroll animate-from-left">
              <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-4 sm:p-6 shadow-sm">
                {/* Tablet Bezel */}
                <div className="bg-white border-[10px] sm:border-[14px] border-slate-900 rounded-[32px] overflow-hidden relative shadow-2xl aspect-[4/3] flex flex-col">
                  
                  {/* Tablet Screen Background with Orange Bottom Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-brand-orange/20 z-0" />

                  {/* Tablet Content */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                    {/* Top Bar */}
                    <div className="flex items-center gap-2 mb-6 text-[10px] sm:text-xs font-medium text-slate-400">
                      <span>Platform</span>
                      <span>/</span>
                      <span className="text-slate-800 font-bold">Pipeline Operations</span>
                    </div>

                    {/* Top Cards Row */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {/* Left Profile/Cluster Card */}
                      <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-500">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <div>
                          <div className="font-sora font-bold text-slate-900 text-sm">Cluster Alpha</div>
                          <div className="text-[10px] text-slate-500 mb-1.5">Primary Node</div>
                          <div className="inline-flex items-center gap-1 bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            ACTIVE
                          </div>
                        </div>
                      </div>

                      {/* Right Graph Card */}
                      <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-4 shadow-sm flex items-end justify-between">
                        <div>
                          <div className="text-[10px] text-slate-500 font-medium mb-1">Processing Speed</div>
                          <div className="font-sora font-black text-slate-900 text-xl">4.2 PB/s</div>
                          <div className="text-[10px] text-emerald-500 font-bold mt-1">+18.34% ↗</div>
                        </div>
                        {/* Simple CSS Graph */}
                        <div className="w-16 h-10 flex items-end gap-1">
                          <div className="w-1/4 bg-emerald-200 rounded-t-sm h-[40%]" />
                          <div className="w-1/4 bg-emerald-300 rounded-t-sm h-[60%]" />
                          <div className="w-1/4 bg-emerald-400 rounded-t-sm h-[80%]" />
                          <div className="w-1/4 bg-emerald-500 rounded-t-sm h-[100%]" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Wide Card */}
                    <div className="bg-white/90 backdrop-blur border border-white rounded-2xl p-5 shadow-sm mt-auto relative overflow-hidden">
                      <div className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-wider">Automated Cleansing</div>
                      
                      <div className="flex items-center justify-around relative">
                        {/* Left Side: Raw Data */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-14 bg-slate-100 border border-slate-200 rounded flex flex-col gap-1 p-2">
                            <div className="h-1.5 w-full bg-slate-300 rounded-sm" />
                            <div className="h-1.5 w-3/4 bg-slate-300 rounded-sm" />
                            <div className="h-1.5 w-full bg-red-300 rounded-sm" />
                            <div className="h-1.5 w-1/2 bg-slate-300 rounded-sm" />
                          </div>
                          <span className="text-[11px] font-bold text-slate-600">Raw Data</span>
                        </div>

                        {/* Middle Cursor/Arrow */}
                        <div className="relative z-10 w-8 h-8 flex items-center justify-center text-brand-orange animate-bounce">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L22 12H16V22H8V12H2L12 2Z"/></svg>
                        </div>

                        {/* Right Side: Clean Data */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-14 bg-white border border-emerald-200 rounded shadow-sm flex flex-col gap-1 p-2">
                            <div className="h-1.5 w-full bg-emerald-200 rounded-sm" />
                            <div className="h-1.5 w-full bg-emerald-300 rounded-sm" />
                            <div className="h-1.5 w-full bg-emerald-400 rounded-sm" />
                            <div className="h-1.5 w-full bg-emerald-500 rounded-sm" />
                          </div>
                          <div className="text-center">
                            <span className="text-[11px] font-bold text-slate-900 block">Clean Data</span>
                            <div className="h-1 w-full bg-emerald-500 rounded-full mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="text-left space-y-8 animate-on-scroll animate-from-right" style={{ transitionDelay: '200ms' }}>
              
              {/* Main Heading & Intro */}
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight font-sora text-slate-900">
                  Your AI Is Only as Strong as the Data Behind It.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  When an AI project stalls, the model is rarely the first thing to blame. The data underneath it usually is. We build clean pipelines, secure deployment workflows, proper monitoring, and infrastructure that grows with the business.
                </p>
              </div>

              {/* Secondary Point */}
              <div className="space-y-3">
                <h3 className="font-sora font-extrabold text-[22px] text-slate-800">
                  Legacy Systems Break Under AI Workloads
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  Analytics infrastructure built for dashboards does not always survive contact with AI. A report can tolerate yesterday's numbers or a broken pipeline for a few hours; a production AI workflow often can't.
                </p>
              </div>

              {/* Tertiary Highlight Point */}
              <div className="space-y-3">
                <h3 className="font-sora font-extrabold text-[20px] text-brand-orange">
                  Fix the Data Foundation
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  Fix the data foundation and the whole business gets easier to run. Protect your business with an infrastructure that scales predictably, stays secure, and keeps your AI performing.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCES */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-[40px] p-8 sm:p-12 lg:p-16 border border-brand-orange/20 relative overflow-hidden">
            
            {/* Background decorative glow */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
              
              {/* Left Side: Text and CTA */}
              <div className="lg:col-span-5 text-left space-y-6 animate-on-scroll animate-from-left">
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-sora leading-[1.15]">
                  Designed for <br/><span className="text-brand-orange">Teams Scaling Data & AI</span>
                </h2>
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-medium">
                  Whether you are a startup needing a clean initial data stack, or an operations-heavy enterprise scaling into real-time pipelines, our infrastructure is built to support your growth securely and reliably.
                </p>
                <div className="pt-2">
                  <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-sora font-bold text-sm rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                    Book Consultation
                  </a>
                </div>
              </div>

              {/* Right Side: Stacked Cards (Animated from Right) */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                {targetAudiences.map((aud, i) => (
                  <div 
                    key={i} 
                    className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300 text-left flex gap-5 items-start animate-on-scroll animate-from-right"
                    style={{ transitionDelay: `${(i * 150) + 100}ms` }}
                  >
                    <div className="w-6 h-6 shrink-0 rounded-full bg-brand-orange text-white flex items-center justify-center mt-0.5 shadow-sm shadow-brand-orange/30">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-sora font-extrabold text-[17px] text-slate-900 mb-2.5 tracking-tight">{aud.title}</h4>
                      <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">{aud.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 animate-on-scroll animate-zoom-in">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sora">
              Data Systems That Are Ready for Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {Object.entries(servicesData).map(([key, service], idx) => {
              const theme = serviceStyles[key]
              return (
                <div key={key} className={`group bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between ${theme.glow} ${theme.hoverBorder} animate-on-scroll animate-zoom-in`} style={{ transitionDelay: `${idx * 80}ms` }}>
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 ${theme.iconBg}`}>
                        <span className="font-sora font-bold text-sm">{service.num}</span>
                      </div>
                    </div>
                    <h3 className="font-sora font-extrabold text-[17px] text-slate-900 tracking-tight group-hover:text-brand-orange transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-[12px] text-slate-600 leading-snug">
                          <span className="font-bold text-brand-orange">✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href="#/book-consultation?scrollTo=form" className="w-full py-3 bg-slate-50 border border-slate-200 hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all text-xs font-bold text-slate-800 text-center rounded-xl">
                    {service.cta}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW PIPELINE */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase font-mono animate-on-scroll animate-zoom-in">Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll animate-zoom-in">
              From Data Chaos to AI-Ready Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {workflowStages.map((stage, idx) => (
              <div 
                key={stage.num} 
                className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col items-center animate-on-scroll animate-from-left"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold mb-4">
                  {stage.num}
                </div>
                <h3 className="font-sora font-bold text-sm text-slate-900 mb-2">{stage.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center space-y-12">
          <h2 className="text-4xl sm:text-5xl font-black font-sora text-white leading-tight animate-on-scroll animate-zoom-in">
            Make Your Data Infrastructure Ready for What Comes Next
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto animate-on-scroll animate-zoom-in">
            Connect your systems, stabilize your pipelines, tighten reliability, and get your infrastructure ready for AI workloads, so your team finally has data it can trust.
          </p>
          <div className="flex justify-center animate-on-scroll animate-zoom-in">
            <a href="#/book-consultation?scrollTo=form" className="bg-brand-orange hover:bg-brand-orange text-white font-sora font-bold text-[15px] px-10 h-[60px] rounded-2xl flex items-center justify-center shadow-xl shadow-brand-orange/20 transition-all">
              Schedule a Data Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DataEngineering
