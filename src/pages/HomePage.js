import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main'; 
import Footer from '../components/Footer';
import CategoryButtons from '../components/CategoryButtons';
const HomePage = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3772.jpg?t=st=1709479511~exp=1709483111~hmac=f76d3e4c068a4b1e3b1d63356e03fca7124edfbfab9052e2a0caf9116b170bf9&w=1480")',
      backgroundSize: 'cover'
      
    }}>
      <Navbar />
      <CategoryButtons/>
      <Main />
      <Footer/>
    </div>
  );
};

export default HomePage;