import React from 'react'
import './section.css'
import web from '../images/webb.png'
import ui from '../images/uiux.jpg'
import seo from '../images/seo.jpg'

export default function Section1() {
  return (
    <>
      <div className="webtech">
          <div className="web">
              <h2>Providing Exceptional Web <br />Development Services for Your <br /> Business</h2>
              <p>At our company, We offer top-notch web developmentservices to help your bussiness thrive online. Our team of experts will create a stunning website  that is not only visually appealing but also highly fuctional and user-friendly. </p>        
          </div>
          <div className="imgd">
                  <img src={web} alt="" />
                </div>
      </div>  
      <div className="res">
          <div className="icons">
               <i class="fa-solid fa-cube"></i><br />
                <h3>Custom Solution</h3>
                <p>we specialize in developing Custom websites tailored to meet your specific business needs.</p>
          </div>
          <div className="icons1">
               <i class="fa-solid fa-cube"></i><br />
                <h3>Redponsive Design</h3>
                <p>we specialize in developing Custom websites tailored to meet your specific business needs.</p>
          </div>
      </div>
      <div className="webtech1">
          <div className="web">
            <i class="fa-solid fa-cube"></i><br />
              <h2>Transforming your digital  <br />Exprience with stunning UI/UX<br />designs</h2>
              <p>Our team of export designers creates intutitive and visually appealing user interfaces that enhance user engagement and drive business growth. </p>
          </div>
          <div className="imgu">
                  <img src={ui} alt="" />
                </div>
      </div>  
      <div className="webtech2">
          <div className="web">
            <i>Boost</i><br />
              <h2>Increase your online  <br />Visibility with our SEO<br />services</h2>
              <p>Our SEO services are designed to improve your website's search engine rankings and drive organic traffic.  with our experties and stategies, we can help you reach  your target audience and increase your online visibility. </p>
              <div className="bnt">
              <button> Learn More </button>
              <button className='bnt1'>Sign UP </button><i class="fa-solid fa-arrow-right"></i>
              </div>
          </div>
          <div className="imgs">
                  <img src={seo} alt="" />
                </div>
      </div> 
    </>
  )
}
