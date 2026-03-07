import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Wrench, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHashLink = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href;
      
      if (location.pathname !== '/') {
        navigate('/' + targetId);
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Book Service', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <Wrench className="logo-icon" />
          <span>Sree Preethi <span className="highlight">Auto Carriage</span></span>
        </Link>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            link.href.includes('#') ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
                onClick={(e) => handleHashLink(e, link.href.split('/')[1] || link.href)}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="nav-link">
                {link.name}
              </Link>
            )
          ))}
          <Link to="/login" className="nav-link auth-link">
            <User size={18} />
            <span>Login</span>
          </Link>
          <Link to="/book" className="cta-button">
            <span>Book Now</span>
          </Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                link.href.includes('#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={(e) => handleHashLink(e, link.href.split('/')[1] || link.href)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link to="/login" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                Login / Register
              </Link>
              <Link to="/book" className="mobile-cta-button" onClick={() => setMobileMenuOpen(false)}>
                Book Service
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
