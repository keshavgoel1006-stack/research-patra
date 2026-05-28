import React from 'react';
import { 
  BarChart3, PieChart, Activity, FileDigit, 
  Terminal, TrendingUp, CheckCircle2, ArrowRight 
} from 'lucide-react';

const StatisticalAnalysis = () => {
  return (
    <div className="bg-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION: Data-focused */}
      <section className="relative py-20 md:py-28 bg-[#0F172A] overflow-hidden text-center">
        {/* Subtle grid and glowing orb for a "tech" feel */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <BarChart3 size={56} className="text-[#F97316] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Advanced <span className="text-[#F97316]">Statistical Data</span> Analysis
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Raw data is useless without interpretation. Our statisticians use industry-standard software to test hypotheses, generate high-quality visuals, and write comprehensive result chapters.
          </p>
        </div>
      </section>

      {/* 2. THE SOFTWARE STACK (Building Authority) */}
      <section className="py-8 bg-[#F97316] shadow-xl relative z-20 border-y-4 border-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-orange-100 font-bold tracking-widest uppercase text-sm mb-4">Software & Tools We Master</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white font-black text-xl md:text-2xl opacity-90">
            <span>IBM SPSS</span>
            <span>AMOS</span>
            <span>SmartPLS</span>
            <span>Python</span>
            <span>R Studio</span>
            <span>MATLAB</span>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Analytical Solutions For Every Methodology
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From basic descriptive summaries to highly complex predictive modeling, we handle the mathematics so you can focus on the research implications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PieChart className="text-[#F97316]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Descriptive Statistics</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Structuring demographic data, calculating means, standard deviations, and generating clear frequency tables and pie charts to summarize your core sample.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Activity className="text-[#F97316]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inferential Statistics</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Rigorous hypothesis testing using ANOVA, T-Tests, Chi-Square, and Correlation analysis to establish statistically significant relationships between variables.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="text-[#F97316]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Structural Equation Modeling</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Advanced SEM using AMOS or SmartPLS. We conduct Confirmatory Factor Analysis (CFA) and test complex mediation/moderation pathways.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow group lg:col-span-3 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 shrink-0 bg-slate-900 rounded-2xl flex items-center justify-center">
              <Terminal className="text-[#F97316]" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning & Data Science</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you are extracting complex external datasets directly from Kaggle zip folders or training predictive machine learning models for spam detection, our Python and R specialists handle the heavy computational lifting. We process messy data and output clean, publishable evaluation metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE DELIVERABLES (What the student actually receives) */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-6">
              More Than Just Numbers. <br /> We Provide Interpretation.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              University panels don't just want to see a table full of p-values; they want to know what those numbers mean for your overarching research question. 
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0F172A] block">Cleaned Output Files</strong>
                  <span className="text-gray-500 text-sm">We provide the final .sav (SPSS) or code scripts so you can replicate the results if asked.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0F172A] block">High-Resolution Visuals</strong>
                  <span className="text-gray-500 text-sm">Publication-ready charts and graphs formatted precisely for your thesis margins.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#F97316] shrink-0 mt-1" />
                <div>
                  <strong className="text-[#0F172A] block">Complete Chapter 4 Write-Up</strong>
                  <span className="text-gray-500 text-sm">We draft the entire Results & Discussion chapter, translating the math into academic English.</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#0F172A] p-10 rounded-3xl shadow-2xl text-center">
            <FileDigit size={48} className="text-white mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-bold text-white mb-4">Stuck with your data?</h3>
            <p className="text-gray-400 mb-8 text-sm">
              Send us your Excel sheets, survey responses, or raw datasets. Our statisticians will review it and provide a clear analytical roadmap.
            </p>
            <button className="w-full py-4 bg-[#F97316] text-white rounded-full font-bold shadow-lg hover:bg-[#EA580C] transition flex items-center justify-center gap-2">
              Get a Free Data Assessment <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StatisticalAnalysis;