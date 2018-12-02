import React from 'react'
import { Link } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import { FaGithubSquare, FaFilePdf, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IconContext } from "react-icons";


const WorkWithMe = ({data}) => {
  console.log(data);
  return (<div className='workWithMe center offcolor'>
    <h1>work with me</h1>
    <h2>I’d love to hear from you about employment, networking or mentorship opportunities!</h2>
    <p className='work'>Download or view my resume from the links below.</p>
    <p>Send me an email, connect with me on LinkedIn or view my Github.</p>
<<<<<<< HEAD
    <section class='icon_container'>

      <a href="https://www.linkedin.com/in/matt-b-williamson/" target='_blank'>
        <section class='icon'>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FaLinkedin />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      <a href="https://github.com/mathewbwilliamson" target='_blank'>
        <section class='icon'>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FaGithubSquare />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      <a href="mailto:mathewbwilliamson@gmail.com">
        <section class='icon'>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
        </section>
      </a>

      <a href="./documents/Williamson - Web Developer Resume v2.pdf" target='_blank'>
        <section class='icon'>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FaFilePdf />
            </div>
          </IconContext.Provider>
        </section>
      </a>

=======
    <section className='icon_container'>
      <a href="https://www.linkedin.com/in/matt-b-williamson/" target='_blank'>
        <section className='icon'>
          <img height="32" width="32" src="./images/linkedin.svg" />
          {/* <Img fluid={data.linkedin.childImageSharp.fluid} /> */}
        </section>
      </a>
      <a href="https://github.com/mathewbwilliamson" target='_blank'><section className='icon'><img height="32" width="32" src="./images/github-circle.svg" /></section></a>
      <a href="mailto:mathewbwilliamson@gmail.com"><section className='icon'><img height="32" width="32" src="./images/email.svg" /></section></a>
      <a href="./documents/Williamson - Web Developer Resume v2.pdf" target='_blank'><section className='icon'><img height="32" width="32" src="./images/file-pdf-box.svg" /></section></a>
>>>>>>> 188298b39c0daff850cfa04965a539eda465d2df
    </section>
  </div>)
}

export default WorkWithMe
