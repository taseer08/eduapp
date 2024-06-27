import React from 'react'
import './navbar.css'


export default function navbar() {
  return (
    <>
    <div className='nav'>
        <div className="logo">
           <a href="/"><h1>Logo</h1></a> 
        </div>
        <div className="iteam">
                <a href='/'>Services</a >
                <a href='/'>About Us</a >
                <a href='/'>Contact</a >
                <button id='btn1'><a href="/">Lear</a></button >
                <button id='btn2'><a href="/">Sign Up</a></button >
        </div>
    </div>
    <hr />
    </>
  )

}
