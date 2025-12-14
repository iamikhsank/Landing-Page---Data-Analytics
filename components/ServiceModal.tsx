import React, { useEffect } from 'react';
import { X, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import NeoButton from './NeoButton';

interface ServiceModalProps {
  id: string;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ id, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Only render content for Business Intelligence (id: '2') for now, as requested.
  // You can extend this for other services later.
  const isBI = id === '2';

  if (!isBI) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-start overflow-y-auto bg-brand-dark/50 backdrop-blur-sm p-4 md:p-8">
      <div className="bg-white w-full max-w-6xl rounded-[2rem] border-2 border-brand-dark shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 my-auto md:my-0">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b-2 border-brand-dark p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="bg-brand-blue p-2 rounded-lg border-2 border-brand-dark">
                <BarChart3 className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Detail</span>
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark leading-none">
                Business Intelligence Solutions
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-brand-gray rounded-full transition-colors border-2 border-transparent hover:border-brand-dark"
          >
            <X size={28} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-10">
            
            {/* Intro */}
            <div className="max-w-3xl">
                <h3 className="text-3xl font-bold mb-4">Turn Data into Decisions.</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    We build comprehensive, interactive, and visually stunning dashboards tailored to your specific operational needs. From sales tracking to safety compliance, our BI solutions provide a 360-degree view of your organization.
                </p>
            </div>

            {/* Dashboard Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Dashboard 1: Sales Analysis */}
                <div className="group space-y-4">
                    <div className="rounded-2xl border-2 border-brand-dark overflow-hidden shadow-neo group-hover:translate-y-[-4px] transition-transform">
                        {/* PLACEHOLDER IMAGE - Replace src with your actual image path for the Sales Dashboard */}
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                            alt="Sales Performance Dashboard" 
                            className="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <span className="bg-brand-dark text-white text-xs px-2 py-1 rounded">Retail</span>
                            Sales Performance Monitor
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                            Real-time tracking of Total Revenue (768M) and Quantity sold. Features Month-over-Month growth indicators, daily trend lines, and top-performing product leaderboards to identify market movers instantly.
                        </p>
                    </div>
                </div>

                {/* Dashboard 2: Operational/Task Analysis */}
                <div className="group space-y-4">
                    <div className="rounded-2xl border-2 border-brand-dark overflow-hidden shadow-neo group-hover:translate-y-[-4px] transition-transform">
                         {/* PLACEHOLDER IMAGE - Replace src with your actual image path for the PIC Analysis Dashboard */}
                        <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                            alt="Operational Control Center" 
                            className="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded">Ops</span>
                            Task & Performance Control
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                            A granular look at team productivity. Tracks "Total Tugas" (Tasks) vs Completed, analyzes individual PIC performance (Mr. A, Mr. B, etc.), and visualizes weekly completion trends to identify bottlenecks.
                        </p>
                    </div>
                </div>

                {/* Dashboard 3: HSE/Safety */}
                <div className="group space-y-4">
                    <div className="rounded-2xl border-2 border-brand-dark overflow-hidden shadow-neo group-hover:translate-y-[-4px] transition-transform">
                         {/* PLACEHOLDER IMAGE - Replace src with your actual image path for the Safety Inspection Dashboard */}
                        <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                            alt="Safety Compliance Dashboard" 
                            className="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">HSE</span>
                            Safety & Inspection Report
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                            Compliance monitoring made easy. Visualizes finding locations (Assembly Shop, Body Shop), closure rates (96.16%), and inspection trends over time to ensure a safe working environment.
                        </p>
                    </div>
                </div>

                {/* Dashboard 4: Incident Register */}
                <div className="group space-y-4">
                    <div className="rounded-2xl border-2 border-brand-dark overflow-hidden shadow-neo group-hover:translate-y-[-4px] transition-transform">
                         {/* PLACEHOLDER IMAGE - Replace src with your actual image path for the Incident Analysis Dashboard */}
                        <img 
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop" 
                            alt="Incident Register Analysis" 
                            className="w-full h-64 object-cover object-top"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">Risk</span>
                            Incident Register Analysis
                        </h4>
                        <p className="text-gray-600 mt-2 text-sm">
                            Deep dive into risk management. Categorizes incidents by type (Near Miss, Property Damage, First Aid) and tracks reporting timeliness (Days from Deadline) to improve safety culture responsiveness.
                        </p>
                    </div>
                </div>

            </div>

            {/* Features List */}
            <div className="bg-brand-gray p-8 rounded-2xl border-2 border-brand-dark mt-8">
                <h4 className="text-xl font-bold mb-6">Why Choose Our BI Services?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex gap-3">
                        <CheckCircle2 className="text-brand-blue shrink-0" />
                        <span className="font-medium">Custom Data Connectors (SQL, Excel, APIs)</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="text-brand-blue shrink-0" />
                        <span className="font-medium">Automated Daily/Weekly Reporting</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="text-brand-blue shrink-0" />
                        <span className="font-medium">Interactive Filtering & Drill-downs</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="text-brand-blue shrink-0" />
                        <span className="font-medium">Role-Based Access Control</span>
                    </div>
                    <div className="flex gap-3">
                        <CheckCircle2 className="text-brand-blue shrink-0" />
                        <span className="font-medium">Mobile-Responsive Layouts</span>
                    </div>
                </div>
            </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 border-t-2 border-brand-dark bg-gray-50 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-3 font-bold text-gray-500 hover:text-brand-dark transition-colors">
            Close
          </button>
          <a href="https://wa.me/089529341000" target="_blank" rel="noopener noreferrer">
             <NeoButton className="px-6 py-3 text-base flex items-center gap-2">
                Start a BI Project <ArrowRight size={18} />
             </NeoButton>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ServiceModal;
