import React from 'react';

const CategoryButtons = ({ handleCategoryChange }) => {
  const handleClick = (category) => {
    handleCategoryChange(category);
  };

  const buttonStyle = {
    fontSize: '20px',
    padding: '10px 20px',
    transition: 'box-shadow 0.3s',
    color: '#fff',
    backgroundColor: 'transparent',
    border: 'none',
    marginRight: '10px',
    paddingLeft: '50px',
  };

  const hoverStyle = {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('nature')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Nature
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('castles')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Castles
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('museums')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Museums
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('fortresses')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Fortresses
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('monasteries')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Monasteries
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="category-btn"
            onClick={() => handleClick('cities')}
            style={{ ...buttonStyle, ...hoverStyle }}
          >
            Cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;
