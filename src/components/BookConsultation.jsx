import React, { useState, useRef, useEffect } from 'react';

function BookConsultation() {
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    role: '',
    companySize: '',
    helpArea: '',
    currentChallenge: '',
    description: '',
    preferredTimeline: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Required';
    if (!formData.role.trim()) newErrors.role = 'Required';
    if (!formData.companySize) newErrors.companySize = 'Required';
    if (!formData.helpArea) newErrors.helpArea = 'Required';
    if (!formData.currentChallenge) newErrors.currentChallenge = 'Required';
    if (!formData.preferredTimeline) newErrors.preferredTimeline = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Formspree Integration Endpoint
      const response = await fetch('https://formspree.io/f/mzdwwraz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        window.scrollTo(0, 0);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (area = '') => {
    if (area) {
      setFormData(prev => ({ ...prev, helpArea: area }));
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    document.title = "Book a Consultation | Orzeh Technologies";
    window.scrollTo(0, 0);

    // On mobile, use a looser rootMargin so cards trigger sooner
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: isMobile ? '0px 0px 20px 0px' : '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Check if the URL wants us to scroll to the form
    if (window.location.hash.includes('scrollTo=form')) {
      setTimeout(() => {
        scrollToForm();
      }, 300);
    }

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const serviceAreas = [
    { value: 'AI Security & Implementation', label: 'AI Security & Implementation' },
    { value: 'Data Engineering & DevSecOps', label: 'Data Engineering & DevSecOps' },
    { value: 'ERP + AI Solutions', label: 'ERP + AI Solutions' },
    { value: 'Not sure yet', label: 'Not sure yet' }
  ];

  const companySizes = [
    '1 to 10 employees',
    '11 to 50 employees',
    '51 to 200 employees',
    '200+ employees'
  ];

  const challenges = [
    { value: 'We are preparing an AI system for production', label: 'We are preparing an AI system for production' },
    { value: 'We need to secure or monitor an AI system', label: 'We need to secure or monitor an AI system' },
    { value: 'Our data infrastructure is not ready for AI', label: 'Our data infrastructure is not ready for AI' },
    { value: 'Our pipelines or deployment workflows are unreliable', label: 'Our pipelines or deployment workflows are unreliable' },
    { value: 'We are running operations on spreadsheets', label: 'We are running operations on spreadsheets' },
    { value: 'We need ERP implementation or customization', label: 'We need ERP implementation or customization' },
    { value: 'We want to add AI automation to existing systems', label: 'We want to add AI automation to existing systems' },
    { value: 'Other', label: 'Other' }
  ];

  const timelines = [
    'Immediately',
    'Within 30 days',
    'Within 3 months',
    'Exploring options'
  ];

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-50 pt-32">
        <div className="max-w-[520px] w-full text-center animate-on-scroll animate-zoom-in is-visible space-y-10">
          <div className="relative mx-auto mb-10">
            <div className="w-24 h-24 rounded-3xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange mx-auto shadow-[0_0_40px_rgba(249,115,22,0.1)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl border border-brand-orange/20 animate-ping" style={{ animationDuration: '2s' }}></div>
          </div>

          <h1 className="font-sora font-black text-4xl sm:text-5xl text-slate-900 mb-6 leading-tight">
            Consultation <span className="text-brand-orange">Requested</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-[400px] mx-auto">
            We will review your request and recommend the most relevant starting point.
          </p>
          <p className="text-sm text-slate-500 font-mono tracking-widest uppercase mb-12">
            Expect a response within 24 hours.
          </p>

          <div className="flex justify-center">
            <a
              href="#/"
              className="inline-flex items-center justify-center h-14 px-10 bg-brand-orange hover:bg-orange-600 text-white font-sora font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-orange/30">
      
      {/* SECTION 1: HERO */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-32 relative overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="text-left animate-on-scroll animate-from-left">
              <span className="text-[12px] font-bold tracking-widest text-brand-orange uppercase font-mono mb-6 lg:mb-8 block">Contact</span>
              <h1 className="text-5xl sm:text-6xl font-black font-sora tracking-tight leading-[1.15] mb-6 lg:mb-8 text-slate-900">
                Let's Find the <span className="text-brand-orange">Right System</span> to Build First
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 lg:mb-12 leading-relaxed">
                Whether you need to secure an AI product, build scalable data infrastructure, or modernize operations with ERP and AI, Orzeh helps you find the highest-impact place to start. Book a focused consultation and we will review your current systems, risks, workflows, and technical priorities.
              </p>
              <div className="space-y-6 lg:space-y-8">
                <button 
                  onClick={() => scrollToForm()} 
                  className="inline-flex items-center justify-center h-14 lg:h-16 px-10 lg:px-12 bg-brand-orange hover:bg-orange-600 text-white font-sora font-bold text-[14px] lg:text-[15px] uppercase tracking-wider rounded-xl transition-all shadow-[0_10px_40px_rgba(249,115,22,0.2)] hover:-translate-y-1"
                >
                  Book a Consultation
                </button>
                <p className="text-[13px] lg:text-[14px] font-mono text-slate-500 font-medium max-w-sm pt-6 border-t border-slate-200">
                  No generic pitch, just a practical conversation about what your business needs next.
                </p>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="animate-on-scroll animate-from-right flex justify-center lg:justify-end lg:-translate-y-12">
              <img 
                src="/consultation-illustration.png" 
                alt="Consultation Illustration" 
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-500 rounded-2xl mix-blend-multiply"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY BOOK A CALL */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center space-y-10 animate-on-scroll animate-zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight">
              Start With Clarity Before You Choose a <span className="text-brand-orange">Solution</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Most companies can feel that something needs to change. The harder part is knowing where to begin. Is it AI security before you go to production, stronger data infrastructure, replacing spreadsheets with ERP, automation inside your current workflows, or custom AI on top of what you already run? A consultation is where we separate the urgent problems from the future improvements and point you to the most practical next step.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHOOSE YOUR PATH */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24 animate-on-scroll animate-zoom-in space-y-6">
            <span className="eyebrow-label">Consultation Paths</span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-slate-900">What Are You Trying to <span className="text-brand-orange">Solve?</span></h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">Pick the area closest to your current challenge.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: AI Security */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200/80 shadow-md hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5 hover:bg-[#fffbf6] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-on-scroll animate-zoom-in relative group overflow-hidden">
              <div className="mb-8 relative z-10 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white mb-6 shadow-md shadow-brand-orange/10 transition-transform duration-300 group-hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <rect x="9" y="11" width="6" height="5" rx="1" />
                    <path d="M11 11V9a1 1 0 0 1 2 0v2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-sora text-slate-900 mb-4 leading-tight">AI Security & Implementation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Choose this if you are building, deploying, or scaling an AI system and want to reduce risk before it becomes a problem.</p>
              </div>
              <div className="flex-grow text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Best for teams dealing with:</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                  {['AI security concerns', 'prompt injection risks', 'model reliability and hallucinations', 'weak monitoring', 'AI deployment and production-readiness questions', 'DevSecOps for AI'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm('AI Security & Implementation')} 
                className="w-full py-4 border-2 border-brand-orange text-brand-orange font-bold font-sora text-[13px] uppercase tracking-wider rounded-xl hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 mt-auto flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Book AI Security</span>
                <svg className="transform group-hover/btn:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-brand-gold rounded-b-[2rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>
            
            {/* Card 2: Data Engineering */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200/80 shadow-md hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5 hover:bg-[#fffbf6] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-on-scroll animate-zoom-in relative group overflow-hidden" data-delay="100">
              <div className="mb-8 relative z-10 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white mb-6 shadow-md shadow-brand-orange/10 transition-transform duration-300 group-hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-sora text-slate-900 mb-4 leading-tight">Data Engineering & DevSecOps</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Choose this if your data systems are slowing down analytics, automation, or AI development.</p>
              </div>
              <div className="flex-grow text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Best for teams dealing with:</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                  {['broken data pipelines', 'slow or outdated data', 'real-time infrastructure needs', 'cloud architecture gaps', 'poor monitoring', 'AI-ready data requirements', 'CI/CD for AI', 'multi-cloud complexity'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm('Data Engineering & DevSecOps')} 
                className="w-full py-4 border-2 border-brand-orange text-brand-orange font-bold font-sora text-[13px] uppercase tracking-wider rounded-xl hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 mt-auto flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Book Data Infrastructure</span>
                <svg className="transform group-hover/btn:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-brand-gold rounded-b-[2rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

            {/* Card 3: ERP + AI */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200/80 shadow-md hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5 hover:bg-[#fffbf6] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full animate-on-scroll animate-zoom-in relative group overflow-hidden" data-delay="200">
              <div className="mb-8 relative z-10 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white mb-6 shadow-md shadow-brand-orange/10 transition-transform duration-300 group-hover:scale-110">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-sora text-slate-900 mb-4 leading-tight">ERP + AI Solutions</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Choose this if your business still runs on spreadsheets, disconnected tools, or manual operational workflows.</p>
              </div>
              <div className="flex-grow text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-2">Best for teams dealing with:</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                  {['inventory issues', 'manual reporting', 'disconnected accounting and sales', 'spreadsheet dependency', 'slow invoicing', 'poor operational visibility', 'ERP implementation needs', 'AI-powered workflow automation'].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => scrollToForm('ERP + AI Solutions')} 
                className="w-full py-4 border-2 border-brand-orange text-brand-orange font-bold font-sora text-[13px] uppercase tracking-wider rounded-xl hover:bg-brand-orange hover:text-white hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 mt-auto flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Book ERP + AI</span>
                <svg className="transform group-hover/btn:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-brand-gold rounded-b-[2rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT HAPPENS (TECHNICAL & BUSINESS REVIEW) */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-white via-orange-50/15 to-orange-100/10 border border-orange-100/60 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-lg hover:shadow-xl hover:shadow-brand-orange/[0.02] transition-shadow duration-500 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left details */}
              <div className="lg:col-span-5 text-left space-y-5 animate-on-scroll animate-from-left">
                <span className="text-[12px] font-bold tracking-widest text-brand-orange uppercase font-mono block">Review Process</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight">
                  A Focused Technical <br/> and Business <span className="text-brand-orange">Review</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-[15px] sm:text-[16px]">
                  We use the call to understand where you are and work out what should be built, fixed, secured, or modernized first.
                </p>
                <button 
                  onClick={() => scrollToForm()} 
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 sm:h-14 bg-brand-orange hover:bg-orange-600 text-white font-sora font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md shadow-brand-orange/15 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group/btn w-full sm:w-auto"
                >
                  <span>Book a Consultation</span>
                  <svg className="transform group-hover/btn:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              {/* Right stacked cards — overflow-x hidden only on wrapper to prevent layout issues */}
              <div className="lg:col-span-7 space-y-4 overflow-x-hidden">
                {[
                  { title: 'Current Systems', desc: 'Walk through your existing data pipelines, model configurations, or spreadsheet processes.' },
                  { title: 'Technical Gaps & Risks', desc: 'Identify critical bottlenecks, AI reliability issues, security leaks, or automation challenges.' },
                  { title: 'Implementation Plan', desc: 'Formulate a practical next step, defining scope, budget, timeline, and technical priorities.' }
                ].map((item, idx) => {
                  const delays = ['100', '200', '300'];
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left group/card animate-on-scroll animate-from-right"
                      data-delay={delays[idx]}
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 group-hover/card:bg-brand-orange group-hover/card:text-white transition-colors duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <div>
                        <h4 className="font-sora font-extrabold text-[15px] sm:text-[16px] text-slate-900 group-hover/card:text-brand-orange transition-colors duration-300">{item.title}</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TARGET AUDIENCE (DECISION-MAKERS & TECHNICAL TEAMS) */}
      <section className="py-16 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-white via-orange-50/15 to-orange-100/10 border border-orange-100/60 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-lg hover:shadow-xl hover:shadow-brand-orange/[0.02] transition-shadow duration-500 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left details */}
              <div className="lg:col-span-5 text-left space-y-5 animate-on-scroll animate-from-left">
                <span className="text-[12px] font-bold tracking-widest text-brand-orange uppercase font-mono block">Target Audience</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora text-slate-900 leading-tight">
                  Built for Decision-Makers & <span className="text-brand-orange">Technical Teams</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-[15px] sm:text-[16px]">
                  If your business depends on better systems, cleaner data, safer AI, or smarter operations, this is a practical place to start.
                </p>
                <button 
                  onClick={() => scrollToForm()} 
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 sm:h-14 bg-brand-orange hover:bg-orange-600 text-white font-sora font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md shadow-brand-orange/15 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group/btn w-full sm:w-auto"
                >
                  <span>Book a Consultation</span>
                  <svg className="transform group-hover/btn:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              {/* Right stacked cards — overflow-x hidden only on wrapper */}
              <div className="lg:col-span-7 space-y-4 overflow-x-hidden">
                {[
                  { title: 'Founders & Executives', desc: 'CTOs, COOs, and business owners looking to align technology with growth and reduce operations overhead.' },
                  { title: 'Product & ML Teams', desc: 'AI product managers and engineers seeking to secure prompt boundaries and implement production-ready models.' },
                  { title: 'Ops & Infrastructure Leaders', desc: 'Operations managers and data engineers wanting to build robust pipelines and replace spreadsheet workflows.' }
                ].map((item, idx) => {
                  const delays = ['100', '200', '300'];
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left group/card animate-on-scroll animate-from-right"
                      data-delay={delays[idx]}
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 mt-0.5 group-hover/card:bg-brand-orange group-hover/card:text-white transition-colors duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <div>
                        <h4 className="font-sora font-extrabold text-[15px] sm:text-[16px] text-slate-900 group-hover/card:text-brand-orange transition-colors duration-300">{item.title}</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE FORM */}
      <section ref={formRef} id="booking-form" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-200/60 rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-10 md:p-16 shadow-xl relative overflow-hidden animate-on-scroll animate-zoom-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Context & System Integration Illustration */}
              <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-brand-orange font-mono font-bold tracking-widest text-[12px] uppercase block">Let's connect</span>
                  <h2 className="font-sora font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                    Build the Right System, <br/><span className="text-brand-orange">Zero Hassle</span>
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Tell us what you're building or trying to fix. Share a few details about your current situation so we can recommend the most practical technical next step.
                  </p>
                </div>
                
                {/* Dynamic phone / circular connected nodes illustration — hidden on mobile */}
                <div className="hidden sm:flex relative w-full h-[320px] items-center justify-center my-6">
                  {/* Dashed outer connecting rings */}
                  <div className="absolute w-[280px] h-[280px] border-2 border-dashed border-orange-200/60 rounded-full animate-[spin_50s_linear_infinite] flex items-center justify-center z-0" />
                  <div className="absolute w-[220px] h-[220px] border border-dashed border-slate-200 rounded-full animate-[spin_35s_linear_infinite_reverse] z-0" />
                  
                  {/* Center Phone Mockup */}
                  <div className="w-[140px] h-[240px] bg-slate-950 rounded-[2rem] border-[6px] border-slate-900 shadow-2xl relative z-10 flex flex-col overflow-hidden animate-float">
                    {/* Notch */}
                    <div className="w-12 h-2.5 bg-slate-900 rounded-full absolute left-1/2 -translate-x-1/2 top-0.5 z-20" />
                    {/* Internal Interface */}
                    <div className="p-3 flex-grow flex flex-col justify-between text-[6px] font-mono text-white/90">
                      <div className="border border-white/10 rounded-md p-1.5 bg-white/5 space-y-1 text-left">
                        <span className="text-brand-orange font-black block text-[5px]">● Orzeh Engine</span>
                        <div className="w-full h-0.5 bg-white/20 rounded" />
                        <div className="w-2/3 h-0.5 bg-white/20 rounded" />
                      </div>
                      <div className="space-y-1 flex-grow pt-3 text-left">
                        <div className="flex justify-between items-center bg-white/5 p-1 rounded-sm border border-white/5">
                          <span>AI Security</span>
                          <span className="text-emerald-400 font-extrabold text-[5px]">SECURE</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-1 rounded-sm border border-white/5">
                          <span>Data Pipeline</span>
                          <span className="text-brand-blue font-extrabold text-[5px]">ACTIVE</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-1 rounded-sm border border-white/5">
                          <span>ERP Sync</span>
                          <span className="text-brand-orange font-extrabold text-[5px]">ONLINE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Connected Nodes */}
                  {/* Wazuh */}
                  <div className="absolute top-4 left-[15%] w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 animate-[float-subtle_4s_ease-in-out_infinite]">
                    <span className="text-[10px] font-mono font-bold text-slate-700">Wazuh</span>
                  </div>
                  {/* Odoo */}
                  <div className="absolute top-8 right-[15%] w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 animate-[float-subtle_4.5s_ease-in-out_infinite_1s]">
                    <span className="text-[10px] font-mono font-bold text-[#ea580c]">Odoo</span>
                  </div>
                  {/* PostgreSQL */}
                  <div className="absolute bottom-6 left-[12%] w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 animate-[float-subtle_3.8s_ease-in-out_infinite_0.5s]">
                    <span className="text-[9px] font-mono font-bold text-[#0284c7]">Postgre</span>
                  </div>
                  {/* AI Spark */}
                  <div className="absolute bottom-8 right-[12%] w-12 h-12 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300 animate-[float-subtle_4.2s_ease-in-out_infinite_1.5s]">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block lg:col-span-1 justify-self-center h-[90%] w-[1px] bg-slate-200" />

              {/* Right Side: Form (spans 6 columns on lg) */}
              <div className="lg:col-span-6 text-left">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange transition-all outline-none ${errors.fullName ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange transition-all outline-none ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                  </div>

                  {/* Company and Role Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange transition-all outline-none ${errors.companyName ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Role</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="CTO, Operations, etc."
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange transition-all outline-none ${errors.role ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                  </div>

                  {/* Three Grid Selects: Company Size, Help Area, Challenge */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Company Size</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:bg-white focus:border-brand-orange transition-all outline-none appearance-none ${errors.companySize ? 'border-red-500' : 'border-slate-200'}`}
                      >
                        <option value="" disabled>Select company size</option>
                        {companySizes.map((size) => <option key={size} value={size}>{size}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Preferred Timeline</label>
                      <select
                        name="preferredTimeline"
                        value={formData.preferredTimeline}
                        onChange={handleChange}
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:bg-white focus:border-brand-orange transition-all outline-none appearance-none ${errors.preferredTimeline ? 'border-red-500' : 'border-slate-200'}`}
                      >
                        <option value="" disabled>Select timeline</option>
                        {timelines.map((time) => <option key={time} value={time}>{time}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Need help with?</label>
                      <select
                        name="helpArea"
                        value={formData.helpArea}
                        onChange={handleChange}
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:bg-white focus:border-brand-orange transition-all outline-none appearance-none ${errors.helpArea ? 'border-red-500' : 'border-slate-200'}`}
                      >
                        <option value="" disabled>Select help area</option>
                        {serviceAreas.map((area) => <option key={area.value} value={area.value}>{area.label}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Current Challenge</label>
                      <select
                        name="currentChallenge"
                        value={formData.currentChallenge}
                        onChange={handleChange}
                        className={`w-full px-4 h-11 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:bg-white focus:border-brand-orange transition-all outline-none appearance-none ${errors.currentChallenge ? 'border-red-500' : 'border-slate-200'}`}
                      >
                        <option value="" disabled>Select current challenge</option>
                        {challenges.map((ch) => <option key={ch.value} value={ch.value}>{ch.label}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest font-mono text-slate-400">Describe the Problem</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Tell us what is currently slowing your team down..."
                      className="w-full p-4 bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange transition-all resize-none outline-none"
                    />
                  </div>

                  {/* Agree checkbox + Submit button */}
                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Checkbox */}
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 accent-orange-500 cursor-pointer shrink-0"
                      />
                      <span className="text-[11px] text-slate-400 leading-snug group-hover:text-slate-600 transition-colors">
                        I agree to Orzeh's <span className="underline underline-offset-2 cursor-pointer hover:text-brand-orange transition-colors">terms</span> and <span className="underline underline-offset-2 cursor-pointer hover:text-brand-orange transition-colors">privacy policies</span>.
                      </span>
                    </label>

                    {/* Submit Button — disabled until checkbox is checked */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !agreedToTerms}
                      className={`inline-flex items-center justify-center font-sora font-extrabold text-[13px] uppercase tracking-wider h-11 px-8 rounded-lg transition-all duration-300 shrink-0 ${
                        agreedToTerms
                          ? 'bg-brand-orange hover:bg-brand-gold text-white shadow-md shadow-orange-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      } disabled:opacity-70`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: NOT SURE WHICH SERVICE */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-slate-50 border-y border-slate-200 text-left">
        <div className="max-w-[800px] mx-auto space-y-6 animate-on-scroll animate-zoom-in">
          <h2 className="font-sora font-black text-2xl md:text-3xl text-slate-900">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            That is normal. Most companies come to us with symptoms rather than a finished technical brief: the AI system feels risky, the data stack is getting fragile, operations are too manual, or the business simply needs better systems. Part of the call is translating those symptoms into a clear technical path. If AI risk is the priority, we start with security and production readiness; if it is data reliability, we start with infrastructure; if it is operations, we start with ERP and workflow automation. We are not trying to sell you all three, only to start where it will create the most value.
          </p>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12 xl:px-24 bg-white text-center">
        <div className="max-w-[1000px] mx-auto">
          <div className="final-cta-gradient-card">
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
              <h2 className="final-cta-title font-sora font-black text-3xl md:text-5xl leading-tight">
                Ready to Build the Right Foundation?
              </h2>
              <p className="final-cta-subtitle text-base md:text-lg leading-relaxed">
                One focused conversation is usually enough to know what to build first, whether that is securing your AI, scaling your data, or modernizing operations with ERP and AI.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollToForm()} 
                  className="btn-cta-dark w-full sm:w-auto justify-center"
                >
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              <p className="text-[11px] font-bold text-white uppercase tracking-widest pt-4">
                A practical conversation about your systems, your risks, and what to build first.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default BookConsultation;
