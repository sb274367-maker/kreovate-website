import React, { useState } from 'react';
import { Zap, BatteryCharging, Cpu, X, Database } from 'lucide-react';
import './Products.css';

import onBoardChargerImg from '../assets/products/on_board_charger.png';
import evChargerImg from '../assets/products/ev_charger.png';
import motorControllerImg from '../assets/products/motor_controller.png';
import dataLoggerImg from '../assets/products/data_logger.png';

const Products = () => {
  const products = [
    {
      id: 2,
      icon: <BatteryCharging size={32} />,
      title: 'AC-DC Chargers',
      description: 'High-efficiency automotive AC-DC (Offboard 3.3kW and 1.2kW) designed for reliable electric vehicle power conversion.',
      image: onBoardChargerImg,
      tags: ['EV', 'Power Electronics', 'Charging']
    },
    {
      id: 21,
      icon: <Zap size={32} />,
      title: 'EVSE L2 Chargers',
      description: 'Robust and scalable electric vehicle charging solutions ( 7KW, 11KW, 22KW ) with advanced communication protocols for modern infrastructure.',
      image: evChargerImg,
      tags: ['EV', 'Infrastructure', 'Power Electronics']
    },
    {
      id: 22,
      icon: <Cpu size={32} />,
      title: 'EV Motor Controllers',
      description: '250W BLDC High-performance Motor Controllers for electric vehicles, featuring precise torque control, regenerative braking, and robust thermal management.',
      image: motorControllerImg,
      tags: ['EV', 'Motor Control', 'Power Electronics']
    },
    {
      id: 4,
      icon: <Database size={32} />,
      title: 'Data Loggers',
      description: 'Advanced Data Logging systems capable of continuous monitoring across diverse sensor inputs. Connects seamlessly with cloud infrastructure for real-time analytics and predictive maintenance solutions.',
      image: dataLoggerImg,
      tags: ['IoT', 'Data Logging', 'Cloud Analytics']
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProduct]);

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">Products <span className="text-gradient"></span></h2>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card clickable animate-fade-up"
              style={{ animationDelay: `${product.id * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-header">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
              </div>
              <img src={product.image} alt={product.title} className="product-card-image" />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={24} />
            </button>
            <div className="modal-body">
              <div className="modal-image-container">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
              </div>
              <div className="modal-details">
                <div className="product-header">
                  <div className="product-icon">{selectedProduct.icon}</div>
                  <h3 className="product-title">{selectedProduct.title}</h3>
                </div>
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="product-tags">
                  {selectedProduct.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
