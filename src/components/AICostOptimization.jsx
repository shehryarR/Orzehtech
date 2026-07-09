import React, { useEffect } from 'react'
import ZigZagTimeline from './ZigZagTimeline'

function AICostOptimization() {
  useEffect(() => {
    document.title = "AI Cost Optimization | Reduce AI Running Costs | Orzeh Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Dark Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Glowing Data Streams Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]"></div>
          
          {/* Animated SVG Nodes/Network */}
          <svg className="absolute inset-0 w-full h-full opacity-20 animate-pulse-slow" xmlns="http://www.w3.org/2000/svg">
            <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
            <circle cx="20%" cy="30%" r="3" fill="#f97316" />
            <circle cx="40%" cy="50%" r="4" fill="#f97316" />
            <circle cx="60%" cy="40%" r="3" fill="#f97316" />
            <circle cx="80%" cy="60%" r="4" fill="#f97316" />
          </svg>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full text-center py-32 mt-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest mb-8 shadow-xl backdrop-blur-sm animate-on-scroll animate-zoom-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            AI Cost Optimization
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white leading-[1.05] tracking-tight font-sora animate-on-scroll animate-from-bottom max-w-5xl mx-auto mb-8">
            Cut the Cost of Running <br className="hidden sm:block" /> <span className="hero-gradient-text">AI in Production</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-medium animate-on-scroll animate-from-bottom max-w-3xl mx-auto mb-12">
            AI gets expensive fast, and most of that spend stays invisible until the invoice lands. We bring your AI running costs under control with full visibility into where the money goes, then optimize prompts, models, and routing so you get the same output for less.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll animate-from-bottom">
            <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
              <span>Get a Cost Review</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[11px] font-bold font-sora text-slate-400 uppercase tracking-widest animate-on-scroll animate-zoom-in">
            <span>Cost Visibility</span>
            <span className="text-brand-orange/40">•</span>
            <span>Prompt Optimization</span>
            <span className="text-brand-orange/40">•</span>
            <span>Model Routing</span>
            <span className="text-brand-orange/40">•</span>
            <span>Caching</span>
            <span className="text-brand-orange/40">•</span>
            <span>Cost Monitoring</span>
          </div>
        </div>
      </section>

      {/* 2. INVISIBLE SPEND SECTION - Premium Large Typography */}
      <section className="py-32 bg-white relative overflow-hidden rounded-t-[3rem] -mt-10 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 block animate-on-scroll animate-from-bottom">The Problem</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 font-sora mb-12 leading-[1.1] tracking-tight animate-on-scroll animate-from-bottom">
            Most AI Spend Is <span className="text-brand-orange">Invisible</span> Until the Bill Arrives
          </h2>
          <div className="space-y-8 text-[18px] text-slate-600 text-left max-w-3xl mx-auto font-medium leading-relaxed animate-on-scroll animate-from-bottom" style={{ transitionDelay: '100ms' }}>
            <p className="border-l-4 border-brand-orange pl-6 py-1 bg-gradient-to-r from-orange-50 to-transparent">When an AI feature ships, the running cost rarely gets the attention the build did. Then usage grows, and the bill climbs with it, without anyone able to say exactly which feature, endpoint, or user is driving the spend. A lot of that cost is avoidable.</p>
            <p className="pl-7">Prompts carry more context than they need, every request hits a top-tier model whether it requires one or not, the same questions get answered from scratch again and again, and nobody is watching closely enough to catch it. Bringing that under control is usually one of the fastest returns available on an AI system that is already in production.</p>
          </div>
        </div>
      </section>

      {/* 3. HOW WE CUT COSTS - Bento Box Grid */}
      <section className="py-32 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 animate-on-scroll animate-zoom-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              Optimization Levers
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sora mb-6 tracking-tight">How We Cut Costs <br className="hidden sm:block" /> Without Cutting Quality</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">The goal is the same result for less money, not a cheaper system that works worse. We pull on several levers, guided by what your usage data actually shows:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Prompt Optimization", 
                desc: "Trimming bloated prompts and unnecessary context so every request carries only what it needs.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
              },
              { 
                title: "Model Selection & Routing", 
                desc: "Sending easy requests to smaller, cheaper models and reserving the expensive ones for tasks that genuinely need them.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
              },
              { 
                title: "Caching Strategies", 
                desc: "Reusing answers to repeated or similar queries instead of paying to generate them again.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 4h16"/></svg>
              },
              { 
                title: "Retrieval Efficiency", 
                desc: "Tightening how much data gets sent to the model, which matters a lot in RAG systems.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              },
              { 
                title: "Quality Guardrails", 
                desc: "Checking that every cost cut holds output quality steady, so savings never come at the expense of results.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              }
            ].map((item, idx) => (
              <div key={idx} className={`group bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] hover:-translate-y-2 hover:border-brand-orange/30 transition-all duration-500 overflow-hidden relative ${idx === 3 || idx === 4 ? 'lg:col-span-1.5' : ''}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-500 mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 font-sora text-[20px] mb-3 group-hover:text-brand-orange transition-colors relative z-10">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISIBILITY & LANGFUSE (Dark Premium Section) */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500/5 blur-[150px] pointer-events-none rounded-full transform -translate-x-1/3"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full transform translate-x-1/2"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="animate-on-scroll animate-from-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Observability
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-sora mb-8 leading-[1.1] tracking-tight text-white">It Starts With <span className="text-blue-400">Visibility</span></h2>
            <div className="space-y-6 text-[16px] sm:text-[17px] leading-relaxed text-slate-400 font-medium mb-12">
              <p>You cannot optimize what you cannot see. Before changing anything, we instrument your system with proper observability, using tools like Langfuse, so we can trace exactly where tokens and money are going: which features, which calls, which users.</p>
              <p>That picture turns cost optimization from guesswork into a targeted exercise, and it stays in place afterward so you can keep an eye on spend as usage grows.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/[0.03] p-5 rounded-2xl border border-white/10 w-max hover:border-white/20 transition-all">
              <span className="text-slate-500 text-[11px] font-bold tracking-widest uppercase">Powered by</span>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="font-sora font-black text-white text-xl tracking-tighter">Langfuse</span>
              </div>
            </div>
          </div>
          
          <div className="relative group animate-on-scroll animate-from-right">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 lg:p-14 rounded-[2rem] overflow-hidden group-hover:border-brand-orange/30 group-hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[50px] -mr-10 -mt-10 rounded-full pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/30 transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </div>

              <h2 className="text-3xl font-extrabold font-sora mb-6 text-white tracking-tight">Who It's For</h2>
              <div className="space-y-4 text-[16px] text-slate-300 leading-relaxed font-medium">
                <p>This is for teams already running AI in production and feeling the cost of it:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3"><span className="text-brand-orange shrink-0">→</span> AI product teams watching margins tighten as usage scales.</li>
                  <li className="flex gap-3"><span className="text-brand-orange shrink-0">→</span> Technical founders whose AI bill is growing faster than revenue.</li>
                  <li className="flex gap-3"><span className="text-brand-orange shrink-0">→</span> Engineering leaders who want spend under control before it explodes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (Vertical Animated Timeline) & OUTCOME */}
      <section className="py-28 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll animate-from-bottom">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6 block w-max mx-auto">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-slate-900 tracking-tight">How We Work</h2>
          </div>

          <ZigZagTimeline steps={[
            { title: "Instrument", desc: "We add observability so every AI call, and its cost, is visible and traceable.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
            { title: "Analyze", desc: "We find where the spend actually goes and where it is being wasted.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
            { title: "Optimize", desc: "We apply the right mix of prompt, model, routing, and caching changes for your system.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
            { title: "Validate", desc: "We confirm output quality holds steady, so lower cost does not mean worse results.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
            { title: "Monitor", desc: "We leave the visibility in place so you can track spend and catch regressions as you grow.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> }
          ]} />
        </div>
      </section>

      <section className="py-24 bg-[#fffaf5] border-b border-orange-100 overflow-hidden relative">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="animate-on-scroll animate-zoom-in text-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 block">Outcome</span>
            <h2 className="text-3xl font-extrabold font-sora mb-6 text-slate-900 tracking-tight">What You Get Out of It</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-[16px] mb-10 relative z-10">
              <p>The outcome is an AI system that costs less to run and is far easier to reason about. You get clear visibility into where every dollar of AI spend goes, a leaner setup that delivers the same quality for less, and the monitoring to keep it that way as usage grows.</p>
              <p>For most teams already in production, this is one of the quickest wins available: the system already works, so the whole gain goes straight to the bottom line.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative z-10 inline-flex flex-col items-center">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">Average Reduction</span>
                  <span className="font-sora font-black text-2xl text-slate-900">40% - 60%</span>
                </div>
              </div>
              <p className="text-[13px] text-slate-500 font-medium text-center">In token costs across optimized production endpoints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black font-sora text-slate-900 mb-6 tracking-tight animate-on-scroll animate-zoom-in">See Where Your AI Spend Is Going</h2>
          <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto animate-on-scroll animate-zoom-in">Start with a cost review: we will look at how your AI is being used, show you where the spend is concentrated, and point to the savings worth capturing first.</p>
          <div className="flex justify-center animate-on-scroll animate-zoom-in">
            <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
              <span>Get a Cost Review</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AICostOptimization
