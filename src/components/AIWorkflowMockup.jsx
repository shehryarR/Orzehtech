import React from 'react';

const AIWorkflowMockup = () => {
  return (
    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-[#0f1117] border border-white/10 flex flex-col h-[500px] w-full text-white cursor-default">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#14161f]">
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          <div className="text-[11px] text-slate-400 font-medium tracking-wide">
            Workflows / <span className="text-white font-bold">Orzeh Support Agent v2</span> <span className="text-brand-orange text-[9px] px-1.5 py-0.5 bg-brand-orange/10 rounded ml-2">Draft</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-[#0f1117] border border-white/5 rounded-md px-2 py-1 text-[9px] text-slate-500 w-48">
            <svg className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            Search components...
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 text-[10px] font-medium border border-white/5 hover:bg-white/10 transition-colors">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Test Run
          </button>
          <button className="px-3 py-1.5 rounded-md bg-brand-orange text-white text-[10px] font-bold shadow-lg hover:bg-[#ea580c] transition-colors">
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Library) */}
        <div className="hidden md:flex flex-col w-48 border-r border-white/5 bg-[#14161f] p-3 overflow-y-auto shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-bold text-slate-300 tracking-wider">LIBRARY</h3>
            <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          
          <div className="mb-4">
            <p className="text-[8px] text-slate-500 font-bold uppercase mb-2">Logic Blocks</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#1a1d27] border border-white/5 rounded p-2 text-center hover:border-purple-500/50 cursor-pointer">
                <div className="w-5 h-5 mx-auto mb-1 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-[8px] text-slate-300">AI Reason</span>
              </div>
              <div className="bg-[#1a1d27] border border-white/5 rounded p-2 text-center hover:border-blue-500/50 cursor-pointer">
                <div className="w-5 h-5 mx-auto mb-1 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                </div>
                <span className="text-[8px] text-slate-300">Branch</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[8px] text-slate-500 font-bold uppercase mb-2">Integrations</p>
            <div className="space-y-1.5">
              {[
                { name: 'Slack', desc: 'Send message', color: 'text-rose-400', bg: 'bg-rose-400/20' },
                { name: 'Email', desc: 'Send via SMTP', color: 'text-slate-300', bg: 'bg-slate-500/20' },
                { name: 'Notion', desc: 'Update DB', color: 'text-white', bg: 'bg-white/20' },
                { name: 'Zendesk', desc: 'Manage Ticket', color: 'text-emerald-400', bg: 'bg-emerald-400/20' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-1.5 rounded bg-[#1a1d27] border border-white/5 hover:border-white/10 cursor-pointer">
                  <div className={`w-5 h-5 rounded flex items-center justify-center ${item.bg} ${item.color}`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-200 leading-tight">{item.name}</p>
                    <p className="text-[7px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 bg-[#0a0b0e] relative overflow-x-auto overflow-y-hidden custom-scrollbar flex flex-col items-center pt-8">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-20 min-w-[360px]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          
          <div className="relative z-10 flex flex-col items-center w-full min-w-[340px] max-w-[400px] px-4">
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-[400px] pointer-events-none -z-10" style={{ top: '20px' }}>
              <path d="M200,20 L200,60" stroke="#334155" strokeWidth="2" fill="none" />
              <path d="M200,100 L200,140" stroke="#a855f7" strokeWidth="2" fill="none" />
              
              {/* Branching from Sentiment */}
              <path d="M200,140 L60,180" stroke="#ef4444" strokeWidth="2" fill="none" />
              <path d="M200,140 L200,180" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <path d="M200,140 L340,180" stroke="#10b981" strokeWidth="2" fill="none" />
              
              {/* Down from branches to actions */}
              <path d="M60,220 L60,260" stroke="#ef4444" strokeWidth="2" fill="none" />
              <path d="M200,220 L200,260" stroke="#3b82f6" strokeWidth="2" fill="none" />
              <path d="M340,220 L340,260" stroke="#10b981" strokeWidth="2" fill="none" />
              
              {/* Merge to end */}
              <path d="M60,300 L200,340" stroke="#10b981" strokeWidth="2" fill="none" />
              <path d="M200,300 L200,340" stroke="#10b981" strokeWidth="2" fill="none" />
              <path d="M340,300 L200,340" stroke="#10b981" strokeWidth="2" fill="none" />
            </svg>

            {/* Nodes */}
            {/* Start Node */}
            <div className="bg-[#111827] border border-emerald-500/30 rounded-full px-4 py-2 flex items-center gap-2 mb-[40px] shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <div className="text-center">
                <p className="text-[10px] font-bold text-emerald-100">New Ticket</p>
                <p className="text-[7px] text-emerald-500/70">Zendesk Webhook</p>
              </div>
            </div>

            {/* AI Node */}
            <div className="bg-[#111827] border-2 border-purple-500/50 rounded-lg px-4 py-2 flex items-center gap-2 mb-[40px] shadow-[0_0_20px_rgba(168,85,247,0.2)] relative">
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-brand-orange rounded-full border-2 border-[#111827]"></div>
              <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              <div>
                <p className="text-[10px] font-bold text-purple-100">Analyze Sentiment</p>
                <p className="text-[7px] text-purple-400/70">GPT-4o • 28ms</p>
              </div>
            </div>

            {/* Branch Row */}
            <div className="flex justify-between w-[320px] mb-[40px]">
              <div className="bg-[#111827] border border-rose-500/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 w-24">
                <svg className="w-3 h-3 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <p className="text-[8px] font-bold text-rose-100">Route: Critical</p>
                  <p className="text-[6px] text-rose-500/70">If sentiment &lt; 0.3</p>
                </div>
              </div>
              <div className="bg-[#111827] border border-blue-500/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 w-24">
                <svg className="w-3 h-3 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <p className="text-[8px] font-bold text-blue-100">Route: Inquiry</p>
                  <p className="text-[6px] text-blue-500/70">If type == "Question"</p>
                </div>
              </div>
              <div className="bg-[#111827] border border-emerald-500/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 w-24">
                <svg className="w-3 h-3 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                <div>
                  <p className="text-[8px] font-bold text-emerald-100">Route: Praise</p>
                  <p className="text-[6px] text-emerald-500/70">If sentiment &gt; 0.8</p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex justify-between w-[320px] mb-[40px]">
              <div className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-1.5 w-24 z-10">
                <div className="w-4 h-4 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0"><span className="text-[8px] font-bold">S</span></div>
                <div>
                  <p className="text-[8px] font-bold text-slate-200">Escalate to Slack</p>
                  <p className="text-[6px] text-slate-500">Channel: #urgent</p>
                </div>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-1.5 w-24 z-10">
                <div className="w-4 h-4 rounded bg-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[8px] font-bold text-slate-200">Draft Response</p>
                  <p className="text-[6px] text-slate-500">Using KB Articles</p>
                </div>
              </div>
              <div className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-1.5 w-24 z-10">
                <div className="w-4 h-4 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="text-[8px] font-bold">N</span>
                </div>
                <div>
                  <p className="text-[8px] font-bold text-slate-200">Log Feedback</p>
                  <p className="text-[6px] text-slate-500">Notion: Testimonials</p>
                </div>
              </div>
            </div>

            {/* End Node */}
            <div className="bg-[#111827] border border-emerald-500/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-[10px] font-bold text-emerald-100">Mark Ticket Resolved</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Settings) */}
        <div className="hidden lg:flex flex-col w-64 border-l border-white/5 bg-[#14161f] p-4 shrink-0 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-[11px] font-bold text-white">Analyze Sentiment</h3>
            </div>
            <svg className="w-3 h-3 text-slate-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-[8px] text-slate-500 font-bold uppercase mb-2">AI Model</p>
              <div className="bg-[#1a1d27] border border-white/10 rounded px-3 py-2 flex justify-between items-center text-[10px]">
                <span className="text-slate-200">GPT-4o-mini (Fastest)</span>
                <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <p className="text-[7px] text-slate-500 mt-1">Estimated cost: $0.002 per run</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[8px] text-slate-500 font-bold uppercase">System Prompt</p>
                <p className="text-[7px] text-purple-400 cursor-pointer">Optimize with AI</p>
              </div>
              <div className="bg-[#1a1d27] border border-white/10 rounded p-2 text-[9px] text-slate-300 font-mono leading-relaxed h-24 overflow-hidden relative">
                You are a customer support triage agent. Analyze the incoming message stored in variable {'{trigger.message}'}.
                <br/><br/>
                Output JSON with:<br/>
                1. "sentiment": float (-1.0 to 1.0)<br/>
                2. "urgency": "low", "medium", "high"
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1a1d27] to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-[8px] text-slate-500 font-bold uppercase">Temperature: 0.2</p>
              </div>
              <div className="h-1 bg-white/10 rounded-full w-full relative">
                <div className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full w-1/5"></div>
                <div className="absolute left-1/5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow cursor-pointer"></div>
              </div>
            </div>

            <div>
              <p className="text-[8px] text-slate-500 font-bold uppercase mb-2">Output Schema</p>
              <div className="bg-[#0f1117] border border-white/5 rounded p-2 text-[9px] font-mono text-emerald-400 overflow-hidden">
                <span className="text-slate-500">{'{'}</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">"sentiment"</span>: <span className="text-brand-orange">0.85</span>,<br/>
                &nbsp;&nbsp;<span className="text-blue-300">"urgency"</span>: <span className="text-emerald-300">"low"</span><br/>
                <span className="text-slate-500">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowMockup;
