import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="contact-page pt-5">
      <div className="container py-5 mt-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead text-muted">Have questions? We're here to help you with your vehicle needs.</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
