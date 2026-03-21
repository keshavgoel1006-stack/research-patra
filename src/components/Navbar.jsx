import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  // This state remembers if the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to color the active link green
  const isActive = (path) => location.pathname === path ? "text-[#F97316]" : "text-gray-500 hover:text-[#F97316]";

  // Helper to close the menu when a user clicks a link on their phone
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-[#0F172A] tracking-wide" onClick={closeMenu}>
          <BookOpen className="text-[#0F172A]" size={28} />
          <span>Research Patra</span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
          <Link to="/services" className={`${isActive('/services')} transition-colors`}>Services</Link>
          <Link to="/about" className={`${isActive('/about')} transition-colors`}>About</Link>

          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-[#0F172A] text-white font-semibold hover:bg-slate-800 transition-all">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button 
          className="md:hidden text-[#0F172A] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown (Only shows if isOpen is true) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 text-center animate-page-transition">
          <Link to="/" className={`block text-lg font-bold ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={`block text-lg font-bold ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
          <Link to="/about" className={`block text-lg font-bold ${isActive('/about')}`} onClick={closeMenu}>About</Link>
          
          <Link to="/contact" className="inline-block mt-4 px-6 py-3 rounded-full bg-[#F97316] text-white font-bold text-lg shadow-lg hover:bg-[#EA580C] transition-all w-full" onClick={closeMenu}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;