import React from 'react';

const AttractionCard = ({ attraction, toggleFavorite }) => {
  const { isFavorite, descriptions, imageUrlA, id } = attraction;

  const handleToggleFavorite = () => {
    if (toggleFavorite) {
      toggleFavorite(id);
    } else {
      console.error('toggleFavorite is not defined');
    }
  };

  return (
    <div className="card bg-transparent h-80" style={{ padding: 0 }}>
      <div className="card-body" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
        <button onClick={handleToggleFavorite} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', alignSelf: 'flex-end', fontSize: '24px', marginBottom: '10px', padding: '10px', position: 'absolute', zIndex: 1 }}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <img src={imageUrlA || 'placeholder_image_url'} className="card-img-top" alt="Attraction" style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'relative', zIndex: 0 }} />
        <h5 className="card-title" style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '10px', marginBottom: '10px' }}>{descriptions || 'Attraction Title'}</h5>
      </div>
    </div>
  );
};

export default AttractionCard;
