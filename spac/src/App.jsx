import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load pages for better performance
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServiceDetailsPage = React.lazy(() => import('./pages/ServiceDetailsPage'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const CustomerDashboard = React.lazy(() => import('./pages/Dashboard/CustomerDashboard'));
const AdminDashboard = React.lazy(() => import('./pages/Dashboard/AdminDashboard'));
const VehicleManagement = React.lazy(() => import('./pages/Vehicles/VehicleManagement'));
const Login = React.lazy(() => import('./pages/Auth/Login'));
const Register = React.lazy(() => import('./pages/Auth/Register'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const Error404 = React.lazy(() => import('./pages/Error404'));

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <React.Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/vehicles" element={<VehicleManagement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
