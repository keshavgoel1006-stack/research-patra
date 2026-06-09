import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="text-2xl font-extrabold text-[#F97316] tracking-tight">
          Research Patra
        </a>

        {/* ========================================= */}
        {/* DESKTOP MENU (Hidden on mobile)         */}
        {/* ========================================= */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-[#0F172A] hover:text-[#F97316] font-bold transition">Home</a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#0F172A] hover:text-[#F97316] font-bold transition py-8">
              Our Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <div className="flex flex-col py-2">
                <a href="/services" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">All Services</a>
                <a href="/topic-selection" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Topic Selection</a>
                <a href="/synopsis" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Research Proposal</a>
                <a href="/thesis-writing" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Thesis Writing</a>
                <a href="/research-papers" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Research Papers</a>
              </div>
            </div>
          </div>

          <a href="/about" className="text-[#0F172A] hover:text-[#F97316] font-bold transition">About Us</a>
          
          <button className="px-6 py-2.5 bg-[#F97316] text-white rounded-full font-bold shadow-[0_4px_14px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 transition-all">
            Get a Free Quote
          </button>
        </div>

        {/* ========================================= */}
        {/* HAMBURGER BUTTON (Visible only on mobile) */}
        {/* ========================================= */}
        <button 
          className="md:hidden p-2 text-[#0F172A] hover:bg-gray-50 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ========================================= */}
      {/* MOBILE MENU DROPDOWN PANEL                */}
      {/* ========================================= */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-2xl pb-6">
          <div className="flex flex-col px-6 pt-4 space-y-6">
            
            <a href="/" className="text-lg font-bold text-[#0F172A]" onClick={() => setIsOpen(false)}>Home</a>
            
            {/* The toggleable Our Services block */}
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between text-lg font-bold text-[#0F172A] w-full text-left"
              >
                Our Services 
                <ChevronDown size={20} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Only show these links if servicesOpen is true */}
              {servicesOpen && (
                <div className="pl-4 flex flex-col space-y-4 border-l-2 border-orange-100 mt-2">
                   <a href="/services" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>All Services</a>
                   <a href="/topic-selection" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>Topic Selection</a>
                   <a href="/synopsis" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>Research Proposal</a>
                   <a href="/thesis-writing" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>Thesis Writing</a>
                   <a href="/research-papers" className="text-gray-600 font-semibold" onClick={() => setIsOpen(false)}>Research Papers</a>
                </div>
              )}
            </div>

            <a href="/about" className="text-lg font-bold text-[#0F172A]" onClick={() => setIsOpen(false)}>About Us</a>
            
            <button className="w-full py-3.5 mt-4 bg-[#F97316] text-white rounded-xl font-bold shadow-lg">
              Get a Free Quote
            </button>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;