import React from 'react';

// 1. Import your new PNG images from the assets folder
import scopusImg from '../assets/scopus-seeklogo.png';
import springerImg from '../assets/springer-seeklogo.png';
import elsevierImg from '../assets/elsevier-seeklogo.png';

// 2. Map them to your slider using standard <img> tags
// The "logo-orange-tint" class is what triggers the color change
const logos = [
  { 
    id: 1, 
    component: <img src={elsevierImg} alt="Elsevier Logo" className="logo-orange-tint h-12 w-auto object-contain transition-all duration-300 hover:scale-105" /> 
  },
  { 
    id: 2, 
    component: <img src={scopusImg} alt="Scopus Logo" className="logo-orange-tint h-12 w-auto object-contain transition-all duration-300 hover:scale-105" /> 
  },
  { 
    id: 3, 
    component: <img src={springerImg} alt="Springer Logo" className="logo-orange-tint h-12 w-auto object-contain transition-all duration-300 hover:scale-105" /> 
  }
];

const LogoSlider = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative z-20 border-y border-gray-100 overflow-hidden">
      
      {/* Pure CSS Injection for Buttery Smooth Sliding AND the Orange Tint */}
      <style>
        {`
          @keyframes infinite-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-slide {
            animation: infinite-slide 25s linear infinite;
          }
          
          /* This exact formula forces any image to become your specific orange */
          .logo-orange-tint {
            filter: brightness(0) saturate(100%) invert(55%) sepia(85%) saturate(1874%) hue-rotate(346deg) brightness(101%) contrast(96%);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Get Your Article Ready For <br className="hidden md:block" /> Publication
        </h2>
        {/* Formal orange Accent Line */}
        <div className="w-20 h-1.5 bg-[#F97316] mx-auto mt-6 rounded-full shadow-sm"></div>
      </div>

      {/* The Slider Container */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* Left and Right Gradient Fades (High-Def Touch) */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        {/* The Moving Track */}
        <div className="flex w-[200%] animate-infinite-slide hover:[animation-play-state:paused] py-4">
          
          {/* We map the logos multiple times to ensure a seamless, never-ending loop */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 mx-4 bg-white border border-gray-100 h-28 flex items-center justify-center rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.05)]"
            >
              {logo.component}
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;