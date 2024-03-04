import React from 'react';
import { Link } from 'react-router-dom';

const CardHotel = ({ hotel }) => {
  const { name, category, imageUrl, descriptions, location, reviewsCount } = hotel;

  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imageUrl}
              className="card-img-top"
              alt={name}
              style={{ height: '150px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text" style={{ maxHeight: '80px', overflow: 'hidden' }}>{descriptions}</p>
              <p className="card-text">Category: {category}</p>
              <p className="card-text">Location: {location}</p>
              <p className="card-text">Reviews: {reviewsCount}</p>
              <Link to={`/hotel/${hotel.id}`} className="btn btn-secondary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHotel;
