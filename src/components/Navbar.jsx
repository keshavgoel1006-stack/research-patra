import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePubOpen, setMobilePubOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 w-full z-50 transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex-shrink-0 font-extrabold text-2xl text-[#F97316] tracking-tight cursor-pointer">
            <a href="/">Research Patra</a>
          </div>
          
          {/* DESKTOP NAVIGATION MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-[#0F172A] hover:text-[#F97316] font-bold transition duration-200">Home</a>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#0F172A] hover:text-[#F97316] font-bold transition duration-200 py-8">
                Our Services <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex flex-col py-2">
                  {/* ALL RELEVANT DESKTOP LINKS SYNCD HERE */}
                  <a href="/topic-selection" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Topic Selection</a>
                  <a href="/synopsis" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Research Proposal / Synopsis</a>
                  <a href="/thesis-writing" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Thesis & Dissertation Writing</a>
                  <a href="/research-papers" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Research & Review Papers</a>
                  <a href="/systematic-review" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Systematic Literature Review</a>
                  <a href="/statistical-analysis" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Statistical Data Analysis</a>
                  <a href="/editing-proofreading" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Editing & Proofreading</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[#0F172A] hover:text-[#F97316] font-bold transition duration-200 py-8">
                Publications <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-[80px] left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex flex-col py-2">
                  <a href="/services" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">SCI Journal Publication</a>
                  <a href="/services" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Scopus Paper Publication</a>
                  <a href="/services" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">UGC Care Journals</a>
                  <a href="/services" className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#F97316] hover:bg-orange-50 transition">Conference Publications</a>
                </div>
              </div>
            </div>

            <a href="/about" className="text-[#0F172A] hover:text-[#F97316] font-bold transition duration-200">About Us</a>
            
            <a href="#contact" className="bg-[#F97316] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#EA580C] transition duration-300 shadow-[0_4px_14px_0_rgb(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-0.5 transform">
              Get a Free Quote
            </a>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0F172A] hover:text-[#F97316] focus:outline-none p-2 transition">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <a href="/" className="block text-[#0F172A] px-3 py-3 rounded-lg font-bold transition">Home</a>
            
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full flex justify-between items-center text-[#0F172A] px-3 py-3 rounded-lg font-bold transition">
                Our Services <ChevronDown size={18} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-6 pr-3 pb-2 space-y-1 bg-gray-50 rounded-lg py-2 mx-2">
                  {/* ALL RELEVANT MOBILE LINKS SYNCD HERE */}
                  <a href="/topic-selection" className="block text-gray-600 py-2 text-sm font-semibold">Topic Selection</a>
                  <a href="/synopsis" className="block text-gray-600 py-2 text-sm font-semibold">Research Proposal / Synopsis</a>
                  <a href="/thesis-writing" className="block text-gray-600 py-2 text-sm font-semibold">Thesis & Dissertation Writing</a>
                  <a href="/research-papers" className="block text-gray-600 py-2 text-sm font-semibold">Research & Review Papers</a>
                 <a href="/systematic-review" className="block text-gray-600 py-2 text-sm font-semibold">Systematic Literature Review</a>
                  <a href="/statistical-analysis" className="block text-gray-600 py-2 text-sm font-semibold">Statistical Data Analysis</a>
                  <a href="/editing-proofreading" className="block text-gray-600 py-2 text-sm font-semibold">Editing & Proofreading</a>
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setMobilePubOpen(!mobilePubOpen)} className="w-full flex justify-between items-center text-[#0F172A] px-3 py-3 rounded-lg font-bold transition">
                Publications <ChevronDown size={18} className={`transform transition-transform ${mobilePubOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePubOpen && (
                <div className="pl-6 pr-3 pb-2 space-y-1 bg-gray-50 rounded-lg py-2 mx-2">
                  <a href="/services" className="block text-gray-600 py-2 text-sm font-semibold">SCI Journal Publication</a>
                  <a href="/services" className="block text-gray-600 py-2 text-sm font-semibold">Scopus Paper Publication</a>
                  <a href="/services" className="block text-gray-600 py-2 text-sm font-semibold">UGC Care Journals</a>
                  <a href="/services" className="block text-gray-600 py-2 text-sm font-semibold">Conference Publications</a>
                </div>
              )}
            </div>

            <a href="/about" className="block text-[#0F172A] px-3 py-3 rounded-lg font-bold transition">About Us</a>
            
            <div className="pt-4 px-3">
              <a href="#contact" className="block text-center bg-[#F97316] text-white py-3 rounded-full font-bold shadow-md hover:bg-[#EA580C] transition">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;