import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{
      backgroundImage: `url('path_to_your_homepage_background_image.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: windowWidth < 768 ? 'column' : 'row', // Schimbă la coloană pe dispozitive mici
        alignItems: windowWidth < 768 ? 'center' : 'flex-start', // Aliniaza la centru pe mobil, la stânga pe desktop
        justifyContent: windowWidth < 768 ? 'center' : 'flex-start', // Aliniaza la centru pe mobil, la stânga pe desktop
        paddingLeft: windowWidth >= 768 ? '10px' : '0', // Adaugă padding la stânga pe desktop, nu pe mobil
        paddingTop: windowWidth < 768 ? '10px' : '0', // Adaugă padding sus pe mobil
      }}>
        <span className="navbar-brand" style={{
          fontSize: windowWidth < 768 ? '20px' : '40px', // Dimensiunea textului pe baza lățimii ecranului
          fontWeight: 'bold',
          textAlign: 'center',  // Textul este centrat pe mobil
          display: 'flex',
          flexDirection: windowWidth < 768 ? 'column' : 'row', // Coloană pe mobil, rând pe desktop
          justifyContent: 'center', // Aliniaza la centru pe mobil
          alignItems: windowWidth < 768 ? 'center' : 'flex-start', // Pe mobil, elementele sunt centrate, pe desktop la stânga
        }}>
          <span style={{ color: 'blue', fontWeight: 'bold', fontStyle: 'italic', marginRight: '7px' }}>Top</span>
          <span style={{ color: 'yellow', fontWeight: 'bold', fontStyle: 'italic', marginRight: '7px' }}>Destinations</span>
          <span style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}>to Explore</span>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dispunerea_provinciilor_istorice_pe_harta_Rom%C3%A2niei.jpg/2560px-Dispunerea_provinciilor_istorice_pe_harta_Rom%C3%A2niei.jpg" 
            alt="Icon" 
            style={{ height: '60px', marginLeft: '10px' }} 
          />
        </span>
      </div>
      <div className="navbar-nav">
        <Link to="/blog" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>Blog</Link>
        <Link to="/about" className="nav-link" style={{ color: 'white', marginRight: '10px' }}>About</Link>
        <a href="https://www.vola.ro/bilete-avion/" className="nav-link btn" style={{ whiteSpace: 'nowrap' }}>Book Your Flight</a>
      </div>
    </nav>
  );
};

export default Navbar;
