import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Wrench, MapPin, Phone, Mail } from 'lucide-react';
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/book">Book Service</Link></li>
              <li><Link to="/dashboard">My Dashboard</Link></li>
              <li><Link to="/login">Login / Register</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Workshop Info</h4>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={16} className="footer-contact-icon" />
                <span>42 KVR Nagar, Palakkad Road, Pollachi</span>
              </li>
              <li>
                <Phone size={16} className="footer-contact-icon" />
                <a href="tel:+919443479468">+91 94434 79468</a>
              </li>
              <li>
                <Mail size={16} className="footer-contact-icon" />
                <a href="mailto:sekar9468@gmail.com">sekar9468@gmail.com</a>
              </li>
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
