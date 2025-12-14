import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import NeoButton from './NeoButton';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <Logo className="h-10 w-10" />
            <span className="text-3xl font-bold tracking-tighter text-brand-dark">Worksense</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-brand-dark font-medium hover:text-brand-blue hover:underline decoration-2 underline-offset-4"
              >
                {item.label}
              </a>
            ))}
            <button className="px-6 py-3 border-2 border-brand-dark rounded-xl hover:bg-brand-blue hover:text-white transition-colors font-medium">
              Request a quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-gray-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-brand-dark absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 text-lg font-medium text-brand-dark hover:bg-brand-gray rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <NeoButton className="w-full">Request a quote</NeoButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;