import React from 'react';
import { 
  Target, CheckCircle2, Search, TrendingUp, BookOpen, 
  Filter, FileCheck, Award, Users, Settings, ArrowRight 
} from 'lucide-react';

const TopicSelection = () => {
  return (
   <div className="bg-white min-h-screen font-sans selection:bg-[#f97316] ...">
      
      {/* 1. HERO SECTION (Maps to their top header) */}
      <section className="relative py-16 md:py-24 bg-[#0F172A] overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316] rounded-full blur-[150px] opacity-20 translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-gray-300 font-bold rounded-full text-sm mb-6 border border-slate-700">
            <Target size={16} className="text-[#F97316]" /> PHD & MASTERS ACADEMIC SUPPORT
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Expert <span className="text-[#F97316]">Topic Selection</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Laying the perfect foundation for your research journey with highly relevant, feasible, and high-impact academic topics.
          </p>
        </div>
      </section>

      {/* 2. THE 6-STEP PROCESS (Maps to their scattered bubble diagram, but organized cleanly) */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        {/* Subtle dot background */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Our 6-Step Topic Selection Process
            </h2>
            <div className="w-20 h-1.5 bg-[#F97316] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: "Keyword Selection", desc: "We identify core academic keywords aligned with your primary domain of interest." },
              { icon: <TrendingUp />, title: "Explore Trending Areas", desc: "Using advanced databases to map current trends and future scope in your field." },
              { icon: <BookOpen />, title: "Scientific Relevance", desc: "Ensuring the idea meets rigorous academic standards and solves a genuine literature gap." },
              { icon: <Filter />, title: "Identify 8-10 Topics", desc: "We generate a broad list of highly relevant, potential research titles." },
              { icon: <Award />, title: "Suitability Check", desc: "Validating topics against university guidelines and high-impact journal indexing criteria." },
              { icon: <FileCheck />, title: "Finalize 2-3 Topics", desc: "Narrowing down to the absolute best options for in-depth consideration and proposal writing." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#F97316] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS (Maps to their 3 white cards) */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-[#F97316] flex items-center justify-center rounded-full mb-4"><Users size={32} /></div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Customized Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Assistance meticulously crafted around your specific research goals, career ambitions, and educational requirements.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-[#F97316] flex items-center justify-center rounded-full mb-4"><CheckCircle2 size={32} /></div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Expert Guidance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Experienced PhD professionals offer actionable insights and strategic methodologies to strengthen your core concept.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-[#F97316] flex items-center justify-center rounded-full mb-4"><Settings size={32} /></div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Strategic Refinement</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Careful editing and scoping to increase the general quality, feasibility, and endurance of your research synopsis.</p>
          </div>
        </div>
      </section>

      {/* 4. IMPORTANCE & PERSONALIZED ASSISTANCE (Maps to their text blocks and image placeholder) */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6 leading-tight">
              The Importance of Choosing the <span className="text-[#F97316]">Right Topic</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Picking the correct research path at the PhD level is the most critical milestone of a scholar's academic journey. Research Patra helps candidates identify research gaps that perfectly align with their academic interests and long-term professional ambitions.
              </p>
              <p>
                We demonstrate how to construct a research focus that is innovative, highly relevant, and realistically achievable within your university's time constraints. Our personalized approach ensures that the chosen topic genuinely contributes to your discipline, setting the stage for high-impact publications.
              </p>
            </div>
          </div>
          {/* Abstract Image/Graphic Replacement */}
          <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full blur-[100px] opacity-30"></div>
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why Research Patra?</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">Personalized Approach</strong>
                  <span className="text-gray-400 text-sm">Every scholar's path is different. We help you stay motivated by ensuring the topic fits your exact background.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">Enhanced Research Quality</strong>
                  <span className="text-gray-400 text-sm">By prioritizing originality and relevance, we drastically increase your chances of publishing in reputable journals.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. GUARANTEES / WHY CHOOSE US (Maps to their Purple Box with checkboxes) */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-6">
        <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-800">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">The Research Patra Guarantee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "On-Time Delivery", "100% Satisfaction", "Value For Money", 
              "Expert PhD Writers", "24/7 Customer Support", "Individualized Writing Support", 
              "Confidentiality And Security", "100% Plagiarism Free", "Secure Payment Processing"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <CheckCircle2 size={20} className="text-[#F97316] shrink-0" />
                <span className="text-slate-200 font-semibold text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER (Maps to their pink/orange banner) */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#EA580C] to-[#F97316] rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
            Publish Your Research Articles In <br className="hidden md:block" /> SCI/Scopus Journals
          </h2>
          <button className="mt-4 px-10 py-4 bg-white text-[#EA580C] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-slate-50 transition-all flex items-center gap-2 mx-auto relative z-10">
            Contact Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default TopicSelection;