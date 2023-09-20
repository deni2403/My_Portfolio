import React from 'react';
import Navigation from './components/Navigation';
import Hero from './pageSection/Hero';
import Portfolio from './pageSection/Portfolio';
import Skills from './pageSection/Skills';
import Footer from './pageSection//Footer';
import Contact from './pageSection/Contact';

function App() {
  return (
    <div className="container-app">
      <Navigation />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
