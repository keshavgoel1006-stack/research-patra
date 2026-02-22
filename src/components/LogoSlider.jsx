import React from 'react';

// We define the logos as components so we can style them easily
const ScopusLogo = () => (
  <svg viewBox="0 0 200 60" className="h-12 w-auto fill-current">
    <path d="M20,30 Q20,10 40,10 T60,30 T80,50 T100,30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    <text x="10" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="40">Scopus</text>
    <circle cx="155" cy="15" r="3" fill="currentColor"/>
  </svg>
);

const SpringerLogo = () => (
  <svg viewBox="0 0 200 60" className="h-12 w-auto fill-current">
    {/* Horse Icon approximation */}
    <path d="M20,50 L20,40 L30,30 L25,10 L35,5 L45,15 L50,30 L55,30 L55,50 Z" /> 
    <text x="70" y="42" fontFamily="Georgia, serif" fontWeight="bold" fontSize="36">Springer</text>
  </svg>
);

const ElsevierLogo = () => (
  <svg viewBox="0 0 200 60" className="h-12 w-auto fill-current">
    {/* Tree Icon approximation */}
    <path d="M30,55 L30,15 M30,35 L15,20 M30,30 L45,15 M20,55 L40,55" stroke="currentColor" strokeWidth="3" fill="none"/>
    <text x="55" y="40" fontFamily="Times New Roman, serif" fontWeight="bold" fontSize="32" letterSpacing="2">ELSEVIER</text>
  </svg>
);

const logos = [
  { id: 1, component: <ScopusLogo /> },
  { id: 2, component: <SpringerLogo /> },
  { id: 3, component: <ElsevierLogo /> },
];

const LogoSlider = () => {
  return (
    <section className="py-24 bg-bgDark border-t border-white/5 overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Your Article Ready For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Publication
          </span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden group bg-white/5 py-10 backdrop-blur-sm">
        
        {/* The Scrolling Track */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-32 px-10">
          {/* We repeat the logos multiple times to ensure the loop is smooth */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110 cursor-pointer"
            >
              {logo.component}
            </div>
          ))}
        </div>

        {/* Fades on the sides for that smooth exit/entry look */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-bgDark to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-bgDark to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default LogoSlider;