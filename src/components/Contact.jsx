import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-darkNavy text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Publish <br />
            <span className="text-primaryGreen">Your Research?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Get a free consultation for your dissertation or research paper. 
            We usually reply within 2 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <Mail className="text-primaryGreen" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Email Us</p>
                <p className="font-medium text-lg">help@researchpatra.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <Phone className="text-primaryGreen" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Call Us</p>
                <p className="font-medium text-lg">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <MapPin className="text-primaryGreen" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Visit Us</p>
                <p className="font-medium text-lg">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Name</label>
                <input type="text" className="w-full bg-darkNavy border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primaryGreen transition-colors text-white placeholder-gray-600" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Phone</label>
                <input type="tel" className="w-full bg-darkNavy border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primaryGreen transition-colors text-white placeholder-gray-600" placeholder="+91..." />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Service Required</label>
              <select className="w-full bg-darkNavy border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primaryGreen transition-colors text-white">
                <option>PhD Dissertation</option>
                <option>Research Paper Publication</option>
                <option>Data Analysis</option>
                <option>Plagiarism Check</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea rows="4" className="w-full bg-darkNavy border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primaryGreen transition-colors text-white placeholder-gray-600" placeholder="Tell us about your project..."></textarea>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-primaryGreen rounded-lg font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;