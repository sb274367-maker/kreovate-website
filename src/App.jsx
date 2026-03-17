import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';

import Services from './components/Services';
import Products from './components/Products';
import SoftwareStacks from './components/SoftwareStacks';
import BusinessModel from './components/BusinessModel';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kreovate-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kreovate-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Products />
        <SoftwareStacks />
        <BusinessModel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
