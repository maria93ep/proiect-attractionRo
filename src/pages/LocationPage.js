import React from 'react';
import { useParams } from 'react-router-dom';
import attractionsAndHotels from '../components/attractionsAndHotels';

const LocationPage = () => {
  const { cityName } = useParams();
  const hotels = attractionsAndHotels['Romania'][cityName]?.hotels; // Assume Romania as country
  const backgroundStyle = {
    backgroundImage: `url('https://img.freepik.com/free-vector/white-abstract-background-theme_23-2148830884.jpg?w=1380&t=st=1709399297~exp=1709399897~hmac=158954d46269b207c827a650d8bb364e724bb1e8fb6f26c644f7ea1b44896676')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  // Render hotels if available
  const renderHotels = () => {
    if (hotels && hotels.length > 0) {
      return hotels.map((hotel, index) => (
        <div key={index} className="card text-center m-3 p-3" style={{ maxWidth: '400px', margin: 'auto', fontSize: '1.2em' }}>
          <img src={hotel.imageUrl} className="card-img-top" alt={hotel.name} />
          <div className="card-body">
            <h5 className="card-title fw-bold">{hotel.name}</h5>
            <p className="card-text">Category: {hotel.category}</p>
            <p className="card-text">Price: {hotel.price}€</p>
            <p className="card-text">Description: {hotel.description}</p>
            <p className="card-text">Location: {hotel.location}</p>
            <p className="card-text">Rating: {hotel.rating} ({hotel.reviewsCount} reviews)</p>
            <a href={`/hotel/${hotel.id}`} className="btn btn-secondary">View Hotel</a>
          </div>
        </div>
      ));
    } else {
      return <p>No hotels available in this location.</p>;
    }
  };

  return (
    <div style={backgroundStyle}>
      <h2 className="text-center">Hotels in {cityName}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {renderHotels()}
      </div>
    </div>
  );
};

export default LocationPage;
