// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{
      backgroundImage: `url('path_to_your_homepage_background_image.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div className="container">
        <span className="navbar-brand" style={{ fontSize: '40px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'blue', fontWeight: 'bold', fontStyle: 'italic', marginRight: '7px' }}>Top</span>{" "}
          <span style={{ color: 'yellow', fontWeight: 'bold', fontStyle: 'italic', marginRight: '7px' }}>Destinations</span>{" "}
          <span style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>to Explore</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dispunerea_provinciilor_istorice_pe_harta_Rom%C3%A2niei.jpg/2560px-Dispunerea_provinciilor_istorice_pe_harta_Rom%C3%A2niei.jpg" alt="Icon" style={{ height: '60px', marginLeft: '10px' }} />
        </span>
      </div>
      <div className="navbar-nav">
        <Link to="/blog" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>Blog</Link>
        <Link to="/favorites" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>Favorites</Link>
        <Link to="/about" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>About</Link>
        <a href="https://www.vola.ro/bilete-avion/" className="nav-link btn" style={{ whiteSpace: 'nowrap' }}>Book Your Flight</a>
      </div>
    </nav>
  );
};

export default Navbar;
