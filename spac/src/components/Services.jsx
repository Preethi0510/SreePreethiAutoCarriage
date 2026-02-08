import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Gauge, Disc, Droplets, Wind, Cpu, Key } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify engine issues accurately.',
    icon: <Gauge size={32} />,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'ECM Programming',
    description: 'Expert Engine Control Module programming and tuning.',
    icon: <Cpu size={32} />,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Immobilizer Key',
    description: 'Key programming and immobilizer solutions for all brands.',
    icon: <Key size={32} />,
    image: 'https://images.unsplash.com/photo-1622439722415-46543b355a6d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'General Service',
    description: 'Complete vehicle inspection and maintenance.',
    icon: <Wrench size={32} />,
    image: 'https://images.unsplash.com/photo-1590325451682-6229b462c992?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Wheel Alignment',
    description: 'Precision wheel alignment and balancing.',
    icon: <Disc size={32} />,
    image: 'https://images.unsplash.com/photo-1574755913233-a26b21691a0c?q=80&w=1000&auto=format&fit=crop'
  },
];

const Services = () => {
  const [activeId, setActiveId] = React.useState(null);

  // Handle hover for desktop, click for mobile
  const handleInteraction = (id) => {
    setActiveId(id);
  };

  const handleLeave = () => {
    setActiveId(null);
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">What We Do</h3>
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-description">
            We offer a comprehensive range of car repair and maintenance services.
          </p>
        </div>

        <div className="services-gallery">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              className={`service-panel ${activeId === service.id ? 'active' : ''}`}
              onHoverStart={() => handleInteraction(service.id)}
              onHoverEnd={handleLeave}
              onClick={() => handleInteraction(activeId === service.id ? null : service.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              animate={{ 
                flex: activeId === service.id ? 3 : 1
              }}
            >
              <div 
                className="service-bg" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-overlay"></div>
              
              <div className="service-content">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <div className="service-info">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-text">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
