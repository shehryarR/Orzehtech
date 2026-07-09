import React, { useEffect } from 'react'
import VoiceAIDashboardMockup from './VoiceAIDashboardMockup'
import ZigZagTimeline from './ZigZagTimeline'

function VoiceAI() {
  useEffect(() => {
    document.title = "Voice AI Agents for Business | Orzeh Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black min-h-[90vh] flex items-center border-b border-white/10">
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes wave-pan {
            0% { transform: translateX(0); }
            100% { transform: translateX(-20%); }
          }
          .animate-wave-pan {
            animation: wave-pan 15s ease-in-out infinite alternate;
          }
        `}} />

        {/* Background Waveform */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex items-end justify-center opacity-30 pb-20">
          <svg className="w-[200%] min-w-[1500px] h-[800px] animate-wave-pan" preserveAspectRatio="none" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chaotic audio wave lines */}
            <path d="M0,100 L20,90 L40,110 L60,80 L80,120 L100,70 L120,130 L140,50 L160,150 L180,90 L200,110 L220,60 L240,140 L260,100 L280,100 L300,90 L320,110 L340,70 L360,130 L380,40 L400,160 L420,80 L440,120 L460,90 L480,110 L500,50 L520,150 L540,100 L560,90 L580,110 L600,60 L620,140 L640,100 L660,100 L680,90 L700,110 L720,70 L740,130 L760,40 L780,160 L800,80 L820,120 L840,90 L860,110 L880,50 L900,150 L920,100 L940,90 L960,110 L980,60 L1000,140" stroke="url(#wave-gradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M0,100 L20,95 L40,105 L60,85 L80,115 L100,75 L120,125 L140,55 L160,145 L180,95 L200,105 L220,65 L240,135 L260,100 L280,100 L300,95 L320,105 L340,75 L360,125 L380,45 L400,155 L420,85 L440,115 L460,95 L480,105 L500,55 L520,145 L540,100 L560,95 L580,105 L600,65 L620,135 L640,100 L660,100 L680,95 L700,105 L720,75 L740,125 L760,45 L780,155 L800,85 L820,115 L840,95 L860,105 L880,55 L900,145 L920,100 L940,95 L960,105 L980,65 L1000,135" stroke="url(#wave-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full pt-32 pb-12">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            
            {/* Left Side: Typography */}
            <div className="text-left animate-on-scroll animate-from-left z-20">
              <h1 className="text-6xl sm:text-7xl lg:text-[80px] font-black text-white leading-[1.05] tracking-tight font-sora mb-8">
                <span className="text-brand-orange">AI</span> - VOICE<br/>
                AGENTS
              </h1>
              <p className="text-lg sm:text-[19px] text-slate-300 leading-relaxed font-medium max-w-xl mb-10">
                Orzeh builds voice agents that pick up the phone, make outbound calls, book appointments, and answer customers, in a voice that actually sounds human. 
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#/book-consultation?scrollTo=form" className="btn-primary-hero">
                  <span>Request a Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side: Robot Image */}
            <div className="relative flex items-center justify-center animate-on-scroll animate-zoom-in lg:-ml-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
              <img src="/images/voice_ai_robot.png" alt="Voice AI Robot" className="w-full max-w-[450px] lg:max-w-[550px] object-contain relative z-10 mix-blend-screen" />
            </div>

          </div>
        </div>
      </section>

      {/* Missed Calls - Minimal Aesthetic Wavy Section */}
      <section className="py-28 relative overflow-hidden bg-[#fffaf5] border-y border-orange-100">
        {/* Solid Two-Color Wavy Gradient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <svg className="absolute w-full h-[150%]" viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ top: '-20%' }}>
            <defs>
              <linearGradient id="solid-wave-grad-voice" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffedd5" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Top Wave */}
            <path fill="url(#solid-wave-grad-voice)" d="M0,0 L1440,0 L1440,250 C1080,450 360,50 0,250 Z" />
            {/* Bottom Wave overlapping */}
            <path fill="#f97316" fillOpacity="0.05" d="M0,600 L1440,600 L1440,350 C1080,150 360,550 0,350 Z" />
          </svg>
        </div>

        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-8 shadow-sm animate-on-scroll animate-zoom-in">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-sora mb-12 leading-[1.1] tracking-tight text-brand-orange animate-on-scroll animate-from-bottom">
            Every Missed Call Is a <br className="hidden sm:block" /> Missed Customer
          </h2>
          
          <div className="space-y-6 text-[17px] sm:text-[19px] leading-[1.8] text-slate-800 text-left font-medium max-w-[800px] mx-auto animate-on-scroll animate-from-bottom" style={{ transitionDelay: '100ms' }}>
            <p>For a lot of businesses, the phone is still where the money is, and also where it leaks. Calls come in after hours, during busy stretches, or faster than the team can pick up, and each one that goes to voicemail is a booking, a sale, or a customer who might not come back. Hiring more people to cover it gets expensive fast.</p>
            <p>A voice agent answers every call, day or night, handles the routine ones from start to finish, and passes the rest to a human, so nothing slips and the team stays focused on the calls that actually need them.</p>
          </div>
        </div>
      </section>

      {/* What Our Agents Handle - Node Diagram Layout */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-12 lg:mb-16 animate-on-scroll animate-zoom-in">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sora mb-6">What Our Voice Agents Handle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">One agent can cover a lot of ground. Depending on your business, ours handle:</p>
          </div>
          
          <div className="relative py-6">
            {/* SVG Connecting Lines (Desktop only) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-10">
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#f97316" />
                </marker>
                <linearGradient id="grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-tr" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="grad-br" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
                </linearGradient>
                <style>
                  {`
                    @keyframes flow-dash {
                      from { stroke-dashoffset: 20; }
                      to { stroke-dashoffset: 0; }
                    }
                    .animate-flow-dash {
                      animation: flow-dash 1s linear infinite;
                    }
                  `}
                </style>
              </defs>

              {/* Lines flowing from boxes to center */}
              <line x1="28%" y1="25%" x2="44%" y2="44%" stroke="url(#grad-tl)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-flow-dash" markerEnd="url(#arrowhead)" />
              <line x1="28%" y1="75%" x2="44%" y2="56%" stroke="url(#grad-bl)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-flow-dash" markerEnd="url(#arrowhead)" />
              <line x1="72%" y1="25%" x2="56%" y2="44%" stroke="url(#grad-tr)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-flow-dash" markerEnd="url(#arrowhead)" />
              <line x1="72%" y1="75%" x2="56%" y2="56%" stroke="url(#grad-br)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-flow-dash" markerEnd="url(#arrowhead)" />
            </svg>

            <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8 items-center relative z-10">
              
              {/* Left Column (Top row on mobile) */}
              <div className="col-span-2 grid grid-cols-2 gap-4 lg:col-span-1 lg:flex lg:flex-col lg:space-y-10 order-1 lg:order-1">
                {[
                  { title: "Inbound support", desc: "Answering questions, resolving common requests, and routing anything complex to the right person.", delay: 100 },
                  { title: "Outbound calls & sales", desc: "Following up on leads, confirming appointments, and running reminders and outreach campaigns.", delay: 200 }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange/30 transition-all duration-300 animate-on-scroll animate-from-left group relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-h-[100px] lg:min-h-0" style={{ transitionDelay: `${item.delay}ms` }}>
                    <h3 className="font-extrabold text-slate-900 font-sora text-[14px] lg:text-[17px] group-hover:text-brand-orange transition-colors mb-0 lg:mb-2">{item.title}</h3>
                    <p className="hidden lg:block text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Center Image/Illustration */}
              <div className="col-span-2 lg:col-span-1 flex justify-center items-center relative z-20 order-2 py-4 lg:py-0 mb-2 lg:mb-0 animate-on-scroll animate-zoom-in">
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-white shadow-[0_10px_30px_rgba(249,115,22,0.1)] flex items-center justify-center border-4 border-white">
                  {/* Decorative outer rings */}
                  <div className="absolute inset-0 rounded-full border border-brand-orange/20 scale-[1.15] pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-full border border-brand-orange/10 scale-[1.3] pointer-events-none animate-spin-slow"></div>
                  
                  {/* Central Voice AI Avatar */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-brand-orange to-[#ff985c] rounded-full flex items-center justify-center text-white shadow-lg relative overflow-hidden">
                    {/* Pulsing background effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 scale-[0.8] sm:scale-100">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="22"></line>
                    </svg>
                  </div>
                  
                  {/* Audio wave animation */}
                  <div className="absolute bottom-5 sm:bottom-8 flex gap-1 items-end justify-center h-5 w-full">
                    <div className="w-1 sm:w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '8px', animationDelay: '0ms' }}></div>
                    <div className="w-1 sm:w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '18px', animationDelay: '100ms' }}></div>
                    <div className="w-1 sm:w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '12px', animationDelay: '200ms' }}></div>
                    <div className="w-1 sm:w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '20px', animationDelay: '150ms' }}></div>
                    <div className="w-1 sm:w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '10px', animationDelay: '50ms' }}></div>
                  </div>
                </div>
              </div>

              {/* Right Column (Bottom row on mobile) */}
              <div className="col-span-2 grid grid-cols-2 gap-4 lg:col-span-1 lg:flex lg:flex-col lg:space-y-10 order-3">
                {[
                  { title: "Appointment booking", desc: "Taking bookings straight into your calendar or system, replacing clunky press-one menus with natural conversation.", delay: 300 },
                  { title: "In-house assistant", desc: "A voice layer over your operations, so staff can check or update information just by asking.", delay: 400 }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-brand-orange/30 transition-all duration-300 animate-on-scroll animate-from-right group relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-h-[100px] lg:min-h-0" style={{ transitionDelay: `${item.delay}ms` }}>
                    <h3 className="font-extrabold text-slate-900 font-sora text-[14px] lg:text-[17px] group-hover:text-brand-orange transition-colors mb-0 lg:mb-2">{item.title}</h3>
                    <p className="hidden lg:block text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How it works & Craft - Premium Dark Section */}
      <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Aesthetic Background Effects */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[150px] pointer-events-none rounded-full transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full transform -translate-x-1/2"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          <div className="animate-on-scroll animate-from-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Seamless Integration
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold font-sora mb-12 leading-[1.1] tracking-tight text-white">Built to Slot Into How You <span className="text-brand-orange">Already Work</span></h2>
            
            <div className="space-y-8 text-[16px] sm:text-[17px] leading-relaxed text-slate-400">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <p>The agent runs on real phone calls, and when a conversation needs a human or a different channel, it transfers cleanly to a live agent or over to WhatsApp.</p>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <p>Everything it does syncs with the CRM of your choice: it books straight into the system, logs the call, and updates records, so your team has a full picture without any manual entry.</p>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <p>It speaks English today, tuned to the accent of the region you are serving, so it sounds local rather than generic.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group animate-on-scroll animate-from-right">
            {/* Animated glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-transparent rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 lg:p-14 rounded-[32px] overflow-hidden group-hover:border-brand-orange/40 group-hover:bg-white/[0.04] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[50px] -mr-10 -mt-10 rounded-full pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/30 transition-all duration-300">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>

              <h2 className="text-3xl font-extrabold font-sora mb-6 text-white tracking-tight">We Treat Voice AI as a Craft</h2>
              <p className="text-[16px] text-slate-300 leading-[1.8] mb-8 font-medium">Plenty of teams can wire up a voice bot. The hard part is building one people are actually willing to talk to. We approach voice AI as much as a craft as an engineering job, tuning tone, pacing, personality, and timing until the conversation feels natural.</p>
              
              <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-2xl">
                <p className="text-[15px] leading-relaxed font-bold text-brand-orange">
                  A caller should be a good minute in before they even wonder whether they are speaking to a person. That human quality is what separates an agent that gets hung up on from one that gets the job done.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Process Section - Animated Timeline */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll animate-from-bottom">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-slate-900 tracking-tight">How We Build It</h2>
          </div>

          <ZigZagTimeline steps={[
            { title: "Discovery", desc: "We learn how your calls actually go: the common questions, the booking flow, and where a human needs to step in.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
            { title: "Design the agent", desc: "We script the conversations and shape the voice, tone, and personality to match your brand and region.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> },
            { title: "Build and integrate", desc: "We connect the agent to your phone line, CRM, calendar, and WhatsApp or live-agent handoff.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
            { title: "Test", desc: "We run it hard against real scenarios and edge cases until it holds up.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> },
            { title: "Launch and tune", desc: "We go live, listen to real calls, and keep refining, because the best agents get better with use.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 5 18 2-9h5"/></svg> }
          ]} />
        </div>
      </section>

      {/* Outcome Section - Portfolio Showcase */}
      <section className="py-28 bg-[#fffaf5] border-y border-orange-100/50">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="animate-on-scroll animate-from-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
              Outcome
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-sora text-slate-900 tracking-tight mb-8">What It Adds Up To</h2>
            
            <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.8] text-slate-700 font-medium">
              <p>The result is coverage you could not staff affordably: every call answered, routine work handled without a person, bookings that land straight in the system, and a team freed for the conversations that genuinely need them.</p>
              
              <div className="bg-white border border-orange-100 p-6 sm:p-8 rounded-2xl shadow-sm mt-8 relative overflow-hidden group hover:border-brand-orange/30 transition-colors duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange"></div>
                <p className="italic text-slate-600">As an illustration of the shape this takes, a clinic buried in appointment calls might route booking and rescheduling to the agent and only involve staff for the exceptions, or a sales team might have every inbound lead called back within seconds instead of hours.</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll animate-from-right lg:pl-10">
            <div className="hover:-translate-y-2 transition-transform duration-500">
              <VoiceAIDashboardMockup />
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl font-black font-sora text-slate-900 mb-6 animate-on-scroll animate-zoom-in">Hear It for Yourself</h2>
          <p className="text-lg text-slate-600 mb-10 animate-on-scroll animate-zoom-in">The fastest way to judge voice AI is to listen to it. Book a demo and hear how the agent handles a real conversation, or start with a consultation and we will map where it would pay off first in your business.</p>
          <div className="flex justify-center gap-4 animate-on-scroll animate-zoom-in">
            <a href="#/book-consultation?scrollTo=form" className="bg-brand-orange hover:bg-brand-gold text-white font-sora font-bold text-[15px] px-8 h-[54px] rounded-xl flex items-center justify-center shadow-lg transition-all">
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VoiceAI
