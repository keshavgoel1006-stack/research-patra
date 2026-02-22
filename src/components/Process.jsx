import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, PenTool, CheckCircle, UploadCloud } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Topic Consultation",
    desc: "We help you select a novel, researchable topic approved by your university.",
    icon: <FileSearch size={24} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  {
    id: "02",
    title: "Drafting & Analysis",
    desc: "Our experts draft the paper and perform statistical analysis (SPSS/R/Python).",
    icon: <PenTool size={24} />,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20"
  },
  {
    id: "03",
    title: "Review & Editing",
    desc: "Rigorous proofreading to remove plagiarism and grammatical errors.",
    icon: <CheckCircle size={24} />,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20"
  },
  {
    id: "04",
    title: "Publication Support",
    desc: "We submit your paper to high-impact journals (Scopus/IEEE) and handle revisions.",
    icon: <UploadCloud size={24} />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-bgDark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">How We Work</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-900 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step Number Bubble */}
              <div className={`w-24 h-24 mx-auto ${step.bg} border backdrop-blur-xl rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50`}>
                <span className={`text-2xl font-bold ${step.color}`}>{step.id}</span>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;