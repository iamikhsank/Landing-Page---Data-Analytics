import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ServiceModal from './components/ServiceModal';

function App() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services onSelectService={(id) => setSelectedServiceId(id)} />
        <ContactCTA />
        <CaseStudies onSelectCase={(id) => setSelectedCaseId(id)} />
        <Process />
      </main>
      <Footer />
      
      {/* Case Study Modal */}
      {selectedCaseId && (
        <CaseStudyModal 
          id={selectedCaseId} 
          onClose={() => setSelectedCaseId(null)} 
        />
      )}

      {/* Service Modal (for BI) */}
      {selectedServiceId && (
        <ServiceModal 
          id={selectedServiceId} 
          onClose={() => setSelectedServiceId(null)} 
        />
      )}
    </div>
  );
}

export default App;