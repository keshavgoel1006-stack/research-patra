import React from 'react';
import Chatbot from './Chatbot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// Notice the added '/publications/' in the path

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';

// Services Pages
import TopicSelection from './pages/TopicSelection';
import Synopsis from './pages/Synopsis';
import ThesisWriting from './pages/ThesisWriting';
import ResearchPapers from './pages/ResearchPapers';
import SystematicReview from './pages/SystematicReview';
import StatisticalAnalysis from './pages/StatisticalAnalysis';
import EditingProofreading from './pages/EditingProofreading';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* GLOBAL OVERFLOW LOCK APPLIED HERE: Added w-full and overflow-x-hidden */}
      <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#0F172A] flex flex-col">
        <Navbar />
        
        {/* Main Content Area - Notice pt-20 is removed here to fix the white gap! */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            
            {/* SERVICE ROUTES */}
            <Route path="/topic-selection" element={<TopicSelection />} />
            <Route path="/synopsis" element={<Synopsis />} />
            <Route path="/thesis-writing" element={<ThesisWriting />} />
            <Route path="/research-papers" element={<ResearchPapers />} />
            <Route path="/systematic-review" element={<SystematicReview />} />
            <Route path="/statistical-analysis" element={<StatisticalAnalysis />} />
            <Route path="/editing-proofreading" element={<EditingProofreading />} />
            
          </Routes>
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;