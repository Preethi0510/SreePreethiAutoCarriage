/**
 * API Service for Mechanical Workshop Service Booking Platform
 * Centralized logic for REST API communication.
 */

const BASE_URL = 'https://api.sreepreethi-autocarriage.com/v1'; // Placeholder URL

const apiRequest = async (endpoint, options = {}) => {
  // const token = localStorage.getItem('auth_token');
  
  /* 
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };
  */

  try {
    // In a real implementation, we would use fetch()
    // const response = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
    // if (!response.ok) throw new Error('API request failed');
    // return await response.json();

    // Mocking API delay for demonstration
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`Mock API Request: ${options.method || 'GET'} ${endpoint}`, options.body);
    
    // Return mock data based on endpoint
    if (endpoint === '/services') return { success: true, data: [] }; // servicesData is used directly for now
    if (endpoint === '/bookings' && options.method === 'POST') return { success: true, bookingId: 'BK-' + Math.floor(Math.random() * 10000) };
    
    return { success: true };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const api = {
  // Services
  getServices: () => apiRequest('/services'),
  getServiceById: (id) => apiRequest(`/services/${id}`),
  
  // Bookings
  createBooking: (bookingData) => apiRequest('/bookings', { method: 'POST', body: JSON.stringify(bookingData) }),
  getUserBookings: () => apiRequest('/user/bookings'),
  cancelBooking: (id) => apiRequest(`/bookings/${id}/cancel`, { method: 'PUT' }),
  
  // Vehicles
  getVehicles: () => apiRequest('/user/vehicles'),
  addVehicle: (vehicleData) => apiRequest('/user/vehicles', { method: 'POST', body: JSON.stringify(vehicleData) }),
  updateVehicle: (id, vehicleData) => apiRequest(`/user/vehicles/${id}`, { method: 'PUT', body: JSON.stringify(vehicleData) }),
  deleteVehicle: (id) => apiRequest(`/user/vehicles/${id}`, { method: 'DELETE' }),
  
  // Auth
  login: (credentials) => apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (userData) => apiRequest('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),
  
  // Admin
  getAllBookings: () => apiRequest('/admin/bookings'),
  updateBookingStatus: (id, status) => apiRequest(`/admin/bookings/${id}/status`, { method: 'PUT', body: JSON.stringify({ status }) }),
};
