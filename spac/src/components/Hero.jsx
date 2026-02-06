import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }
    )
    .fromTo(textRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className="container hero-container" ref={textRef}>
        <h2 className="hero-subtitle">Premium Auto Care Services</h2>
        <h1 className="hero-title">
          Expert Mechanics for Your <br />
          <span className="text-gradient">Premium Vehicle</span>
        </h1>
        <p className="hero-description">
          Sree Preethi Auto Carriage provides top-tier maintenance and repair services. 
          Experience the perfect blend of modern technology and traditional expertise.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Book Appointment <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn btn-outline">
            Our Services
          </a>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
