import React from 'react';

function TravelingBox({ iconSrc, title, description }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div className="traveling-box">
        <i><img src={iconSrc} alt="icon" /></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="read-more">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default TravelingBox;
