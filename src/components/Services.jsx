import React from 'react';
import { Layers, Cpu, Code, ShieldCheck } from 'lucide-react';
import './Services.css';
import imgProductDev from '../assets/service_product_dev.png';
import imgHardware from '../assets/service_hardware_eng.png';
import imgEmbedded from '../assets/service_embedded_sw.png';
import imgTesting from '../assets/service_testing_val.png';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Layers size={36} />,
      image: imgProductDev,
      title: 'Product Development',
      description: 'End-to-End Design from Proof of Concept (POC) and fast prototyping to fully manufactured products ready for the market.',
    },
    {
      id: 2,
      icon: <Cpu size={36} />,
      image: imgHardware,
      title: 'Hardware Engineering',
      description: 'Expert PCB Design and Layout focusing on High-Speed and Power Designs for demanding applications.',
    },
    {
      id: 3,
      icon: <Code size={36} />,
      image: imgEmbedded,
      title: 'Embedded Systems & Software',
      description: 'Robust Firmware and Software Engineering across platforms including Linux, Android BSPs, and Middleware development.',
    },
    {
      id: 4,
      icon: <ShieldCheck size={36} />,
      image: imgTesting,
      title: 'Testing & Validation',
      description: 'Comprehensive DVP testing, environment validation, and full certification support for market readiness.',
    }
  ];

  return (
    <section id="services" className="section services bg-pattern">
      <div className="container">
        <h2 className="section-title">Services & Expertise</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card animate-fade-up" style={{ animationDelay: `${service.id * 0.1}s` }}>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-overlay"></div>
                <div className="service-icon-wrapper">
                  {service.icon}
                  <div className="icon-glow"></div>
                </div>
              </div>
              <div className="service-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
