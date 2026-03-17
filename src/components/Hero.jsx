import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import McuRh850Symbol from './McuRh850Symbol';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-pattern" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <p className="hero-subtitle">Welcome to Kreovate Engineering</p>
          <h1 className="hero-title">
            <span className="text-gradient">Creativity</span><br />
            and<br />
            Innovation
          </h1>
          <p className="hero-description">
            A forward-thinking electronics design startup specializing in cutting-edge embedded systems, advanced hardware solutions, and automotive electronics. blending creativity with engineering excellence.
          </p>
          <div className="hero-cta">
            <a href="#services" className="btn btn-solid cta-btn">
              Explore Our Expertise <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-primary cta-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <McuRh850Symbol />
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
