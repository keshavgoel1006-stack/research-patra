import React from 'react';
import { Book, FileText, BarChart2, PenTool } from 'lucide-react';

const services = [
  {
    title: "Dissertation Writing",
    desc: "Dissertation writing students research and ascertain writing strategies...",
    icon: <Book size={24} className="text-white" />
  },
  {
    title: "Research Papers",
    desc: "Research papers and students for high impact Research papers.",
    icon: <FileText size={24} className="text-white" />
  },
  {
    title: "Data Analysis",
    desc: "BarChart key trends of authors and dissertation academic and allied.",
    icon: <BarChart2 size={24} className="text-white" />
  },
  {
    title: "Editing & Proofing",
    desc: "Sort your pen tool and process refinement and for research edition.",
    icon: <PenTool size={24} className="text-white" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">Our Core Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div 
              key={index} 
              // THE MAGIC IS HERE: hover:border-black and hover:-translate-y-2
              className="bg-white p-8 rounded-[1.5rem] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-black hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              
              <div className="w-14 h-14 rounded-2xl bg-[#10B981] flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;