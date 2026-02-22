import React from 'react';
import { CheckCircle2, Hexagon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-white">
      
      {/* --- THE INTENSE GREEN BACKGROUND WASH --- */}
      {/* Top Left Green Glow - Deeper and brighter */}
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#059669] rounded-full blur-[140px] opacity-30 pointer-events-none"></div>
      
      {/* Right Side Green Glow - Stronger vibrant emerald */}
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

        {/* RIGHT SIDE: The 3D Document Graphic */}
        <div className="relative w-72 md:w-80 aspect-[3/4] mx-auto z-10 mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-gray-100 transform rotate-6 translate-x-4 translate-y-4"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100 transform rotate-3 translate-x-2 translate-y-2"></div>
          
          <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.07)] border border-gray-100 p-8 flex flex-col items-center z-10">
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