import React, { useState } from 'react';
import { LayoutDashboard, Calendar, CheckCircle, Clock, DollarSign, Search, MoreVertical, Edit, Trash } from 'lucide-react';
import Notification from '../../components/common/Notification';
import './Dashboard.css';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [notification, setNotification] = useState(null);
  const [bookings, setBookings] = useState([
    { id: 'BK-1001', customer: 'John Doe', serviceType: 'Engine Diagnostics', date: '2026-03-10', status: 'Confirmed', revenue: '₹2,500' },
    { id: 'BK-1002', customer: 'Alice Wong', serviceType: 'ECM Programming', date: '2026-03-11', status: 'Pending', revenue: '₹5,000' },
    { id: 'BK-0995', customer: 'Jane Smith', serviceType: 'General Service', date: '2026-02-15', status: 'Completed', revenue: '₹3,500' },
    { id: 'BK-0990', customer: 'Bob Miller', serviceType: 'Wheel Alignment', date: '2026-02-10', status: 'Cancelled', revenue: '₹0' },
  ]);

  const updateStatus = (id, newStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    setNotification({ message: `Booking ${id} status updated to ${newStatus}.`, type: 'success' });
  };

  const filteredBookings = bookings.filter(b => 
    (statusFilter === 'All' || b.status === statusFilter) &&
    (b.customer.toLowerCase().includes(searchTerm.toLowerCase()) || b.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed': return 'bg-success';
      case 'Confirmed': return 'bg-info';
      case 'In Progress': return 'bg-primary';
      case 'Cancelled': return 'bg-danger';
      default: return 'bg-warning text-dark';
    }
  };

  return (
    <div className="admin-dashboard py-5 mt-5">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="h2 fw-bold mb-1">Admin Dashboard</h1>
            <p className="text-muted mb-0">Overview of workshop operations and bookings.</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary rounded-pill px-4">Download Report</button>
            <button className="btn btn-primary rounded-pill px-4">Add New Service</button>
          </div>
        </div>

        {/* Stats Widgets */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="icon-box bg-primary-subtle text-primary p-2 rounded-3">
                  <LayoutDashboard size={24} />
                </div>
                <span className="text-success small fw-bold">+12%</span>
              </div>
              <h3 className="h6 text-muted mb-1">Total Bookings</h3>
              <p className="h3 fw-bold mb-0">156</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="icon-box bg-success-subtle text-success p-2 rounded-3">
                  <CheckCircle size={24} />
                </div>
                <span className="text-success small fw-bold">+8%</span>
              </div>
              <h3 className="h6 text-muted mb-1">Completed Services</h3>
              <p className="h3 fw-bold mb-0">124</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="icon-box bg-warning-subtle text-warning p-2 rounded-3">
                  <Clock size={24} />
                </div>
                <span className="text-danger small fw-bold">-2%</span>
              </div>
              <h3 className="h6 text-muted mb-1">Pending Services</h3>
              <p className="h3 fw-bold mb-0">32</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="icon-box bg-info-subtle text-info p-2 rounded-3">
                  <DollarSign size={24} />
                </div>
                <span className="text-success small fw-bold">+15%</span>
              </div>
              <h3 className="h6 text-muted mb-1">Total Revenue</h3>
              <p className="h3 fw-bold mb-0">₹45,200</p>
            </div>
          </div>
        </div>

        {/* Bookings Management */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div className="card-header bg-white p-4 border-0">
            <div className="row g-3 align-items-center">
              <div className="col-md-4">
                <h4 className="h5 mb-0">All Bookings</h4>
              </div>
              <div className="col-md-8">
                <div className="d-flex gap-3 justify-content-md-end">
                  <div className="input-group" style={{ maxWidth: '300px' }}>
                    <span className="input-group-text bg-white border-end-0"><Search size={18} /></span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      placeholder="Search customers..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select 
                    className="form-select" 
                    style={{ maxWidth: '150px' }}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="px-4">Booking ID</th>
                  <th>Customer</th>
                  <th>Service Type</th>
                  <th>Date</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th className="text-end px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map(b => (
                  <tr key={b.id}>
                    <td className="px-4 fw-bold">{b.id}</td>
                    <td>{b.customer}</td>
                    <td>{b.serviceType}</td>
                    <td>{b.date}</td>
                    <td>{b.revenue}</td>
                    <td>
                      <span className={`badge rounded-pill ${getStatusBadgeClass(b.status)}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="text-end px-4">
                      <div className="d-flex gap-2 justify-content-end">
                        <button className="btn btn-sm btn-outline-primary" title="Edit Booking">
                          <Edit size={16} />
                        </button>
                        <div className="dropdown">
                          <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="dropdown">
                            <MoreVertical size={16} />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                            <li><button className="dropdown-item d-flex align-items-center" onClick={() => updateStatus(b.id, 'In Progress')}><Clock size={16} className="me-2" /> Mark In Progress</button></li>
                            <li><button className="dropdown-item d-flex align-items-center" onClick={() => updateStatus(b.id, 'Completed')}><CheckCircle size={16} className="me-2" /> Mark Completed</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item d-flex align-items-center text-danger" onClick={() => updateStatus(b.id, 'Cancelled')}><Trash size={16} className="me-2" /> Cancel Booking</button></li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredBookings.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted mb-0">No bookings found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
