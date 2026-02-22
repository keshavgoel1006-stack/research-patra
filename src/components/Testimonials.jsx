import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Dr. Amit Sharma",
    title: "PhD Candidate"
  },
  {
    quote: "These many person development textmonial assistance with writing entire externation and benefit, impressive range for main conseniment.",
    name: "Dr. Amit Sharma", // Kept same as image for accuracy
    title: "PhD Candidate"
  },
  {
    quote: "We important discovering, and evocation academic history, which the cause should be defined by programmayon of condemnations of multicolitions.",
    name: "Dr. Singh Sharma",
    title: "Chapter"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-darkNavy relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
        </div>

        <div className="flex items-center justify-between gap-6 relative">
          
          {/* Left Arrow */}
          <button className="hidden md:flex w-10 h-10 bg-white rounded-full items-center justify-center text-darkNavy hover:bg-gray-200 transition-colors absolute -left-5 z-10 shadow-lg">
            <ChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {testimonials.map((test, index) => (
              <div key={index} className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 relative">
                <Quote size={40} className="text-primaryGreen mb-4 opacity-80" />
                <p className="text-gray-300 text-sm leading-relaxed mb-8 min-h-[100px]">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-white text-sm">{test.name}</h4>
                  <p className="text-xs text-gray-400">{test.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex w-10 h-10 bg-white rounded-full items-center justify-center text-darkNavy hover:bg-gray-200 transition-colors absolute -right-5 z-10 shadow-lg">
            <ChevronRight size={24} />
          </button>

        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-2.5 h-2.5 rounded-full bg-primaryGreen"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;