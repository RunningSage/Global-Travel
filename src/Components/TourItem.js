import React from 'react';

function TourItem({ imgSrc, title, description }) {
  return (
    <div className="item">
      <img className="img-responsive" src={imgSrc} alt="#" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TourItem;
