import React, { useEffect } from 'react'
import AIWorkflowMockup from './AIWorkflowMockup'
import ZigZagTimeline from './ZigZagTimeline'

function AIAutomation() {
  useEffect(() => {
    document.title = "AI Automation & Workflow Efficiency | Orzeh Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black min-h-[90vh] flex items-center border-b border-white/10">
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes circuit-pan {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20%); }
          }
          .animate-circuit-pan {
            animation: circuit-pan 20s linear infinite alternate;
          }
        `}} />

        {/* Background Image (Low Opacity) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-[150px] pointer-events-none"></div>
          <img src="/images/ai_automation_hero.png" alt="AI Automation Background" className="w-full h-full object-cover opacity-[0.25] mix-blend-screen" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)', maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)' }} />
        </div>

        {/* Background Data Nodes / Circuitry */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center opacity-30 z-0">
          <svg className="w-full h-[150%] min-h-[1200px] animate-circuit-pan" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,0 V1000 M300,0 V1000 M500,0 V1000 M700,0 V1000 M900,0 V1000 M0,100 H1000 M0,300 H1000 M0,500 H1000 M0,700 H1000 M0,900 H1000" stroke="#f97316" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
            <circle cx="300" cy="300" r="4" fill="#f97316" />
            <circle cx="700" cy="500" r="6" fill="#f97316" opacity="0.6"/>
            <circle cx="500" cy="700" r="4" fill="#f97316" />
            <circle cx="900" cy="100" r="8" fill="#f97316" opacity="0.4"/>
            <circle cx="100" cy="900" r="5" fill="#f97316" />
            
            <path d="M100,300 L300,300 L300,500 L700,500 L700,700" stroke="url(#circuit-grad)" strokeWidth="3" fill="none" strokeLinejoin="round" />
            <path d="M900,100 L900,300 L500,300 L500,700 L100,700" stroke="url(#circuit-grad)" strokeWidth="2" fill="none" strokeLinejoin="round" opacity="0.5" />
            
            <defs>
              <linearGradient id="circuit-grad" x1="0" y1="0" x2="1000" y2="1000" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" stopOpacity="0" />
                <stop offset="0.5" stopColor="#f97316" stopOpacity="1" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 w-full pt-40 pb-20 text-center flex flex-col items-center justify-center">
            
          <h1 className="text-6xl sm:text-7xl lg:text-[80px] font-black text-white leading-[1.05] tracking-tight font-sora mb-8 animate-on-scroll animate-from-bottom">
            <span className="text-brand-orange">AI</span> - WORKFLOW<br/>
            AUTOMATION
          </h1>
          <p className="text-lg sm:text-[20px] text-slate-300 leading-relaxed font-medium max-w-2xl mx-auto mb-10 animate-on-scroll animate-from-bottom" style={{ transitionDelay: '100ms' }}>
            Automate the repetitive work that's slowing your team down. We connect your systems, process documents, and build agents so your team can focus on output.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-on-scroll animate-zoom-in" style={{ transitionDelay: '200ms' }}>
            <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
              <span>Get an Automation Audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Hidden Costs - Minimal Aesthetic Wavy Section (Mirrors Missed Calls) */}
      <section className="py-28 relative overflow-hidden bg-[#fffaf5] border-y border-orange-100">
        {/* Solid Two-Color Wavy Gradient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <svg className="absolute w-full h-[150%]" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ top: '-20%' }}>
            <defs>
              <linearGradient id="solid-wave-grad-auto" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffedd5" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Top Wave */}
            <path fill="url(#solid-wave-grad-auto)" d="M0,0 L1440,0 L1440,250 C1080,450 360,50 0,250 Z" />
            {/* Bottom Wave overlapping */}
            <path fill="#f97316" fillOpacity="0.05" d="M0,600 L1440,600 L1440,350 C1080,150 360,550 0,350 Z" />
          </svg>
        </div>

        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm animate-on-scroll animate-zoom-in">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-sora mb-12 leading-[1.1] tracking-tight text-brand-orange animate-on-scroll animate-from-bottom">
            The Hidden Cost of <br className="hidden sm:block" /> Doing It by Hand
          </h2>
          
          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8] text-slate-800 text-left font-medium max-w-[800px] mx-auto animate-on-scroll animate-from-bottom" style={{ transitionDelay: '100ms' }}>
            <p>Manual work is easy to underestimate because it is spread out. A few minutes copying data between systems here, an hour reconciling invoices there, a report someone rebuilds by hand every week. Individually it looks small.</p>
            <p>Added up across a team and a year, it is a serious drain on time, money, and morale, and it is usually work your best people should not be doing. Automation takes that load off, quietly running the repetitive tasks in the background so the team can spend its hours on the work that actually moves the business.</p>
          </div>
        </div>
      </section>

      {/* What We Automate - Grid */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 lg:mb-20 animate-on-scroll animate-zoom-in max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sora mb-6 tracking-tight">What We Automate</h2>
            <p className="text-lg text-slate-600 leading-relaxed">If a task is repetitive, rule-based, or moves information from one place to another, it is usually a candidate. Common areas include:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-orange/20 relative z-10 bg-white">
            {[
              { title: "Workflow automation", desc: "Connecting the steps of a process so it runs end to end without someone shepherding it along.", image: "/images/auto_workflow.png" },
              { title: "Document & invoices", desc: "Pulling data out of documents, invoices, and forms, and routing it where it needs to go.", image: "/images/auto_document.png" },
              { title: "Email & CRM", desc: "Follow-ups, data entry, lead routing, and the admin that piles up around sales and support.", image: "/images/auto_email.png" },
              { title: "Reporting", desc: "Assembling the reports your team rebuilds by hand, on schedule and without the copy-paste.", image: "/images/auto_reporting.png" },
              { title: "System integrations", desc: "Getting your tools to talk to each other so data stops being re-keyed.", image: "/images/auto_integration.png" },
              { title: "Agentic workflows", desc: "AI agents that handle multi-step tasks needing a bit of judgment, not just fixed rules.", image: "/images/auto_agent.png" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border-b border-r border-brand-orange/20 p-8 sm:p-10 flex flex-col items-center text-center hover:bg-orange-50/50 transition-colors duration-300 group">
                <div className="w-full h-48 mb-8 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-xl group-hover:shadow-brand-orange/20 transition-all duration-300 border border-slate-100 group-hover:border-brand-orange/30">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-extrabold text-slate-900 font-sora text-[22px] mb-4 group-hover:text-brand-orange transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-[280px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Audience - Premium Dark Section (Mirrors Built to Slot) */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Aesthetic Background Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[150px] pointer-events-none rounded-full transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full transform -translate-x-1/2"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          <div className="animate-on-scroll animate-from-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Platform Agnostic
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-sora mb-12 leading-[1.1] tracking-tight text-white">The Right <span className="text-brand-orange">Tools</span> for the Job</h2>
            
            <div className="space-y-8 text-[16px] sm:text-[17px] leading-relaxed text-slate-400">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 12 15 22 22 12 2"></polygon></svg>
                </div>
                <p>We are not tied to one platform. Depending on what fits, we build on tools like Make, n8n, or Zapier, wire in LLM agents where a task needs reasoning, or build something custom when off-the-shelf will not cut it.</p>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <p>What matters is that the automation is reliable, does the job, and holds up as your business changes, not which logo is behind it.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group animate-on-scroll animate-from-right">
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-transparent rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 lg:p-14 rounded-[32px] overflow-hidden group-hover:border-brand-orange/40 group-hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[50px] -mr-10 -mt-10 rounded-full pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/30 transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>

              <h2 className="text-3xl font-extrabold font-sora mb-6 text-white tracking-tight">Who It's For</h2>
              <p className="text-[16px] text-slate-300 leading-[1.8] mb-8 font-medium">Automation pays off fastest for teams stretched thin by admin and repetitive process.</p>
              
              <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-2xl">
                <p className="text-[15px] leading-relaxed font-bold text-brand-orange">
                  We work with SMBs, operations and finance teams buried in manual data work, sales teams drowning in follow-ups, and founders who would rather grow output than grow headcount just to keep up.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Process Section - Animated Timeline */}
      <section className="py-28 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll animate-from-bottom">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-slate-900 tracking-tight">How We Work</h2>
          </div>

          <ZigZagTimeline steps={[
            { title: "Audit", desc: "We map your processes and hand you a prioritized list of automations, ranked by efficiency.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
            { title: "Prioritize", desc: "We agree on where to start, usually the automations with the best payoff for the least disruption.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
            { title: "Build", desc: "We build and configure the automation on whatever tooling fits the job.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg> },
            { title: "Integrate", desc: "We connect it to your systems and run it against real cases until dependable.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
            { title: "Optimize", desc: "We monitor how it performs and expand coverage as new opportunities surface.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg> }
          ]} />
        </div>
      </section>

      {/* Outcome Section - Portfolio Showcase */}
      <section className="py-28 bg-[#fffaf5] border-y border-orange-100/50 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll animate-from-bottom">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
              Outcome
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-slate-900 tracking-tight mb-8">What You Get Out of It</h2>
            
            <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.8] text-slate-700 font-medium">
              <p>The point of all of this is simple: more done, with less manual effort, at lower cost. Hours come back to the team, errors from manual entry drop, and work that used to wait on someone's availability just happens.</p>
              
              <div className="bg-white border border-orange-100 p-6 rounded-2xl shadow-sm mt-8 relative overflow-hidden group hover:border-brand-orange/30 transition-colors duration-300 inline-block text-left">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange"></div>
                <p className="italic text-slate-600 text-sm">As an illustration of the shape this takes, a finance team might stop rekeying invoices and let the system capture and route them automatically, or a sales team might have every new lead logged, assigned, and followed up without anyone touching a spreadsheet.</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll animate-zoom-in max-w-[1000px] mx-auto">
            <div className="hover:-translate-y-2 transition-transform duration-500 shadow-2xl rounded-[2rem]">
              <AIWorkflowMockup />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-white text-center border-t border-slate-100">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black font-sora text-slate-900 mb-6 tracking-tight animate-on-scroll animate-zoom-in">Find Out What's Worth Automating</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto animate-on-scroll animate-zoom-in leading-relaxed">The best first step is the audit: a short review of your processes and a prioritized list of what to automate first, with the impact of each one spelled out.</p>
          <div className="flex justify-center gap-4 animate-on-scroll animate-zoom-in">
            <a href="#/book-consultation?scrollTo=form" className="bg-brand-orange hover:bg-[#ea580c] text-white font-sora font-bold text-[16px] px-10 py-5 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-1 transition-all duration-300">
              Get an Automation Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIAutomation
