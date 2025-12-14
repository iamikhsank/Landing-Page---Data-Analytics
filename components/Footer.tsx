import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 rounded-t-[2.5rem] mt-10 mx-2 md:mx-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3">
             <div className="bg-white p-1 rounded-lg">
                <Logo className="h-8 w-8" />
             </div>
             <span className="text-2xl font-bold">Worksense</span>
          </div>
          
          <div className="flex gap-8 flex-wrap justify-center">
            {NAV_ITEMS.map(item => (
                <a key={item.label} href={item.href} className="hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4">
                    {item.label}
                </a>
            ))}
          </div>

          <div className="flex gap-4">
             <a 
                href="https://www.linkedin.com/in/ikhsankamal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-brand-dark hover:bg-brand-blue hover:text-white cursor-pointer transition-colors"
                aria-label="LinkedIn"
             >
                <Linkedin size={20} />
             </a>
             <div className="bg-white p-2 rounded-full text-brand-dark hover:bg-brand-blue hover:text-white cursor-pointer transition-colors">
                <Facebook size={20} />
             </div>
             <div className="bg-white p-2 rounded-full text-brand-dark hover:bg-brand-blue hover:text-white cursor-pointer transition-colors">
                <Twitter size={20} />
             </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
           <p>© 2024 Worksense Inc. All Rights Reserved.</p>
           <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;