import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkNavy border-t border-slate-800 pt-16 pb-8 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
            <BookOpen className="text-white" size={24} />
            <span>Research Patra</span>
          </div>
          <p className="leading-relaxed mb-6">
            Empowering scholars with ethical, high-quality research assistance. Your partner in academic excellence and publication success.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="hover:text-primaryGreen transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-primaryGreen transition-colors">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-primaryGreen transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primaryGreen transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-white mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primaryGreen" /> 
              help@researchpatra.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primaryGreen" /> 
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primaryGreen" /> 
              New Delhi, India
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-8 text-center text-xs text-gray-500">
        © 2026 Research Patra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;