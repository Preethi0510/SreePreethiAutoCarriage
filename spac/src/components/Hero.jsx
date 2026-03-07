import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Professional <span className="highlight">Car Care</span> You Can Trust
          </h1>
          <p className="hero-subtitle">
            Sree Preethi Auto Carriage provides high-quality multi-brand car services with 20+ years of expertise in Pollachi.
          </p>
          <div className="hero-btns">
            <a href="/book" className="btn-primary">Book a Service</a>
            <a href="/services" className="btn-secondary">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
