import React from 'react';
import { 
  BookOpen, CheckCircle, Layers, FileText, 
  BarChart, CheckSquare, ShieldCheck, Clock, Award 
} from 'lucide-react';

const ThesisWriting = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. IMPACT HERO SECTION */}
      <section className="relative py-20 md:py-28 bg-[#0F172A] overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <BookOpen size={56} className="text-[#F97316] mx-auto mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#fb923c]">Thesis & Dissertation</span> Writing
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Overcome writer's block and endless revisions. Get end-to-end PhD thesis writing support from subject-matter experts, ensuring a flawless, defense-ready document.
          </p>
        </div>
      </section>

      {/* 2. TRUST METRICS BAR */}
      <section className="bg-[#F97316] py-8 border-y-4 border-white shadow-xl relative z-20 -mt-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-orange-400/50">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white">500+</h3>
            <p className="text-orange-100 text-sm font-bold uppercase tracking-wider mt-1">Theses Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white">99%</h3>
            <p className="text-orange-100 text-sm font-bold uppercase tracking-wider mt-1">Acceptance Rate</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white">0%</h3>
            <p className="text-orange-100 text-sm font-bold uppercase tracking-wider mt-1">Plagiarism Tolerance</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-white">24/7</h3>
            <p className="text-orange-100 text-sm font-bold uppercase tracking-wider mt-1">Scholar Support</p>
          </div>
        </div>
      </section>

      {/* 3. CHAPTER-BY-CHAPTER BREAKDOWN (The core value proposition) */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Our Chapter-by-Chapter Execution
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A thesis is too large to write blindly. We break your research down into a highly structured, university-compliant, 5-chapter framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Chapter 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="text-[#F97316] font-black text-xl mb-2 block">Chapter 1</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We establish the research background, articulate a compelling problem statement, define clear objectives, and outline the scope and significance of your study.</p>
              <FileText className="text-gray-300 w-12 h-12" />
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="text-[#F97316] font-black text-xl mb-2 block">Chapter 2</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Literature Review</h3>
              <p className="text-gray-600 leading-relaxed mb-4">A massive, critical analysis of 50+ recent, high-impact base papers to prove your theoretical framework and explicitly highlight the research gap.</p>
              <Layers className="text-gray-300 w-12 h-12" />
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="text-[#F97316] font-black text-xl mb-2 block">Chapter 3</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Methodology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We document your study design, sampling techniques, data collection instruments, and statistical testing justification with ironclad academic logic.</p>
              <CheckSquare className="text-gray-300 w-12 h-12" />
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <span className="text-[#F97316] font-black text-xl mb-2 block">Chapter 4</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analysis & Results</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Raw data transformed into scientific proof. We run SPSS/AMOS/R tests, create high-quality graphs, and write comprehensive interpretations of the findings.</p>
              <BarChart className="text-gray-300 w-12 h-12" />
            </div>
          </div>

          {/* Chapter 5 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group lg:col-span-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <span className="text-[#F97316] font-black text-xl mb-2 block">Chapter 5 & Beyond</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discussion, Conclusion & Formatting</h3>
                <p className="text-gray-600 leading-relaxed">We tie your findings back to the literature, discuss limitations, provide future scope, and format the entire 150+ page document (APA/MLA/IEEE), perfectly compiling your bibliography and annexures.</p>
              </div>
              <Award className="text-gray-200 w-24 h-24 hidden md:block shrink-0" />
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE RESEARCH PATRA DIFFERENCE (Overcoming Supervisor Rejections) */}
      <section className="bg-gray-100 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">Why Scholars Trust Us With Their PhD</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Writing a thesis isn't just about word count; it's about defending your ideas against intense academic scrutiny. We write to ensure you survive the defense panel.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit"><ShieldCheck className="text-[#F97316]" size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Turnitin Plagiarism Report Included</h4>
                  <p className="text-gray-500 text-sm mt-1">Every chapter is delivered with a premium Turnitin similarity report ensuring 100% original writing.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit"><Clock className="text-[#F97316]" size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phased Delivery & Supervisor Feedback</h4>
                  <p className="text-gray-500 text-sm mt-1">We don't just dump a 200-page file on you. We deliver chapter-by-chapter so you can get incremental approval from your guide.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit"><CheckCircle className="text-[#F97316]" size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Infinite Free Revisions</h4>
                  <p className="text-gray-500 text-sm mt-1">If your supervisor requests modifications to the chapters we wrote, we revise them at absolutely zero extra cost until approved.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#0F172A] rounded-3xl p-10 text-center shadow-2xl">
            <h3 className="text-white text-2xl font-bold mb-4">Ready to start your Chapter 1?</h3>
            <p className="text-gray-400 mb-8">Stop stressing over deadlines. Let our PhD experts take the wheel.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#F97316]" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-[#F97316]" />
              <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-gray-400 focus:outline-none focus:border-[#F97316]">
                <option>Full Thesis Writing</option>
                <option>Partial/Specific Chapters</option>
                <option>Editing & Formatting Only</option>
              </select>
              <button type="button" className="w-full py-4 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA580C] transition shadow-lg mt-4">
                Request a Custom Quote
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ThesisWriting;