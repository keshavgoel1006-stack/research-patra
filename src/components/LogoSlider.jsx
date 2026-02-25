import React from 'react';

const ScopusLogo = () => (
  <svg viewBox="0 0 200 60" className="h-10 w-auto">
    <text x="20" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="#FF8200">Scopus</text>
    <circle cx="165" cy="18" r="4" fill="#FF8200"/>
  </svg>
);

const SpringerLogo = () => (
  <svg viewBox="0 0 200 60" className="h-10 w-auto">
    <path d="M30,50 L30,40 L40,30 L35,10 L45,5 L55,15 L60,30 L65,30 L65,50 Z" fill="#0176C3"/> 
    <text x="80" y="42" fontFamily="Georgia, serif" fontWeight="bold" fontSize="36" fill="#0F172A">Springer</text>
  </svg>
);

const ElsevierLogo = () => (
  <svg viewBox="0 0 200 60" className="h-10 w-auto">
    <path d="M30,55 L30,15 M30,35 L15,20 M30,30 L45,15 M20,55 L40,55" stroke="#FF6A13" strokeWidth="3" fill="none"/>
    <text x="55" y="40" fontFamily="Times New Roman, serif" fontWeight="bold" fontSize="30" letterSpacing="1.5" fill="#FF6A13">ELSEVIER</text>
  </svg>
);

const logos = [
  { id: 1, component: <ElsevierLogo /> },
  { id: 2, component: <ScopusLogo /> },
  { id: 3, component: <SpringerLogo /> },
];

const LogoSlider = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative z-20 border-y border-gray-100 overflow-hidden">
      
      {/* Pure CSS Injection for Buttery Smooth Sliding */}
      <style>
        {`
          @keyframes infinite-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-slide {
            animation: infinite-slide 25s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Get Your Article Ready For <br className="hidden md:block" /> Publication
        </h2>
        {/* Formal Emerald Accent Line */}
        <div className="w-20 h-1.5 bg-[#10B981] mx-auto mt-6 rounded-full shadow-sm"></div>
      </div>

      {/* The Slider Container */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* Left and Right Gradient Fades (High-Def Touch) */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        {/* The Moving Track */}
        <div className="flex w-[200%] animate-infinite-slide hover:[animation-play-state:paused] py-4">
          
          {/* We map the logos multiple times to ensure a seamless, never-ending loop */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 mx-4 bg-white border border-gray-100 h-28 flex items-center justify-center rounded-2xl shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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