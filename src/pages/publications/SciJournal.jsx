import React from 'react';
import { Globe, FileText, ArrowRight, Target, Award } from 'lucide-react';

const SciJournal = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-slate-50 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 skew-x-12 translate-x-20 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0F172A] font-bold rounded-full text-sm mb-6 shadow-sm border border-gray-200">
            <Globe size={16} className="text-[#F97316]" /> Web of Science (WoS) Indexed
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
            Premium <span className="text-[#F97316]">SCI Journal</span> Publication Services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            The Science Citation Index (SCI) is a multidisciplinary database tracking elite scientific articles. We provide expert guidance, manuscript preparation, and submission support to ensure your research is published in top-tier, high-impact scientific journals.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
             <button className="w-full sm:w-auto px-8 py-4 bg-[#F97316] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 hover:bg-[#EA580C] transition-all flex justify-center items-center gap-2">
                Get a Free Quote <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (Adapted from competitor offerings) */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">How We Help You Succeed</h2>
          <div className="w-20 h-1.5 bg-[#F97316] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Navigating the intricate publication process of SCI-indexed journals requires expertise. Here is how we ensure your academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group h-full">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText size={28} className="text-[#F97316]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Manuscript Preparation</h3>
            <p className="text-gray-600 leading-relaxed">
              We assist researchers by offering expert guidance in high-quality manuscript preparation, ensuring your work meets the stringent requirements and elite standards of Web of Science.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group h-full">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={28} className="text-[#F97316]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Submission & Peer Review</h3>
            <p className="text-gray-600 leading-relaxed">
              Achieve academic excellence with our submission guidance. We help you successfully traverse intricate peer-review navigation, significantly reducing the chances of desk rejection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group h-full">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award size={28} className="text-[#F97316]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Academic Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Our services streamline the entire publication process. We enhance the core quality of your manuscript, helping Ph.D. scholars make a significant impact in prestigious scientific circles.
            </p>
          </div>

          {/* Card 4 - Dark Call to Action Card */}
          <div className="bg-[#0F172A] p-8 md:p-10 rounded-3xl border border-[#1E293B] shadow-xl text-white flex flex-col justify-center relative overflow-hidden h-full">
             <div className="absolute -right-10 -bottom-10 opacity-10">
                <Globe size={200} />
             </div>
             <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Publish?</h3>
             <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
               Don't let complex guidelines delay your PhD. Partner with our knowledgeable supervisors today to secure your publication.
             </p>
             <button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 rounded-xl transition-all relative z-10 flex justify-center items-center gap-2">
               Start Your Publication <ArrowRight size={18} />
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SciJournal;