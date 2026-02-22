import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bgDark relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text */}
        <div>
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">About Research Patra</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Making Research Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Faster & Meaningful.
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            We aim to bridge the gap between knowledge and execution. Whether you are a student crafting a dissertation or a professional working on technical reports, we turn confusion into clarity.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 h-fit"><Target size={24} /></div>
              <div>
                <h4 className="text-white font-bold text-lg">Our Mission</h4>
                <p className="text-gray-400 text-sm">To make complex research accessible to everyone through personalized guidance and expert support.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-teal-500/20 p-2 rounded-lg text-teal-400 h-fit"><Lightbulb size={24} /></div>
              <div>
                <h4 className="text-white font-bold text-lg">Our Vision</h4>
                <p className="text-gray-400 text-sm">To become the most trusted global platform for research excellence and academic integrity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image/Graphic */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold">RP</div>
              <div>
                <div className="text-white font-bold">Research Patra Team</div>
                <div className="text-xs text-green-400">● Online now</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl rounded-tl-none text-sm text-gray-300">
                "We don't just write; we partner with you to ensure your success."
              </div>
              <div className="bg-blue-600/20 p-4 rounded-xl rounded-tr-none text-sm text-blue-200 ml-auto w-fit">
                Start your journey with us today.
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default About;