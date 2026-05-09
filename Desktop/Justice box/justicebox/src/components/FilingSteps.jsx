import React from 'react';

const steps = [
  { id: 1, title: 'Prepare Notice', desc: 'Draft a formal legal notice to the opposing party detailing your grievances.', icon: 'edit_document' },
  { id: 2, title: 'Send via Post', desc: 'Dispatch the notice via registered post with acknowledgment due.', icon: 'local_post_office' },
  { id: 3, title: 'File in Forum', desc: 'Submit your official complaint and evidentiary documents to the appropriate consumer court.', icon: 'account_balance' }
];

export default function FilingSteps() {
  return (
    <section className="bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl border border-outline-variant/40 p-lg flex flex-col gap-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex flex-col gap-xs relative z-10">
        <h2 className="font-h3 text-h3 text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-container">assignment</span>
          How to File
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">A simplified guide to the legal process.</p>
      </div>
      <div className="flex flex-col gap-md relative z-10">
        <div className="absolute left-[20px] top-[24px] bottom-[24px] w-px bg-gradient-to-b from-outline-variant/50 to-transparent z-0"></div>
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-md relative z-10 group cursor-default">
            <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${index === 2 ? 'bg-secondary-container text-on-secondary shadow-md group-hover:scale-110' : 'bg-surface-container-low border border-outline-variant text-primary group-hover:border-secondary-container group-hover:text-secondary-container'}`}>
              <span className="font-mono-label text-mono-label">{step.id}</span>
            </div>
            <div className="flex flex-col gap-xs pt-xs transform transition-transform duration-300 group-hover:translate-x-1">
              <h3 className="font-cta text-cta text-primary flex items-center gap-2">
                {step.title}
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity text-secondary-container">{step.icon}</span>
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
