import React from 'react'
import Button1 from '../Components/Button1'
function About() {
  return ( 
    <>
              <div id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="titlepage">
                  <h2>Our journey of travel</h2>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia dolore molestias reiciendis minima, quibusdam, quis est accusantium velit dignissimos consequuntur placeat saepe voluptatibus ipsa. Mollitia quasi debitis optio reprehenderit?</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="about-box">
                    <p> <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quam dolorum temporibus et maxime, nihil omnis minus deserunt dolor velit quidem autem sapiente vitae unde totam accusamus quos, commodi nesciunt cupiditate debitis suscipit consequuntur harum vel qui. Aliquid, corporis. Dolor, exercitationem culpa. Laborum, repellendus molestias dolore consequuntur cumque veritatis hic aliquid minima perferendis explicabo distinctio? Adipisci alias labore itaque voluptas voluptates ut aperiam sit minus repellendus nobis maxime.</span></p>
                    <div className="palne-img-area">
                      <img src="assets/images/plane-img.png" alt="images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button1 text="Read More"/>
          </div>
        </div>

    </>
  )
}

export default About
