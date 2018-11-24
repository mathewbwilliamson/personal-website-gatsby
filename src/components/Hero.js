import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import Navbar from './Navbar';

const Hero = () => (
  <React.Fragment>
    <div class='heroContainer center'>
      <Navbar />
      <div class='paralax-background'></div>
      <h1><span class='thin'>Hi, I'm </span>Matt Williamson</h1>
      <h2>Web Designer and Programmer</h2>
      <div class='bottomCurve'></div> 
      {/* Need to figure the bottomCurve out sometime! */}
    </div>
  </React.Fragment>
  
  
  
)

export default Hero
