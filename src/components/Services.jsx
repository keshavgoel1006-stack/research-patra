import React from 'react';
import { BookOpen, FileText, Search, BarChart3, GraduationCap, FileCheck } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      icon: <GraduationCap className="h-6 w-6 text-[#F97316]" />,
      title: "Dissertation Writing & Planning",
      description: "Turn your research ideas into well-structured, high-quality dissertations with professional academic structuring and planning support."
    },
    {
      icon: <FileText className="h-6 w-6 text-[#F97316]" />,
      title: "Research Paper Writing",
      description: "Get publish-ready academic papers tailored precisely to your subject, styling guide, and targeted international journal requirements."
    },
    {
      icon: <Search className="h-6 w-6 text-[#F97316]" />,
      title: "Systematic Literature Review",
      description: "Enhance your research paper depth with a thorough, highly organized review of existing studies and critical mapping of gaps."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#F97316]" />,
      title: "Statistical Data Analysis",
      description: "Turn complex raw datasets into clear, reliable scientific insights with expert statistical analysis and visual graphical plotting."
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1.5 rounded-full inline-block mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
            Comprehensive Academic Writing & Research Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Ethical guidance designed to help scholars design, write, edit, and publish world-class scientific papers.
          </p>
        </div>

        {/* Dense Grid - Max 2 cols on tablet/desktop to keep visual hierarchy tight and legible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition duration-300 flex items-start gap-4 md:gap-5"
            >
              <div className="p-3 bg-orange-50 rounded-xl shrink-0">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-950 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;