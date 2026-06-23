import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function About() {
  const [selectedCapability, setSelectedCapability] = useState('security')
  const [vendorView, setVendorView] = useState('orzeh')

  useEffect(() => {
    document.title = "About Orzeh Technologies | AI Security, Data Engineering & ERP + AI"
    window.scrollTo(0, 0)
  }, [])

  const capabilities = {
    security: {
      num: '01',
      title: 'AI Security & Implementation',
      subtitle: 'Securing AI products, prompt boundaries, and RAG grounding.',
      accent: 'emerald',
      bgClass: 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.05] to-transparent',
      textColor: 'text-emerald-600',
      description: 'We help companies secure AI systems, reduce risk, improve reliability, and prepare products for production.',
      deliverables: [
        'AI security audits & threat modeling',
        'Wazuh log parsing and custom rule deployments',
        'Incident detection & alerting workflows',
        'Secure prompt boundaries & RAG model validation',
        'Hallucination control & confidence scoring'
      ]
    },

    data: {
      num: '02',
      title: 'Data Engineering & DevSecOps',
      subtitle: 'AI-ready data infrastructure: secure pipelines and DevOps.',
      accent: 'blue',
      bgClass: 'border-brand-blue/30 bg-gradient-to-br from-brand-blue/[0.05] to-transparent',
      textColor: 'text-brand-blue',
      description: 'We build the data infrastructure AI and analytics depend on — secure pipelines, real-time workflows, and CI/CD pipelines.',
      deliverables: [
        'Data pipeline development',
        'Batch, micro-batch, and real-time streaming',
        'Cloud & multi-cloud architecture design',
        'CI/CD and deployment automation for data/AI',
        'DevSecOps security integrations'
      ]
    },

    erp: {
      num: '03',
      title: 'ERP + AI Solutions',
      subtitle: 'Connected Odoo operations, automation, and predictive forecasting.',
      accent: 'orange',
      bgClass: 'border-brand-orange/30 bg-gradient-to-br from-brand-orange/[0.05] to-transparent',
      textColor: 'text-brand-orange',
      description: 'We help businesses modernize operations through ERP implementation and custom AI features.',
      deliverables: [
        'Odoo Core & Advanced module setup',
        'Custom module design & third-party integrations',
        'Financial cash flow forecasting models',
        'Inventory demand prediction pipelines',
        'Workflow automations (Sales, CRM, Invoices)'
      ]
    }
  }

  const approachStages = [
    { num: '01', title: 'Understand', desc: 'First, we understand the business problem.' },
    { num: '02', title: 'Study', desc: 'Then, we study the current systems.' },
    { num: '03', title: 'Identify', desc: 'Then, we identify what is slowing the company down.' },
    { num: '04', title: 'Design', desc: 'Then, we design the technical path forward.' },
    { num: '05', title: 'Build & Deploy', desc: 'Then, we build, deploy, document, and improve.' }
  ]

  return (
    <div className="bg-slate-50 text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden font-dmsans">
      
      {/* 1. HERO SECTION (Premium Redesign) */}
      <section className="relative pt-24 pb-28 md:pb-36 border-b border-border-light overflow-hidden bg-white">
        {/* Animated Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-multiply" style={{ animationDelay: '2s' }} />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Hero Details */}
            <div className="lg:col-span-6 flex flex-col items-start text-left space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-sm animate-on-scroll animate-from-left">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-xs font-bold font-sora tracking-wide text-text-dark uppercase">Orzeh Technologies</span>
              </div>
              
              <h1 className="font-sora font-black text-text-dark text-4xl sm:text-5xl lg:text-[4.5rem] tracking-tight leading-[1.05] animate-on-scroll">
                Building the <br/> Foundation for <br/>
                <span className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-orange bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">Intelligent Business</span>
              </h1>
              
              <p className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-[540px] animate-on-scroll font-medium">
                Orzeh Technologies is one technical partner for the systems you depend on next. We design, build, secure, and support production-ready infrastructure across AI security, data engineering, DevSecOps, and ERP implementation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 animate-on-scroll">
                <a
                  href="#/book-consultation?scrollTo=form"
                  className="flex items-center justify-center bg-brand-orange hover:bg-brand-gold text-white font-sora font-bold text-[15px] px-8 h-[60px] rounded-2xl shadow-xl shadow-brand-orange/20 hover:shadow-2xl hover:shadow-brand-orange/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-6 relative flex items-center justify-center w-full max-lg:mt-12 animate-on-scroll animate-from-right" data-delay="200">
              <img src="/team_collaboration.png" alt="Engineering Team Collaboration" className="w-full h-auto object-cover rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-700 ease-out" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: IDENTITY & MISSION (Premium Split Layout) */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image Side */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] group animate-on-scroll animate-from-left">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src="/tech_leadership.png" alt="Tech Leadership Discussion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              
              {/* Glass overlay text */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20">
                <p className="text-white font-sora font-semibold text-lg drop-shadow-md">
                  We turn technical complexity into working business infrastructure.
                </p>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-12 animate-on-scroll animate-from-right" data-delay="100">
              
              <div className="space-y-6">
                <span className="text-[11px] font-bold tracking-widest text-brand-orange uppercase font-mono bg-brand-orange/10 px-3 py-1.5 rounded-full">Identity</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight leading-tight">
                  A Technical Partner for the <span className="text-brand-orange">AI Era</span>
                </h2>
                <p className="text-slate-600 text-[17px] leading-relaxed">
                  Orzeh Technologies is built for companies that want more than advice. We help businesses design, secure, implement, and improve the systems that make modern operations possible.
                </p>
                <p className="text-slate-600 text-[17px] leading-relaxed">
                  That may mean securing an AI product before it goes live. It may mean building data pipelines that can support AI workloads. It may mean replacing spreadsheets with ERP and adding custom intelligence.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200 space-y-6">
                <span className="text-[11px] font-bold tracking-widest text-brand-blue uppercase font-mono bg-brand-blue/10 px-3 py-1.5 rounded-full">Mission</span>
                <h2 className="text-2xl font-bold font-sora text-slate-900"><span className="text-brand-orange">Systems</span> That Actually Work</h2>
                <p className="text-slate-600 text-[17px] leading-relaxed">
                  Opportunity without infrastructure creates risk. A chatbot without security exposes data. A database without clean pipelines misleads leaders. We build secure, intelligent systems that support real operations, not just demonstrations.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE BELIEVE (Premium Hover Cards) */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase font-mono animate-on-scroll">Our Principles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              Transformation Starts <br/> With the <span className="text-brand-orange">Foundation</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-[17px] animate-on-scroll">
              We believe AI should be practical, secure, and deeply connected to how a business actually operates.
            </p>
          </div>

          <div className="animate-on-scroll animate-zoom-in relative">
            {(() => {
              const creeds = [
                { title: 'Security from the Start', desc: 'Security must be part of AI development from the beginning, safeguarding prompts, data access, and API gates.' },
                { title: 'Reliable Data First', desc: 'Data infrastructure must be clean, structured, and reliable before machine intelligence can scale.' },
                { title: 'ERP as an Operating Layer', desc: 'ERP should become more than database storage; it should act as an active business execution layer.' },
                { title: 'Friction-Free Automation', desc: 'Automation should eliminate manual workflows and friction, not add unnecessary layer complexities.' },
                { title: 'AI for Measurable Outcomes', desc: 'AI should focus on improving daily decisions, accelerating pipelines, and providing live visibility.' },
                { title: 'Systems That Empower', desc: 'We do not build AI for appearance. We build systems that make companies operationally stronger.' }
              ];

              const renderCard = (creed, i) => (
                <div key={i} className="group relative p-8 bg-slate-50 border border-slate-200 rounded-[2rem] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-500 ease-out overflow-hidden h-full z-10" data-delay={i * 50}>
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm text-brand-orange flex items-center justify-center mb-6 text-sm font-bold font-mono group-hover:scale-110 transition-transform duration-500">
                      0{i + 1}
                    </div>
                    <h4 className="font-sora font-bold text-slate-900 text-lg mb-3">{creed.title}</h4>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{creed.desc}</p>
                  </div>
                </div>
              );

              return (
                <>
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    
                    {/* SVG Connector Line - 3 Column Layout (Desktop) */}
                    <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none opacity-40">
                      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path 
                          d="M 166 250 L 833 250 C 950 250, 950 500, 500 500 C 50 500, 50 750, 166 750 L 833 750" 
                          fill="none" 
                          stroke="url(#flowGradient)" 
                          strokeWidth="3" 
                          strokeDasharray="8 8" 
                          className="animate-flow-line"
                          vectorEffect="non-scaling-stroke"
                        />
                        <defs>
                          <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="50%" stopColor="#d97706" />
                            <stop offset="100%" stopColor="#0284c7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* SVG Connector Line - 2 Column Layout (Tablet) */}
                    <div className="absolute inset-0 z-0 hidden md:block lg:hidden pointer-events-none opacity-40">
                      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path 
                          d="M 250 166 L 750 166 C 900 166, 900 333, 500 333 C 100 333, 100 500, 250 500 L 750 500 C 900 500, 900 666, 500 666 C 100 666, 100 833, 250 833 L 750 833" 
                          fill="none" 
                          stroke="url(#flowGradient2)" 
                          strokeWidth="3" 
                          strokeDasharray="8 8" 
                          className="animate-flow-line"
                          vectorEffect="non-scaling-stroke"
                        />
                        <defs>
                          <linearGradient id="flowGradient2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#0284c7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {creeds.map(renderCard)}
                  </div>

                  <div className="md:hidden -mx-6 px-6 overflow-hidden">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.15}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {creeds.map((creed, i) => (
                        <SwiperSlide key={i} className="h-auto">
                          {renderCard(creed, i)}
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

      {/* SECTION 4.5: OUR CORE VALUES */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60 relative">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 animate-on-scroll animate-zoom-in">
            {[
              'Be Bold,\nBe Humble',
              'Move Fast,\nBreak Things',
              'Challenge\nYourself & Others',
              'Show Integrity\n& Respect',
              'Have Fun,\nMake Money,\nGive Back'
            ].map((value, idx) => (
              <div 
                key={idx}
                className="group relative p-5 sm:p-8 rounded-[1.2rem] sm:rounded-[1.5rem] bg-gradient-to-br from-amber-400 via-brand-orange to-red-500 text-white shadow-lg shadow-orange-500/10 hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[120px] sm:min-h-[140px] md:min-h-[180px]"
              >
                {/* Translucent background light/shimmer */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <h3 className="font-sora font-extrabold text-[0.95rem] sm:text-[1.2rem] lg:text-[1.3rem] leading-snug tracking-tight text-left z-10 whitespace-pre-line">
                  {value}
                </h3>
                
                {/* Visual Watermark Arrow (Points up-right) */}
                <svg className="absolute -right-6 -bottom-6 w-24 h-24 sm:w-28 sm:h-28 text-white opacity-[0.14] pointer-events-none transform rotate-[15deg] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-105" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3L3 10.53v.98l6.84 2.65L12.5 21h.98L21 3z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE BUILD (Simplified Capabilities) */}
      <section id="capabilities-section" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-brand-orange uppercase font-mono animate-on-scroll">Core Capabilities</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              Secure AI. <br/> <span className="text-brand-orange">Intelligent Operations.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-[17px] animate-on-scroll">
              Explore our core technical deployment areas and deliverables.
            </p>

            {/* Clean Pill Selector */}
            <div className="flex flex-col sm:flex-row justify-center gap-1.5 mt-8 p-1.5 bg-slate-50 rounded-xl sm:rounded-lg border border-slate-200 w-full sm:w-fit mx-auto animate-on-scroll">
              <button
                onClick={() => setSelectedCapability('security')}
                className={`w-full sm:w-auto px-6 py-2.5 text-[13px] font-sora font-bold rounded-md transition-all duration-300 ${
                  selectedCapability === 'security'
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                AI Security
              </button>

              <button
                onClick={() => setSelectedCapability('data')}
                className={`w-full sm:w-auto px-6 py-2.5 text-[13px] font-sora font-bold rounded-md transition-all duration-300 ${
                  selectedCapability === 'data'
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Data & DevOps
              </button>

              <button
                onClick={() => setSelectedCapability('erp')}
                className={`w-full sm:w-auto px-6 py-2.5 text-[13px] font-sora font-bold rounded-md transition-all duration-300 ${
                  selectedCapability === 'erp'
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                ERP + AI
              </button>
            </div>
          </div>

          {/* Details Display */}
          <div className="max-w-[900px] mx-auto mt-12 animate-on-scroll animate-zoom-in">
            {(() => {
              const cap = capabilities[selectedCapability]
              return (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 transition-all duration-500 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Left: Description */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Pillar {cap.num}</span>
                        <h3 className="text-2xl font-bold font-sora text-slate-900 leading-snug">{cap.title}</h3>
                        <p className="text-[15px] font-medium text-brand-orange font-sora">{cap.subtitle}</p>
                      </div>
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {/* Right: Deliverables */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900 block mb-4 border-b border-slate-100 pb-3">
                        What we deploy & configure
                      </span>
                      <div className="space-y-4">
                        {cap.deliverables.map((item, idx) => (
                          <div key={idx} className="flex gap-3 items-start text-[14px] text-slate-600">
                            <span className="font-bold text-brand-orange mt-0.5">✓</span>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </section>

      {/* SECTION 7: VENDOR LANDSCAPE SHOWCASE */}
      <section className="py-24 md:py-32 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase font-mono animate-on-scroll">The Orzeh Separation</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              We Connect AI, Data, and <span className="text-brand-orange">Operations</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-[17px] animate-on-scroll font-medium">
              Most vendors solve one part of the problem. Orzeh brings these layers together into a unified architecture.
            </p>

            <div className="flex flex-col sm:flex-row items-center p-1 bg-slate-100 border border-slate-200/80 rounded-2xl sm:rounded-xl mt-8 animate-on-scroll relative z-10 w-full sm:w-fit mx-auto gap-1 sm:gap-0">
              <button
                onClick={() => setVendorView('fragmented')}
                className={`w-full sm:w-auto px-6 py-2.5 text-[13px] font-sora font-extrabold rounded-lg transition-all duration-300 ${vendorView === 'fragmented' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Fragmented Vendors
              </button>
              <button
                onClick={() => setVendorView('orzeh')}
                className={`w-full sm:w-auto px-6 py-2.5 text-[13px] font-sora font-extrabold rounded-lg transition-all duration-300 ${vendorView === 'orzeh' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Orzeh Unified System
              </button>
            </div>
          </div>

          <div className="max-w-[1000px] mx-auto bg-slate-50/40 border border-slate-200/80 rounded-[32px] p-8 md:p-12 backdrop-blur-md relative overflow-hidden animate-on-scroll animate-zoom-in min-h-[380px] flex items-center justify-center transition-all duration-500 shadow-xs hover:shadow-sm">
            
            {vendorView === 'fragmented' ? (
              <div className="w-full space-y-10 animate-[fadeIn_0.4s_ease-out_both]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'ERP Vendor', desc: 'Installs modules, ignores model integration.' },
                    { title: 'Security Partner', desc: 'Runs static checks, ignores AI operations.' },
                    { title: 'AI Firm', desc: 'Gives advice, builds no actual infrastructure.' }
                  ].map((v, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl text-left space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                      {/* Caution red-orange top border line */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-rose-500/30 group-hover:bg-rose-500 transition-colors duration-300" />
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">VENDOR 0{idx + 1}</span>
                        <span className="text-rose-500 font-extrabold text-[13px]">⚠️</span>
                      </div>
                      <div>
                        <h4 className="font-sora font-extrabold text-[15px] text-slate-900 group-hover:text-rose-600 transition-colors duration-300">{v.title}</h4>
                        <p className="text-[12.5px] text-slate-500 leading-relaxed mt-2 font-medium">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-l-4 border-rose-500 bg-rose-500/5 text-left text-[13px] text-slate-700 font-semibold rounded-r-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 font-black shrink-0 text-sm">!</span>
                  <div>
                    <strong className="text-rose-600 font-bold">Operational Gaps:</strong> Fragmented tools do not communicate, creating structural security leaks and data bottlenecks.
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full space-y-10 animate-[fadeIn_0.4s_ease-out_both]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {/* Clean Visual Connection Line */}
                  <div className="absolute top-[38px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-orange/20 via-brand-gold/30 to-brand-orange/20 hidden md:block z-0" />
                  
                  {[
                    { title: 'AI Security Layer', num: '01', desc: 'Validates and secures every model boundary.' },
                    { title: 'Data Pipeline Layer', num: '02', desc: 'Processes, cleans, and builds pipelines for AI-ready data.' },
                    { title: 'ERP Operations Layer', num: '03', desc: 'Feeds live operational stats into the business brain.' }
                  ].map((col, idx) => (
                    <div key={idx} className="relative z-10 bg-white border border-brand-orange/20 p-6 rounded-2xl text-left space-y-4 hover:shadow-[0_15px_35px_rgba(249,115,22,0.06)] transition-all duration-300 group hover:-translate-y-1 hover:border-brand-orange/40 flex flex-col justify-between min-h-[160px]">
                      {/* Glow top line */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-orange/40 to-brand-gold/40 group-hover:from-brand-orange group-hover:to-brand-gold transition-all duration-300" />
                      <div className="w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center text-[11px] font-mono font-bold text-brand-orange group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors shadow-sm relative z-10">
                        {col.num}
                      </div>
                      <div>
                        <h4 className="font-sora font-extrabold text-[15px] text-slate-900 group-hover:text-brand-orange transition-colors duration-300">{col.title}</h4>
                        <p className="text-[12.5px] text-slate-500 leading-relaxed mt-2 font-medium">{col.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold text-white text-left text-[13px] font-semibold shadow-md shadow-brand-orange/10 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white font-black shrink-0 text-sm">✓</span>
                  <div>
                    <strong className="text-white font-black">The Unified Approach:</strong> We look at the system as a whole, building the integration layer your business needs most.
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 8: OUR APPROACH (Connected Pipeline) */}
      <section className="py-24 md:py-32 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase font-mono animate-on-scroll">Workflow Mindset</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              Practical. Technical. <span className="text-brand-orange">Built for Production.</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-[17px] animate-on-scroll font-medium">
              We deliver systems your team can use, maintain, and scale. No vague strategy decks.
            </p>
          </div>

          <div className="relative">
            {/* Static Connecting Pipeline */}
            <div className="absolute top-[1.75rem] left-[10%] right-[10%] h-[2px] bg-brand-orange/20 hidden lg:block rounded-full z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0 relative z-10">
              {approachStages.map((stage, idx) => {
                const delays = [0, 160, 320, 480, 600];
                const delay = delays[idx];
                return (
                  <div
                    key={stage.num}
                    className="flex flex-col items-center group animate-on-scroll animate-from-left"
                    data-delay={delay || undefined}
                  >
                    {/* Node */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-gold text-white border-4 border-white flex items-center justify-center font-sora font-extrabold text-sm shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110 mb-6">
                      {stage.num}
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-full max-w-[220px] text-center p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_35px_rgba(249,115,22,0.06)] group-hover:-translate-y-1.5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-orange/10 group-hover:bg-brand-orange transition-colors duration-300" />
                      <h3 className="text-[15px] font-bold font-sora mb-2 text-slate-900 group-hover:text-brand-orange transition-colors duration-300">{stage.title}</h3>
                      <p className="text-[12.5px] leading-relaxed text-slate-500 font-medium">{stage.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PARTNER PROFILES */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-sora text-slate-900 tracking-tight animate-on-scroll">
              Built for Teams <span className="text-brand-orange">Ready to Modernize</span>
            </h2>
          </div>

          <div className="animate-on-scroll">
            {(() => {
              const profiles = [
                'AI Startups preparing for production',
                'Technical Founders building products',
                'ML and DevOps teams adding workloads',
                'SaaS companies building systems',
                'SMBs replacing spreadsheets',
                'Manufacturing & distribution',
                'Operations teams implementing ERP'
              ];

              const renderCard = (profile, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange/30 transition-all duration-300 h-full" data-delay={idx * 50}>
                  <span className="w-8 h-8 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 text-sm font-bold shadow-inner">
                    ✓
                  </span>
                  <span className="font-sora text-[14px] font-semibold text-slate-800 leading-snug">{profile}</span>
                </div>
              );

              return (
                <>
                  <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
                    {profiles.map(renderCard)}
                  </div>
                  <div className="sm:hidden -mx-6 px-6 overflow-hidden">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={12}
                      slidesPerView={1.2}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {profiles.map((profile, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                          {renderCard(profile, idx)}
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

      {/* FINAL BRAND STATEMENT & CTA */}
      <section className="py-28 md:py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-brand-orange/20 to-brand-blue/20 blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center space-y-16">
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sora text-white leading-[1.1] tracking-tight animate-on-scroll">
              We Build the Systems Behind the <span className="text-brand-orange">Next Stage of Growth.</span>
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-medium animate-on-scroll">
              Orzeh helps companies rebuild the foundation. So teams operate with better visibility, leaders make better decisions, AI can be used safely, and operations become intelligent.
            </p>
          </div>

          <hr className="border-slate-800 max-w-[200px] mx-auto animate-on-scroll" />

          <div className="space-y-8 max-w-2xl mx-auto pt-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-sora text-white animate-on-scroll">
              Ready to Build Smarter Systems?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-on-scroll">
              <a
                href="#/book-consultation?scrollTo=form"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-gold text-white font-sora font-bold text-[15px] px-10 h-[60px] rounded-2xl flex items-center justify-center shadow-xl shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-1"
              >
                Book a Private Consultation
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About
