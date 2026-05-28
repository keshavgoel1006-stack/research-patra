import React from 'react';
import { 
  FileText, CheckCircle2, Award, 
  Globe, PenTool, BookOpen, ArrowRight 
} from 'lucide-react';

const ResearchPapers = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: Focused on Publish-Readiness */}
      <section className="relative py-20 md:py-24 bg-slate-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-50/50 skew-x-12 translate-x-20 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0F172A] font-bold rounded-full text-sm mb-6 shadow-sm border border-gray-100">
            <Award size={16} className="text-[#F97316]" /> IEEE, SPRINGER & ELSEVIER STANDARDS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight max-w-4xl">
            Publish-Ready <span className="text-[#F97316]">Research & Review</span> Papers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
            Don't let formatting errors or weak academic language trigger a desk rejection. We craft high-impact manuscripts tailored exactly to your target journal's guidelines.
          </p>
        </div>
      </section>

      {/* 2. THE DUAL-TRACK LAYOUT: Research vs Review */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">What type of manuscript do you need?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Track 1: Empirical Research Paper */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#F97316]"></div>
            <FileText size={48} className="text-[#F97316] mb-6" />
            <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4">Empirical Research Paper</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Based on primary data, experiments, or simulations. You provide the raw results, and we write the complete scientific narrative.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 size={18} className="text-[#F97316]" /> Introduction & Literature Gap</li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 size={18} className="text-[#F97316]" /> Methodology & Experimental Setup</li>
              <li className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 size={18} className="text-[#F97316]" /> Results, Graphs & Discussion</li>
            </ul>
            <button className="flex items-center gap-2 text-[#F97316] font-bold group-hover:text-[#EA580C] transition">
              Request this service <ArrowRight size={18} />
            </button>
          </div>

          {/* Track 2: Systematic Review Paper */}
          <div className="bg-[#0F172A] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-600"></div>
            <BookOpen size={48} className="text-white mb-6" />
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Systematic Review Paper</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              No primary data? No problem. We conduct massive secondary research to synthesize current knowledge and propose future research directions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 size={18} className="text-white" /> PRISMA Protocol Compliance</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 size={18} className="text-white" /> Thematic & Bibliometric Analysis</li>
              <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 size={18} className="text-white" /> Identification of Future Scopes</li>
            </ul>
            <button className="flex items-center gap-2 text-white font-bold hover:text-gray-300 transition">
              Request this service <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE FEATURES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F172A]">Engineered for Peer Review</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We eliminate the common reasons for desk rejection before you even hit the submit button.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6"><PenTool size={24} className="text-[#F97316]" /></div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Target Journal Formatting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Whether it's single-column APA or double-column IEEE format, we tailor the margins, citations, and headings to your specific target journal.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6"><CheckCircle2 size={24} className="text-[#F97316]" /></div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Zero Plagiarism & AI-Free</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Journals use rigorous AI and similarity detectors. We provide a premium Turnitin report guaranteeing 100% original, human-written content.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6"><Globe size={24} className="text-[#F97316]" /></div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Flawless Academic English</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our editors peer-review the manuscript to ensure logical flow, objective tone, and the elimination of grammatical ambiguities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">Have your raw data ready?</h2>
        <p className="text-gray-600 mb-10 text-lg">Send us your methodology or results, and we will turn it into a manuscript ready for submission.</p>
        <button className="px-10 py-4 bg-[#F97316] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#EA580C] hover:-translate-y-1 transition-all duration-300">
          Upload Your Data for a Quote
        </button>
      </section>

    </div>
  );
};

export default ResearchPapers;