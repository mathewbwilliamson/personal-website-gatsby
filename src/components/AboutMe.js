import React from 'react'
import { Link } from 'gatsby'
import './main.css'

const AboutMe = ({techStack}) => {
  const techStringInitial = techStack.slice(0, techStack.length - 1).join(', ')
  const techString = `${techStringInitial}, and ${techStack[techStack.length - 1]}`

  return (
    <div className='aboutMe center offcolor'>
      <h1>about me</h1>
      <p>I'm a <span className='highlight'>full-stack</span> web engineer.</p>
      <p>Ever since I was a kid, I <span className='highlight'>loved</span> technology. Whether it was playing around on my dad's old brick laptop, trying to program new weapons into Quake 2, or programming a web app on a state-of-the-art modern machine, it was <span className='highlight'>always fun</span>. I love figuring things out and <span className='highlight'>making them work</span>.</p>
      <p>Recently, I've been <span className='highlight'>exploring</span> modern technologies like {techString}. Seeing that there are <span className='highlight'>no limits</span> to what I can build is an amazing feeling.</p>
      <p>In addition to programming, I love playing boardgames with my wife and friends, relaxing with my two greyhounds, and traveling.</p>
    </div>
  )
}

export default AboutMe
