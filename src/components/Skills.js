import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'

// https://flooyd.github.io/portfolio/

const Skills = ({techStack}) => {
  console.log('[matt][tealium] techStack', techStack)
  const halfPoint = Math.ceil(techStack.length / 2)
  const firstHalf = techStack.slice(0, halfPoint)
  const lastHalf = techStack.slice(halfPoint)
  console.log('[matt][tealium] firstHalf', firstHalf)
  console.log('[matt][tealium] lastHalf', lastHalf)
  
  
  
  return (<div className='skills center offcolor'>
    <h1>skills</h1>
      <ul>
        {firstHalf && firstHalf.map(tech => <li>{tech}</li>)}
      </ul>
      <ul>
        {lastHalf && lastHalf.map(tech => <li>{tech}</li>)}
      </ul>
    
  </div>)
}

export default Skills
