import React from 'react';

const AttractionCard = ({ attraction }) => {
  const { descriptions, imageUrlA } = attraction;

  return (
    <div className="card bg-transparent h-80" style={{ padding: 0 }}>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
        <img src={imageUrlA || 'placeholder_image_url'} className="card-img-top" alt="Attraction" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        <h5 className="card-title" style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '10px', marginBottom: '10px' }}>{descriptions || 'Attraction Title'}</h5>
      </div>
    </div>
  );
};

export default AttractionCard;
