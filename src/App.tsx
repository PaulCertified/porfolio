import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundPattern } from './components/ui';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Features />
        <Projects />
        <Testimonials />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;