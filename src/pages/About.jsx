import React from 'react';
import { ShieldCheck, Award, Zap, Lightbulb, HeartHandshake, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-[#F97316] selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#EA580C] rounded-full blur-[140px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-8 tracking-tight leading-tight">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Research.</span> <br />
            Supporting Success.
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            From students to professionals, Research Patra is your trusted partner in academic and applied research excellence.
          </p>
          <button className="px-8 py-4 bg-[#0F172A] text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#F97316]"></span> OUR STORY
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 leading-[1.2]">
              Why Does Research Often Feel So Overwhelming and Intimidating?
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed mt-2 lg:mt-14">
            <p>
              We noticed that students often struggled to navigate the complexities of academic projects, and professionals faced similar challenges in writing, analysis, and documentation.
            </p>
            <p>
              What started as a small academic support team quickly grew into a complete research assistance platform that serves clients from universities, institutes, and industries worldwide.
            </p>
            <p className="pt-4 border-t border-gray-100">
              Today, our team includes academic writers, statisticians, editors, and subject experts who share a single goal — <strong className="text-[#0F172A]">to make research smarter, faster, and more meaningful.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* --- MISSION AND VISION SECTION --- */}
      <section className="py-24 bg-[#F8FAFC] relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="bg-[#0F172A] p-16 rounded-[3rem] relative shadow-2xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F97316] rounded-full blur-[60px] opacity-30 pointer-events-none"></div>
            <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Turning Ideas <br /> Into Impact <br /> Together
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed border-l-4 border-[#F97316] pl-6">
              We strive to bridge the gap between knowledge and implementation by providing tailored guidance, expert assistance, and exceptional documentation.
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F97316]"></span> THE GOAL
              </p>
              <h3 className="text-4xl font-extrabold text-[#0F172A] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-4">
                Our mission is simple: <strong className="text-[#0F172A]">to make complex research and writing accessible to everyone.</strong>
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-4">
                We aim to bridge the gap between knowledge and execution by offering personalized guidance, expert support, and high-quality documentation.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                For students, this means assistance in crafting dissertations, theses, and research papers that reflect academic integrity and depth. For professionals, it means reliable help with analytical reports, data interpretation, technical documentation, or publication-oriented writing.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F97316]"></span> THE OUTLOOK
              </p>
              <h3 className="text-4xl font-extrabold text-[#0F172A] mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-4">
                We envision a future where research and innovation are accessible to all — not limited by time, stress, or lack of guidance.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-4">
                Research Patra seeks to become the most trusted platform for research excellence, empowering learners, scholars, and organizations to produce meaningful, evidence-based work that contributes positively to society.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Our goal is to simplify the research process — transforming confusion into clarity and turning effort into excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CUSTOMER COMMITMENT SECTION --- */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-3 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#F97316]"></span> CUSTOMER COMMITMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-10 leading-tight">
              What We Stand <br /> For Daily
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1"><ShieldCheck className="text-[#F97316]" size={24} /></div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed"><strong className="text-[#0F172A]">Integrity:</strong> Every project is 100% plagiarism-free and follows academic ethics.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Award className="text-[#F97316]" size={24} /></div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed"><strong className="text-[#0F172A]">Quality:</strong> We focus on depth, structure, and precision in every document.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Zap className="text-[#F97316]" size={24} /></div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed"><strong className="text-[#0F172A]">Transparency:</strong> Clear communication, honest pricing, and regular progress updates.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Lightbulb className="text-[#F97316]" size={24} /></div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed"><strong className="text-[#0F172A]">Innovation:</strong> Continuous improvement through modern tools, data analytics, and digital research methods.</p>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><HeartHandshake className="text-[#F97316]" size={24} /></div>
                <p className="text-lg text-gray-600 font-medium leading-relaxed"><strong className="text-[#0F172A]">Empathy:</strong> We understand your challenges and provide support that fits your pace and goals.</p>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center">
             <div className="w-full max-w-md aspect-square bg-[#0F172A] rounded-[3rem] p-12 flex flex-col justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316] rounded-full blur-[50px] opacity-40"></div>
                <div className="text-[#F97316] mb-6">
                  <ShieldCheck size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-5xl font-extrabold text-white leading-tight">
                  Ethical <br /> Authenticity
                </h3>
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL NOTE CTA --- */}
      <section className="py-32 bg-[#F8FAFC] text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-4 h-[2px] bg-[#F97316]"></span> FINAL NOTE
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] mb-8 leading-tight tracking-tight">
            Your research matters. Let’s make it exceptional: together.
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            At Research Patra, we’re redefining how academic and professional research gets done — with empathy, expertise, and excellence. We’re here not just to deliver documents, but to build confidence, clarity, and credibility in your research journey.
          </p>
          <button className="text-lg font-bold text-[#F97316] hover:text-[#EA580C] transition-colors pb-1 border-b-2 border-[#F97316]">
            Contact us today to get started.
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;