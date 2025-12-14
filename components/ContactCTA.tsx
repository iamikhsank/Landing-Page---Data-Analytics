import React from 'react';
import NeoButton from './NeoButton';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-gray rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border-2 border-brand-dark">
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's make things happen</h3>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today to learn more about how our data analysis services can help your business grow and succeed online.
            </p>
            <NeoButton variant="primary">Get your free proposal</NeoButton>
          </div>

          {/* Abstract Decoration */}
          <div className="absolute right-[-100px] top-[-50px] md:right-10 md:top-10 h-64 w-64 md:h-80 md:w-80 opacity-50 md:opacity-100 pointer-events-none">
             <div className="relative w-full h-full">
                {/* Simulated SVG Star/Burst shape commonly found in these templates */}
                <svg viewBox="0 0 200 200" className="animate-spin-slow w-full h-full text-brand-blue fill-current">
                   <path d="M100 0 L125 75 L200 100 L125 125 L100 200 L75 125 L0 100 L75 75 Z" stroke="black" strokeWidth="3" />
                </svg>
                {/* Eyes - giving it character like the reference */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                    <div className="w-8 h-12 bg-black rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full ml-2 mt-2"></div>
                    </div>
                    <div className="w-8 h-12 bg-black rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full ml-2 mt-2"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;