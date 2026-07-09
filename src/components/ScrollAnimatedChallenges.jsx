import React from 'react';

const ScrollAnimatedChallenges = () => {
  const challenges = [
    { 
      title: 'Manual Overload', 
      desc: 'Teams repeat the same tasks weekly', 
      tag: 'INEFFICIENT', 
      color: '#f97316', 
      bgColor: 'bg-orange-50/40',
      borderColor: 'border-orange-100',
      tagBg: 'bg-orange-100/50',
      tagText: 'text-orange-500'
    },
    { 
      title: 'AI Vulnerability', 
      desc: 'No one knows how secure the AI is', 
      tag: 'UNSECURED', 
      color: '#f97316', 
      bgColor: 'bg-orange-50/40',
      borderColor: 'border-orange-100',
      tagBg: 'bg-orange-100/50',
      tagText: 'text-orange-500'
    },
    { 
      title: 'Data Silos', 
      desc: 'Data scattered across tools and sheets', 
      tag: 'FRAGMENTED', 
      color: '#f97316', 
      bgColor: 'bg-orange-50/40',
      borderColor: 'border-orange-100',
      tagBg: 'bg-orange-100/50',
      tagText: 'text-orange-500'
    },
    { 
      title: 'Blind Decisions', 
      desc: "Reports outdated before they're read", 
      tag: 'STALE', 
      color: '#f97316', 
      bgColor: 'bg-orange-50/40',
      borderColor: 'border-orange-100',
      tagBg: 'bg-orange-100/50',
      tagText: 'text-orange-500'
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 py-4">
      {challenges.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border ${item.borderColor} ${item.bgColor} transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default animate-on-scroll`}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div>
            <h4 className="text-lg font-black text-slate-900 font-sora tracking-tight mb-1">
              {item.title}
            </h4>
            <p className="text-[13px] sm:text-sm text-slate-500 font-medium">
              {item.desc}
            </p>
          </div>
          
          <div 
            className={`shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${item.tagBg} ${item.tagText}`}
          >
            {item.tag}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimatedChallenges;
