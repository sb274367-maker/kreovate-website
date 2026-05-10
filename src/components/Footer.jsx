import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';
import logoWide from '../assets/logo-wide.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src={logoWide} alt="Kreovate Engineering Logo" className="logo-image footer-logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          <p className="footer-description">
            Creativity and Innovation. Cutting-edge electronics and embedded systems design for a connected world.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products & IP</a></li>
            <li><a href="#business">Business Model</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <Mail size={18} className="contact-icon" />
              <div style={{ whiteSpace: 'nowrap' }}>
                <div>Sales: <a href="mailto:sales@kreovate.com">sales@kreovate.com</a></div>
                <div style={{ marginTop: '4px' }}>Design: <a href="mailto:design@kreovate.com">design@kreovate.com</a></div>
              </div>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span><a href="tel:+919404368044">+91 9404368044</a></span>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Kreovate Engineering Private Limited, Auto Cluster Development and Research Institute, MIDC, Chinchwad, Pune, Pimpari-Chinchwad, Maharashtra 411019.</span>
            </li>
          </ul>
        </div>

        <div className="footer-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5671552232134!2d73.7990262751793!3d18.638528665560536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9003d6c17e5%3A0xc784e2705b2679a4!2sKreovate%20Engineering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1778416841179!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kreovate Engineering Location"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kreovate Engineering Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
