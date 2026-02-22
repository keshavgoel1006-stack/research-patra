import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LogoSlider from './components/LogoSlider';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primaryGreen selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Testimonials />
        
        {/* These components will look dark until we update them */}
        <LogoSlider />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;