import React, { useEffect } from 'react';
import { X, ArrowRight, TrendingUp, Layers, Activity, Database, CheckCircle2, PieChart, BarChart3, Calendar, Users } from 'lucide-react';
import NeoButton from './NeoButton';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, BarChart, Bar, Pie, Cell } from 'recharts';

interface CaseStudyModalProps {
  id: string;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ id, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // --- IDX STOCK PREDICTION DATA (Existing) ---
  const idxChartData = Array.from({ length: 50 }, (_, i) => {
    const x = i;
    const actual = 1000 + (x * 20) + (Math.sin(x * 0.5) * 50);
    const predicted = 1000 + (x * 20) + (Math.sin(x * 0.5) * 40) + (Math.random() * 10);
    return {
      day: `Day ${i + 1}`,
      Actual: Math.round(actual),
      Predicted: Math.round(predicted)
    };
  });

  // --- SENTUL GOLF UTAMA DATA (New) ---
  const sentulRevenueData = [
    { month: 'Jan', revenue: 2.21 },
    { month: 'Feb', revenue: 1.78 },
    { month: 'Mar', revenue: 0.96 },
    { month: 'Apr', revenue: 1.31 },
    { month: 'May', revenue: 1.92 },
    { month: 'Jun', revenue: 1.51 },
    { month: 'Jul', revenue: 1.40 },
    { month: 'Aug', revenue: 1.70 },
    { month: 'Sep', revenue: 1.43 },
    { month: 'Oct', revenue: 0.04 }, // Construction/Renovation drop
  ];

  const sentulOutletData = [
    { name: 'Golf', value: 70, color: '#1E3A8A' }, // ~70%
    { name: 'Restaurant', value: 15, color: '#3B82F6' }, // ~15%
    { name: 'Others', value: 15, color: '#93C5FD' }, // ~15%
  ];

  const sentulPlayerTypeData = [
    { name: 'Guest', value: 76 },
    { name: 'Member', value: 24 },
  ];

  const isIdxProject = id === 'c4';
  const isSentulProject = id === 'c5';

  if (!isIdxProject && !isSentulProject) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-start overflow-y-auto bg-brand-dark/50 backdrop-blur-sm p-4 md:p-8">
      <div className="bg-white w-full max-w-5xl rounded-[2rem] border-2 border-brand-dark shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 my-auto md:my-0">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b-2 border-brand-dark p-6 flex justify-between items-center z-10">
          <div>
            <span className="text-sm font-bold bg-blue-100 text-brand-blue px-3 py-1 rounded-full border border-blue-200">
              {isIdxProject ? 'Finance & Deep Learning' : 'Hospitality & Operational Analytics'}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-brand-dark">
              {isIdxProject ? 'Menaklukkan Volatilitas Pasar Saham Indonesia' : 'PT Sentul Golf Utama: 2025 Performance Report'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-brand-gray rounded-full transition-colors border-2 border-transparent hover:border-brand-dark"
          >
            <X size={32} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 space-y-12">
          
          {/* --- IDX PROJECT CONTENT --- */}
          {isIdxProject && (
            <>
              {/* Executive Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="text-brand-blue" />
                    The Challenge
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Stock markets are inherently non-linear, volatile, and time-dependent. Traditional models often fail to capture long-term dependencies. 
                    Our goal was to evaluate the effectiveness of <strong className="text-brand-dark">Stacked LSTM (Long Short-Term Memory)</strong> models in predicting accurate stock prices for the Indonesia Stock Exchange (IDX).
                  </p>
                </div>
                <div className="bg-brand-gray p-6 rounded-2xl border-2 border-brand-dark space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 font-bold uppercase">Average R² Score</p>
                    <p className="text-4xl font-bold text-brand-blue">0.9597</p>
                    <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                      <TrendingUp size={12} /> High Accuracy
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 font-bold uppercase">Dataset</p>
                    <p className="font-bold">10 Top IDX Companies</p>
                    <p className="text-xs text-gray-500">2015 - 2021 Data</p>
                  </div>
                </div>
              </div>

              {/* Architecture Visual */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers className="text-brand-blue" />
                  Model Architecture: Stacked LSTM
                </h3>
                <div className="bg-brand-dark text-white p-8 rounded-2xl relative overflow-hidden">
                   {/* Abstract Diagram Representation */}
                   <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
                      <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center w-full md:w-auto">
                        <p className="font-mono text-sm opacity-70">Input</p>
                        <p className="font-bold">Sequence (50 Days)</p>
                      </div>
                      <ArrowRight className="hidden md:block text-brand-blue" />
                      <div className="flex flex-col gap-2 w-full md:w-auto">
                        <div className="bg-brand-blue p-4 rounded-xl border-2 border-white text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                          <p className="font-bold">LSTM Layer 1</p>
                          <p className="text-xs opacity-80">200 Units, ReLU</p>
                        </div>
                        <div className="bg-brand-blue p-4 rounded-xl border-2 border-white text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] ml-4">
                          <p className="font-bold">LSTM Layer 2</p>
                          <p className="text-xs opacity-80">200 Units, ReLU</p>
                        </div>
                        <div className="bg-brand-blue p-4 rounded-xl border-2 border-white text-center shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] ml-8">
                          <p className="font-bold">LSTM Layer 3</p>
                          <p className="text-xs opacity-80">200 Units</p>
                        </div>
                      </div>
                      <ArrowRight className="hidden md:block text-brand-blue" />
                       <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center w-full md:w-auto">
                        <p className="font-mono text-sm opacity-70">Output</p>
                        <p className="font-bold">Close Price (t+1)</p>
                      </div>
                   </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  The stacked architecture allows the model to learn data representations at various levels of abstraction. The bottom layer captures short-term patterns, while the top layers model complex long-term relationships.
                </p>
              </div>

              {/* Results Chart */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="text-brand-blue" />
                  Prediction vs Reality (Simulation)
                </h3>
                <div className="h-[400px] w-full border-2 border-gray-200 rounded-xl p-4 bg-white">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={idxChartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                      <XAxis dataKey="day" hide />
                      <YAxis domain={['auto', 'auto']} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#191A23', border: 'none', borderRadius: '8px', color: '#fff' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="Actual" stroke="#191A23" strokeWidth={3} dot={false} />
                      <Line type="monotone" dataKey="Predicted" stroke="#3B82F6" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  *Visual representation approximating the high correlation (R² > 0.99) achieved for issuers like UNTR and PGAS.
                </p>
              </div>

              {/* Companies Analyzed */}
              <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Database className="text-brand-blue" />
                  Companies Analyzed
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['ACES', 'ANTM', 'JPFA', 'KLBF', 'PGAS', 'PTBA', 'PTPP', 'SMGR', 'TLKM', 'UNTR'].map(ticker => (
                    <span key={ticker} className="bg-white px-4 py-2 rounded-lg font-bold text-brand-dark shadow-sm border border-blue-100">
                      {ticker}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div>
                 <h3 className="text-xl font-bold mb-6">Key Findings</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                      <div className="bg-green-100 p-2 rounded-full h-fit">
                        <CheckCircle2 size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Long-Term Dependencies</h4>
                        <p className="text-sm text-gray-600">Successfully modeled complex temporal relationships using the Forget, Input, and Output gates mechanism.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                      <div className="bg-green-100 p-2 rounded-full h-fit">
                        <CheckCircle2 size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Hierarchical Learning</h4>
                        <p className="text-sm text-gray-600">The stacked approach proved effective for feature extraction on large sequential datasets.</p>
                      </div>
                    </div>
                 </div>
              </div>
            </>
          )}

          {/* --- SENTUL GOLF PROJECT CONTENT --- */}
          {isSentulProject && (
            <>
              {/* Executive Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="text-brand-blue" />
                    Operational Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    This comprehensive report analyzes the monthly revenue performance of <strong>PT Sentul Golf Utama</strong> throughout 2025. The study highlights revenue fluctuations driven by seasonality, with peaks in January (IDR 2.2B) and May (IDR 1.9B), and identifies the strategic impact of the October facility renovation.
                  </p>
                </div>
                <div className="bg-brand-gray p-6 rounded-2xl border-2 border-brand-dark space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 font-bold uppercase">Peak Monthly Rev</p>
                    <p className="text-4xl font-bold text-brand-blue">IDR 2.2B</p>
                    <p className="text-xs text-gray-500 font-bold flex items-center gap-1">
                      <Calendar size={12} /> January 2025
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 font-bold uppercase">Primary Driver</p>
                    <p className="font-bold">Golf Operations</p>
                    <p className="text-xs text-gray-500">~70% of Total Revenue</p>
                  </div>
                </div>
              </div>

              {/* Monthly Revenue Chart */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="text-brand-blue" />
                  Monthly Revenue Trend (in Billions IDR)
                </h3>
                <div className="h-[350px] w-full border-2 border-gray-200 rounded-xl p-4 bg-white">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sentulRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        cursor={{fill: '#f3f4f6'}}
                        contentStyle={{ backgroundColor: '#191A23', border: 'none', borderRadius: '8px', color: '#fff' }}
                        formatter={(value: number) => [`IDR ${value} B`, 'Revenue']}
                      />
                      <Bar dataKey="revenue" fill="#1E3A8A" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  *Significant drop in October due to strategic renovation and operational halt.
                </p>
              </div>

              {/* Composition Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Revenue Mix */}
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <PieChart className="text-brand-blue" /> Revenue Distribution
                    </h3>
                    <div className="h-[250px] w-full">
                       <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                             <Pie
                                data={sentulOutletData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                             >
                                {sentulOutletData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                             </Pie>
                             <Tooltip />
                             <Legend />
                          </PieChart>
                       </ResponsiveContainer>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">
                       "Golf" outlet is the core business pillar, consistently contributing ~70% of total income.
                    </p>
                 </div>

                 {/* Member vs Guest */}
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Users className="text-brand-blue" /> Player Segmentation
                    </h3>
                     <div className="h-[250px] w-full flex items-end justify-center gap-8 pb-4">
                        <div className="w-24 bg-brand-blue h-[76%] rounded-t-lg relative group">
                           <span className="absolute -top-6 left-0 w-full text-center font-bold">76%</span>
                           <span className="absolute bottom-2 left-0 w-full text-center text-white text-sm">Guest</span>
                        </div>
                        <div className="w-24 bg-brand-dark h-[24%] rounded-t-lg relative group">
                           <span className="absolute -top-6 left-0 w-full text-center font-bold">24%</span>
                           <span className="absolute bottom-2 left-0 w-full text-center text-white text-sm">Member</span>
                        </div>
                     </div>
                     <p className="text-sm text-gray-600 text-center mt-2">
                       "Guest" segment (non-members) dominates revenue generation, highlighting strong tourism/visitor appeal.
                    </p>
                 </div>
              </div>

              {/* Key Insights */}
              <div className="space-y-4">
                 <h3 className="text-xl font-bold">Strategic Insights</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
                       <div className="font-bold text-brand-blue mb-2">Seasonality Patterns</div>
                       <p className="text-sm text-gray-600">Identified "Low Season" in March and "Peak Season" in Jan/May/Aug, allowing for optimized staff rostering.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
                       <div className="font-bold text-brand-blue mb-2">F&B Correlation</div>
                       <p className="text-sm text-gray-600">Strong positive correlation between Golf Rounds and Restaurant sales. Top items: Jumbo Ice Tea & Mineral Water.</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
                       <div className="font-bold text-brand-blue mb-2">Strategic Pivot</div>
                       <p className="text-sm text-gray-600">October revenue drop was a planned strategic move for renovations (Sequoia Hills project), not a market failure.</p>
                    </div>
                 </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 md:p-8 border-t-2 border-brand-dark bg-gray-50 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-3 font-bold text-gray-500 hover:text-brand-dark transition-colors">
            Close
          </button>
          <a href="https://wa.me/089529341000" target="_blank" rel="noopener noreferrer">
             <NeoButton className="px-6 py-3 text-base">Discuss this Project</NeoButton>
          </a>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyModal;