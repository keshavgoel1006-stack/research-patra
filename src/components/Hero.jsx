import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Check } from 'lucide-react';

const Hero = () => {
  return (
    // Tightened up vertical padding to eliminate dead white space zones
    <section id="home" className="relative pt-12 pb-12 md:pt-16 md:pb-16 overflow-hidden bg-white">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#EA580C] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F97316] rounded-full blur-[150px] opacity-15 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Content Rich Brand Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
            Create Outstanding Research Article With <span className="text-[#F97316]">Expert Guidance</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Discover the Art of Smart and Impactful Research Writing. Building Future Scholars With Ethical Guidance.
          </p>
          
          {/* Action Buttons - Fluid for mobile screen adjustments */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-8 w-full">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#F97316] text-white rounded-full font-semibold shadow-[0_8px_20px_rgb(249,115,22,0.35)] hover:-translate-y-1 transition-all">
              Get a Free Quote
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition-all">
              Call Us Now
            </button>
          </div>

          {/* Verification Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#F97316]" /> Ethical Solutions
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#F97316]" /> Academic Excellence
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Quick Consult Lead Form */}
        <div className="w-full max-w-md mx-auto lg:ml-auto relative z-10 lg:mt-0 mt-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2">Check Eligibility</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Tell us about your research domain. Our experts will respond with a free roadmap.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Research Domain (e.g., AI, IoT)" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#0F172A] text-white font-bold py-3.5 rounded-xl hover:bg-[#1E293B] hover:-translate-y-0.5 transition-all shadow-lg flex justify-center items-center gap-2"
              >
                Get Instant Roadmap <ArrowRight size={18} className="text-[#F97316]" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;