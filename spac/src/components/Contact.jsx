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
                  <p>42 KVR Nagar, Palakkad Road, Pollachi</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-box">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h4>Phone Number</h4>
                  <p>+91 94434 79468</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>sekar9468@gmail.com</p>
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
        
        <div className="map-container">
          <img 
            src="https://images.unsplash.com/photo-1632736723189-d17c42f6adf5?q=80&w=2000&auto=format&fit=crop"
            alt="Sree Preethi Auto Carriage Workshop Exterior"
            className="workshop-exterior-image"
            style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '20px', marginBottom: '20px'}}
          />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6834579998!2d77.0000000!3d10.6600000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM5JzM2LjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
            width="100%" 
            height="200" 
            style={{border:0, borderRadius: '20px', marginTop: '20px'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sree Preethi Auto Carriage Location - 42 KVR Nagar, Palakkad Road, Pollachi"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
