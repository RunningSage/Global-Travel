import React from 'react';
import TourItem from '../Components/TourItem'; // Assuming the TourItem component is in a separate file

function Tours() {
  return (
    <>
      <div className="Tours">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Best places around</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum error similique quae aliquid quasi reiciendis cumque, laboriosam quis quibusdam, ratione architecto maiores, exercitationem non ab rerum ea perspiciatis accusantium?</span>
              </div>
            </div>
          </div>
          <section id="demos">
            <div className="row">
              <div className="col-md-4">
                <TourItem imgSrc="assets/images/1.jpg" title="Holiday Tour" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there" />
              </div>
              <div className="col-md-4">
                <TourItem imgSrc="assets/images/2.jpg" title="New York" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there" />
              </div>
              <div className="col-md-4">
                <TourItem imgSrc="assets/images/3.jpg" title="London" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Tours;
