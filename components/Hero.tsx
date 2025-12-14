import React from 'react';
import NeoButton from './NeoButton';
import { LOGOS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-brand-dark">
              Navigating the <br/>
              <span className="relative inline-block">
                data landscape
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-brand-blue -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <br/>
              for success
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Our data analysis agency helps businesses grow and succeed through predictive modeling, BI dashboards, and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NeoButton>Book a consultation</NeoButton>
            </div>
          </div>

          {/* Right Visual - CSS Art/Illustration */}
          <div className="relative h-[400px] md:h-[500px] w-full hidden md:block">
            {/* Abstract Shapes representing 'WizardZ' style */}
            
            {/* The Megaphone/Funnel Cone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
               {/* Main cone body */}
               <div className="absolute w-48 h-48 bg-brand-blue border-2 border-brand-dark rounded-full top-0 right-0 animate-pulse mix-blend-multiply opacity-50"></div>
               <div className="absolute w-48 h-48 bg-gray-200 border-2 border-brand-dark rounded-full bottom-0 left-0 mix-blend-multiply"></div>
               
               {/* Decorative floating elements */}
               <div className="absolute -top-10 -right-10 w-12 h-12 bg-black rounded-full border-2 border-brand-blue"></div>
               <div className="absolute -bottom-5 -left-12 w-8 h-8 bg-brand-blue rounded-md border-2 border-black rotate-45"></div>
               <div className="absolute top-10 -left-20 w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
               </div>
               
               {/* Connecting lines */}
               <svg className="absolute top-0 left-0 w-full h-full overflow-visible -z-10">
                  <path d="M 50 200 Q 150 150 250 50" stroke="black" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                  <path d="M 20 50 Q 100 100 200 200" stroke="black" strokeWidth="2" fill="none" />
               </svg>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-24 pt-10">
          <div className="flex flex-wrap justify-between gap-8 items-center grayscale opacity-70 hover:opacity-100 transition-opacity">
            {LOGOS.map((logo) => (
              <span key={logo} className="text-2xl md:text-3xl font-bold text-gray-400 font-sans">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;