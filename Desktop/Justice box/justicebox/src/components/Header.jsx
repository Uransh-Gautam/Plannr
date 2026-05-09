import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-container/95 backdrop-blur-md text-on-primary py-lg px-container-padding flex justify-between items-center shadow-sm border-b border-outline-variant/20 transition-all duration-300">
      <div className="flex items-center gap-sm group cursor-pointer">
        <div className="bg-secondary-container p-2 rounded-lg text-on-secondary shadow-md group-hover:rotate-12 transition-transform duration-300">
          <span className="material-symbols-outlined text-h3 block" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
        </div>
        <span className="font-h2 text-h2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-on-primary to-primary-fixed-dim">JusticeBox</span>
      </div>
      <div className="font-cta text-cta text-primary-fixed hidden md:flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
        Know your rights. One complaint away.
      </div>
    </header>
  );
}
