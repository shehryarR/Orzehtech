import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function ErpAiSolutions() {
  useEffect(() => {
    document.title = "ERP + AI Solutions | Orzeh Technologies";
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      title: "Odoo Core Implementation",
      desc: "A focused ERP implementation for businesses ready to replace spreadsheets and disconnected tools.",
      whatYouGet: [
        "Odoo setup & configuration",
        "Core modules (Accounting, Sales, CRM)",
        "Invoicing & Inventory tracking",
        "Basic data migration & team training"
      ],
      bestFor: "Small to mid-sized businesses",
      cta: "Implement Core ERP",
      icon: (
        <svg className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-500" viewBox="0 0 32 32" fill="none">
          <rect x="11" y="2" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="2.5" fill="rgba(249, 115, 22, 0.05)" />
          <rect x="2" y="19" width="8" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="12" y="19" width="8" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="22" y="19" width="8" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M16 9 V14 M16 14 H6 V19 M16 14 H26 V19 M16 14 V19" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" className="animate-pulse" />
        </svg>
      )
    },
    {
      title: "Odoo Advanced Implementation",
      desc: "A complete ERP build for businesses with complex operations, multiple teams, and custom workflows.",
      whatYouGet: [
        "Advanced modules & custom workflows",
        "Manufacturing & eCommerce integration",
        "Project Management & HRMS setup",
        "AI-ready structure & advanced training"
      ],
      bestFor: "Growing scale-ups & enterprises",
      cta: "Build Advanced ERP",
      icon: (
        <svg className="w-6 h-6 text-blue-500 group-hover:rotate-45 transition-transform duration-700" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.05)" />
          <path d="M16 6 V10 M16 22 V26 M6 16 H10 M22 16 H26 M9 9 L12 12 M20 20 L23 23 M9 23 L12 20 M20 12 L23 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="6" r="1.5" fill="currentColor" className="animate-ping" />
          <circle cx="26" cy="16" r="1.5" fill="currentColor" />
          <circle cx="16" cy="26" r="1.5" fill="currentColor" />
          <circle cx="6" cy="16" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "ERP + Custom AI Solutions",
      desc: "An intelligent ERP setup paired with custom AI capabilities built directly on top of your workflows.",
      whatYouGet: [
        "ERP configuration + custom AI agents",
        "Predictive reporting & inventory forecast",
        "Sales lead scoring & CRM automation",
        "Financial anomaly alerts & cash flows"
      ],
      bestFor: "Companies ready for predictive operations",
      cta: "Add AI to Your ERP",
      icon: (
        <svg className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-500" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="4" fill="currentColor" className="animate-pulse" />
          <circle cx="6" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="26" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
          <line x1="8.5" y1="9.8" x2="13.2" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="23.5" y1="9.8" x2="18.8" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="8.5" y1="22.2" x2="13.2" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="23.5" y1="22.2" x2="18.8" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M6 11 V21 M26 11 V21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: "ERP Customization & Integration",
      desc: "Custom ERP modules, personalized dashboards, and third-party API integrations shaped to your needs.",
      whatYouGet: [
        "Tailored module development",
        "Third-party API & software sync",
        "Custom workflow logic & scripting",
        "Interactive analytics dashboards"
      ],
      bestFor: "Businesses with unique custom processes",
      cta: "Customize Your ERP",
      icon: (
        <svg className="w-6 h-6 text-amber-500 group-hover:translate-y-[-2px] transition-transform duration-500" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="12" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2.5" />
          <rect x="18" y="12" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2.5" />
          <path d="M14 17 H18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
          <circle cx="16" cy="17" r="2" fill="currentColor" />
          <path d="M9 8 H23" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M16 8 V12" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "ERP Migration & Upgrade",
      desc: "Clean migration off spreadsheets, legacy ERP software, or older versions to a modern architecture.",
      whatYouGet: [
        "Data cleaning & migration mapping",
        "Legacy transition support",
        "Safe Odoo version upgrades",
        "Comprehensive testing & team handover"
      ],
      bestFor: "Companies stuck on outdated software",
      cta: "Plan ERP Migration",
      icon: (
        <svg className="w-6 h-6 text-emerald-500 group-hover:translate-y-[-4px] transition-transform duration-500" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="20" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="18" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)" />
          <path d="M9 20 V15 C9 11 13 9 16 9 M16 9 H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />
          <polygon points="18,7 22,9 18,11" fill="currentColor" />
          <circle cx="9" cy="24" r="1" fill="currentColor" />
          <circle cx="23" cy="8" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Training & Ongoing Support",
      desc: "Comprehensive training and daily technical support to ensure your team utilizes the new system to its fullest.",
      whatYouGet: [
        "Hands-on team & admin training",
        "Custom workflow manuals & video guides",
        "Dedicated post-launch helpdesk",
        "Continuous performance audits"
      ],
      bestFor: "Teams aiming for high system adoption",
      cta: "Support Your ERP Team",
      icon: (
        <svg className="w-6 h-6 text-indigo-500 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 1" className="animate-[spin_12s_linear_infinite]" />
          <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 2 V6 M16 26 V30 M2 16 H6 M26 16 H30" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  const aiFeaturesData = [
    {
      title: "Inventory Prediction & Stockouts",
      desc: "Forecast demand fluctuations and identify stockout limits.",
      isDoubleWidth: true,
      illustration: (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 p-4">
          <div className="flex flex-col gap-2 text-left font-mono text-[9px] text-slate-400 shrink-0">
            <div>
              <span className="text-slate-500 block">Forecast Accuracy</span>
              <span className="text-[13px] font-bold text-slate-200">98.4%</span>
            </div>
            <div>
              <span className="text-slate-500 block">Lead Time Optimized</span>
              <span className="text-[13px] font-bold text-slate-200">-40%</span>
            </div>
          </div>
          <div className="flex-1 w-full h-full min-h-[90px] relative">
            <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="40" x2="160" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="60" x2="160" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              
              {/* Stockout Limit Line */}
              <line x1="0" y1="65" x2="160" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
              <text x="120" y="61" fill="#ef4444" fontSize="5" fontWeight="bold" fontFamily="Sora, sans-serif">STOCKOUT LIMIT</text>

              {/* Historical Stock Line */}
              <path d="M 0 15 L 20 25 L 40 18 L 60 30 L 80 40 L 100 48" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />

              {/* Predicted Stock Line */}
              <path d="M 100 48 L 120 58 L 130 65 L 140 68 L 160 72" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              
              {/* Pulsing Intersection dot */}
              <circle cx="130" cy="65" r="4" fill="#ef4444" className="ill-chart-dot" />
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Automated Purchase Suggestions",
      desc: "AI-driven purchase orders matched to demand cycles.",
      isDoubleWidth: false,
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-3 font-mono text-[9px]">
          <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
            <span className="font-bold text-slate-300">Auto-Order #PO-902</span>
            <span className="text-brand-orange font-bold animate-pulse">PENDING</span>
          </div>
          <div className="pt-2 flex justify-between items-end">
            <div>
              <div className="text-[7.5px] text-slate-500">Restock Proposal</div>
              <div className="text-[12px] font-extrabold text-slate-100 font-sora truncate">Copper Pipe 1.5"</div>
              <div className="text-[9px] text-slate-400 mt-0.5">Qty: 400 • Supplier B</div>
            </div>
            <button className="px-3 py-1.5 bg-brand-orange text-white rounded-lg text-[9px] font-bold shadow-md shadow-brand-orange/15 hover:bg-brand-orange/90 transition-all scale-95">
              Approve
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Lead Qualification & CRM Support",
      desc: "Prioritize prospects and recommend targeted sales follow-ups.",
      isDoubleWidth: false,
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-3 font-mono text-[9px]">
          <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
            <span className="font-bold text-slate-300">Lead Score Analysis</span>
          </div>
          <div className="pt-2 flex items-center gap-3">
            {/* Lead Score Circle Gauge */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="url(#leadScoreGrad)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="15" strokeLinecap="round" />
                <defs>
                  <linearGradient id="leadScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-sora font-extrabold text-slate-100 text-[10px]">94</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-extrabold text-slate-200 text-[10px] truncate">John Doe (CTO)</div>
              <div className="text-[7.5px] text-slate-500 truncate">SaaS Enterprise</div>
              <div className="text-[8px] text-emerald-400 font-bold mt-0.5">High Intent • Follow up</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Customer Service Automation",
      desc: "Deploy ticket routers and automated client response summaries.",
      isDoubleWidth: false,
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-3 font-mono text-[8.5px] text-slate-400">
          <div className="bg-slate-800/20 border border-slate-800/80 rounded-xl p-2 flex gap-2 items-start max-w-[85%] self-start text-left">
            <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[7px] text-slate-300 font-bold shrink-0">U</div>
            <span className="leading-relaxed">Where is my cargo delivery?</span>
          </div>
          <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-xl p-2 flex gap-2 items-start max-w-[85%] self-end text-left mt-2">
            <div className="w-4 h-4 rounded-full bg-brand-orange text-white flex items-center justify-center text-[7px] font-bold shrink-0">AI</div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-200 leading-relaxed">It's at Terminal 3. Dispatch...</span>
              <div className="flex gap-1 items-center mt-1">
                <span className="w-1 h-1 rounded-full bg-brand-orange animate-bounce" />
                <span className="w-1 h-1 rounded-full bg-brand-orange animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-1 h-1 rounded-full bg-brand-orange animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Financial Forecasting",
      desc: "Cash flow prediction models and financial anomaly alerts.",
      isDoubleWidth: true,
      illustration: (
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 p-4">
          <div className="flex flex-col gap-2 text-left font-mono text-[9px] text-slate-400 shrink-0">
            <div>
              <span className="text-slate-500 block">Q3 Cash Projection</span>
              <span className="text-[13px] font-bold text-slate-200">+24.8%</span>
            </div>
            <div>
              <span className="text-slate-500 block">Anomaly Detection</span>
              <span className="text-[13px] font-bold text-emerald-400">0 Alerts</span>
            </div>
          </div>
          <div className="flex-1 w-full h-full min-h-[90px] relative flex items-end justify-between px-2">
            <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
              <line x1="0" y1="20" x2="160" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="40" x2="160" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="0" y1="60" x2="160" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

              <rect x="15" y="35" width="14" height="45" rx="3" fill="rgba(255,255,255,0.15)" />
              <text x="22" y="77" fill="rgba(255,255,255,0.3)" fontSize="6" textAnchor="middle">M1</text>

              <rect x="45" y="25" width="14" height="55" rx="3" fill="rgba(255,255,255,0.15)" />
              <text x="52" y="77" fill="rgba(255,255,255,0.3)" fontSize="6" textAnchor="middle">M2</text>

              <rect x="75" y="15" width="14" height="65" rx="3" fill="url(#forecastingBarGrad)" className="ill-dashboard-bar" />
              <text x="82" y="77" fill="#f97316" fontSize="6" textAnchor="middle">M3 (P)</text>

              <rect x="105" y="10" width="14" height="70" rx="3" fill="url(#forecastingBarGrad)" className="ill-dashboard-bar" style={{ animationDelay: '0.5s' }} />
              <text x="112" y="77" fill="#f97316" fontSize="6" textAnchor="middle">M4 (P)</text>

              <rect x="135" y="5" width="14" height="75" rx="3" fill="url(#forecastingBarGrad)" className="ill-dashboard-bar" style={{ animationDelay: '1s' }} />
              <text x="142" y="77" fill="#f97316" fontSize="6" textAnchor="middle">M5 (P)</text>

              <defs>
                <linearGradient id="forecastingBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="rgba(249, 115, 22, 0.15)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )
    },
    {
      title: "Smart Reporting",
      desc: "Automated daily, weekly, or monthly operational summaries.",
      isDoubleWidth: false,
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-3 font-mono text-[9px]">
          <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
            <span className="font-bold text-slate-300">Weekly Executive Summary</span>
          </div>
          <div className="pt-2 space-y-2 text-[8px]">
            <div className="flex justify-between">
              <span className="text-slate-500">Revenue Growth</span>
              <span className="text-emerald-400 font-bold">+$42,500 (+12%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Order Cycle Time</span>
              <span className="text-blue-400 font-bold">1.2 days (-18%)</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full" style={{ width: '84%' }} />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Workflow Recommendations",
      desc: "Operational guidance to streamline recurring tasks.",
      isDoubleWidth: false,
      illustration: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <svg className="w-full h-full" viewBox="0 0 160 80" fill="none">
            <path d="M 40 25 L 80 55 L 120 25" stroke="rgba(249, 115, 22, 0.2)" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 40 25 L 80 55 L 120 25" stroke="#f97316" strokeWidth="2" strokeDasharray="6 40" strokeDashoffset="46" className="animate-dash" />
            
            <circle cx="40" cy="25" r="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="40" y="27" fill="#cbd5e1" fontSize="5" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Task A</text>

            <circle cx="80" cy="55" r="14" fill="#0f172a" stroke="#f97316" strokeWidth="1.5" className="ill-alert-card" />
            <text x="80" y="57" fill="#f97316" fontSize="6" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">AI Rec</text>

            <circle cx="120" cy="25" r="10" fill="#1e293b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="120" y="27" fill="#cbd5e1" fontSize="5" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Task B</text>
          </svg>
        </div>
      )
    }
  ];

  const operationsData = [
    {
      num: "01",
      title: "Accounting, invoicing, and purchasing",
      desc: "Centralize financial tracking, automate supplier invoicing, and manage purchase cycles with real-time general ledger sync.",
      color: "brand-orange",
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-700">Invoice #INV-2026</span>
            <span className="px-2 py-0.5 bg-emerald-500 text-white rounded text-[8px] font-bold">PAID</span>
          </div>
          <div className="flex justify-between items-end pt-2">
            <div>
              <div className="text-[8px] text-slate-400">Total Amount</div>
              <div className="text-[14px] font-black text-slate-900 font-sora">$14,820.00</div>
            </div>
            <svg className="w-16 h-8 text-emerald-500" viewBox="0 0 50 20" fill="none">
              <path d="M2 18 L12 12 L22 15 L32 6 L42 8 L48 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Inventory and manufacturing",
      desc: "Track stock moves, manage bills of materials, and schedule assembly work orders with smart replenishment rules.",
      color: "brand-blue",
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-slate-400">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-slate-700">Work Order #WO-481</span>
            <span className="text-brand-blue font-bold">65%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3">
            <div className="bg-brand-blue h-full rounded-full" style={{ width: '65%' }} />
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-[8px]">
            <div className="bg-slate-50 p-1 rounded border border-slate-100">
              <span className="block text-slate-500">Raw Stock</span>
              <span className="font-bold text-slate-800 text-[10px]">84%</span>
            </div>
            <div className="bg-slate-50 p-1 rounded border border-slate-100">
              <span className="block text-slate-500">Finished</span>
              <span className="font-bold text-slate-800 text-[10px]">92%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Sales and CRM",
      desc: "Nurture client relationships, automate sales pipelines, and track deals from initial lead down to final contract signature.",
      color: "brand-gold",
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-700">Active Opportunity</span>
            <span className="text-brand-gold font-bold">85% Prob.</span>
          </div>
          <div className="pt-2">
            <div className="text-[11px] font-extrabold text-slate-900 font-sora truncate">Enterprise ERP Deal</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-slate-500 text-[9px]">$120,000</span>
              <span className="text-[8px] bg-amber-50 text-brand-gold border border-brand-gold/20 px-1.5 py-0.5 rounded font-bold">NEGOTIATION</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "04",
      title: "Project management and HRMS",
      desc: "Track team timesheets, organize task backlogs, manage employee directory, and coordinate project deadlines in real time.",
      color: "brand-orange",
      illustration: (
        <div className="w-full h-full flex flex-col p-4 font-mono text-[8px] text-slate-400">
          <div className="font-bold text-slate-700 mb-2 border-b border-slate-100 pb-1.5 flex justify-between">
            <span>Sprint Backlog</span>
            <span className="text-brand-orange">8 Tasks</span>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="bg-slate-50 p-2 rounded border border-slate-100/80 flex flex-col gap-1.5">
              <span className="font-bold text-slate-400 uppercase text-[6px]">In Progress</span>
              <div className="bg-white p-1 rounded shadow-2xs border border-slate-100 text-[8px] font-semibold text-slate-800 leading-tight">Data migration</div>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-100/80 flex flex-col gap-1.5">
              <span className="font-bold text-slate-400 uppercase text-[6px]">Done</span>
              <div className="bg-white p-1 rounded shadow-2xs border border-slate-100 text-[8px] font-semibold text-slate-400 line-through leading-tight">Odoo config</div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "05",
      title: "eCommerce and customer service operations",
      desc: "Connect online storefront sales directly to warehouse inventory, and route customer support tickets automatically.",
      color: "brand-blue",
      illustration: (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-slate-400">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-700">Ticket #1024</span>
            <span className="px-1.5 py-0.5 bg-rose-500 text-white rounded text-[7px] font-bold">HIGH</span>
          </div>
          <div className="pt-2">
            <div className="text-[10px] font-bold text-slate-800 truncate">Storefront API sync error</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-[8px] text-slate-500">Route: Tier-2 Eng.</span>
              <span className="text-[8px] text-brand-blue font-bold">Auto-assigned</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "06",
      title: "Reporting and workflow automation",
      desc: "Generate instant business reports and trigger custom automated workflows to eliminate manual data entry.",
      color: "brand-gold",
      illustration: (
        <div className="w-full h-full flex items-center justify-center p-3">
          <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
            <path d="M 30 40 L 100 40 L 170 40" stroke="rgba(217, 119, 6, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 30 40 L 100 40 L 170 40" stroke="#d97706" strokeWidth="2" strokeDasharray="8 60" strokeDashoffset="68" className="animate-dash" />
            
            <rect x="10" y="25" width="45" height="30" rx="8" fill="#ffffff" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5" />
            <text x="32" y="42" fill="#f97316" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">New Sale</text>
            
            <rect x="80" y="25" width="40" height="30" rx="8" fill="#ffffff" stroke="rgba(2, 132, 199, 0.3)" strokeWidth="1.5" />
            <text x="100" y="42" fill="#0284c7" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Invoice</text>
            
            <rect x="145" y="25" width="45" height="30" rx="8" fill="#ffffff" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" />
            <text x="167" y="42" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="Sora, sans-serif" textAnchor="middle">Notify</text>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-orange/20 overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-12 lg:min-h-[85vh] lg:flex lg:items-center border-b border-border-light overflow-hidden bg-white">
        
        {/* Soft Background Gradient - Exact Match to Screenshot Style */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fff2e8] z-0" />
        
        {/* Sweeping bottom-left to center orange wave */}
        <div className="absolute -bottom-[40%] -left-[10%] w-[100%] h-[80%] bg-brand-orange/30 rounded-[100%] blur-[120px] pointer-events-none transform -rotate-12" />
        
        {/* Center-right ambient orange glow */}
        <div className="absolute top-[20%] right-[0%] w-[60%] h-[70%] bg-brand-orange/20 rounded-[100%] blur-[130px] pointer-events-none" />

        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Hero Details */}
            <div className="flex flex-col items-start text-left animate-on-scroll animate-from-left">
              
              {/* Odoo Official Partner Badge - Made much larger and more prominent */}
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white shadow-xl border-2 border-brand-orange/40 mb-8 transform hover:scale-105 transition-transform cursor-default relative overflow-hidden animate-odoo-badge-pulse group">
                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] animate-[shine-sweep_3s_ease-in-out_infinite]"></div>
                
                <div className="flex items-center gap-2 relative z-10">
                  <svg className="h-8 w-auto text-[#714B67]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z"/>
                  </svg>
                </div>
                <div className="h-6 w-[2px] bg-slate-300 relative z-10"></div>
                <span className="text-sm sm:text-base font-extrabold font-sora text-brand-orange tracking-wide uppercase relative z-10">Official Partner</span>
              </div>

              <h1 className="font-sora font-black text-slate-900 text-5xl sm:text-6xl lg:text-[64px] tracking-tight leading-[1.08] mb-6">
                Modern ERP Systems Enhanced With <span className="text-brand-orange">Custom AI</span>
              </h1>

              <p className="font-dmsans text-slate-600 text-[15px] sm:text-[17px] leading-relaxed max-w-[540px] mb-8 font-medium">
                Spreadsheets, disconnected tools, and manual workflows slow growing businesses down. Orzeh implements ERP systems and builds AI intelligence on top, so companies can centralize operations, automate repetitive work, see what's happening in real time, and make sharper decisions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#/book-consultation?scrollTo=form" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-sora font-bold text-sm rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                  Book an ERP + AI Consultation
                </a>
              </div>
            </div>

            {/* Right Hero Visual: Light Animated UI Mockup */}
            <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center max-lg:mt-12 animate-on-scroll animate-from-right" style={{ transitionDelay: '200ms' }}>
              
              {/* Decorative Background Container */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full sm:w-[400px] h-full sm:h-[400px] bg-white rounded-[40px] shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                {/* Dotted pattern simulation */}
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(circle, #f97316 2px, transparent 2px)', backgroundSize: '18px 18px', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-white" />
                
                {/* Curved dashed lines */}
                <svg className="absolute w-full h-full text-brand-orange/40" viewBox="0 0 400 400" fill="none">
                  <path d="M -50 200 C 100 100, 250 350, 450 150" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M 100 -50 C 200 100, 300 300, 200 450" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                </svg>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute top-[10%] right-[10%] w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20 animate-[float-subtle_4s_ease-in-out_infinite]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute bottom-[10%] right-[30%] w-14 h-14 sm:w-16 sm:h-16 bg-white/90 backdrop-blur rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20 animate-[float-subtle_5s_ease-in-out_infinite_1s]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
              </div>

              {/* Main White Panel */}
              <div className="relative z-30 w-full sm:w-[380px] lg:-translate-x-[20%] bg-white/95 backdrop-blur-md rounded-[24px] shadow-xl shadow-slate-200/50 border border-slate-100 p-6">
                <h3 className="font-sora font-extrabold text-slate-900 text-base mb-6">Centralized Operations</h3>
                
                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 transition-all hover:border-slate-200 hover:shadow-sm">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-brand-orange">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-[13px]">Sales Analytics</div>
                      <div className="text-[11px] text-slate-500 font-medium">Real-time • Synced</div>
                    </div>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[11px] font-bold shadow-sm hover:bg-slate-800 transition-colors">
                      Manage
                    </button>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 transition-all hover:border-slate-200 hover:shadow-sm">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center shrink-0 text-emerald-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-[13px]">Inventory Hub</div>
                      <div className="text-[11px] text-slate-500 font-medium">AI Forecasting • Active</div>
                    </div>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[11px] font-bold shadow-sm hover:bg-slate-800 transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Trust Line Ribbon */}
          <div className="mt-20 border-t border-b border-brand-orange/30 py-6 max-w-[1000px] mx-auto overflow-hidden relative z-10">
            <div className="flex items-center justify-center gap-8 text-slate-800 font-mono text-[11px] sm:text-xs uppercase tracking-widest font-extrabold flex-wrap">
              <span>Odoo ERP</span>
              <span className="text-brand-orange">•</span>
              <span>AI Automation</span>
              <span className="text-brand-orange">•</span>
              <span>Smart Reporting</span>
              <span className="text-brand-orange">•</span>
              <span>Workflow Intelligence</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: DISCONNECTED SYSTEMS */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white relative">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left animate-on-scroll animate-from-left">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block">Operations drag</span>
            <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900 leading-tight">
              Disconnected Systems Are the Real Bottleneck
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Most growing businesses work plenty hard. What slows them down is that their systems don't talk to each other. Sales sits in one tool, inventory in another, accounting somewhere else, and customer records scattered across all of them. Reports lag, and decisions end up resting on manual updates and spreadsheets.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-left animate-on-scroll animate-from-right" data-delay="100">
            <h3 className="font-sora font-bold text-lg text-slate-900 mb-4">Making Foundation Intelligent</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              ERP fixes that foundation by pulling the pieces into one place, and the custom AI we add on top is what makes the foundation intelligent.
            </p>
            <p className="text-brand-orange font-bold text-sm">
              The shift we help businesses make is from scattered operations to connected, AI-assisted systems that are easier to manage, scale, and improve.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPREADSHEETS FAIL */}
      <section className="spreadsheets-fail-section py-24 md:py-32 px-6 md:px-12 xl:px-24">
        {/* Dynamic Background Waves matching Image 2 */}
        <div className="fluid-wave-1" />
        <div className="fluid-wave-2" />

        <div className="max-w-[850px] mx-auto text-center relative z-10 space-y-8 animate-on-scroll animate-zoom-in">
          <span className="text-brand-orange font-mono font-bold tracking-widest text-[11px] sm:text-[12px] uppercase block">
            Operational Drag
          </span>
          <h2 className="font-sora font-black text-4xl sm:text-5xl lg:text-[54px] text-slate-900 tracking-tight leading-[1.15]">
            Spreadsheets Work Until Growth Exposes <span className="gradient-text-orange-yellow font-black">the Gaps</span>
          </h2>
          <p className="font-dmsans text-slate-600 leading-relaxed text-[15px] sm:text-[17px] font-medium max-w-[720px] mx-auto">
            In the early days, spreadsheets feel flexible and fast. Growth changes that. Inventory gets harder to track, sales updates slip through, invoices take too long, and reports are stale before anyone acts on them. Teams repeat the same manual work every week, and leadership loses the ability to see what is happening in real time. The business keeps moving forward while the systems underneath it quietly hold it back. We help companies replace that operational drag with structured ERP and intelligent automation.
          </p>
        </div>
      </section>

      {/* SECTION 4: AI ON ERP */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white relative">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 text-left animate-on-scroll animate-from-left">
            <span className="text-brand-orange font-mono font-bold uppercase text-xs tracking-wider mb-2 block">Beyond Go-Live</span>
            <h3 className="font-sora font-bold text-xl mb-4 text-white">ERP Built for the AI Era</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A typical ERP rollout ends at go-live: modules configured, data migrated, team trained, consultant gone. We treat that as the starting point. The ERP becomes the operating core of your business, and from there we build custom AI into it, so the system does more than record what already happened.
            </p>
          </div>
          <div className="space-y-6 text-left animate-on-scroll animate-from-right" data-delay="100">
            <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900 leading-tight">
              We Implement the ERP, Then Make It Intelligent
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              It can forecast demand, flag problems before they grow, automate routine workflows, sharpen reporting, and give your team better information to act on. That is what we mean by ERP built for the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUILT FOR WHO */}
      <section className="modernize-operations-section py-20 md:py-28 px-6 md:px-12 xl:px-24 relative">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-left animate-on-scroll animate-from-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              Target Teams
            </span>
            <h2 className="font-sora font-black text-3xl md:text-[40px] text-slate-900 leading-[1.12] tracking-tight">
              Built for Businesses Ready to <br className="hidden lg:block" />
              <span className="gradient-text-orange-yellow font-black">Modernize Operations</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base font-medium max-w-[440px]">
              This service is for companies growing beyond manual systems that need stronger operational control.
            </p>
          </div>
          <div className="space-y-4 text-left animate-on-scroll animate-from-right" data-delay="100">
            {[
              {
                text: "Business owners, operations managers, and COOs",
                iconClass: "bg-brand-orange/10 text-brand-orange border border-brand-orange/15",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                text: "SMBs in retail, distribution, and manufacturing",
                iconClass: "bg-brand-blue/10 text-brand-blue border border-brand-blue/15",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                text: "Service businesses scaling their operations",
                iconClass: "bg-brand-gold/10 text-brand-gold border border-brand-gold/15",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                text: "Teams running on QuickBooks, Excel, Google Sheets, or disconnected tools",
                iconClass: "bg-brand-orange/10 text-brand-orange border border-brand-orange/15",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                text: "Companies ready to move toward intelligent operations",
                iconClass: "bg-brand-blue/10 text-brand-blue border border-brand-blue/15",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              }
            ].map((target, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 items-center bg-white/75 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:bg-white hover:border-brand-orange/30 hover:shadow-[0_12px_24px_rgba(249,115,22,0.06)] hover:-translate-y-0.5 transition-all duration-300 relative z-10 group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${target.iconClass} transition-transform duration-300 group-hover:scale-105`}>
                  {target.icon}
                </div>
                <span className="text-sm font-bold text-slate-800 leading-snug">{target.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DAILY BUSINESS OPERATIONS */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white relative">
        {/* Ambient subtle warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-orange/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center space-y-6 mb-16 animate-on-scroll relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Core operational features
          </span>
          <h2 className="font-sora font-black text-3xl md:text-[40px] text-slate-900 leading-tight">
            One Connected System for Daily Business Operations
          </h2>
          <p className="text-slate-600 leading-relaxed text-base max-w-[700px] mx-auto font-medium">
            We implement and customize ERP across the functions that run the business day to day. Then we add AI where it creates real operational value.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 animate-on-scroll animate-zoom-in relative z-10">
          {operationsData.map((op, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between bg-white/70 backdrop-blur-md border border-slate-200/60 p-6 rounded-[28px] text-left hover:-translate-y-1.5 transition-all duration-500 hover:border-brand-orange/25 hover:shadow-[0_20px_40px_rgba(249,115,22,0.06)] hover:bg-white group h-[380px]"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-brand-orange/45 tracking-wider block mb-2 transition-colors duration-300">
                  {op.num}
                </span>
                <h3 className="font-sora font-extrabold text-[16px] text-slate-900 tracking-tight mb-2 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                  {op.title}
                </h3>
                <p className="text-[12.5px] text-slate-500 leading-relaxed font-medium">
                  {op.desc}
                </p>
              </div>

              {/* Mockup Illustration Container */}
              <div className="w-full bg-slate-50 border border-slate-100/80 rounded-2xl flex items-center justify-center h-32 mt-4 group-hover:bg-brand-orange/[0.01] group-hover:border-brand-orange/15 transition-all duration-300 overflow-hidden relative select-none">
                {op.illustration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: AI FEATURES */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        {/* Ambient Neon Glows */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[800px] mx-auto text-center space-y-6 mb-16 animate-on-scroll relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 border border-brand-orange/25 text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider rounded-full mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Intelligence layer
          </span>
          <h2 className="font-sora font-black text-3xl md:text-[40px] leading-tight text-brand-orange">
            AI Features We Build on Top of Your ERP
          </h2>
          <p className="text-slate-400 leading-relaxed text-base max-w-[640px] mx-auto font-medium">
            Where ERP organizes the business, AI helps you get ahead of it. Depending on your operations, we can build features such as:
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-left animate-on-scroll animate-zoom-in relative z-10">
          {aiFeaturesData.map((feat, idx) => (
            <div 
              key={idx} 
              className={`bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-6 rounded-[28px] hover:border-brand-orange/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                feat.isDoubleWidth ? "lg:col-span-2 min-h-[300px]" : "min-h-[300px]"
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className={feat.isDoubleWidth ? "grid lg:grid-cols-2 gap-6 items-center" : ""}>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-600 group-hover:text-brand-orange/45 tracking-wider block mb-2 transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <h3 className="font-sora font-extrabold text-[16px] text-slate-100 tracking-tight mb-2 group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-400 leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                  {feat.isDoubleWidth && (
                    <div className="w-full bg-slate-950/80 border border-slate-800/80 rounded-2xl flex items-center justify-center min-h-[140px] max-h-[160px] overflow-hidden relative select-none">
                      {feat.illustration}
                    </div>
                  )}
                </div>

                {!feat.isDoubleWidth && (
                  <div className="w-full bg-slate-950/80 border border-slate-800/80 rounded-2xl flex items-center justify-center h-32 mt-4 overflow-hidden relative select-none">
                    {feat.illustration}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-xs font-semibold uppercase font-mono text-center mt-12 tracking-widest animate-on-scroll animate-zoom-in relative z-10">
          More than 40+ AI workflows available. Together, that moves day-to-day operations from reactive to predictive.
        </p>
      </section>

      {/* SECTION 8: SERVICES LIST */}
      <section id="services-list" className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50/40 relative overflow-hidden border-t border-b border-slate-200">
        {/* Soft floating blur circles */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto text-center space-y-6 mb-16 animate-on-scroll animate-zoom-in relative z-10">
          <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block">Engagement options</span>
          <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900">
            ERP + AI Services
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-white/85 backdrop-blur-md border border-slate-200/80 p-8 rounded-[32px] flex flex-col justify-between hover:border-brand-orange/45 hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] hover:-translate-y-2 transition-all duration-500 h-full text-left group relative overflow-hidden"
            >
              {/* Highlight strip on top */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-orange/0 to-transparent group-hover:via-brand-orange/40 transition-all duration-500" />
              
              <div>
                {/* SVG Icon Container */}
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/5 group-hover:border-brand-orange/20 transition-all duration-500 mb-6 shrink-0">
                  {srv.icon}
                </div>

                <h3 className="font-sora font-extrabold text-lg text-slate-900 mb-3 tracking-tight group-hover:text-brand-orange transition-colors duration-300 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-6 font-medium">
                  {srv.desc}
                </p>

                {/* What You Get list */}
                <div className="border-t border-slate-100 pt-5 space-y-3">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">What you get</span>
                  <div className="space-y-2.5">
                    {srv.whatYouGet.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-[12.5px] text-slate-700 leading-snug font-medium">
                        <span className="text-brand-orange font-bold text-[13px] shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Target & CTA */}
              <div>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">Best For</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-orange/5 border border-brand-orange/10 text-brand-orange rounded-xl text-xs font-mono font-bold leading-none">
                    {srv.bestFor}
                  </div>
                </div>

                <a 
                  href="#/book-consultation?scrollTo=form" 
                  className="w-full text-center py-3 border border-brand-orange text-brand-orange font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 mt-8 flex items-center justify-center gap-2 group/btn"
                >
                  <span>{srv.cta}</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: PROBLEMS TO RESOLVE */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
          {/* Sticky left column */}
          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-28 self-start animate-on-scroll animate-from-left">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block">Common Operations Pain</span>
            <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900 leading-tight">
              When Operations Become Too Manual to Scale
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
              Most of what we get brought in to fix comes down to the same handful of issues. Once operations are connected, teams get back time, clarity, and control.
            </p>
          </div>
          
          {/* Right column cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Inventory errors",
              "Manual invoicing",
              "Disconnected accounting and sales",
              "No real-time reporting",
              "Poor customer visibility",
              "Slow order tracking",
              "Manual purchase planning",
              "Spreadsheet dependency and repeated data entry",
              "Delayed decision-making",
              "No central source of truth"
            ].map((prob, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100/90 rounded-2xl p-5 flex flex-col justify-between shadow-[0_10px_25px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_-8px_rgba(249,115,22,0.08)] hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300 min-h-[110px] group relative overflow-hidden animate-on-scroll animate-zoom-in"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Subtle left warning line */}
                <div className="absolute left-0 top-0 w-[3px] h-full bg-brand-orange/10 group-hover:bg-brand-orange transition-colors duration-300" />
                
                <div className="flex justify-between items-start">
                  {/* Large Index Number */}
                  <span className="font-sora font-black text-2xl text-brand-orange opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 leading-none">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                  
                  {/* Danger Indicator Icon */}
                  <span className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-xs group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    !
                  </span>
                </div>
                
                <h4 className="text-[12.5px] font-bold text-slate-700 leading-relaxed mt-4 group-hover:text-slate-900 transition-colors duration-300">
                  {prob}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: PROCESS */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block mb-3 animate-on-scroll animate-from-bottom">Workflow</span>
            <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900 animate-on-scroll animate-from-bottom" data-delay="100">
              From Manual Operations to Intelligent Systems
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto">
            {(() => {
              const steps = [
                { num: "01", title: "Understand", desc: "We review your current operations, tools, workflows, reporting needs, and business goals." },
                { num: "02", title: "Map", desc: "We pinpoint which ERP modules, automations, integrations, and AI features will create the most value." },
                { num: "03", title: "Implement", desc: "We configure the ERP, migrate your data, build the workflows, and get your team ready for launch." },
                { num: "04", title: "Enhance", desc: "We add AI where it improves operations, from demand prediction and automation to reporting, alerts, and decision support." },
                { num: "05", title: "Support", desc: "We train your team, track adoption, resolve issues, and keep improving the system as the business grows." }
              ];

              const renderStep = (step, i) => (
                <div key={i} className="process-step-card text-left">
                  <span className="process-step-number">{step.num}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              );

              return (
                <>
                  <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Scope requirements', 'Map workflows', 'Define AI needs'].map((item, i) => (
                      <div key={i} className="animate-on-scroll animate-from-bottom" data-delay={80 * (i + 1)}>
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-[13px] font-semibold text-slate-700 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                          {renderStep(steps[i], i)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden md:grid grid-cols-2 gap-6 mt-6 max-w-[800px] mx-auto">
                    {['Configure Odoo', 'Build custom agents'].map((item, i) => (
                      <div key={i} className="animate-on-scroll animate-from-bottom" data-delay={80 * (i + 4)}>
                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-[13px] font-semibold text-slate-700 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                          {renderStep(steps[i + 3], i + 3)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden -mx-6 px-6">
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={16}
                      slidesPerView={1.15}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="pb-10 !pt-2"
                    >
                      {steps.map((step, i) => (
                        <SwiperSlide key={i} className="h-auto">
                          {renderStep(step, i)}
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

      {/* SECTION 11: PHILOSOPHY */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left animate-on-scroll">
            <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block">Strategy</span>
            <h2 className="font-sora font-black text-3xl md:text-4xl text-slate-900 leading-tight">
              ERP for Businesses That Want to Operate With Intelligence
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              A standard ERP rollout organizes your business; adding custom AI is what helps it move faster. We bring ERP, AI, data, and security expertise into a single engagement, which makes us a stronger partner for the long-term work of digital transformation. Before we talk modules, we look at what is slowing the team down: where manual work eats time, where visibility is missing, which decisions need better data, and where AI would genuinely improve a workflow. Then we build the ERP around the way your business actually runs.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 text-left animate-on-scroll animate-from-right" data-delay="100">
            <h3 className="font-sora font-bold text-lg text-white mb-4">What your business gains:</h3>
            <ul className="space-y-3 font-semibold text-slate-300 text-xs md:text-sm">
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> One connected operational system</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Cleaner workflows and less manual work</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Real-time visibility across the business</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Better inventory control and faster reporting</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Smarter decision support</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> AI-powered automation opportunities</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> A system your team can grow with</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 12: CTA & FINAL CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white border-t border-slate-200 text-center">
        <div className="max-w-[1000px] mx-auto">

          {/* Redesigned CTA Card */}
          <div className="final-cta-gradient-card">
            {/* SVG Bolt Watermark */}
            <svg
              className="cta-bolt-watermark"
              width="140"
              height="200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
            </svg>

            <div className="relative z-10 max-w-[700px] mx-auto text-center space-y-6">
              <span className="text-brand-orange font-mono font-bold uppercase text-xs tracking-widest block">Digital transformation</span>
              <h2 className="final-cta-title font-sora font-black text-3xl md:text-5xl leading-tight">
                Build the Operating System Your Business Needs Next
              </h2>
              <p className="final-cta-subtitle text-base md:text-lg leading-relaxed">
                Centralize your operations, automate the repetitive work, sharpen your reporting, and layer in AI, so your team finally has one system it can trust. If your business still runs on spreadsheets, disconnected tools, or outdated systems, the real cost is lost visibility, slower decisions, and daily friction, on top of the wasted time. Orzeh helps you modernize with ERP and AI, one practical step at a time.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#/book-consultation?scrollTo=form" className="btn-cta-dark w-full sm:w-auto justify-center">
                  <span>Schedule an ERP Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
                <a href="#/services" className="btn-cta-ghost-light w-full sm:w-auto justify-center">
                  <span>Explore ERP + AI Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              <p className="text-[11px] font-bold text-white uppercase tracking-widest pt-4">
                A focused conversation about your current operations, business systems, automation opportunities, and the best ERP path forward.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ErpAiSolutions;
