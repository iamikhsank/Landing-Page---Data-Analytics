import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';

const PROCESS_STEPS = [
    { id: 1, title: 'Consultation', content: 'We meet to discuss your business goals and data availability.' },
    { id: 2, title: 'Data Collection & Strategy', content: 'We set up pipelines to gather structured and unstructured data.' },
    { id: 3, title: 'Analysis & Modeling', content: 'Our data scientists apply ML models and statistical analysis.' },
    { id: 4, title: 'Reporting & Action', content: 'We deliver interactive dashboards and actionable business strategies.' },
    { id: 5, title: 'Ongoing Optimization', content: 'Continuous monitoring and model retraining for accuracy.' },
];

const Process: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Working Process" description="Step-by-step guide to achieving data dominance." />
        
        <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
                <div 
                    key={step.id} 
                    className={`
                        border-2 border-brand-dark rounded-[2rem] p-8 transition-all duration-300 shadow-neo
                        ${openIndex === index ? 'bg-brand-blue text-white' : 'bg-brand-gray text-brand-dark'}
                    `}
                >
                    <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-4xl md:text-6xl font-bold opacity-30">0{step.id}</span>
                            <h3 className="text-xl md:text-3xl font-bold">{step.title}</h3>
                        </div>
                        <button className={`
                            rounded-full p-2 border border-brand-dark
                            ${openIndex === index ? 'bg-white text-brand-dark' : 'bg-brand-dark text-brand-gray'}
                        `}>
                            {openIndex === index ? <Minus /> : <Plus />}
                        </button>
                    </div>
                    
                    {openIndex === index && (
                        <div className="mt-8 pt-8 border-t border-white/20 ml-0 md:ml-20">
                            <p className="text-lg font-medium">{step.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;