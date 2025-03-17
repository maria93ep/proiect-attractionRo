import React from 'react';
import { Helmet } from 'react-helmet'; // Importăm Helmet pentru SEO
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
    <>
      <Helmet>
        <title>Top 100 Tourist Attractions in Romania</title>
        <meta name="description" content="Explore the best tourist attractions in Romania, including historical sites, nature reserves, monasteries, monuments, and more." />
        <meta name="keywords" content="tourist attractions Romania, Romania travel, hotels Romania, historical sites, nature reserves" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
    </>
  );
};

export default HomePage;
