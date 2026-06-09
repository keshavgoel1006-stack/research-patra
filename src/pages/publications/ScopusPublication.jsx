import React from 'react';
import { CheckCircle2, BookOpen, PenTool, Send, TrendingUp, Search, ArrowRight } from 'lucide-react';

const ScopusPublication = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white">
      
      {/* 1. DARK MODE HERO */}
      <section className="relative bg-[#0F172A] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#F97316] opacity-10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500 opacity-10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-orange-400 font-bold rounded-full text-sm mb-6 border border-white/10 backdrop-blur-sm">
              <Search size={16} /> Globally Recognized Indexing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Guaranteed <br/>
              <span className="text-[#F97316]">Scopus-Indexed</span> <br/>
              Publication
            </h1>
            <p className="text-lg text-gray-300 font-medium leading-relaxed mb-8 max-w-xl">
              From original manuscript construction to careful formatting and submission, our dedicated team provides expert, individualized assistance to get your research published in esteemed Scopus journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#F97316] text-white rounded-full font-bold shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:-translate-y-1 hover:bg-[#EA580C] transition-all flex justify-center items-center gap-2">
                Start Your Journey <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h3 className="text-2xl font-black text-[#0F172A]">Scopus Approval Checklist</h3>
              </div>
              <ul className="space-y-5">
                {[
                  'Original Research Construction',
                  'Rigorous Academic Editing',
                  'Scopus Formatting Criteria',
                  'Plagiarism & AI Verification',
                  'Journal Selection & Submission'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 font-medium text-lg">
                    <div className="bg-orange-50 p-1.5 rounded-full">
                      <CheckCircle2 className="text-[#F97316]" size={20} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SCOPUS ADVANTAGE STRIP */}
      <section className="bg-orange-50 py-12 border-b border-orange-100 relative z-20 mx-4 md:mx-12 rounded-3xl shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-orange-200">
          <div className="flex items-center gap-4 md:px-6">
            <TrendingUp size={40} className="text-[#F97316] shrink-0" />
            <div>
              <h4 className="font-bold text-[#0F172A] text-lg">High Impact Factor</h4>
              <p className="text-sm text-gray-600">Elevate your academic profile.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
            <BookOpen size={40} className="text-[#F97316] shrink-0" />
            <div>
              <h4 className="font-bold text-[#0F172A] text-lg">Global Reach</h4>
              <p className="text-sm text-gray-600">Maximized citation potential.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:px-6 pt-4 md:pt-0">
            <CheckCircle2 size={40} className="text-[#F97316] shrink-0" />
            <div>
              <h4 className="font-bold text-[#0F172A] text-lg">Ph.D. Compliant</h4>
              <p className="text-sm text-gray-600">Meets all university standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP PROCESS TIMELINE */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">Our Seamless Publication Process</h2>
          <div className="w-20 h-1.5 bg-[#F97316] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-100 before:via-[#F97316] before:to-orange-100">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <PenTool size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider mb-1 block">Phase 1</span>
              <h3 className="font-bold text-[#0F172A] text-xl mb-2">Manuscript Construction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We provide specialization instructions to help build your original manuscript from scratch, ensuring the core research is robust and compelling.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Search size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider mb-1 block">Phase 2</span>
              <h3 className="font-bold text-[#0F172A] text-xl mb-2">Editing & Formatting</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Our team conducts careful editing and formatting to guarantee that your paper strictly follows the demand criteria set aside for Scopus indexed journals.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F97316] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Send size={18} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider mb-1 block">Phase 3</span>
              <h3 className="font-bold text-[#0F172A] text-xl mb-2">Submission Guidance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We provide personal, individualized assistance during the entire submission procedure, helping you navigate reviewer feedback until successful publication.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ScopusPublication;