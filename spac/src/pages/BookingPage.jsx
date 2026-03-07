import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { User, Car, Calendar, ClipboardList, CheckCircle2, ArrowLeft } from 'lucide-react';
import Notification from '../components/common/Notification';
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotification] = useState(null);

  // Initialize form data with service from URL params if available
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('service');
    let serviceType = '';
    if (serviceId) {
      const service = servicesData.find(s => s.id === parseInt(serviceId));
      if (service) {
        serviceType = service.title;
      }
    }
    return {
      fullName: '',
      phoneNumber: '',
      email: '',
      vehicleModel: '',
      vehicleNumber: '',
      vehicleType: 'Sedan',
      serviceType: serviceType,
      preferredDate: '',
      preferredTime: '',
      additionalNotes: ''
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setNotification({ message: 'Please enter a valid 10-digit phone number.', type: 'error' });
      return;
    }

    // Validation: Date (not in the past)
    const today = new Date().toISOString().split('T')[0];
    if (formData.preferredDate < today) {
      setNotification({ message: 'Preferred date cannot be in the past.', type: 'error' });
      return;
    }

    // Mock API Call
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setNotification({ message: 'Booking confirmed successfully!', type: 'success' });
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="container py-5 mt-5 text-center">
        {notification && (
          <Notification 
            message={notification.message} 
            type={notification.type} 
            onClose={() => setNotification(null)} 
          />
        )}
        <div className="success-message p-5 rounded-4 shadow-lg bg-white mx-auto" style={{ maxWidth: '600px' }}>
          <CheckCircle2 size={80} className="text-success mb-4" />
          <h1 className="fw-bold mb-3">Booking Confirmed!</h1>
          <p className="lead text-muted mb-4">
            Thank you, <strong>{formData.fullName}</strong>. Your booking for <strong>{formData.serviceType}</strong> has been received.
          </p>
          <div className="booking-summary text-start bg-light p-4 rounded-3 mb-4">
            <p className="mb-2"><strong>Vehicle:</strong> {formData.vehicleModel} ({formData.vehicleNumber})</p>
            <p className="mb-2"><strong>Date:</strong> {formData.preferredDate}</p>
            <p className="mb-0"><strong>Time:</strong> {formData.preferredTime}</p>
          </div>
          <p className="text-muted mb-4">We will contact you shortly to confirm the appointment.</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-primary rounded-pill px-5 py-3 fw-bold" onClick={() => setSubmitted(false)}>
              Make Another Booking
            </button>
            <Link to="/dashboard" className="btn btn-outline-primary rounded-pill px-5 py-3 fw-bold">
              View My Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page py-5 mt-5">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="booking-header text-center mb-5">
              <Link to="/services" className="back-link d-inline-flex align-items-center mb-3 text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Back to Services
              </Link>
              <h1 className="display-4 fw-bold">Book Your Service</h1>
              <p className="lead text-muted">Complete the form below and we'll take care of the rest.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form bg-white p-4 p-md-5 rounded-4 shadow-lg">
              {/* Customer Information Section */}
              <div className="form-section mb-5">
                <h3 className="h5 mb-4 d-flex align-items-center">
                  <User className="text-primary me-2" size={20} />
                  Customer Information
                </h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control rounded-3" 
                      name="fullName" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control rounded-3" 
                      name="phoneNumber" 
                      required 
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control rounded-3" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information Section */}
              <div className="form-section mb-5">
                <h3 className="h5 mb-4 d-flex align-items-center">
                  <Car className="text-primary me-2" size={20} />
                  Vehicle Information
                </h3>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Vehicle Model</label>
                    <input 
                      type="text" 
                      className="form-control rounded-3" 
                      name="vehicleModel" 
                      required 
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g. Toyota Corolla"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Vehicle Number</label>
                    <input 
                      type="text" 
                      className="form-control rounded-3" 
                      name="vehicleNumber" 
                      required 
                      value={formData.vehicleNumber}
                      onChange={handleChange}
                      placeholder="e.g. TN-37-AB-1234"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Vehicle Type</label>
                    <select 
                      className="form-select rounded-3" 
                      name="vehicleType" 
                      value={formData.vehicleType}
                      onChange={handleChange}
                    >
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Details Section */}
              <div className="form-section mb-5">
                <h3 className="h5 mb-4 d-flex align-items-center">
                  <Calendar className="text-primary me-2" size={20} />
                  Service & Appointment Details
                </h3>
                <div className="row g-3">
                  <div className="col-md-12">
                    <label className="form-label">Service Type</label>
                    <select 
                      className="form-select rounded-3" 
                      name="serviceType" 
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Date</label>
                    <input 
                      type="date" 
                      className="form-control rounded-3" 
                      name="preferredDate" 
                      required 
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Time Slot</label>
                    <select 
                      className="form-select rounded-3" 
                      name="preferredTime" 
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="">Select a time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label d-flex align-items-center">
                      <ClipboardList size={16} className="me-2" />
                      Additional Notes / Issues
                    </label>
                    <textarea 
                      className="form-control rounded-3" 
                      name="additionalNotes" 
                      rows="4"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Describe any specific issues or requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-footer text-center pt-4 border-top">
                <p className="text-muted small mb-4">
                  By clicking "Confirm Booking", you agree to our service terms and conditions.
                </p>
                <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
