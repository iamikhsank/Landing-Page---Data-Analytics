import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Services" 
          description="At our data agency, we offer a range of services to help businesses grow and succeed online. These services include:" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`
                p-8 rounded-[2.5rem] border-2 border-brand-dark shadow-neo transition-transform hover:-translate-y-1
                flex flex-col md:flex-row gap-6 justify-between items-center
                ${service.theme === 'gray' ? 'bg-brand-gray' : ''}
                ${service.theme === 'blue' ? 'bg-blue-200 text-brand-dark' : ''}
                ${service.theme === 'dark' ? 'bg-brand-dark text-white' : 'text-brand-dark'}
              `}
            >
              <div className="flex-1 space-y-4">
                <div className={`
                   inline-block px-2 rounded font-bold text-2xl
                   ${service.theme === 'dark' ? 'bg-white text-brand-dark' : 'bg-brand-dark text-white'}
                `}>
                  {service.title}
                </div>
                <p className="text-sm md:text-base opacity-90 font-medium">
                  {service.description}
                </p>
                <div 
                  className="flex items-center gap-2 mt-4 cursor-pointer group"
                  onClick={() => onSelectService?.(service.id)}
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border-2 
                    ${service.theme === 'dark' ? 'border-white bg-transparent' : 'border-brand-dark bg-brand-dark'}
                  `}>
                    <ArrowUpRight 
                      className={`w-6 h-6 transform group-hover:rotate-45 transition-transform ${service.theme === 'dark' ? 'text-white' : 'text-brand-blue'}`} 
                    />
                  </div>
                  <span className={`font-bold hidden md:block ${service.theme === 'dark' ? 'text-white' : 'text-brand-dark'}`}>
                    Learn more
                  </span>
                </div>
              </div>
              
              {/* Icon Container */}
              <div className="w-full md:w-auto flex justify-center">
                 <div className="relative">
                    <service.icon size={120} strokeWidth={1} className="opacity-80" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;