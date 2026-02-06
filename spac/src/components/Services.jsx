import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Gauge, Disc, Droplets, Wind, Car } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: 'General Service',
    description: 'Complete vehicle inspection and maintenance to ensure optimal performance.',
    icon: <Wrench size={40} />,
  },
  {
    id: 2,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and fix engine issues accurately.',
    icon: <Gauge size={40} />,
  },
  {
    id: 3,
    title: 'Wheel Alignment',
    description: 'Precision wheel alignment and balancing for a smoother, safer ride.',
    icon: <Disc size={40} />,
  },
  {
    id: 4,
    title: 'Oil Change',
    description: 'Premium oil change services using high-grade synthetic oils.',
    icon: <Droplets size={40} />,
  },
  {
    id: 5,
    title: 'AC Repair',
    description: 'Complete air conditioning service, recharge, and repair.',
    icon: <Wind size={40} />,
  },
  {
    id: 6,
    title: 'Detailing',
    description: 'Professional interior and exterior cleaning and detailing services.',
    icon: <Car size={40} />,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="services" className="section services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">What We Do</h3>
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-description">
            We offer a comprehensive range of car repair and maintenance services.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              ref={el => cardsRef.current[index] = el}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
