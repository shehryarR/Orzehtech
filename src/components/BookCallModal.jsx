import React, { useState } from 'react'

function BookCallModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    role: '',
    helpArea: '',
    description: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.role.trim()) newErrors.role = 'Role / Title is required'
    if (!formData.helpArea) newErrors.helpArea = 'Please select a service area'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
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
        setIsSuccess(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      alert('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      role: '',
      helpArea: '',
      description: '',
    })
    setErrors({})
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/45 backdrop-blur-md overflow-y-auto">
      <div className="bg-white w-full max-w-[960px] rounded-3xl shadow-[0_24px_70px_rgba(15,23,42,0.08)] border border-border-light/60 overflow-hidden flex flex-col lg:flex-row relative animate-on-scroll is-visible max-h-[95vh] lg:max-h-[90vh]">
        
        {/* Close Button - Absoluted for unified look */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-xl text-text-muted hover:text-text-dark hover:bg-slate-50 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Column: Context Side Panel */}
        <div className="lg:w-[40%] bg-slate-50 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border-light/60 flex flex-col justify-between select-none">
          <div className="flex flex-col items-start">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-brand-orange/10 text-brand-orange">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <span className="eyebrow-label text-[10px]">Private Consultation</span>
            </div>

            <h3 className="font-sora font-black text-2xl text-text-dark mb-4 leading-tight">
              A Direct Conversation about <span className="bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">Your Systems</span>
            </h3>
            
            <p className="text-xs text-text-muted leading-relaxed mb-8 font-medium">
              We review your existing setup, locate manual bottlenecks or security risks, and recommend the single highest-impact starting point for development.
            </p>

            {/* Quick specifications list */}
            <div className="flex flex-col gap-4 w-full text-xs font-semibold text-text-dark/80">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-white border border-border-light flex items-center justify-center text-[10px] text-brand-orange shadow-xs font-bold">20</span>
                <span>20-minute direct technical assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-white border border-border-light flex items-center justify-center text-[10px] text-brand-orange shadow-xs font-bold">✓</span>
                <span>Tool-agnostic architecture recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-white border border-border-light flex items-center justify-center text-[10px] text-brand-orange shadow-xs font-bold">🔒</span>
                <span>Secure, private briefing under standard NDA</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-text-muted/60 font-semibold font-mono mt-12 pt-6 border-t border-border-light/80">
            SYSTEMS FIRST • NOT SOFTWARE
          </div>
        </div>

        {/* Right Column: Cleaned, Well-Spaced Form */}
        <div className="lg:w-[60%] p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
          {isSuccess ? (
            <div className="my-auto py-12 text-center flex flex-col items-center max-w-[400px] mx-auto animate-on-scroll is-visible">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 shadow-xs animate-bounce">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 className="font-sora font-extrabold text-xl text-text-dark mb-3">Consultation Requested</h4>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-8">
                Thank you. We will review your systems and requirements, and recommend the most practical starting point within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="w-full h-12 bg-text-dark hover:bg-brand-orange text-white font-sora font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-xs"
              >
                Close Panel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="mb-6 select-none">
                  <h4 className="font-sora font-extrabold text-lg text-text-dark">Tell us about your challenge</h4>
                  <p className="text-xs text-text-muted mt-1 font-medium">Simple briefing form. Takes less than 60 seconds.</p>
                </div>

                <div className="space-y-5">
                  {/* Grid 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 h-11 bg-slate-50/50 border rounded-xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-border-light/80'
                        }`}
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500 font-bold mt-1 font-mono">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 h-11 bg-slate-50/50 border rounded-xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-border-light/80'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Grid 2: Company and Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={`w-full px-4 h-11 bg-slate-50/50 border rounded-xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 ${
                          errors.companyName ? 'border-red-400 focus:border-red-400' : 'border-border-light/80'
                        }`}
                      />
                      {errors.companyName && <p className="text-[10px] text-red-500 font-bold mt-1 font-mono">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                        Your Role / Title
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="CTO, Founder, Operations Manager"
                        className={`w-full px-4 h-11 bg-slate-50/50 border rounded-xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 ${
                          errors.role ? 'border-red-400 focus:border-red-400' : 'border-border-light/80'
                        }`}
                      />
                      {errors.role && <p className="text-[10px] text-red-500 font-bold mt-1 font-mono">{errors.role}</p>}
                    </div>
                  </div>

                  {/* Core help area */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                      What do you need help with?
                    </label>
                    <select
                      name="helpArea"
                      value={formData.helpArea}
                      onChange={handleChange}
                      className={`w-full px-4 h-11 bg-slate-50/50 border rounded-xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 ${
                        errors.helpArea ? 'border-red-400 focus:border-red-400' : 'border-border-light/80'
                      }`}
                    >
                      <option value="">Select a service area</option>
                      <option value="AI Security & Implementation">AI Security & Implementation</option>
                      <option value="Data Engineering & DevSecOps">Data Engineering & DevSecOps</option>
                      <option value="ERP + AI Solutions">ERP + AI Solutions</option>
                      <option value="Other / Consultation review">Other / Consultation review</option>
                    </select>
                    {errors.helpArea && <p className="text-[10px] text-red-500 font-bold mt-1 font-mono">{errors.helpArea}</p>}
                  </div>

                  {/* Briefly describe the challenge */}
                  <div>
                    <label className="block text-[10px] font-extrabold text-text-dark/40 uppercase tracking-widest mb-1.5 select-none font-mono">
                      Describe the problem (Optional)
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Briefly describe what is currently slowing your engineering or operations team down..."
                      className="w-full p-4 bg-slate-50/50 border border-border-light/80 rounded-2xl text-xs sm:text-sm text-text-dark focus:bg-white focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/20 transition-all duration-200 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-6 border-t border-border-light/60 flex items-center justify-between mt-8 select-none">
                <span className="text-[10px] font-semibold text-text-muted/60 italic font-mono">
                  All briefings are handled securely.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center bg-brand-orange hover:bg-brand-gold text-white font-sora font-bold text-xs uppercase tracking-wider h-11 px-8 rounded-xl shadow-xs disabled:opacity-50 transition-all duration-250 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default BookCallModal
