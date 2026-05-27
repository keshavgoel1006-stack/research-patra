import React from 'react';
import { CheckCircle2, Hexagon, AlignLeft, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    // Tightened up vertical padding (py-12 md:py-16) to eliminate dead white space zones
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
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#F97316] text-white rounded-full font-semibold shadow-[0_8px_20px_rgb(249,115,22,0.35)] hover:bg-orange-600 transition-all duration-300">
              Get a Free Quote
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
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

        {/* RIGHT SIDE: Animated Interactive 3D Document Stack */}
        <div className="relative w-72 md:w-80 aspect-[3/4] mx-auto z-10 mt-6 lg:mt-0 group cursor-pointer perspective-1000">
          
          {/* LAYER 1: Bottom Sheet (Data Analysis) */}
          <div className="absolute inset-0 bg-slate-50 rounded-2xl shadow-sm border border-gray-200 transform rotate-6 translate-x-4 translate-y-4 transition-all duration-500 group-hover:rotate-12 group-hover:translate-x-6 group-hover:translate-y-6">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 mb-4 w-full text-right">Data Analysis</p>
                <BarChart size={24} className="text-gray-300 ml-auto" />
              </div>
              <div className="w-full space-y-2 pb-4">
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full w-4/5 ml-auto"></div>
              </div>
            </div>
          </div>

          {/* LAYER 2: Middle Sheet (Literature Review) */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-200 transform rotate-3 translate-x-2 translate-y-2 transition-all duration-500 group-hover:rotate-6 group-hover:translate-x-3 group-hover:translate-y-3">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-gray-400 mb-4">Literature Review</p>
                <AlignLeft size={24} className="text-gray-300" />
              </div>
              <div className="w-full space-y-2 pb-4">
                <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          {/* LAYER 3: Top Front Sheet (Scientific Abstract) */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-gray-100 p-8 flex flex-col items-center z-10 transition-all duration-500 group-hover:scale-105">
            <p className="text-sm font-bold text-gray-800 mb-6 w-full text-center tracking-wide">Scientific Abstract</p>
            <Hexagon size={48} className="text-[#F97316] opacity-60 mb-6" strokeWidth={2} />
            <p className="text-sm font-bold text-gray-800 mb-4 w-full text-left tracking-wide">Research Paper</p>
            <div className="w-full space-y-3">
              <div className="h-2 bg-gray-100 rounded-full w-full"></div>
              <div className="h-2 bg-gray-100 rounded-full w-full"></div>
              <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
              <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;