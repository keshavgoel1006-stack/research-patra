import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-6">
      
      {/* 3-Column Responsive Layout Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1: Branding and Core Value */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#F97316] tracking-tight">Research Patra</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Reliable Dissertation & Research Services to Power Your Academic Success. Empowering researchers worldwide with transparent, high-quality support.
          </p>
        </div>

        {/* Column 2: Quick Navigation Anchor Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white tracking-tight">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-[#F97316] transition duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-[#F97316] transition duration-200">About Us</a></li>
            <li><a href="#services" className="hover:text-[#F97316] transition duration-200">Our Services</a></li>
          </ul>
        </div>

        {/* Column 3: Exact & Verified Corporate Contact Details */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white tracking-tight">Contact Us</h4>
          <div className="text-gray-400 text-sm space-y-2.5">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-gray-300">Email:</span> 
              <a href="mailto:business@researchpatra.com" className="hover:text-[#F97316] transition">
                business@researchpatra.com
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-gray-300">Call Us:</span> 
              <a href="tel:+917827295033" className="hover:text-[#F97316] transition">
                +91 7827295033
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Legal Section - Thin Border & Tight Spacing */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        Copyright © 2026 | Research Patra | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;