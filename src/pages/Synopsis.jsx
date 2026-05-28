import React from 'react';
import { FileSignature, CheckCircle, BookOpen, PenTool, LayoutList, Target } from 'lucide-react';

const Synopsis = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. DISTINCT HERO: Centered, heavy typography, no abstract background blobs this time */}
      <section className="bg-[#0F172A] py-20 px-6 border-b-8 border-[#F97316]">
        <div className="max-w-4xl mx-auto text-center">
          <FileSignature size={48} className="text-[#F97316] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Research Proposal & <br className="hidden md:block" /> Synopsis Writing
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Your synopsis is the gateway to your PhD. We craft highly structured, compelling proposals that secure immediate approval from your university committee.
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM/SOLUTION SPLIT: Different from Topic Selection's side-by-side */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6 leading-tight">
                Why Do Most Research Proposals Get Rejected?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A research proposal isn't just an essay; it is a rigid academic blueprint. University committees reject proposals that lack a clear problem statement, feature outdated literature, or propose an unrealistic methodology.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                At Research Patra, we map your synopsis exactly to your university's guidelines, ensuring every technical requirement is met flawlessly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-red-50 text-red-500 flex items-center justify-center rounded-full font-bold">X</div>
                <span className="text-gray-700 font-medium">Vague Research Objectives</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-red-50 text-red-500 flex items-center justify-center rounded-full font-bold">X</div>
                <span className="text-gray-700 font-medium">Flawed Research Methodology</span>
              </div>
              <div className="flex items-center gap-4 bg-[#F97316] p-4 rounded-2xl shadow-md transform translate-x-4">
                <CheckCircle className="text-white shrink-0" />
                <span className="text-white font-bold">Research Patra: 100% Committee Approval Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERTICAL TIMELINE: What we include in the Synopsis (Completely new layout) */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0F172A]">What Our Proposal Includes</h2>
          <p className="text-gray-500 mt-3">A complete, end-to-end framework ready for submission.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-orange-100">
          
          {/* Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              <Target size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">1. Introduction & Background</h3>
              <p className="text-gray-600 text-sm">Establishing the context of the study and clearly defining the problem statement.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              <BookOpen size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">2. Literature Review</h3>
              <p className="text-gray-600 text-sm">A critical analysis of existing research to highlight the explicit gap your study will fill.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              <LayoutList size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">3. Research Methodology</h3>
              <p className="text-gray-600 text-sm">Detailed design covering data collection methods, sampling techniques, and statistical tools.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              <PenTool size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-[#0F172A] mb-2">4. References & Bibliography</h3>
              <p className="text-gray-600 text-sm">Flawlessly formatted citations using APA, MLA, Harvard, or IEEE standards.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SOLID CTA BOTTOM */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">Need a custom proposal for your university?</h2>
        <button className="px-8 py-3 bg-[#F97316] text-white rounded-full font-bold shadow-md hover:bg-[#EA580C] transition">
          Consult an Expert Today
        </button>
      </section>

    </div>
  );
};

export default Synopsis;