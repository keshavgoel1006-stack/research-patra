import React from 'react';
import { BookOpen, FileText, Search, BarChart2, Lightbulb, PenTool, CheckCircle2, ArrowRight, Target, Globe, Award, FileSignature } from 'lucide-react';

const fullServices = [
  {
    title: "Topic Selection",
    desc: "Struggling to find a unique research gap? Our experts help you brainstorm and finalize compelling, novel research topics that guarantee approval from your university committee.",
    icon: <Target size={28} className="text-white" />,
    link: "/topic-selection"
  },
  {
    title: "Research Proposal & Synopsis",
    desc: "Set a strong foundation for your PhD. We craft highly structured research proposals and synopses that clearly define your methodology, objectives, and problem statement.",
    icon: <FileSignature size={28} className="text-white" />,
    link: "/synopsis"
  },
  {
    title: "Thesis & Dissertation Writing",
    desc: "From drafting chapters to refining arguments and ensuring academic formatting, our end-to-end dissertation writing support ensures you submit a flawless, highly credible document.",
    icon: <BookOpen size={28} className="text-white" />,
    link: "#"
  },
  {
    title: "Research & Review Papers",
    desc: "Get publish-ready academic papers tailored precisely to your subject, styling guide, and targeted international journal requirements (IEEE, Springer, Elsevier).",
    icon: <FileText size={28} className="text-white" />,
    link: "/research-papers"
  },
  {
    title: "Systematic Literature Review",
    desc: "A strong review is the backbone of good research. Our team specializes in creating systematic, well-structured literature reviews and critical gap mappings.",
    icon: <Search size={28} className="text-white" />,
    link: "/systematic-review"
  },
  {
    title: "Statistical Data Analysis",
    desc: "Turn raw datasets into clear insights. Our experts use advanced statistical tools (SPSS, AMOS, R, Python, MATLAB) to test hypotheses and visualize your scientific findings.",
    icon: <BarChart2 size={28} className="text-white" />,
    link: "/statistical-analysis"
  },
  {
    title: "Editing & Proofreading",
    desc: "Even strong research loses impact if poorly formatted. We rigorously peer-review manuscripts for academic flow, grammatical precision, and citation validation (APA, MLA, Harvard).",
    icon: <PenTool size={28} className="text-white" />,
    link: "/editing-proofreading"
  },
  {
    title: "SCI & Scopus Publication",
    desc: "Navigate the complex publication process with ease. We assist with journal selection, formatting, peer-review rebuttal responses, and guaranteed high-impact indexing.",
    icon: <Globe size={28} className="text-white" />,
    link: "#"
  },
  {
    title: "UGC Care & Conference Papers",
    desc: "Secure fast and ethical publications in UGC Care listed journals and prestigious international academic conferences to meet your critical academic milestones.",
    icon: <Award size={28} className="text-white" />,
    link: "#"
  }
];

const ServicesPage = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <section className="relative pt-4 pb-24 md:pt-8 md:pb-32 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#EA580C] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316] rounded-full blur-[150px] opacity-15 translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-4 md:mb-6 tracking-tight leading-tight">
            Comprehensive <br className="hidden sm:block" />
            <span className="text-[#F97316]">Academic Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            From dissertation planning to detailed data analysis, we deliver academic solutions tailored to your unique requirements with ethical guidance.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
     <section className="pt-16 md:pt-24 pb-16 md:pb-24 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}>
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fullServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-black hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group transition-all flex flex-col"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F97316] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {service.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed flex-grow">
                  {service.desc}
                </p>

                {/* HERE IS THE CLICKABLE LINK */}
                <a href={service.link} className="mt-6 md:mt-8 flex items-center gap-2 text-[#F97316] font-bold group-hover:text-[#EA580C] transition-colors cursor-pointer w-fit">
                  Learn more <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="relative p-8 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#F97316] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
            <h3 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-2 tracking-tighter">10<span className="text-[#F97316]">+</span></h3>
            <p className="text-lg md:text-xl font-bold text-gray-500 uppercase tracking-widest">Years of Trust</p>
            <div className="w-16 md:w-20 h-1.5 bg-[#F97316] mx-auto mt-6 md:mt-8 rounded-full"></div>
            <p className="mt-6 md:mt-8 text-gray-500 font-medium text-sm md:text-base">Delivering academic excellence across undergraduate, postgraduate, and doctoral programs.</p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-[#EA580C] font-bold rounded-full text-xs md:text-sm mb-6 border border-orange-100">
              <CheckCircle2 size={16} /> OUR LEGACY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4 md:mb-6 leading-tight tracking-tight">
              A Foundation of <br className="hidden sm:block" /> Academic Integrity
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8 leading-relaxed font-medium">
              We believe academic success should not feel overwhelming — that's why we combine expertise with personalized guidance, ensuring every project is handled with care.
            </p>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-center gap-3 md:gap-4 text-[#0F172A] font-bold text-base md:text-lg">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F97316] shrink-0"><CheckCircle2 size={18} /></div>
                Superior Quality
              </li>
              <li className="flex items-center gap-3 md:gap-4 text-[#0F172A] font-bold text-base md:text-lg">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F97316] shrink-0"><CheckCircle2 size={18} /></div>
                Transparent Practices
              </li>
              <li className="flex items-center gap-3 md:gap-4 text-[#0F172A] font-bold text-base md:text-lg">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F97316] shrink-0"><CheckCircle2 size={18} /></div>
                Personalized Solutions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-16 md:py-24 bg-[#0F172A] overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#F97316] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            Ready to Achieve Your <br className="hidden sm:block" /> Academic Goals?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 font-medium px-2">
            Contact us today to discuss your project, get a free quote, or learn more about how we can support your research journey.
          </p>
          <button className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-[#F97316] text-white rounded-full font-bold text-base md:text-lg shadow-[0_8px_20px_rgb(249,115,22,0.35)] hover:bg-[#EA580C] transition-colors">
            Get A Free Quote
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;