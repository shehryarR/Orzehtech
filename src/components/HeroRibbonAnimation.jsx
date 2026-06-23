import React from 'react';
import './HeroRibbonAnimation.css';

const HeroRibbonAnimation = () => {
  return (
    <div className="hero-ribbon-container">
      <svg
        className="hero-ribbon-svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" />   {/* Light orange */}
            <stop offset="40%" stopColor="#fb923c" />  {/* Brand orange */}
            <stop offset="80%" stopColor="#ea580c" />  {/* Darker orange */}
            <stop offset="100%" stopColor="#c2410c" /> {/* Deep amber */}
          </linearGradient>

          <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
          </linearGradient>

          <filter id="ribbonShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="10" dy="20" stdDeviation="12" floodColor="#c2410c" floodOpacity="0.1" />
          </filter>
        </defs>

        <g opacity="0.65">
          {/* ======================= */}
          {/* DESKTOP LAYOUT (> 640px) */}
          {/* ======================= */}
          <g className="hidden sm:block">
            {/* Desktop Portal Bottom Left */}
            <g className="portal portal-left">
              <ellipse cx="200" cy="650" rx="140" ry="40" fill="none" stroke="url(#portalGrad)" strokeWidth="3" />
              <ellipse cx="200" cy="650" rx="100" ry="30" fill="none" stroke="url(#portalGrad)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="200" cy="650" rx="70" ry="20" fill="url(#portalGrad)" />
            </g>

            {/* Desktop Portal Top Right */}
            <g className="portal portal-right">
              <ellipse cx="1000" cy="150" rx="120" ry="35" fill="none" stroke="url(#portalGrad)" strokeWidth="3" />
              <ellipse cx="1000" cy="150" rx="85" ry="25" fill="none" stroke="url(#portalGrad)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="1000" cy="150" rx="55" ry="15" fill="url(#portalGrad)" />
            </g>

            {/* Desktop Ribbon Path */}
            <path
              className="animated-ribbon"
              d="M-50,100 C150,-50 300,300 200,650 C100,1000 600,800 800,500 C1000,200 900,-50 1000,150 C1100,350 1250,200 1300,100"
              fill="none"
              stroke="url(#ribbonGrad)"
              strokeWidth="70"
              strokeLinecap="round"
              filter="url(#ribbonShadow)"
            />
            <path
              className="animated-ribbon-highlight"
              d="M-50,100 C150,-50 300,300 200,650 C100,1000 600,800 800,500 C1000,200 900,-50 1000,150 C1100,350 1250,200 1300,100"
              fill="none"
              stroke="#ffffff"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.3"
              filter="blur(3px)"
            />
          </g>

          {/* ======================= */}
          {/* MOBILE LAYOUT (< 640px) */}
          {/* ======================= */}
          <g className="sm:hidden">
            {/* Mobile portals are positioned tighter to the center (X=600 is center) */}
            <g className="portal portal-left">
              <ellipse cx="450" cy="650" rx="90" ry="25" fill="none" stroke="url(#portalGrad)" strokeWidth="3" />
              <ellipse cx="450" cy="650" rx="60" ry="15" fill="none" stroke="url(#portalGrad)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="450" cy="650" rx="40" ry="10" fill="url(#portalGrad)" />
            </g>

            <g className="portal portal-right">
              <ellipse cx="750" cy="150" rx="90" ry="25" fill="none" stroke="url(#portalGrad)" strokeWidth="3" />
              <ellipse cx="750" cy="150" rx="60" ry="15" fill="none" stroke="url(#portalGrad)" strokeWidth="2" opacity="0.6" />
              <ellipse cx="750" cy="150" rx="40" ry="10" fill="url(#portalGrad)" />
            </g>

            {/* Mobile Ribbon Path - much tighter horizontal curve. 
                NOTE: Removed filters (blur/drop shadow) on mobile for massive performance gains! */}
            <path
              className="animated-ribbon"
              d="M300,100 C400,0 550,300 450,650 C350,1000 700,700 750,500 C800,300 650,50 750,150 C850,250 850,150 900,100"
              fill="none"
              stroke="url(#ribbonGrad)"
              strokeWidth="45"
              strokeLinecap="round"
            />
            <path
              className="animated-ribbon-highlight"
              d="M300,100 C400,0 550,300 450,650 C350,1000 700,700 750,500 C800,300 650,50 750,150 C850,250 850,150 900,100"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.25"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default HeroRibbonAnimation;
