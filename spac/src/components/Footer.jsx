import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Wrench } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    e.target.reset();
  };

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
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
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
            <h4 className="footer-title">Contact Us</h4>
            <ul>
              <li><a href="tel:+919443479468">+91 94434 79468</a></li>
              <li><a href="mailto:sekar9468@gmail.com">sekar9468@gmail.com</a></li>
              <li><a href="#contact">Pollachi, Coimbatore, India</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p>Subscribe to get updates and special offers.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Your email" required />
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
