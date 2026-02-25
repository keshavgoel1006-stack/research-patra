import React from 'react';
import { CheckCircle2, Hexagon, AlignLeft, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-white">
      
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#059669] rounded-full blur-[140px] opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981] rounded-full blur-[150px] opacity-25 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[70vh]">
        
        {/* LEFT SIDE: Text & Buttons */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-[1.15] mb-6 tracking-tight">
            Expert Guidance for <br />
            <span className="text-[#10B981]">Academic Excellence</span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
            We help scholars and students craft high-impact dissertations, to enhance and accelerate your academic journey.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-8 py-3.5 bg-[#10B981] text-white rounded-full font-semibold shadow-[0_8px_20px_rgb(16,185,129,0.35)] hover:bg-[#059669] transition-all hover:-translate-y-0.5">
              Start Your Project
            </button>
            <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
              View Samples
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#10B981]" /> 100% Confidential</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#10B981]" /> PhD Experts</span>
          </div>
        </div>

        {/* RIGHT SIDE: The Interactive 3D Document Stack */}
        {/* 'group' allows us to trigger animations on all child cards when hovering the parent */}
        <div className="relative w-72 md:w-80 aspect-[3/4] mx-auto z-10 mt-10 lg:mt-0 group cursor-pointer perspective-1000">
          
          {/* ====== BOTTOM PAPER (Data Analysis) ====== */}
          <div className="absolute inset-0 bg-slate-50 rounded-2xl shadow-sm border border-gray-200 transform rotate-6 translate-x-4 translate-y-4 transition-all duration-500 ease-out group-hover:translate-x-20 group-hover:-translate-y-4 group-hover:rotate-12 p-6 flex flex-col items-end">
            <p className="text-xs font-bold text-gray-400 mb-4 w-full text-right">Data Analysis</p>
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 border border-gray-100">
               <BarChart size={24} className="text-gray-300" />
            </div>
            <div className="w-full space-y-2 mt-auto">
               <div className="h-2 bg-gray-200 rounded-full w-full"></div>
               <div className="h-2 bg-gray-200 rounded-full w-4/5 ml-auto"></div>
            </div>
          </div>
          
          {/* ====== MIDDLE PAPER (Literature Review) ====== */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-200 transform rotate-3 translate-x-2 translate-y-2 transition-all duration-500 ease-out group-hover:translate-x-10 group-hover:-translate-y-8 group-hover:-rotate-6 p-6">
             <p className="text-xs font-bold text-gray-400 mb-4">Literature Review</p>
             <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-gray-100">
               <AlignLeft size={24} className="text-gray-300" />
             </div>
             <div className="w-full space-y-2">
               <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
               <div className="h-2 bg-gray-200 rounded-full w-full"></div>
             </div>
          </div>
          
          {/* ====== FRONT PAPER (Scientific Abstract) ====== */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-gray-100 p-8 flex flex-col items-center z-10 transform transition-all duration-500 ease-out group-hover:-translate-y-12 group-hover:-translate-x-6 group-hover:-rotate-2 group-hover:shadow-[0_30px_60px_rgb(0,0,0,0.15)]">
             <p className="text-sm font-bold text-gray-800 mb-6 w-full text-center tracking-wide">Scientific Abstract</p>
             
             <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-50">
               <Hexagon size={48} className="text-[#10B981] opacity-60" strokeWidth={2} />
             </div>
             
             <p className="text-sm font-bold text-gray-800 mb-4 w-full text-left tracking-wide">Scientific Abstract</p>
             
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