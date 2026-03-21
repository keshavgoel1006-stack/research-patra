import React from 'react';
import { Lightbulb, FileSearch, PenTool, CheckCircle, BrainCircuit, Mic } from 'lucide-react';

const steps = [
  {
    icon: <FileSearch className="text-[#F97316]" size={32} />, // Discovery icon
    number: "01",
    title: "Affordable Prices",
    text: "High-quality academic writing and research support at student-friendly, transparent rates.",
    points: ["Satisfactory Pricing", "Quality Assured"]
  },
  {
    icon: <PenTool className="text-[#F97316]" size={32} />, // Drafting icon
    number: "02",
    title: "Expert Team",
    text: "Experienced academic writers and researchers dedicated to crafting exceptional dissertations, theses, and research papers.",
    points: ["Logical Flow", "Structure Check"]
  },
  {
    icon: <BrainCircuit className="text-[#F97316]" size={32} />, // Review icon
    number: "03",
    title: "Proven Academic Practices",
    text: "Ethical solutions that enhance learning and protect academic credibility",
    points: ["Depth Review", "Clarity Check"]
  },
  {
    icon: <Mic className="text-[#F97316]" size={32} />, // Submission icon
    number: "04",
    title: "Customer Focus",
    text: "Prioritizing student & researchers success with personalized academic support and one-to-one guidance.",
    points: ["Final Check", "Confidence Boost"]
  }
];

const Methodology = () => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle Orange Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header from Image (image_0c5ce4.png) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-700 pb-12">
          <div>
            <p className="text-sm font-bold text-[#F97316] tracking-wider uppercase mb-3 flex items-center gap-2">
              <Lightbulb size={18} /> Our approach
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              How We Achieve Excellence
            </h2>
            <p className="text-gray-400 text-lg mt-4 font-medium">
              Research Patra approach to dissertation assistance
            </p>
          </div>
          {/* Top buttons from image */}
          <div className="flex gap-4">
             <button className="px-6 py-2.5 rounded-full bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors">
              Our methodology
             </button>
             <button className="px-6 py-2.5 rounded-full bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors">
              How we work
             </button>
          </div>
        </div>

        {/* Steps/Cards from Image (image_0c5ce4.png) with Orange theme hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-[#F97316]/60 hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-700/50 flex items-center justify-center border border-slate-600 group-hover:bg-[#F97316] transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-slate-700 group-hover:text-[#F97316]/20 transition-colors">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#F97316] transition-colors">{step.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed mb-6 flex-grow">
                {step.text}
              </p>
              
              {/* Added mini points for better content utilization */}
              <div className="space-y-3 pt-6 border-t border-slate-700">
                {step.points.map(point => (
                  <div key={point} className="flex items-center gap-2 text-gray-400 text-sm">
                    <CheckCircle className="text-[#F97316]" size={16} /> {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section from Image (image_0c5d04.png) with active:scale animation */}
        <div className="text-center pt-12 border-t border-slate-700">
            <h4 className="text-xl font-bold text-gray-300 mb-8 max-w-xl mx-auto">
                Ready to transform your research idea into an exceptional dissertation?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#F97316] text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:bg-[#EA580C] active:scale-95 transition-all">
                  Get free quote
                </button>
                <button className="px-8 py-4 bg-white text-[#0F172A] rounded-full font-bold text-lg hover:bg-gray-100 active:scale-95 transition-all">
                  Request sample
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Methodology;