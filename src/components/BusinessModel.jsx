import React from 'react';
import { RefreshCw, Briefcase, Cpu, Code, Factory } from 'lucide-react';
import './BusinessModel.css';
import imgEndToEnd from '../assets/biz_end_to_end.png';
import imgEngineering from '../assets/biz_engineering.png';
import imgPrototyping from '../assets/biz_prototyping.png';
import imgProduction from '../assets/biz_production.png';
import imgService from '../assets/biz_service.png';

const BusinessModel = () => {
  const models = [
    {
      icon: <Briefcase size={28} />,
      image: imgEndToEnd,
      title: 'End-to-End Solutions',
      description: 'Taking ownership of the entire product lifecycle from conceptual design to manufacturing and stable supply chain management.'
    },
    {
      icon: <Code size={28} />,
      image: imgEngineering,
      title: 'Engineering Services',
      description: 'Providing specialized engineering design, development, and validation services for complex embedded and automotive systems.'
    },
    {
      icon: <Cpu size={28} />,
      image: imgPrototyping,
      title: 'Prototyping',
      description: 'Rapid prototyping services to transform concepts into functional proof-of-concept models for testing and evaluation.'
    },
    {
      icon: <Factory size={28} />,
      image: imgProduction,
      title: 'Production',
      description: 'Scaling up validated designs into full-scale manufacturing, ensuring quality control and supply chain reliability.'
    },
    {
      icon: <RefreshCw size={28} />,
      image: imgService,
      title: 'Service Models',
      description: 'Flexible long-term service contracts and dedicated maintenance tailored to ongoing business needs.'
    }
  ];

  return (
    <section id="business" className="section business-model">
      <div className="container">
        <h2 className="section-title">Business Model</h2>
        
        <div className="model-cards">
          {models.map((model, index) => (
            <div key={index} className="model-card animate-fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="model-image-wrapper">
                {model.image
                  ? <img src={model.image} alt={model.title} className="model-image" />
                  : <div className="model-image-placeholder"></div>
                }
                <div className="model-image-overlay"></div>
                <div className="model-icon">{model.icon}</div>
              </div>
              <div className="model-body">
                <h3 className="model-title">{model.title}</h3>
                <p className="model-description">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
