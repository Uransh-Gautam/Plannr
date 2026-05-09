import React, { useState } from 'react';

export default function ResultsSection({ result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.notice);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result) return null;

  return (
    <section className="w-full max-w-3xl flex flex-col gap-lg animate-fadeInUp">
      {/* Analysis Card */}
      <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-md relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
        <h2 className="font-h2 text-h2 text-primary flex items-center gap-sm">
          <div className="bg-secondary-container/10 p-2 rounded-lg text-secondary-container">
            <span className="material-symbols-outlined block">gavel</span>
          </div>
          Legal Analysis
        </h2>
        <p className="font-body-md text-on-surface leading-relaxed whitespace-pre-wrap">{result.analysis}</p>
      </div>
      
      {/* Notice Card */}
      <div className="bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-md relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
        <div className="flex justify-between items-center">
          <h2 className="font-h2 text-h2 text-primary flex items-center gap-sm">
            <div className="bg-primary/5 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined block">description</span>
            </div>
            Suggested Legal Notice
          </h2>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-body-sm transition-colors border border-outline-variant/20 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-surface-container-low/50 p-md rounded-xl font-mono-label text-on-surface whitespace-pre-wrap border border-outline-variant/30 shadow-inner max-h-[400px] overflow-y-auto custom-scrollbar">
          {result.notice}
        </div>
      </div>
    </section>
  );
}
