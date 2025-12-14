import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import NeoButton from './NeoButton';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      // Optionally update URL
      window.history.pushState({}, '', href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="h-10 w-10" />
            <span className="text-3xl font-bold tracking-tighter text-brand-dark">Worksense</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-brand-dark font-medium hover:text-brand-blue hover:underline decoration-2 underline-offset-4 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/089529341000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-brand-dark rounded-xl hover:bg-brand-blue hover:text-white transition-colors font-medium"
            >
              Request a quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-gray-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-brand-dark absolute w-full left-0 shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 text-lg font-medium text-brand-dark hover:bg-brand-gray rounded-lg"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a href="https://wa.me/089529341000" target="_blank" rel="noopener noreferrer" className="block w-full">
                 <NeoButton className="w-full">Request a quote</NeoButton>
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;