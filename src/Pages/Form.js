import React from 'react'
import FormField from '../Components/FormField'

function Form() {
  return (
    <>
      <section>
          <div className="banner-main">
          <div class="dull-image-container">
  <img class="dull-image" src="assets/images/travel-banner.jpg" alt="#" />
  <div class="dull-overlay"></div>
</div>
            <div className="container">
              <div className="text-bg">
                <h1>Travel<br /><strong className="white">with us</strong></h1>
                <div className="button_section"> <a className="main_bt" href="#">Read More</a></div>
                <div className="container">
                  

                  <FormField/>

                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Form
