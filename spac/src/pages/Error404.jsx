import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="container py-5 mt-5 text-center">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="mb-4">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default Error404;
