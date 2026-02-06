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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      }
    });

    tl.from(imageRef.current, { x: -50, opacity: 0, duration: 1 })
      .from(contentRef.current, { x: 50, opacity: 0, duration: 1 }, "-=0.8");
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
            <span className="years">15+</span>
            <span className="text">Years of<br/>Experience</span>
          </div>
        </div>
        
        <div className="about-content" ref={contentRef}>
          <h3 className="section-subtitle">About Us</h3>
          <h2 className="section-title">We Are The Best In Auto Repairing</h2>
          <p className="about-description">
            Sree Preethi Auto Carriage has been serving the community with top-quality auto repair services. 
            Our team of dedicated professionals is committed to providing the best possible care for your vehicle. 
            We treat every car as if it were our own.
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
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Expert Workers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
