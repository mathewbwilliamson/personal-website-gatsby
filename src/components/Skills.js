import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'

// https://flooyd.github.io/portfolio/

const Skills = ({data}) => {
  console.log(data);
  return (<div className='skills center offcolor'>
  {/* Add skills to here, create colored dots or something */}
    <h1>skills</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript (and ES6)</li>
      </ul>
      <ul>
        <li>jQuery</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    
  </div>)
}

export default Skills
