
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Scents from './components/Scents';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-gray-200 font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Scents />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
