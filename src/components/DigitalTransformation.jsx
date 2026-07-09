import React, { useEffect } from 'react'
import { SiOdoo } from 'react-icons/si'
import odooLogo from '../assets/odoo logo.png'

function DigitalTransformation() {
  useEffect(() => {
    document.title = "Digital Transformation with Odoo ERP & Custom AI | Orzeh Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="hero-section-light">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-32 pb-20 min-h-[80vh]">
            
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col items-start text-left animate-on-scroll animate-from-left">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-5 px-7 py-3 rounded-full border-[2.5px] border-orange-300/80 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <img src={odooLogo} alt="Odoo" className="h-10 sm:h-12 object-contain mix-blend-multiply" />
                  <div className="w-[2px] h-9 sm:h-10 bg-slate-200"></div>
                  <span className="text-[15px] sm:text-[17px] font-black text-[#f97316] uppercase tracking-wider font-sora">
                    OFFICIAL PARTNER
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200/60 bg-orange-50/80 backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-[12px] font-bold tracking-widest text-brand-orange uppercase font-dmsans">AI Digital Transformation</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-[42px] lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6 font-sora">
                AI-Ready <span className="text-brand-orange">Digital Transformation</span> for Growing Businesses
              </h1>
              
              <p className="text-[16px] leading-[1.7] text-slate-600 mb-10 max-w-[500px] font-dmsans">
                Spreadsheets, disconnected tools, and manual workflows hold growing businesses back. We use Odoo to digitally transform how your business runs, then add custom AI on top, so you can centralize operations, automate repetitive work, see what is happening in real time, and make sharper decisions.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center px-8 h-[54px] bg-brand-orange hover:bg-[#ea580c] text-white rounded-[14px] font-bold text-[14px] font-sora transition-all duration-300 shadow-[0_8px_30px_rgba(249,115,22,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(249,115,22,0.35)]">
                  Book a Consultation
                </a>
                <a href="#approach" className="inline-flex items-center justify-center px-8 h-[54px] bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-[14px] font-bold text-[14px] font-sora transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md hover:border-slate-300">
                  Explore the Approach
                </a>
              </div>
              
              <div className="pt-10 mt-10 border-t border-slate-200/60 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-bold font-sora text-slate-500 uppercase tracking-widest">
                <span>Digital Transformation</span>
                <span className="text-brand-orange/40">•</span>
                <span className="flex items-center gap-1.5">
                  <SiOdoo size={14} className="text-[#714B67]" /> Odoo ERP <span className="bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded text-[9px] border border-brand-orange/20">Ready Partner</span>
                </span>
                <span className="text-brand-orange/40">•</span>
                <span>AI Automation</span>
                <span className="text-brand-orange/40">•</span>
                <span>Smart Reporting</span>
                <span className="text-brand-orange/40">•</span>
                <span>Operations Modernization</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative mt-12 lg:mt-0 w-full flex justify-center animate-on-scroll animate-from-right" data-delay="200">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent blur-3xl rounded-full transform scale-[0.8] opacity-70" />
              
              <img 
                src="/images/digital_transformation_hero.png" 
                alt="Digital Transformation Dashboard" 
                className="relative z-10 w-full max-w-[500px] h-[360px] object-cover object-left-top rounded-2xl border border-slate-200 shadow-[0_20px_50px_rgba(249,115,22,0.12)] hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Groundwork AI Needs (MATCHING REGULATORY COMPLIANCE DESIGN) */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="animate-on-scroll animate-from-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0f172a] font-sora mb-6 tracking-tight leading-[1.15]">
                <span className="text-brand-orange">Digital Transformation</span> Is the Groundwork AI Needs
              </h2>
              
              <div className="space-y-5 text-[15px] text-slate-600 leading-relaxed font-medium mb-8">
                <p>
                  In the AI era, a lot of businesses cannot get value from AI for one simple reason: they were never digitally transformed in the first place. Operations still run on spreadsheets, disconnected tools, and manual processes, so AI has nothing solid to build on. That backlog is the real blocker, and digital transformation is what clears it.
                </p>
                <p>
                  Most growing businesses work plenty hard. What slows them down is that their systems do not talk to each other. Sales sits in one tool, inventory in another, accounting somewhere else, and customer records scattered across all of them. Reports lag, and decisions rest on manual updates and spreadsheets.
                </p>
                <p>
                  That is what we fix. We use Odoo to pull the pieces into one connected system, then add custom AI on top to make it intelligent. The move we help businesses make is from scattered operations to connected, AI-assisted systems that are easier to manage, scale, and improve.
                </p>
              </div>

              <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center bg-brand-orange hover:bg-[#ea580c] text-white font-sora font-bold text-[15px] px-8 h-[54px] rounded-2xl transition-all shadow-md">
                Explore More
              </a>
            </div>

            {/* Right Column: Dashboard Mockup Card */}
            <div className="relative animate-on-scroll animate-from-right aspect-square md:aspect-[4/3] max-h-[400px] my-auto lg:ml-auto w-full max-w-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fff6ed] to-[#ffe8cc] rounded-[24px] overflow-hidden flex items-center justify-end pl-6 pt-6 pb-6 shadow-inner">
                
                {/* The "Tablet/Monitor" Frame */}
                <div className="w-full h-full bg-black rounded-l-[24px] border-t-[12px] border-b-[12px] border-l-[12px] border-black relative overflow-hidden shadow-2xl flex flex-col">
                  {/* Dashboard Header */}
                  <div className="h-10 bg-white border-b border-slate-100 flex items-center px-5">
                    <span className="text-[12px] font-bold text-slate-400">Odoo / AI Dashboard</span>
                  </div>
                  {/* Dashboard Body */}
                  <div className="flex-1 bg-slate-50 relative p-6 overflow-hidden">
                    
                    {/* Floating Card 1 */}
                    <div className="absolute top-5 left-5 w-[190px] bg-white rounded-lg shadow-sm border border-slate-100 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded bg-brand-orange/10 flex items-center justify-center">
                          <span className="text-brand-orange text-[11px]">📊</span>
                        </div>
                        <span className="text-[13px] font-bold text-slate-700">Live Inventory</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full">
                          <div className="h-full w-[70%] bg-brand-orange rounded-full"></div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full">
                          <div className="h-full w-[40%] bg-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Card 2 */}
                    <div className="absolute top-5 right-5 w-[210px] bg-white rounded-lg shadow-md border border-slate-100 p-5 z-10">
                      <h4 className="text-[13px] font-bold text-slate-800 mb-4">AI Prediction</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-500">
                          <span>Stockout Risk: Q3</span>
                          <span className="text-brand-orange font-bold">High</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-medium text-slate-500">
                          <span>Cashflow Forecast</span>
                          <span className="text-emerald-500 font-bold">+18.4%</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Card 3 (Bottom) */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white rounded-lg shadow-sm border border-slate-100 p-5">
                      <h4 className="text-[14px] font-bold text-slate-800 mb-3">Workflow Automation</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[9px]">✓</span>
                        <div className="h-2 w-32 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-white text-[9px]"></span>
                        <div className="h-2 w-40 bg-slate-100 rounded-full"></div>
                      </div>
                    </div>

                    {/* Fake Orange Pointer */}
                    <div className="absolute bottom-16 right-16 z-20 animate-bounce">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#f97316" stroke="white" strokeWidth="2">
                        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86 3.6 7.7a1 1 0 0 0 1.34.48l2.67-1.25a1 1 0 0 0 .48-1.34l-3.56-7.62 5.56.44c.45.03.77-.5.48-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/>
                      </svg>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Spreadsheets Work Until... CTA Banner 1 */}
      <section className="pt-20 pb-8 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-brand-orange rounded-[32px] relative overflow-hidden flex flex-col md:flex-row md:items-center min-h-[320px] shadow-[0_20px_50px_rgba(249,115,22,0.15)]">
            {/* Left Content */}
            <div className="w-full md:w-[55%] p-8 md:p-10 relative z-10 animate-on-scroll animate-from-left flex-shrink-0">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-white font-sora mb-4 leading-[1.15] tracking-tight">
                Spreadsheets Work Until Growth Exposes the Gaps
              </h2>
              <div className="text-white/90 text-[13px] font-medium leading-relaxed space-y-3 mb-6 max-w-[420px]">
                <p>In the early days, spreadsheets feel flexible and fast. Growth changes that. Inventory gets harder to track, sales updates slip through, invoices take too long, and reports are stale before anyone acts on them.</p>
                <p>Teams repeat the same manual work every week, and leadership loses the ability to see what is happening in real time. The business keeps moving forward while the systems underneath it quietly hold it back.</p>
              </div>
              <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center px-6 h-[44px] bg-slate-900 hover:bg-slate-800 text-white rounded-[10px] font-bold text-[13px] font-sora transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Modernize Operations
              </a>
            </div>
            
            {/* Right Image — floats from center, overflows right */}
            <div className="relative md:absolute right-0 top-0 bottom-0 left-0 md:left-[55%] h-[320px] md:h-auto animate-on-scroll animate-from-right overflow-hidden md:rounded-r-[32px]">
              <img 
                src="/images/cta_dashboard.png" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover object-left md:object-left-top md:rounded-tl-xl md:shadow-[-8px_0_30px_rgba(0,0,0,0.12)] scale-[1.7] origin-left md:origin-center md:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* We Set the Foundation... CTA Banner 2 */}
      <section className="pb-20 pt-8 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-brand-orange rounded-[32px] relative overflow-hidden flex flex-col md:flex-row md:items-center min-h-[320px] shadow-[0_20px_50px_rgba(249,115,22,0.15)]">

            {/* Left Image — floats from center, overflows left */}
            <div className="relative md:absolute left-0 top-0 bottom-0 right-0 md:right-[55%] h-[320px] md:h-auto animate-on-scroll animate-from-left overflow-hidden md:rounded-l-[32px] order-2 md:order-1">
              <img 
                src="/images/erp_dashboard.png" 
                alt="ERP Software Preview" 
                className="w-full h-full object-cover object-right md:object-right-top md:rounded-tr-xl md:shadow-[8px_0_30px_rgba(0,0,0,0.12)] scale-[1.7] origin-right md:origin-center md:scale-100"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[55%] p-8 md:p-10 relative z-10 md:ml-auto flex-shrink-0 animate-on-scroll animate-from-right order-1 md:order-2">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-white font-sora mb-4 leading-[1.15] tracking-tight">
                We Set the Foundation With Odoo, Then Add the Intelligence
              </h2>
              <div className="text-white/90 text-[13px] font-medium leading-relaxed space-y-3 max-w-[420px]">
                <p>A typical software rollout ends at go-live: modules configured, data migrated, team trained, consultant gone. We treat digital transformation as the starting point, not the finish line.</p>
                <p>Odoo becomes the operating core of your business, and from there we build custom AI into it — it can forecast demand, flag problems early, automate routine workflows, and give your team better information to act on.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Built for Businesses — Funnel/Waterfall Design */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16 animate-on-scroll animate-from-bottom">
            <h2 className="text-3xl sm:text-[36px] font-extrabold font-sora text-slate-900 mb-4 tracking-tight">
              Built for Businesses Ready to Modernize Operations
            </h2>
            <p className="text-[16px] text-slate-500 font-medium max-w-[600px] mx-auto">
              This service is for companies growing beyond manual systems that need stronger operational control.
            </p>
          </div>

          {/* Funnel Diagram */}
          <div className="animate-on-scroll animate-from-bottom overflow-x-auto pb-4 custom-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[800px]">
              {/* Columns — bars aligned to bottom */}
              <div className="flex items-end justify-center h-[200px] border-b border-slate-200">
                {[
                  { label: 'Business owners, operations managers & COOs', barH: 200 },
                  { label: 'SMBs in retail, distribution & manufacturing', barH: 160 },
                  { label: 'Service businesses scaling their operations', barH: 120 },
                  { label: 'Teams on QuickBooks, Excel & Google Sheets', barH: 85 },
                  { label: 'Companies ready for intelligent operations', barH: 50 },
                ].map((col, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-stretch justify-end h-full relative">
                    {idx > 0 && (
                      <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-slate-300 z-10" />
                    )}
                    <div
                      style={{
                        height: `${col.barH}px`,
                        background: `linear-gradient(180deg, rgba(249,115,22,${0.18 + idx * 0.16}) 0%, rgba(249,115,22,${0.4 + idx * 0.12}) 100%)`,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Labels below */}
              <div className="flex gap-0 border-t border-slate-200 mt-0">
                {[
                  { label: 'Business owners, operations managers & COOs', desc: 'The decision-makers who need full operational visibility.' },
                  { label: 'SMBs in retail, distribution & manufacturing', desc: 'Growing teams whose tools can no longer keep pace.' },
                  { label: 'Service businesses scaling their operations', desc: 'Teams needing to centralize client and project data.' },
                  { label: 'Teams on QuickBooks, Excel & Google Sheets', desc: 'Manual processes eating into time and accuracy.' },
                  { label: 'Companies ready for intelligent operations', desc: 'Businesses that want AI built on a solid ERP core.' },
                ].map((col, idx) => (
                  <div key={idx} className="flex-1 px-3 pt-5 relative">
                    {idx > 0 && (
                      <div className="absolute left-0 top-0 bottom-0 border-l border-dashed border-slate-300" />
                    )}
                    <p className="text-[13px] font-bold text-slate-800 font-sora leading-snug mb-1">{col.label}</p>
                    <p className="text-[12px] text-slate-500 leading-relaxed">{col.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Intelligence Section - MATCHING SCREENSHOT 1 DESIGN */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll animate-from-bottom">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3 block">Intelligent Features</span>
            <h2 className="text-3xl lg:text-[36px] font-extrabold text-slate-900 font-sora mb-6 leading-[1.2] tracking-tight">
              AI That Turns Your New Foundation Into an <span className="text-brand-orange">Advantage</span>
            </h2>
            <p className="text-[15px] text-slate-600 max-w-[700px] mx-auto leading-relaxed">
              Once your operations are connected, AI has clean data and real workflows to work with. Depending on your business, we can build custom predictive and automated features that move day-to-day operations from reactive to predictive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 animate-on-scroll animate-zoom-in">
            {[
              {
                title: 'Inventory Forecasting',
                desc: 'Predict demand and stockouts before they happen based on historical sales and seasonal trends.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              },
              {
                title: 'Smart CRM Routing',
                desc: 'Qualify sales leads automatically and provide smart CRM recommendations to your sales team.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              },
              {
                title: 'Financial Predictions',
                desc: 'Forecast cash flow automatically, spot anomalies in expenses, and flag accounting issues early.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              },
              {
                title: 'Automated Service',
                desc: 'Route customer service tickets intelligently and provide AI-generated suggested responses.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-700 mb-6 bg-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-extrabold text-slate-900 font-sora mb-3">{item.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-medium px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Premium Design */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/4"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-on-scroll animate-zoom-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-sora tracking-tight">
              Digital Transformation <span className="text-brand-orange">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Odoo Core Implementation",
                desc: "A focused implementation for businesses ready to replace spreadsheets and disconnected tools with one connected system.",
                get: "Odoo setup; core module implementation across accounting, inventory, sales, CRM, and invoicing; data migration; basic automation.",
                bestFor: "Small and mid-sized businesses.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/><path d="M3 9h18" strokeWidth="2"/><path d="M9 21V9" strokeWidth="2"/></svg>
              },
              {
                title: "Odoo Advanced Implementation",
                desc: "A complete build for businesses with more complex operations, teams, modules, and workflows.",
                get: "Advanced Odoo modules; manufacturing workflows; eCommerce; project management; HRMS; custom workflows.",
                bestFor: "Growing companies scaling operations.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2"/><polyline points="2 17 12 22 22 17" strokeWidth="2"/><polyline points="2 12 12 17 22 12" strokeWidth="2"/></svg>
              },
              {
                title: "Digital Transformation + Custom AI",
                desc: "Odoo implementation paired with custom AI features designed around your specific workflows.",
                get: "System setup; custom AI automation; predictive reporting; inventory intelligence; sales automation.",
                bestFor: "Companies ready for intelligent automation.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path d="M12 2v20" strokeWidth="2"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2"/></svg>
              },
              {
                title: "Customization & Integration",
                desc: "Custom workflows, modules, dashboards, and integrations shaped around how your business actually runs.",
                get: "Custom module development; third-party integrations; workflow customization; dashboard configuration.",
                bestFor: "Businesses with unique software requirements.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 16v-4" strokeWidth="2"/><path d="M12 8h.01" strokeWidth="2" strokeLinecap="round"/></svg>
              },
              {
                title: "Migration & Upgrade",
                desc: "We move companies off legacy systems, old setups, spreadsheets, or outdated tools into a cleaner modern environment.",
                get: "Migration planning; data cleaning support; legacy system transition; Odoo version upgrades; testing.",
                bestFor: "Companies leaving outdated systems behind.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2"/><polyline points="17 8 12 3 7 8" strokeWidth="2"/><line x1="12" y1="3" x2="12" y2="15" strokeWidth="2"/></svg>
              },
              {
                title: "Training & Ongoing Support",
                desc: "We help your team use the system with confidence well after go-live.",
                get: "User and admin training; workflow documentation; post-launch support; continuous improvement.",
                bestFor: "Teams ensuring long-term system success.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/></svg>
              }
            ].map((srv, idx) => (
              <div key={idx} className="group relative bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-10 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-2 hover:border-brand-orange/30 transition-all duration-500 overflow-hidden flex flex-col" style={{ transitionDelay: `${idx * 50}ms` }}>
                {/* Abstract Pattern Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <svg className="absolute -right-10 -top-10 w-40 h-40 text-brand-orange/5 group-hover:text-brand-orange/10 transition-colors duration-500 transform group-hover:rotate-12" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0,50 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0" />
                </svg>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-500 mb-5 sm:mb-8">
                    {srv.icon}
                  </div>
                  
                  <h3 className="text-[18px] sm:text-[20px] font-extrabold font-sora text-slate-900 mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors duration-300">{srv.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">{srv.desc}</p>
                </div>

                <div className="mt-auto relative z-10 space-y-4 sm:space-y-5 pt-5 sm:pt-6 border-t border-slate-100 group-hover:border-brand-orange/10 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5 sm:mb-2">Included</span>
                    <p className="text-[12px] sm:text-[13px] text-slate-700 font-medium leading-relaxed">{srv.get}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5 sm:mb-2">Best For</span>
                    <p className="text-[12px] sm:text-[13px] text-slate-700 font-medium leading-relaxed">{srv.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It - Premium Process Timeline */}
      <section className="py-32 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              How We Do It
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-sora mb-6 text-slate-900 tracking-tight">
              From Manual to <span className="text-brand-orange">Intelligent</span>
            </h2>
            <p className="text-slate-600 text-[17px] max-w-[600px] mx-auto font-medium leading-relaxed">
              A structured, outcome-focused approach that moves your business from disconnected tools to a connected, AI-powered foundation.
            </p>
          </div>

          <div className="relative max-w-[900px] mx-auto">
            {/* Animated Center Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2">
              <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-brand-orange to-transparent animate-flow-line opacity-50"></div>
            </div>

            <div className="space-y-12">
              {[
                {
                  label: 'Understand',
                  text: 'We review your current operations, tools, workflows, reporting needs, and business goals.',
                },
                {
                  label: 'Map',
                  text: 'We pinpoint which modules, automations, integrations, and AI features will create the most value.',
                },
                {
                  label: 'Implement',
                  text: 'We configure the system, migrate your data, build the workflows, and get your team ready for launch.',
                },
                {
                  label: 'Enhance',
                  text: 'We add AI where it improves operations — from demand prediction and automation to reporting and alerts.',
                },
                {
                  label: 'Support',
                  text: 'We train your team, track adoption, resolve issues, and keep improving the system as the business grows.',
                },
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} animate-on-scroll animate-from-bottom`} style={{ transitionDelay: `${i * 100}ms` }}>
                  
                  {/* Empty space for the opposite side on desktop */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 bg-white border-4 border-orange-50 rounded-full shadow-[0_0_0_1px_rgba(254,215,170,0.5)] flex items-center justify-center z-10 group-hover:border-orange-100 group-hover:shadow-[0_0_0_1px_rgba(249,115,22,0.4)] transition-all duration-500">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-[#ea580c] rounded-full flex items-center justify-center text-white font-sora font-extrabold text-[15px] shadow-sm shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pl-20 md:pl-0 w-full">
                    <div className={`bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-xl group-hover:border-brand-orange/30 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-brand-orange transition-colors duration-500"></div>
                      <h3 className="text-[18px] sm:text-[22px] font-extrabold font-sora text-slate-900 mb-2 sm:mb-4">{item.label}</h3>
                      <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA Banner */}
      <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-brand-orange rounded-[32px] relative overflow-hidden flex flex-col md:flex-row md:items-center min-h-[360px] shadow-[0_20px_50px_rgba(249,115,22,0.15)]">
            {/* Left Content */}
            <div className="w-full md:w-[55%] p-8 md:p-10 lg:p-12 relative z-10 animate-on-scroll animate-zoom-in flex-shrink-0">
              <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-extrabold text-white font-sora mb-6 leading-[1.15] tracking-tight">
                Start the Digital Transformation Your Business Needs Next
              </h2>
              <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center px-7 h-[48px] bg-slate-900 hover:bg-slate-800 text-white rounded-[12px] font-bold text-[14px] font-sora transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Schedule a Consultation
              </a>
              <p className="mt-6 text-white/90 text-[14px] font-medium max-w-[400px]">
                Centralize operations, automate workflows, and layer in AI so your team finally has one system it can trust.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="relative md:absolute right-0 top-0 bottom-0 left-0 md:left-[55%] h-[320px] md:h-auto animate-on-scroll animate-from-right overflow-hidden md:rounded-r-[32px]">
              <img 
                src="/images/cta_dashboard.png" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover object-left md:object-left-top md:shadow-[-8px_0_30px_rgba(0,0,0,0.12)] md:rounded-tl-xl scale-[1.7] origin-left md:origin-center md:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DigitalTransformation
