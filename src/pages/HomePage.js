import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main'; 
import Footer from '../components/Footer';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3772.jpg?t=st=1709479511~exp=1709483111~hmac=f76d3e4c068a4b1e3b1d63356e03fca7124edfbfab9052e2a0caf9116b170bf9&w=1480")',
      backgroundSize: 'cover',
      position: 'relative' // adăugăm această proprietate pentru a poziționa butonul "Scroll to Top"
    }}>
      <Navbar />
      <Main />
      <button 
        className="btn btn-primary"
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '70px', // ajustăm distanța de la partea de jos a paginii
          right: '20px',
          zIndex: '99',
          fontSize: '16px',
          border: 'none',
          outline: 'none',
          backgroundColor: '#f0f0f0', // schimbăm culoarea de fundal în gri deschis
          color: 'black', // schimbăm culoarea textului în negru pentru contrast
          cursor: 'pointer',
          padding: '10px 15px',
          borderRadius: '5px'
        }}
      >
        Scroll to Top
      </button>
      <Footer/>
    </div>
  );
};

export default HomePage;
