import React from 'react';
import { 
  PenTool, SpellCheck, FileSearch, Quote, 
  CheckCircle2, AlertCircle, ArrowRight, Check 
} from 'lucide-react';

const EditingProofreading = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: Clean & Precise */}
      <section className="relative py-20 bg-slate-50 border-b border-gray-200 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F97316] rounded-full blur-[100px] opacity-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-400 rounded-full blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <PenTool size={48} className="text-[#F97316] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 tracking-tight leading-tight">
            Flawless <span className="text-[#F97316]">Editing & Proofreading</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Don't let poor grammar or sloppy formatting trigger a desk rejection. Our expert academic editors refine your manuscript for clarity, flow, and strict journal compliance.
          </p>
        </div>
      </section>

      {/* 2. LEVELS OF EDITING (Pricing/Service Tiers) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">Choose Your Level of Editing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">From a final grammatical sweep to a massive structural rewrite, we have a solution for every manuscript.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-600">
              <SpellCheck size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Proofreading</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">A final sweep for authors confident in their writing who just need to catch typos and minor errors before submission.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-green-500" /> Spelling & Typos</li>
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-green-500" /> Basic Punctuation</li>
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-green-500" /> Formatting Consistency</li>
            </ul>
            <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition">Select Basic</button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="bg-[#0F172A] p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F97316] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center mb-6 text-white shadow-lg">
              <FileSearch size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Substantive Editing</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">Deep structural editing to improve academic tone, logical flow, and argument clarity for high-impact journals.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2 text-sm text-slate-200 font-medium"><Check size={18} className="text-[#F97316]" /> Everything in Basic</li>
              <li className="flex gap-2 text-sm text-slate-200 font-medium"><Check size={18} className="text-[#F97316]" /> Sentence Restructuring</li>
              <li className="flex gap-2 text-sm text-slate-200 font-medium"><Check size={18} className="text-[#F97316]" /> Academic Tone & Flow</li>
              <li className="flex gap-2 text-sm text-slate-200 font-medium"><Check size={18} className="text-[#F97316]" /> Vocabulary Enhancement</li>
            </ul>
            <button className="w-full py-3 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA580C] transition shadow-md">Select Substantive</button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-[#F97316]">
              <Quote size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Formatting & Citations</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">Strict compliance checks for university guidelines and international formatting styles.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-[#F97316]" /> APA, MLA, Harvard, IEEE</li>
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-[#F97316]" /> Reference Cross-Checking</li>
              <li className="flex gap-2 text-sm text-slate-700 font-medium"><Check size={18} className="text-[#F97316]" /> Layout & Margin Adjustment</li>
            </ul>
            <button className="w-full py-3 bg-orange-50 text-[#F97316] font-bold rounded-xl hover:bg-orange-100 transition">Select Formatting</button>
          </div>
        </div>
      </section>

      {/* 3. HUMAN EDITORS GUARANTEE */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Visual element representing a document correction */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto transform -rotate-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded mb-4"></div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded line-through"></div>
                <div className="h-4 w-1/3 bg-orange-200 rounded text-xs text-[#EA580C] font-bold flex items-center px-1">Correction</div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <CheckCircle2 className="text-[#F97316]" size={24} />
                <span className="font-bold text-sm">100% Human Edited</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6">
              AI Tools Miss Context. <br /> Our Editors Don't.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Grammarly and AI tools are great for catching basic spelling mistakes, but they cannot understand the nuanced context of your specific research discipline.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <p className="text-gray-600 text-sm"><strong className="text-gray-900 block">The Danger of Automated Tools:</strong> AI often suggests vocabulary changes that alter the scientific meaning of your sentences, leading to inaccurate claims.</p>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" size={20} />
                <p className="text-gray-600 text-sm"><strong className="text-gray-900 block">The Research Patra Difference:</strong> Your manuscript is assigned to a subject-matter expert who understands your field's terminology and ensures your scientific voice remains intact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Ready to perfect your manuscript?</h2>
        <p className="text-gray-500 mb-8 text-lg">Upload your document today for a free word-count assessment and custom quote.</p>
        <button className="px-10 py-4 bg-[#0F172A] text-white rounded-full font-bold text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mx-auto">
          Upload Document <ArrowRight size={20} />
        </button>
      </section>

    </div>
  );
};

export default EditingProofreading;