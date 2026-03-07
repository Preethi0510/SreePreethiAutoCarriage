import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, History, Settings, LogOut, Plus, ClipboardList, Info } from 'lucide-react';
import Notification from '../../components/common/Notification';
import './Dashboard.css';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [notification, setNotification] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([
    { id: 'BK-1001', serviceType: 'Engine Diagnostics', date: '2026-03-10', time: '10:00 AM', status: 'Confirmed', vehicle: 'Toyota Corolla', details: 'Engine check light is blinking intermittently.' },
    { id: 'BK-0995', serviceType: 'General Service', date: '2026-02-15', time: '02:00 PM', status: 'Completed', vehicle: 'Toyota Corolla', details: 'Full inspection and oil change.' },
    { id: 'BK-0980', serviceType: 'Wheel Alignment', date: '2025-12-20', time: '11:00 AM', status: 'Completed', vehicle: 'Toyota Corolla', details: 'Precision 3D alignment.' },
  ]);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b));
      setNotification({ message: `Booking ${id} has been cancelled.`, type: 'success' });
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'Confirmed': return 'bg-info';
      case 'In Progress': return 'bg-primary';
      case 'Cancelled': return 'bg-danger';
      default: return 'bg-warning';
    }
  };

  return (
    <div className="dashboard-page py-5 mt-5">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <div className="container">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="dashboard-sidebar bg-white rounded-4 shadow-sm p-4 h-100">
              <div className="user-profile text-center mb-4 pb-4 border-bottom">
                <div className="avatar bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                  JD
                </div>
                <h3 className="h5 mb-1">John Doe</h3>
                <p className="text-muted small mb-0">john@example.com</p>
              </div>

              <nav className="dashboard-nav">
                <button className={`nav-link w-100 text-start d-flex align-items-center mb-2 ${activeTab === 'upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('upcoming')}>
                  <Calendar size={18} className="me-3" />
                  Upcoming Bookings
                </button>
                <button className={`nav-link w-100 text-start d-flex align-items-center mb-2 ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
                  <History size={18} className="me-3" />
                  Booking History
                </button>
                <Link to="/vehicles" className="nav-link w-100 text-start d-flex align-items-center mb-2 text-decoration-none">
                  <Car size={18} className="me-3" />
                  My Vehicles
                </Link>
                <button className="nav-link w-100 text-start d-flex align-items-center mb-2">
                  <Settings size={18} className="me-3" />
                  Account Settings
                </button>
                <button className="nav-link w-100 text-start d-flex align-items-center text-danger mt-4">
                  <LogOut size={18} className="me-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="dashboard-content bg-white rounded-4 shadow-sm p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h3 mb-0">
                  {activeTab === 'upcoming' ? 'Upcoming Bookings' : 'Booking History'}
                </h2>
                <Link to="/book" className="btn btn-primary rounded-pill d-flex align-items-center px-4 text-decoration-none">
                  <Plus size={18} className="me-2" />
                  Book New Service
                </Link>
              </div>

              <div className="bookings-list">
                {bookings.filter(b => activeTab === 'upcoming' ? (b.status !== 'Completed' && b.status !== 'Cancelled') : (b.status === 'Completed' || b.status === 'Cancelled')).length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Service Details</th>
                          <th>Vehicle</th>
                          <th>Date & Time</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings
                          .filter(b => activeTab === 'upcoming' ? (b.status !== 'Completed' && b.status !== 'Cancelled') : (b.status === 'Completed' || b.status === 'Cancelled'))
                          .map(booking => (
                            <tr key={booking.id}>
                              <td className="fw-bold">{booking.id}</td>
                              <td>{booking.serviceType}</td>
                              <td>{booking.vehicle}</td>
                              <td>
                                <div className="small fw-medium">{booking.date}</div>
                                <div className="small text-muted">{booking.time}</div>
                              </td>
                              <td>
                                <span className={`badge rounded-pill ${getStatusBadgeClass(booking.status)}`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex gap-2">
                                  <button className="btn btn-sm btn-outline-info rounded-pill" onClick={() => setSelectedBooking(booking)}>
                                    <Info size={14} />
                                  </button>
                                  {booking.status === 'Confirmed' && (
                                    <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={() => handleCancel(booking.id)}>
                                      Cancel
                                    </button>
                                  )}
                                  {booking.status === 'Completed' && (
                                    <button className="btn btn-sm btn-outline-primary rounded-pill">
                                      Invoice
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <div className="empty-state-icon text-muted mb-3">
                      <ClipboardList size={64} />
                    </div>
                    <h4>No bookings found</h4>
                    <p className="text-muted">You haven't made any {activeTab} bookings yet.</p>
                  </div>
                )}
              </div>

              {/* Status Tracking Modal (Simple overlay for now) */}
              {selectedBooking && (
                <div className="booking-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
                  <div className="booking-modal bg-white p-4 p-md-5 rounded-4 shadow-lg w-100 mx-3" style={{ maxWidth: '600px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h3 className="h4 mb-0">Booking Details: {selectedBooking.id}</h3>
                      <button className="btn-close" onClick={() => setSelectedBooking(null)}></button>
                    </div>
                    <div className="modal-details">
                      <div className="mb-4">
                        <span className={`badge rounded-pill mb-2 ${getStatusBadgeClass(selectedBooking.status)}`}>
                          {selectedBooking.status}
                        </span>
                        <h4 className="h5 mb-1">{selectedBooking.serviceType}</h4>
                        <p className="text-muted small mb-3">Vehicle: {selectedBooking.vehicle}</p>
                      </div>
                      
                      <div className="status-timeline mb-4">
                        <h5 className="h6 fw-bold mb-3">Service Progress</h5>
                        <div className="timeline-item d-flex mb-3">
                          <div className="timeline-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                            <CheckCircle size={14} />
                          </div>
                          <div className="timeline-content">
                            <p className="mb-0 fw-bold small">Booking Received</p>
                            <p className="text-muted x-small mb-0">System confirmed the request.</p>
                          </div>
                        </div>
                        <div className="timeline-item d-flex mb-3">
                          <div className={`timeline-icon ${['Confirmed', 'In Progress', 'Completed'].includes(selectedBooking.status) ? 'bg-success' : 'bg-light'} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                            <CheckCircle size={14} />
                          </div>
                          <div className="timeline-content">
                            <p className="mb-0 fw-bold small">Appointment Confirmed</p>
                            <p className="text-muted x-small mb-0">Workshop slot reserved.</p>
                          </div>
                        </div>
                        <div className="timeline-item d-flex">
                          <div className={`timeline-icon ${selectedBooking.status === 'Completed' ? 'bg-success' : 'bg-light'} text-white rounded-circle d-flex align-items-center justify-content-center me-3`} style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                            <CheckCircle size={14} />
                          </div>
                          <div className="timeline-content">
                            <p className="mb-0 fw-bold small">Service Completed</p>
                            <p className="text-muted x-small mb-0">Vehicle ready for pickup.</p>
                          </div>
                        </div>
                      </div>

                      <div className="additional-notes p-3 bg-light rounded-3">
                        <h5 className="h6 fw-bold mb-2">Service Notes</h5>
                        <p className="small text-muted mb-0">{selectedBooking.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
