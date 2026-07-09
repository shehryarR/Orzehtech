import React from 'react';

const VoiceAIDashboardMockup = () => {
  return (
    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] bg-[#f8fafc] border border-slate-200 flex flex-col md:flex-row h-[500px] w-full group cursor-default">
      
      {/* LEFT SIDEBAR */}
      <div className="hidden md:flex flex-col w-[160px] bg-slate-900 text-slate-400 p-4 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-sora font-bold text-lg mb-8 tracking-tight">
          <svg className="w-5 h-5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg>
          ORZEH
        </div>

        {/* Menu Items */}
        <div className="space-y-1 text-[11px] font-medium">
          <p className="text-[9px] uppercase tracking-wider text-slate-500 mb-2 pl-2">Main</p>
          {[
            { name: 'Overview', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
            { name: 'Call Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
            { name: 'Call Metrics', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', active: true },
            { name: 'Reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
            { name: 'Team', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-brand-orange text-white' : 'hover:bg-slate-800 hover:text-slate-200'}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.name}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=32&h=32&q=80" alt="User" />
          </div>
          <div className="text-[9px]">
            <p className="text-slate-200 font-bold">Admin</p>
            <p className="text-slate-500">Online</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto relative custom-scrollbar">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold font-sora text-slate-900">Dashboard <span className="text-lg">✌️</span></h1>
          <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { title: 'Incoming Calls', val: '256k', trend: '+2.5%', isUp: true, active: true },
            { title: 'Answered Calls', val: '136k', trend: '+2.5%', isUp: true, active: false },
            { title: 'Abandoned Calls', val: '120k', trend: '-0.5%', isUp: false, active: false },
            { title: 'Total Calls', val: '376k', trend: '+2.5%', isUp: true, active: false },
          ].map((stat, idx) => (
            <div key={idx} className={`p-3 rounded-xl shadow-sm border ${stat.active ? 'bg-gradient-to-br from-brand-orange to-brand-gold text-white border-transparent' : 'bg-white text-slate-800 border-slate-100'} transition-transform hover:-translate-y-1`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${stat.active ? 'bg-white/20' : 'bg-orange-50 text-brand-orange'}`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <p className={`text-[9px] font-medium truncate ${stat.active ? 'text-white/90' : 'text-slate-500'}`}>{stat.title}</p>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[15px] font-bold font-sora leading-none">{stat.val}</span>
                <span className={`text-[8px] font-bold leading-none ${stat.active ? 'text-white' : (stat.isUp ? 'text-emerald-500' : 'text-red-500')}`}>
                  {stat.trend} {stat.isUp ? '↑' : '↓'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex-1 mb-3 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-4 relative z-10">
            <h3 className="text-[11px] font-bold text-slate-800 font-sora">Overall Calls Volume</h3>
            <div className="flex items-center gap-2 text-[8px] font-bold text-slate-500">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Incoming</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Answered</span>
            </div>
          </div>
          
          {/* Mock Chart Grid */}
          <div className="absolute inset-0 top-[40px] flex flex-col justify-between px-3 pb-3 opacity-50">
            {[1,2,3,4].map(i => <div key={i} className="border-t border-slate-100 w-full h-[25%]"></div>)}
          </div>

          {/* SVG Curves to simulate chart */}
          <div className="absolute inset-0 top-[40px] left-6 right-3 bottom-6 flex items-center">
            <svg viewBox="0 0 1000 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Curve 1: Indigo */}
              <path d="M0,150 C100,150 150,180 200,100 C250,20 300,150 400,120 C500,90 550,180 650,80 C750,-20 850,150 950,100 C980,85 1000,120 1000,120" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" className="opacity-80" />
              {/* Curve 2: Orange */}
              <path d="M0,100 C100,80 150,150 250,50 C350,-50 400,130 500,100 C600,70 650,160 700,50 C750,-60 850,120 950,80 C980,70 1000,100 1000,100" fill="none" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
            </svg>
            
            {/* Mock Tooltip - Positioned higher so it doesn't overlap title */}
            <div className="absolute top-[30%] left-[65%] -translate-x-1/2 -translate-y-full bg-slate-900 text-white text-[8px] px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
              Incoming Calls: <span className="font-bold">256k</span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
            {/* Tooltip dot */}
            <div className="absolute top-[30%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-[1.5px] border-brand-orange rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          </div>
        </div>

        {/* Bottom Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[120px] shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-[11px] font-bold text-slate-800">Best Agents</h3>
              <span className="text-slate-400">•••</span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Sarah Jenkins', score: '4.9/5', calls: 142 },
                { name: 'Michael Chen', score: '4.8/5', calls: 128 }
              ].map((agent, i) => (
                <div key={i} className="flex justify-between items-center text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                    <span className="font-medium text-slate-700">{agent.name}</span>
                  </div>
                  <span className="text-slate-500">{agent.calls} calls</span>
                  <span className="font-bold text-emerald-500">{agent.score}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[11px] font-bold text-slate-800">Geography</h3>
            </div>
            {/* Mock Map Shapes */}
            <div className="absolute inset-0 top-8 left-4 right-4 bottom-2 flex items-center justify-center opacity-40">
              <svg viewBox="0 0 100 50" className="w-full h-full fill-slate-200">
                <path d="M10,20 Q15,10 25,15 T40,20 Q50,15 60,25 T80,20 Q90,30 85,40 T70,35 Q60,45 50,35 T30,40 Q20,35 15,30 Z" />
                <path d="M70,10 Q80,5 90,15 T85,25 Q75,20 70,10 Z" fill="#f97316" />
                <path d="M20,25 Q30,20 35,30 T25,40 Q15,35 20,25 Z" fill="#6366f1" />
              </svg>
            </div>
            <div className="absolute bottom-3 left-4 bg-slate-900 text-white text-[8px] px-2 py-1 rounded shadow-md sm:block hidden">
              US Calls: <span className="font-bold">120k</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VoiceAIDashboardMockup;
