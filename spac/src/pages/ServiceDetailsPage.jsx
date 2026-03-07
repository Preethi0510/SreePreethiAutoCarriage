import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Clock, Tag, Shield, CheckCircle, ChevronLeft } from 'lucide-react';
import './ServiceDetailsPage.css';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="container py-5 mt-5 text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-3">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-details-page py-5 mt-5">
      <div className="container">
        <Link to="/services" className="back-link d-inline-flex align-items-center mb-4 text-decoration-none">
          <ChevronLeft size={20} />
          <span>Back to Services</span>
        </Link>

        <div className="row g-5">
          <div className="col-lg-7">
            <div className="service-image-wrapper rounded-4 overflow-hidden shadow-lg mb-4">
              <img src={service.image} alt={service.title} className="w-100 object-fit-cover" style={{ maxHeight: '450px' }} />
            </div>
            
            <div className="service-content">
              <h1 className="display-5 fw-bold mb-3">{service.title}</h1>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <span className="badge bg-primary px-3 py-2 rounded-pill">{service.category}</span>
                <div className="d-flex align-items-center text-muted">
                  <Clock size={18} className="me-2" />
                  <span>{service.time}</span>
                </div>
                <div className="d-flex align-items-center text-muted">
                  <Tag size={18} className="me-2" />
                  <span>{service.price}</span>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="h3 mb-3">About this Service</h2>
                <p className="lead text-muted">{service.detailedDescription}</p>
              </div>

              <div className="benefits-section mb-5">
                <h3 className="h4 mb-4">Key Benefits</h3>
                <div className="row g-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="col-md-6">
                      <div className="benefit-item d-flex align-items-start p-3 bg-white rounded-3 shadow-sm h-100">
                        <CheckCircle className="text-success me-3 mt-1 flex-shrink-0" size={20} />
                        <span className="fw-medium">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="compatibility-section p-4 bg-light rounded-4">
                <h3 className="h5 mb-2 d-flex align-items-center">
                  <Shield className="text-primary me-2" size={20} />
                  Vehicle Compatibility
                </h3>
                <p className="mb-0 text-muted">{service.compatibility}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="booking-sidebar sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-lg rounded-4 p-4 overflow-hidden">
                <div className="price-tag mb-4">
                  <span className="text-muted small d-block mb-1">Estimated Cost</span>
                  <span className="h2 fw-bold text-primary">{service.price}</span>
                </div>

                <div className="booking-features mb-4">
                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-primary-subtle text-primary p-2 rounded">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="h6 mb-0">Quick Service</h4>
                      <p className="small text-muted mb-0">Completed within {service.time}</p>
                    </div>
                  </div>
                  <div className="feature-item d-flex align-items-center mb-3">
                    <div className="icon-box me-3 bg-success-subtle text-success p-2 rounded">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="h6 mb-0">Warranty Included</h4>
                      <p className="small text-muted mb-0">6 Months / 5,000 KM</p>
                    </div>
                  </div>
                </div>

                <Link to={`/book?service=${service.id}`} className="btn btn-primary btn-lg w-100 rounded-pill py-3 fw-bold mb-3">
                  Book This Service
                </Link>
                <p className="text-center text-muted small mb-0">
                  No immediate payment required. You pay after service.
                </p>
              </div>

              <div className="help-card mt-4 p-4 bg-dark text-white rounded-4">
                <h4 className="h5 mb-3">Need Help?</h4>
                <p className="small text-white-50 mb-3">Contact our service advisor for any queries related to this service.</p>
                <a href="tel:+919443479468" className="btn btn-outline-light w-100 rounded-pill">Call +91 94434 79468</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
