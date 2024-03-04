import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
const BlogPage = () => {
  return (
 
    <div style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/rural-countryside-landscape-transylvania-region-romania-mist-covered-hills_181624-42189.jpg?t=st=1709475505~exp=1709479105~hmac=256ee488b3abebd60296adfcf8464c94706f3710fabb39aef7922a6fa4f8e4e8&w=1480')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '20px',
      color: 'white' // schimba culoarea textului in alb
    }}><ButtonComponent/>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'DarkCyan' }}>Discover Amazing Locations in Romania</h1>
      <h3 style={{ color: 'MediumTurquoise' }}>Welcome to our blog where we share stories, tips, and guides about incredible destinations around the world. From hidden gems to popular hotspots, we cover it all.</h3>
      
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'LightBlue' }}>Transylvania</h2>
        <p>Transylvania is a region in central Romania known for its picturesque landscapes, medieval castles, and rich culture. It is often associated with the legend of Dracula.</p>
        <h3>Reviews:</h3>
        <div style={{  borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"Transylvania is a must-visit destination!"</p>
          <p>- John Doe</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"I had an amazing experience in Transylvania!"</p>
          <p>- Jane Smith</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"The beauty of Transylvania is simply breathtaking!"</p>
          <p>- Alex Johnson</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'LightBlue' }}>Historical Cities of Romania</h2>
        <p>Romania's historical cities are full of impressive architecture and rich history. Cities like Sibiu, Brasov, and Cluj-Napoca are perfect for exploring the country's past.</p>
        <h3>Reviews:</h3>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"Exploring Romania's historical cities was a highlight of my trip!"</p>
          <p>- Sarah Brown</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"I was impressed by the beauty and charm of Romania's historical cities."</p>
          <p>- Michael Wilson</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"The historical cities of Romania offer a glimpse into the country's fascinating history."</p>
          <p>- Emily Davis</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'LightBlue' }}>Danube Delta</h2>
        <p>The Danube Delta is a unique natural reserve in Romania, known for its rich biodiversity and stunning natural landscapes. It is a paradise for birdwatchers and nature lovers.</p>
        <h3>Reviews:</h3>
        <div style={{  borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"The Danube Delta is a hidden gem!"</p>
          <p>- Peter White</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"Visiting the Danube Delta was an unforgettable experience."</p>
          <p>- Maria Green</p>
        </div>
        <div style={{ borderLeft: '5px solid #333', padding: '15px', marginTop: '10px' }}>
          <p style={{ fontStyle: 'italic' }}>"I was amazed by the natural beauty of the Danube Delta."</p>
          <p>- Robert Johnson</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
