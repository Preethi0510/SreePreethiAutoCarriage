import React, { useState } from 'react';
import { Car, Plus, Trash, Edit, AlertCircle, X } from 'lucide-react';
import Notification from '../../components/common/Notification';
import './Vehicles.css';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, model: 'Toyota Corolla', number: 'TN-37-AB-1234', type: 'Sedan', year: '2020' },
    { id: 2, model: 'Honda City', number: 'TN-37-CD-5678', type: 'Sedan', year: '2018' },
  ]);

  const [notification, setNotification] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({ model: '', number: '', type: 'Sedan', year: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const newVehicle = { ...formData, id: Date.now() };
    setVehicles([...vehicles, newVehicle]);
    setShowAddModal(false);
    setFormData({ model: '', number: '', type: 'Sedan', year: '' });
    setNotification({ message: 'Vehicle added successfully!', type: 'success' });
  };

  const handleEditVehicle = (e) => {
    e.preventDefault();
    setVehicles(vehicles.map(v => v.id === editingVehicle.id ? { ...formData, id: v.id } : v));
    setEditingVehicle(null);
    setFormData({ model: '', number: '', type: 'Sedan', year: '' });
    setNotification({ message: 'Vehicle details updated successfully!', type: 'success' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      setVehicles(prev => prev.filter(v => v.id !== id));
      setNotification({ message: 'Vehicle removed successfully.', type: 'success' });
    }
  };

  const startEdit = (vehicle) => {
    setEditingVehicle(vehicle);
    setFormData({ model: vehicle.model, number: vehicle.number, type: vehicle.type, year: vehicle.year });
  };

  return (
    <div className="vehicle-management py-5 mt-5">
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
            <h1 className="h2 fw-bold mb-1">My Vehicles</h1>
            <p className="text-muted mb-0">Manage your garage for faster bookings.</p>
          </div>
          <button className="btn btn-primary rounded-pill d-flex align-items-center px-4" onClick={() => setShowAddModal(true)}>
            <Plus size={18} className="me-2" />
            Add New Vehicle
          </button>
        </div>

        {vehicles.length > 0 ? (
          <div className="row g-4">
            {vehicles.map(v => (
              <div className="col-md-6" key={v.id}>
                <div className="card border-0 shadow-sm rounded-4 p-4 h-100 vehicle-card">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-center">
                      <div className="vehicle-icon bg-primary-subtle text-primary p-3 rounded-4 me-3">
                        <Car size={32} />
                      </div>
                      <div>
                        <h3 className="h5 fw-bold mb-1">{v.model}</h3>
                        <p className="text-muted small mb-0">{v.type} • {v.year}</p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary rounded-pill p-2" onClick={() => startEdit(v)}>
                        <Edit size={16} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger rounded-pill p-2" onClick={() => handleDelete(v.id)}>
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">Vehicle Number</span>
                      <span className="fw-bold text-uppercase">{v.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <AlertCircle size={64} className="text-muted mb-3 opacity-25" />
            <h4>No vehicles added yet</h4>
            <p className="text-muted mb-4">Add your vehicle details to speed up the booking process.</p>
            <button className="btn btn-primary rounded-pill px-5" onClick={() => setShowAddModal(true)}>
              Add Your First Vehicle
            </button>
          </div>
        )}

        {/* Add/Edit Vehicle Modal */}
        {(showAddModal || editingVehicle) && (
          <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
            <div className="modal-content bg-white p-4 p-md-5 rounded-4 shadow-lg w-100 mx-3" style={{ maxWidth: '500px' }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="h4 mb-0">{editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}</h3>
                <button className="btn-close" onClick={() => { setShowAddModal(false); setEditingVehicle(null); }}></button>
              </div>
              <form onSubmit={editingVehicle ? handleEditVehicle : handleAddVehicle}>
                <div className="mb-3">
                  <label className="form-label">Vehicle Model</label>
                  <input type="text" className="form-control" name="model" value={formData.model} onChange={handleInputChange} required placeholder="e.g. Toyota Corolla" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Vehicle Number</label>
                  <input type="text" className="form-control text-uppercase" name="number" value={formData.number} onChange={handleInputChange} required placeholder="e.g. TN-37-AB-1234" />
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <label className="form-label">Vehicle Type</label>
                    <select className="form-select" name="type" value={formData.type} onChange={handleInputChange}>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Year</label>
                    <input type="number" className="form-control" name="year" value={formData.year} onChange={handleInputChange} required placeholder="e.g. 2020" />
                  </div>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary rounded-pill py-3 fw-bold">
                    {editingVehicle ? 'Update Vehicle' : 'Add Vehicle'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleManagement;
