import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import { FaGithubSquare, FaFilePdf, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";


const WorkWithMe = ({data}) => {
  console.log(data);
  return (<div className='workWithMe center'>
    <div className='paralax-background'></div>
    <h1>work with me</h1>
    <h2>I’d love to hear from you about employment or networking!</h2>
    {/* <p className='work'>Download or view my resume from the links below.</p> */}
    <p>Connect with me on LinkedIn, view my Github, or send me an email.</p>
    <section className='icon_container'>

      <a href="https://www.linkedin.com/in/matt-b-williamson/" target='_blank'>
        <section className='icon'>
          <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
            <div>
              <FaLinkedin />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      <a href="https://github.com/mathewbwilliamson" target='_blank'>
        <section className='icon'>
          <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
            <div>
              <FaGithubSquare />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      <a href="mailto:mathewbwilliamson@gmail.com">
        <section className='icon'>
          <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
            <div>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      {/* <a href="./documents/Williamson - Web Developer Resume v2.pdf" target='_blank'>
        <section className='icon'>
          <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
            <div>
              <FaFilePdf />
            </div>
          </IconContext.Provider>
        </section>
      </a> */}

    </section>
  </div>)
}

export default WorkWithMe
