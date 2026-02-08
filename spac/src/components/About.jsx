import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // Trigger earlier to ensure visibility
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(imageRef.current, 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )
      .fromTo(contentRef.current, 
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }, 
        "-=0.8"
      );
    }, containerRef); // Scope to container

    return () => ctx.revert(); // Cleanup
  }, []);

  const features = [
    "Certified Professional Mechanics",
    "Latest Diagnostic Technology",
    "Genuine Spare Parts",
    "Transparent Pricing",
    "Timely Delivery",
    "24/7 Emergency Support"
  ];

  return (
    <section id="about" className="section about-section" ref={containerRef}>
      <div className="container about-container">
        <div className="about-image-wrapper" ref={imageRef}>
          <img 
            src="https://images.unsplash.com/photo-1530046339160-7115356bc31c?q=80&w=2000&auto=format&fit=crop" 
            alt="Mechanic working on car" 
            className="about-image"
          />
          <div className="experience-badge">
            <span className="years">20+</span>
            <span className="text">Years of<br/>Experience</span>
          </div>
        </div>
        
        <div className="about-content" ref={contentRef}>
          <h3 className="section-subtitle">About Us</h3>
          <h2 className="section-title">Expert Care for Your Vehicle</h2>
          <p className="about-description">
            Sree Preethi Auto Carriage, led by <strong>Rajasekar R</strong>, has been serving the community with top-quality auto repair services for over two decades. 
            We specialize in multi-brand car services, treating every vehicle with precision and care.
          </p>
          
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <CheckCircle size={20} className="feature-icon" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Multi</span>
              <span className="stat-label">Brand Services</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
