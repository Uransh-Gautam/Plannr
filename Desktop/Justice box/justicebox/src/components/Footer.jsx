import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface/80 backdrop-blur-sm border-t border-outline-variant/30 w-full mt-auto py-lg px-container-padding transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-md">
        <div className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">copyright</span>
          2024 JusticeBox Consumer Rights Protection.
        </div>
        <div className="flex gap-lg items-center">
          {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((item) => (
            <a key={item} className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-container transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-secondary-container after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
