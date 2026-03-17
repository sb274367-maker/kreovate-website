import React from 'react';
import { Target, Lightbulb, CheckCircle, Users, Leaf, RefreshCcw } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    { icon: <Lightbulb size={24} />, title: 'Creativity & Innovation', desc: 'Developing novel solutions and pushing the boundaries in embedded tech.' },
    { icon: <CheckCircle size={24} />, title: 'Quality', desc: 'Uncompromising standards, rigorous testing, and validation.' },
    { icon: <Users size={24} />, title: 'Customer-Centricity', desc: 'Prioritizing client success and long-term partnerships.' },
    { icon: <Leaf size={24} />, title: 'Sustainability', desc: 'Engineering products with a focus on long-term environmental impact.' },
    { icon: <RefreshCcw size={24} />, title: 'Adaptability', desc: 'Agile responses to changing market and technological landscapes.' },
    { icon: <Target size={24} />, title: 'Excellence in Engineering', desc: 'Precision in every circuit and line of code.' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Kreovate<span className="text-gradient"></span></h2>

        <div className="about-content">
          <div className="about-text animate-fade-up">
            <p>
              Kreovate Engineering Private Limited is a specialized electronics product design startup. We focus on delivering cutting-edge embedded systems, advanced hardware solutions, and state-of-the-art automotive electronics.
            </p>
            <p>
              Our multidisciplinary team blends creative problem-solving with rigorous engineering excellence. Serving key sectors including Automotive, Industrial, Consumer, and Medical, we provide tailored end-to-end design, prototyping, and production-ready solutions.
            </p>
          </div>

          <div className="about-values animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="values-grid">
              {values.map((val, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{val.icon}</div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
