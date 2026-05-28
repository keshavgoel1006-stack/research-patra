import React from 'react';
import { 
  Search, Filter, Database, FileSpreadsheet, 
  Map, CheckCircle2, BookMarked, ArrowRight 
} from 'lucide-react';

const SystematicReview = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-[#0F172A] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-[#F97316]/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-[#F97316]/20 rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Search size={48} className="text-[#F97316] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Systematic <span className="text-[#F97316]">Literature Review</span> Services
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Stop drowning in hundreds of unorganized papers. We conduct rigorous, PRISMA-compliant literature reviews to map research gaps and build an ironclad foundation for your study.
          </p>
        </div>
      </section>

      {/* 2. THE PRISMA FUNNEL */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">Our Scientific Filtering Process</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We don't just summarize abstracts. We follow a strict methodological protocol to ensure your review is exhaustive and unbiased.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-1 before:bg-orange-100 before:-translate-y-1/2 hidden md:grid z-0">
          {[
            { icon: <Database />, title: "1. Identification", desc: "Boolean searches across Scopus, Web of Science, and IEEE Xplore." },
            { icon: <Filter />, title: "2. Screening", desc: "Removing duplicates and filtering by strict inclusion/exclusion criteria." },
            { icon: <FileSpreadsheet />, title: "3. Extraction", desc: "Detailed thematic extraction of methodologies and findings." },
            { icon: <Map />, title: "4. Synthesis", desc: "Mapping the exact literature gap your PhD will solve." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 bg-white p-6 rounded-3xl border border-gray-100 shadow-lg text-center transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 mx-auto bg-[#F97316] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-3">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile View for the process */}
        <div className="md:hidden space-y-6">
           {[
            { icon: <Database />, title: "1. Identification", desc: "Boolean searches across Scopus, Web of Science, and IEEE Xplore." },
            { icon: <Filter />, title: "2. Screening", desc: "Removing duplicates and filtering by strict inclusion/exclusion criteria." },
            { icon: <FileSpreadsheet />, title: "3. Extraction", desc: "Detailed thematic extraction of methodologies and findings." },
            { icon: <Map />, title: "4. Synthesis", desc: "Mapping the exact literature gap your PhD will solve." }
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 shrink-0 bg-orange-50 text-[#F97316] rounded-xl flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DELIVERABLES */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <BookMarked className="text-[#F97316] mb-4" size={28} />
              <h4 className="font-bold text-[#0F172A] mb-2">Base Papers Included</h4>
              <p className="text-gray-500 text-sm">We provide all PDFs of the cited base papers for your reference.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-0 sm:mt-8">
              <Map className="text-[#F97316] mb-4" size={28} />
              <h4 className="font-bold text-[#0F172A] mb-2">Gap Matrix</h4>
              <p className="text-gray-500 text-sm">A clear tabular breakdown of what previous researchers missed.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <FileSpreadsheet className="text-[#F97316] mb-4" size={28} />
              <h4 className="font-bold text-[#0F172A] mb-2">PRISMA Flowchart</h4>
              <p className="text-gray-500 text-sm">A visual diagram ready to be inserted directly into your thesis.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-0 sm:mt-8">
              <CheckCircle2 className="text-[#F97316] mb-4" size={28} />
              <h4 className="font-bold text-[#0F172A] mb-2">Proper Citations</h4>
              <p className="text-gray-500 text-sm">Flawlessly formatted bibliographies using Mendeley or EndNote.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6 leading-tight">
              More Than Just A Summary. <br /> It's A <span className="text-[#F97316]">Strategic Map.</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              A weak literature review is the #1 reason PhD proposals are rejected. If you don't clearly prove the gap, your university will argue your research isn't necessary.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Whether you need a standalone SLR paper for journal publication, or Chapter 2 of your massive PhD thesis, our analysts meticulously categorize findings chronologically, thematically, and methodologically.
            </p>
            <button className="px-8 py-4 bg-[#0F172A] text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition flex items-center gap-2 mx-auto lg:mx-0">
              Consult an SLR Expert <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SystematicReview;