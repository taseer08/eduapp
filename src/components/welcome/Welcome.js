import React from 'react'
import './welcom.css'

export default function Welcome() {
  return (
    <>
        <div className='welcome'>
            <div className="wel">
                <h1>Transforming Tech services <br /> <span>for the Digital Age</span> </h1>
                <h6>Welcome to our website. Where we specialize in Web Development, UI/UX design, SEO, and <br />
                <span>digital marketing. Our team of experts  is here to help you succeed online.</span></h6>
            </div>
            <div className="btn">
                <button><a href="/">Learn More</a></button>
                <button  id='btn1'><a href="/">Sign Up</a></button>
            </div>
        </div>
    </>
  )
}
