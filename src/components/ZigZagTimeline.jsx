import React from 'react';

const ZigZagTimeline = ({ steps }) => {
  return (
    <div className="w-full py-10 overflow-hidden relative">
      {/* Mobile Vertical View */}
      <div className="md:hidden space-y-12 relative px-4 py-8">
        {/* Animated Vertical Line */}
        <div className="absolute left-[44px] top-12 bottom-12 w-[2px] z-0 overflow-hidden">
          <svg height="100%" width="100%" preserveAspectRatio="none">
             <line x1="1" y1="0" x2="1" y2="100%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="12 12" style={{ animation: 'dash-flow 4s linear infinite' }} />
          </svg>
        </div>
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-start gap-6 group">
            <div className="shrink-0 relative z-10">
              <div className="w-14 h-14 rounded-full bg-brand-orange border-[6px] border-orange-200 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                {step.icon}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                0{idx + 1}
              </div>
            </div>
            <div className="pt-2">
              <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal ZigZag View */}
      <div className="hidden md:block relative w-full max-w-[1200px] mx-auto min-h-[500px] py-16">
        
        {/* Inner container to hold nodes, giving padding for the edges */}
        <div className="relative w-[calc(100%-160px)] mx-auto h-[250px] mt-10">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash-flow {
              to { stroke-dashoffset: -100; }
            }
          `}} />
          
          {/* Connecting SVG line using percentages for perfect alignment */}
          <div className="absolute top-[50px] left-0 w-full h-[150px] z-0">
             <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 200" style={{ overflow: 'visible' }}>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
                  </marker>
                </defs>
                <path 
                  d="M 0,200 C 100,200 150,0 250,0 C 350,0 400,200 500,200 C 600,200 650,0 750,0 C 850,0 900,200 1000,200" 
                  fill="none" 
                  stroke="#cbd5e1" 
                  strokeWidth="3" 
                  strokeDasharray="12 12"
                  style={{ animation: 'dash-flow 4s linear infinite' }}
                />
             </svg>
          </div>

          {/* Nodes positioned precisely on the curve */}
          {steps.map((step, idx) => {
            const isBottom = idx % 2 === 0; // 0, 2, 4 are bottom (y=200 in SVG)
            const leftPercent = (idx / (steps.length - 1)) * 100;
            
            return (
              <div 
                key={idx} 
                className="absolute flex flex-col items-center group z-10"
                style={{ 
                  left: `${leftPercent}%`, 
                  top: isBottom ? '200px' : '0px',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Number above/below text */}
                <div className={`absolute ${isBottom ? '-bottom-10' : '-top-10'} z-10`}>
                   <span className="text-4xl font-black text-slate-100 drop-shadow-sm">0{idx + 1}</span>
                </div>
                
                {/* Text Content */}
                <div className={`absolute ${isBottom ? 'bottom-[100px]' : 'top-[100px]'} w-52 text-center bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20`}>
                  <h3 className="text-[17px] font-bold font-sora text-slate-900 mb-2 leading-tight">{step.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">{step.desc}</p>
                </div>

                {/* Main Node Circle */}
                <div className="w-[84px] h-[84px] rounded-full bg-brand-orange border-[10px] border-orange-200 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-orange-300 transition-all duration-300 text-white relative z-30">
                  {step.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ZigZagTimeline;
