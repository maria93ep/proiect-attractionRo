import React from 'react';
import { Link } from 'react-router-dom';

function ButtonComponent() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className="btn btn-brown btn-lg rounded-pill fw-bold text-decoration-none"
            style={{ backgroundColor: '#f0f8ff', color: '#00008b', marginLeft: '5px' }}
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default ButtonComponent;
