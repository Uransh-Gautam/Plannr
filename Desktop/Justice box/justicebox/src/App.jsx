import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilingSteps from './components/FilingSteps';
import ResultsSection from './components/ResultsSection';
import ForumMap from './components/ForumMap';
import { analyzeComplaint } from './api/ai';

export default function App() {
  const [complaint, setComplaint] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!complaint.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await analyzeComplaint(complaint);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze the complaint.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-body-md selection:bg-secondary-container/20 selection:text-secondary-container relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary-container/10 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

      <Header />

      <main className="flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-container-padding py-xl gap-xl relative z-10">
        
        {/* Complaint Input Card */}
        <section className="w-full max-w-3xl bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl border border-outline-variant/40 p-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col gap-lg group">
          <div className="flex flex-col gap-sm items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/10 text-secondary-container font-mono-label mb-2 border border-secondary-container/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
              AI-Powered Assistant
            </div>
            <h1 className="font-h1 text-h1 text-primary text-center tracking-tight">What happened?</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant text-center max-w-lg mx-auto leading-relaxed">
              Describe your situation in plain language. We'll formulate a professional legal complaint for you.
            </p>
          </div>

          <div className="flex flex-col gap-md w-full relative">
            <textarea
              className="w-full bg-surface-container-low/50 border border-outline-variant/60 rounded-xl p-md font-body-md text-on-surface focus:bg-surface-container-lowest focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/10 transition-all duration-300 resize-none placeholder:text-on-surface-variant/40 custom-scrollbar shadow-inner"
              id="complaint-input"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="E.g., Swiggy delivered my food 2 hours late, cold, and customer support refused a refund..."
              rows={5}
            ></textarea>
            
            {error && (
              <div className="flex items-center gap-2 text-error text-body-sm font-medium p-sm bg-error-container/50 rounded-lg animate-fadeInUp">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}
            
            <button 
              onClick={handleAnalyze}
              disabled={loading || !complaint.trim()}
              className="w-full bg-primary text-on-primary font-cta text-cta py-md rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary transition-all duration-300 flex justify-center items-center gap-sm shadow-md hover:shadow-xl transform active:scale-[0.98] overflow-hidden relative group/btn"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer"></div>
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                  Analyzing Case...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover/btn:scale-110">magic_button</span>
                  Formulate Legal Notice
                </>
              )}
            </button>
          </div>
        </section>

        {/* Results */}
        <ResultsSection result={result} />

        {/* Two Column Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-xl max-w-5xl z-10 mt-8">
          {/* Forum Locator */}
          <section className="bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-lg flex flex-col gap-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-primary-fixed-dim/30"></div>
            
            <div className="flex flex-col gap-xs relative z-10">
              <h2 className="font-h3 text-h3 text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Nearest Consumer Forum
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Locate the appropriate jurisdiction for your case.</p>
            </div>
            <div className="flex flex-col gap-sm relative z-10">
              <div className="relative w-full group/input">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within/input:text-primary transition-colors">search</span>
                <input
                  className="w-full bg-surface-container-low/50 border border-outline-variant/60 rounded-xl py-sm pl-[40px] pr-sm font-body-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 shadow-inner"
                  placeholder="Search your city or zip code"
                  type="text"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-inner border border-outline-variant/30 relative transform transition-transform duration-500 hover:scale-[1.01]">
                <ForumMap center={[28.6139, 77.2090]} />
                <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-black/5"></div>
              </div>
            </div>
          </section>

          {/* How to File */}
          <FilingSteps />
        </div>
      </main>

      <Footer />
    </div>
  );
}
