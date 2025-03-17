import React from 'react';
import { Link } from 'react-router-dom';

function ButtonComponent() {
  return (
    <div style={{ textAlign: 'left', marginBottom: '20px' }}>
      <Link
        to="/"
        className="btn btn-brown btn-lg rounded-pill fw-bold text-decoration-none"
        style={{ backgroundColor: '#f0f8ff', color: '#00008b', padding: '10px 20px' }}
      >
        Home
      </Link>
    </div>
  );
}

export default ButtonComponent;
