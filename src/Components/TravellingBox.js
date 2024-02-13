import React from 'react';
import Button1 from './Button1';

function TravelingBox({ iconSrc, title, description }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
      <div className="traveling-box">
        <i><img src={iconSrc} alt="icon" /></i>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="read-more">
          <Button1 text="Read More"/>
        </div>
      </div>
    </div>
  );
}

export default TravelingBox;
