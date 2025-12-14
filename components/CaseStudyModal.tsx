import React, { useEffect } from 'react';
import { X, ArrowRight, TrendingUp, Layers, Activity, Database, CheckCircle2, PieChart, BarChart3, Calendar, Users, MapPin, School, Route, GraduationCap } from 'lucide-react';
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

  // --- IDX STOCK PREDICTION DATA ---
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

  // --- SENTUL GOLF UTAMA DATA ---
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
    { month: 'Oct', revenue: 0.04 }, 
  ];

  const sentulOutletData = [
    { name: 'Golf', value: 70, color: '#1E3A8A' },
    { name: 'Restaurant', value: 15, color: '#3B82F6' },
    { name: 'Others', value: 15, color: '#93C5FD' },
  ];

  // --- EDU MAPPING CIMENYAN DATA (New) ---
  const eduVillageData = [
    { name: 'Cibeunying', schools: 12 },
    { name: 'Ciburial', schools: 10 },
    { name: 'Padasuka', schools: 9 },
    { name: 'Cikadut', schools: 7 },
    { name: 'Mekarmanik', schools: 6 },
    { name: 'Mekarsaluyu', schools: 5 },
    { name: 'Mandalamekar', schools: 5 },
    { name: 'Cimenyan', schools: 5 },
    { name: 'Sindanglaya', schools: 4 },
  ];

  const eduSchoolTable = [
    { name: 'SMPN 3 CIMENYAN', type: 'SMP', students: 585, time: '14.5 min', dist: '1.5 km' },
    { name: 'SDN PANGGILINGAN 02', type: 'SD', students: 423, time: '6.6 min', dist: '0.4 km' },
    { name: 'SDN CIBEUNYING 02', type: 'SD', students: 402, time: '23.6 min', dist: '2.1 km' },
    { name: 'SDN PANGGILINGAN 01', type: 'SD', students: 394, time: '3.3 min', dist: '0.4 km' },
    { name: 'SDN SUKAAKUR', type: 'SD', students: 385, time: '2.0 min', dist: '0.5 km' },
  ];

  const isIdxProject = id === 'c4';
  const isSentulProject = id === 'c5';
  const isEduProject = id === 'c6';

  if (!isIdxProject && !isSentulProject && !isEduProject) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-start overflow-y-auto bg-brand-dark/50 backdrop-blur-sm p-4 md:p-8">
      <div className="bg-white w-full max-w-5xl rounded-[2rem] border-2 border-brand-dark shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 my-auto md:my-0">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur border-b-2 border-brand-dark p-6 flex justify-between items-center z-10">
          <div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full border 
                ${isEduProject ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-blue-100 text-brand-blue border-blue-200'}`}>
              {isIdxProject ? 'Finance & Deep Learning' : isSentulProject ? 'Hospitality & Operational Analytics' : 'Geospatial & Public Policy'}
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-2 text-brand-dark leading-tight">
              {isIdxProject && 'Menaklukkan Volatilitas Pasar Saham Indonesia'}
              {isSentulProject && 'PT Sentul Golf Utama: 2025 Performance Report'}
              {isEduProject && 'Pemetaan Akses & Distribusi Pendidikan Cimenyan'}
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
              </div>
            </>
          )}

          {/* --- EDU MAPPING CIMENYAN CONTENT (NEW) --- */}
          {isEduProject && (
            <>
              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-center">
                    <div className="text-sm font-bold text-orange-600 uppercase mb-1">Total Siswa</div>
                    <div className="text-2xl md:text-3xl font-bold text-brand-dark">16,986</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
                    <div className="text-sm font-bold text-brand-blue uppercase mb-1">Total Guru</div>
                    <div className="text-2xl md:text-3xl font-bold text-brand-dark">831</div>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                    <div className="text-sm font-bold text-green-600 uppercase mb-1">R. Kelas</div>
                    <div className="text-2xl md:text-3xl font-bold text-brand-dark">622</div>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-center">
                    <div className="text-sm font-bold text-purple-600 uppercase mb-1">Desa</div>
                    <div className="text-2xl md:text-3xl font-bold text-brand-dark">9</div>
                </div>
              </div>

              {/* Context */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <MapPin className="text-brand-blue" />
                        Geospatial Optimization
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                          This dashboard was developed to analyze the <strong>accessibility (Zonasi)</strong> and distribution of education facilities in Cimenyan District. By mapping residential clusters ("Dapur") to the nearest schools within a 3km radius, we identified coverage gaps and calculated travel times to optimize student allocation.
                      </p>
                      <div className="flex gap-2 flex-wrap">
                          <span className="text-xs font-bold bg-brand-gray px-2 py-1 rounded border border-brand-dark">Mapbox</span>
                          <span className="text-xs font-bold bg-brand-gray px-2 py-1 rounded border border-brand-dark">Tableau</span>
                          <span className="text-xs font-bold bg-brand-gray px-2 py-1 rounded border border-brand-dark">Network Analysis</span>
                      </div>
                  </div>
                  <div className="flex-1 bg-brand-dark rounded-xl p-1 shadow-neo">
                      {/* Placeholder for Map Visual - simulating the dark map in PDF */}
                      <div className="w-full h-48 bg-gray-800 rounded-lg relative overflow-hidden flex items-center justify-center group">
                          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                          {/* Simulated Map Points */}
                          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="relative z-10 text-white font-mono text-xs bg-black/50 px-2 py-1 rounded">Interactive Map Visualization</span>
                      </div>
                  </div>
              </div>

              {/* Distribution Chart */}
              <div className="border-2 border-brand-dark rounded-2xl p-6 bg-white">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <School className="text-brand-blue" />
                    Jumlah Sekolah Berdasarkan Lokasi Desa
                  </h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={eduVillageData} margin={{ left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fontWeight: 600}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', border: '2px solid #191A23', borderRadius: '8px' }}
                                cursor={{fill: '#f3f4f6'}}
                            />
                            <Bar dataKey="schools" fill="#D97706" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                  </div>
              </div>

              {/* School Profile Table */}
              <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Route className="text-brand-blue" />
                    Profil Aksesibilitas Sekolah (Top 5 Sample)
                  </h3>
                  <div className="overflow-x-auto border-2 border-brand-dark rounded-xl">
                      <table className="w-full text-sm text-left">
                          <thead className="bg-brand-gray border-b-2 border-brand-dark text-brand-dark font-bold uppercase">
                              <tr>
                                  <th className="px-6 py-3">Nama Sekolah</th>
                                  <th className="px-6 py-3">Tingkat</th>
                                  <th className="px-6 py-3">Jumlah Siswa</th>
                                  <th className="px-6 py-3">Waktu Tempuh</th>
                                  <th className="px-6 py-3">Jarak</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                              {eduSchoolTable.map((school, i) => (
                                  <tr key={i} className="hover:bg-blue-50 transition-colors bg-white">
                                      <td className="px-6 py-4 font-bold">{school.name}</td>
                                      <td className="px-6 py-4"><span className="bg-brand-dark text-white text-xs px-2 py-0.5 rounded">{school.type}</span></td>
                                      <td className="px-6 py-4">{school.students}</td>
                                      <td className="px-6 py-4 text-green-600 font-bold">{school.time}</td>
                                      <td className="px-6 py-4">{school.dist}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
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