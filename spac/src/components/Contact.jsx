import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Get In Touch</h3>
          <h2 className="section-title">Book An Appointment</h2>
          <p className="section-description">
            Ready to get your car back in top shape? Contact us today for a quote or to schedule a service.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="info-item">
                <div className="icon-box">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>123 Auto Street, Mechanic City, MC 54321</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-box">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h4>Phone Number</h4>
                  <p>+1 234 567 8900</p>
                  <p>+1 987 654 3210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>info@sreepreethi.com</p>
                  <p>support@sreepreethi.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Clock size={24} />
                </div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select>
                  <option value="">Select Service</option>
                  <option value="general">General Service</option>
                  <option value="engine">Engine Diagnostics</option>
                  <option value="oil">Oil Change</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group full-width">
                <textarea placeholder="Message" rows="5"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
