import React from 'react'
import FormField from '../Components/FormField'
import Button2 from '../Components/Button2'

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
                <Button2 text="Read More" />
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
