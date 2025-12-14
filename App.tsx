import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ContactCTA />
        <CaseStudies />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;