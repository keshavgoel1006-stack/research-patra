import React from 'react';
import { BookOpen, FileText, Search, BarChart2, Lightbulb, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';

const fullServices = [
  {
    title: "Dissertation Writing & Planning",
    desc: "Writing a dissertation can feel overwhelming, but with Research Patra you never have to face it alone. Our experts help you at every stage — from structuring your chapters to refining arguments and ensuring academic formatting.",
    icon: <BookOpen size={28} className="text-white" />
  },
  {
    title: "Research Paper Writing",
    desc: "Whether you are preparing for a journal submission, a conference, or an internal university requirement, our research paper writing service ensures your work is polished and impactful.",
    icon: <FileText size={28} className="text-white" />
  },
  {
    title: "Systematic Literature Review",
    desc: "A strong literature review is the backbone of good research, and our team specializes in creating systematic, well-structured reviews. We organize findings into a logical narrative.",
    icon: <Search size={28} className="text-white" />
  },
  {
    title: "Statistical Data Analysis",
    desc: "Data is only valuable when it is interpreted correctly. Our data analysis experts use advanced statistical tools (SPSS, R, STATA, Python) to clean, test, and interpret data.",
    icon: <BarChart2 size={28} className="text-white" />
  },
  {
    title: "Thesis Proposal Writing",
    desc: "A clear and compelling thesis proposal sets the stage for successful research. We assist in formulating research questions, setting objectives, and designing a strong methodology.",
    icon: <Lightbulb size={28} className="text-white" />
  },
  {
    title: "Editing & Proofreading",
    desc: "Even strong research can lose impact if it is poorly written or formatted. Our editing and proofreading service ensures your dissertation, thesis, or paper is error-free and polished.",
    icon: <PenTool size={28} className="text-white" />
  }
];

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-[#10B981] selection:text-white">

      {/* HEADER: Matches Home Page Hero (White BG + Emerald Glows) */}
      <section className="relative py-20 overflow-hidden">
        {/* Glow Blobs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#059669] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981] rounded-full blur-[150px] opacity-15 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
            Comprehensive <br />
            <span className="text-[#10B981]">Academic Services</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            From dissertation planning to detailed data analysis, we deliver academic solutions tailored to your unique requirements with ethical guidance.
          </p>
        </div>
      </section>

      {/* SERVICES GRID: Clean White Cards with Hover Effects */}
      <section className="pb-24 relative overflow-hidden">
        {/* Tech Dot Grid Texture */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullServices.map((service, index) => (
              <div 
                key={index} 
                // Exactly matching the home page hover states (black border, lift up, deep shadow)
                className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-black hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#10B981] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium flex-grow">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[#10B981] font-bold group-hover:text-[#059669] transition-colors">
                  Learn more <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGACY SECTION: Re-styled to match the clean agency theme */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Typographic Stat Block instead of a generic Stock Image */}
          <div className="relative p-12 bg-white rounded-[3rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center transform hover:scale-105 transition-transform duration-500">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#10B981] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
             <h3 className="text-8xl font-black text-[#0F172A] mb-2 tracking-tighter">10<span className="text-[#10B981]">+</span></h3>
             <p className="text-xl font-bold text-gray-500 uppercase tracking-widest">Years of Trust</p>
             <div className="w-20 h-1.5 bg-[#10B981] mx-auto mt-8 rounded-full"></div>
             <p className="mt-8 text-gray-500 font-medium">Delivering academic excellence across undergraduate, postgraduate, and doctoral programs.</p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-[#059669] font-bold rounded-full text-sm mb-6 border border-emerald-100">
              <CheckCircle2 size={16} /> OUR LEGACY
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 leading-tight tracking-tight">
              A Foundation of <br/> Academic Integrity
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
              We believe academic success should not feel overwhelming — that's why we combine expertise with personalized guidance, ensuring every project is handled with care and precision.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-[#0F172A] font-bold text-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#10B981]"><CheckCircle2 size={20} /></div>
                Superior Quality
              </li>
              <li className="flex items-center gap-4 text-[#0F172A] font-bold text-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#10B981]"><CheckCircle2 size={20} /></div>
                Transparent Practices
              </li>
              <li className="flex items-center gap-4 text-[#0F172A] font-bold text-lg">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#10B981]"><CheckCircle2 size={20} /></div>
                Personalized Solutions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA BANNER: Deep Navy with glowing background, NO stock images */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden text-center">
        {/* Internal Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Achieve Your <br className="hidden md:block" /> Academic Goals?
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-medium">
            Contact us today to discuss your project, get a free quote, or learn more about how we can support your research journey.
          </p>
          <button className="px-10 py-4 bg-[#10B981] text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgb(16,185,129,0.35)] hover:bg-[#059669] hover:-translate-y-1 transition-all">
            Get A Free Quote
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;