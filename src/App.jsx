import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- 1. Imported here

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About'; 

function App() {
  return (
    <Router>
      {/* 2. Placed here. It watches every route change! */}
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-white font-sans text-[#0F172A] flex flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;