import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Wrench } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Wrench className="footer-icon" />
              <span>Sree Preethi <span className="highlight">Auto Carriage</span></span>
            </div>
            <p className="footer-text">
              Providing top-quality auto repair and maintenance services since 2010. 
              Trust us with your vehicle for reliable and professional care.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><a href="#">General Service</a></li>
              <li><a href="#">Engine Repair</a></li>
              <li><a href="#">Wheel Alignment</a></li>
              <li><a href="#">Oil Change</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p>Subscribe to get updates and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sree Preethi Auto Carriage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
