import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCompatibility, setSelectedCompatibility] = useState('All');
  const [sortBy, setSortBy] = useState('Default');

  const categories = ['All', ...new Set(servicesData.map(s => s.category))];
  const compatibilities = ['All Vehicles', 'Multi-brand', 'Modern Vehicles'];

  const filteredServices = servicesData
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (selectedCompatibility === 'All' || service.compatibility.includes(selectedCompatibility)) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       service.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'Price Low') return parseInt(a.price.split('₹')[1].replace(',', '')) - parseInt(b.price.split('₹')[1].replace(',', ''));
      if (sortBy === 'Price High') return parseInt(b.price.split('₹')[1].replace(',', '')) - parseInt(a.price.split('₹')[1].replace(',', ''));
      return 0;
    });

  return (
    <div className="services-page py-5 mt-5">
      <div className="container">
        <div className="page-header text-center mb-5">
          <h1 className="display-4 fw-bold">Our Workshop Services</h1>
          <p className="lead text-muted">Professional automotive solutions for every vehicle need.</p>
        </div>

        <div className="filters-container bg-white p-4 rounded shadow-sm mb-5">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><Search size={18} /></span>
                <input 
                  type="text" 
                  className="form-control border-start-0" 
                  placeholder="Search services..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><Filter size={18} /></span>
                <select 
                  className="form-select border-start-0" 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {categories.filter(c => c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><Car size={18} /></span>
                <select 
                  className="form-select border-start-0" 
                  value={selectedCompatibility}
                  onChange={(e) => setSelectedCompatibility(e.target.value)}
                >
                  <option value="All">All Vehicle Types</option>
                  {compatibilities.map(comp => <option key={comp} value={comp}>{comp}</option>)}
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0"><ArrowUpDown size={18} /></span>
                <select 
                  className="form-select border-start-0" 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Default">Sort By</option>
                  <option value="Price Low">Price: Low to High</option>
                  <option value="Price High">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="services-grid row g-4">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="service-card-image" style={{ height: '200px', overflow: 'hidden' }}>
                    <img src={service.image} alt={service.title} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">{service.category}</span>
                      <span className="text-muted small">{service.time}</span>
                    </div>
                    <h3 className="h4 mb-2">{service.title}</h3>
                    <p className="text-muted mb-4">{service.description}</p>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                      <span className="h5 mb-0 text-primary">{service.price}</span>
                      <Link to={`/services/${service.id}`} className="btn btn-outline-primary rounded-pill">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h3>No services found matching your criteria.</h3>
              <button className="btn btn-link" onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
