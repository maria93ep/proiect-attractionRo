import React from 'react';
import { Helmet } from 'react-helmet';
import ButtonComponent from '../components/ButtonComponent';

const BlogPage = () => {
  return (
    <div style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/rural-countryside-landscape-transylvania-region-romania-mist-covered-hills_181624-42189.jpg?t=st=1709734546~exp=1709738146~hmac=6975aaba2b6c53a48fd05025a911a39301d8247f8e73ffee7042a2c8145669d8&w=1380')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '50px',
      minHeight: '100vh',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
    }}>
      
      <Helmet>
        <title>Blog - Explore Romania</title>
        <meta name="description" content="Read about the most beautiful destinations in Romania, from Transylvania to the Danube Delta." />
      </Helmet>

      <ButtonComponent />

      <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px', color: '#00FFFF' }}>
        Discover Amazing Locations in Romania
      </h1>
      <h3 style={{ fontSize: '1.8rem', color: '#87CEEB', textAlign: 'center' }}>
        Welcome to our blog where we share stories, tips, and guides about incredible destinations around the world.
      </h3>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#FFD700' }}>Transylvania</h2>
        <p style={{ fontSize: '1.5rem' }}>Transylvania is a region in central Romania known for its picturesque landscapes, medieval castles, and rich culture. It is often associated with the legend of Dracula.</p>
        
        <h3 style={{ fontSize: '2rem' }}>Reviews:</h3>
        <div style={{ borderLeft: '5px solid white', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.3rem' }}>"Transylvania is a must-visit destination!"</p>
          <p>- John Doe</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#FFD700' }}>Historical Cities of Romania</h2>
        <p style={{ fontSize: '1.5rem' }}>Romania's historical cities are full of impressive architecture and rich history. Cities like Sibiu, Brasov, and Cluj-Napoca are perfect for exploring the country's past.</p>
        
        <h3 style={{ fontSize: '2rem' }}>Reviews:</h3>
        <div style={{ borderLeft: '5px solid white', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.3rem' }}>"Exploring Romania's historical cities was a highlight of my trip!"</p>
          <p>- Sarah Brown</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#FFD700' }}>Danube Delta</h2>
        <p style={{ fontSize: '1.5rem' }}>The Danube Delta is a unique natural reserve in Romania, known for its rich biodiversity and stunning natural landscapes. It is a paradise for birdwatchers and nature lovers.</p>
        
        <h3 style={{ fontSize: '2rem' }}>Reviews:</h3>
        <div style={{ borderLeft: '5px solid white', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.3rem' }}>"The Danube Delta is a hidden gem!"</p>
          <p>- Peter White</p>
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
