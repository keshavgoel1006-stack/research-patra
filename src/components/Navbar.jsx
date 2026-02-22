import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-darkNavy tracking-wide">
          <BookOpen className="text-darkNavy" size={28} />
          <span>Research Patra</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          {['Home', 'Services', 'Process', 'Testimonials'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primaryGreen transition-colors">
              {item}
            </a>
          ))}
          {/* Button */}
          <button className="px-6 py-2.5 rounded-full bg-darkNavy text-white font-semibold hover:bg-slate-800 transition-all">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;