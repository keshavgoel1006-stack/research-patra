import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Helper to color the active link green
  const isActive = (path) => location.pathname === path ? "text-[#10B981]" : "text-gray-500 hover:text-[#10B981]";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#0F172A] tracking-wide">
          <BookOpen className="text-[#0F172A]" size={28} />
          <span>Research Patra</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
          <Link to="/services" className={`${isActive('/services')} transition-colors`}>Services</Link>
          <Link to="/about" className={`${isActive('/about')} transition-colors`}>About</Link>

          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-slate-800 transition-all">
            Get a Free Quote
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;