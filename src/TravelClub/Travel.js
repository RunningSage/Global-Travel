import React from "react";
import TravelingBox from "../Components/TravellingBox";


function Travel() {
  return (
    <>
      <div id="travel" className="traveling">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage">
                <h2>Select Offers For Traveling</h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <TravelingBox
              iconSrc="assets/icon/travel-icon.png"
              title="Different Countrys"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
            <TravelingBox
              iconSrc="assets/icon/travel-icon2.png"
              title="Mountains Tours"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
            <TravelingBox
              iconSrc="assets/icon/travel-icon3.png"
              title="Bus Tours"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
            <TravelingBox
              iconSrc="assets/icon/travel-icon4.png"
              title="Summer Rest"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
