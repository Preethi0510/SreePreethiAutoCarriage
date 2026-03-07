import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import { Shield, Clock, Award, Star, Users, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Standard smooth scroll for hash links on the same page
    const handleHashClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  const testimonials = [
    { id: 1, name: 'Rahul Sharma', text: 'Best service in Pollachi! They fixed my ECM issue which 3 other shops couldn\'t identify.', rating: 5, vehicle: 'Hyundai Creta' },
    { id: 2, name: 'Priya K.', text: 'Professional staff and transparent pricing. Highly recommend their general service package.', rating: 5, vehicle: 'Honda City' },
    { id: 3, name: 'Suresh Kumar', text: 'Quick turnaround for wheel alignment. The 3D technology they use is very precise.', rating: 4, vehicle: 'Maruti Swift' },
  ];

  return (
    <main className="home-page">
      <section id="home">
        <Hero />
      </section>

      <section id="services" className="section-services">
        <div className="container text-center mb-5">
          <h2 className="section-title">Our Expert Services</h2>
          <p className="lead text-muted">Specialized solutions for modern vehicles with advanced technology.</p>
        </div>
        <Services />
        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-outline-primary btn-lg rounded-pill px-5">
            View All Services
          </Link>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h3 className="section-subtitle text-primary fw-bold mb-2">Why Choose Us</h3>
              <h2 className="display-5 fw-bold mb-4">The Most Trusted Workshop in Pollachi</h2>
              <p className="lead text-muted mb-5">
                With over 20 years of experience, we provide dealership-level service at competitive prices. 
                Our team of certified technicians uses state-of-the-art equipment to ensure your vehicle is in safe hands.
              </p>
              
              <div className="features-list">
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon bg-white text-primary p-3 rounded-4 shadow-sm me-4">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1">Quality Assurance</h4>
                    <p className="text-muted mb-0">We use only genuine parts and provide service warranty for all repairs.</p>
                  </div>
                </div>
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon bg-white text-primary p-3 rounded-4 shadow-sm me-4">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1">Timely Delivery</h4>
                    <p className="text-muted mb-0">We value your time and ensure most services are completed within the same day.</p>
                  </div>
                </div>
                <div className="feature-item d-flex align-items-start">
                  <div className="feature-icon bg-white text-primary p-3 rounded-4 shadow-sm me-4">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-1">Expert Technicians</h4>
                    <p className="text-muted mb-0">Our team is trained on the latest diagnostic tools and multi-brand technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="stats-grid row g-4">
                <div className="col-6">
                  <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                    <Users className="text-primary mb-3 mx-auto" size={40} />
                    <h3 className="h2 fw-bold mb-1">1000+</h3>
                    <p className="text-muted small mb-0">Happy Customers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card bg-primary text-white p-4 rounded-4 shadow-sm text-center">
                    <Star className="text-white mb-3 mx-auto" size={40} />
                    <h3 className="h2 fw-bold mb-1">4.9/5</h3>
                    <p className="text-white-50 small mb-0">Average Rating</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                    <CheckCircle className="text-primary mb-3 mx-auto" size={40} />
                    <h3 className="h2 fw-bold mb-1">20+</h3>
                    <p className="text-muted small mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card bg-white p-4 rounded-4 shadow-sm text-center">
                    <Wrench className="text-primary mb-3 mx-auto" size={40} />
                    <h3 className="h2 fw-bold mb-1">50+</h3>
                    <p className="text-muted small mb-0">Services Provided</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Customer Testimonials</h2>
            <div className="divider mx-auto mb-4" style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)' }}></div>
          </div>
          
          <div className="row g-4">
            {testimonials.map(t => (
              <div key={t.id} className="col-md-4">
                <div className="testimonial-card bg-white p-4 rounded-4 shadow-sm h-100 border border-light">
                  <div className="rating text-warning mb-3">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-muted fst-italic mb-4">"{t.text}"</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-primary-subtle text-primary rounded-circle p-2 me-3 fw-bold">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-0">{t.name}</h4>
                      <p className="small text-muted mb-0">{t.vehicle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
