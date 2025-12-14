import React from 'react';
import SectionHeading from './SectionHeading';
import { CASE_STUDIES } from '../constants';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCase?: (id: string) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCase }) => {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Case Studies" 
          description="Explore real-life examples of our proven data analysis success through our Case Studies." 
        />

        <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-12 overflow-x-auto">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-700 gap-8">
            
            {CASE_STUDIES.map((study, index) => (
              <div key={study.id} className="flex-1 min-w-[300px] flex flex-col justify-between pt-8 md:pt-0 pl-0 md:pl-8 first:pl-0">
                <div className="space-y-4 mb-8">
                  <h3 className="text-white text-xl font-bold">{study.client}</h3>
                  <div className="h-[150px] w-full bg-gray-900/50 rounded-xl p-2 border border-gray-700">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={study.chartData}>
                        <defs>
                          <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" hide />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#191A23', borderColor: '#333', color: '#fff' }}
                            itemStyle={{ color: '#60A5FA' }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#60A5FA" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill={`url(#color${index})`} 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-gray-400 text-sm h-12">
                    {study.description}
                  </p>
                  <div>
                     <span className="text-blue-400 text-3xl font-bold">{study.value}</span>
                     <span className="text-white ml-2 text-sm">{study.metric}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => onSelectCase?.(study.id)}
                  className="flex items-center gap-2 text-blue-400 cursor-pointer hover:underline mt-auto group bg-transparent border-0 p-0 text-left"
                >
                  <span>Read full case</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;