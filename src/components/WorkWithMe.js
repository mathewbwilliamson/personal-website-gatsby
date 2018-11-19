import React from 'react'
import { Link } from 'gatsby'
import './main.css'

const WorkWithMe = () => (
  <div class='workWithMe center'>
    <h1>work with me</h1>
    <section class="workWithMe" id="workWithMeSection">
        <h2>I’d love to hear from you about employment, networking or mentorship opportunities!</h2>
        <p><a href="./documents/Williamson - Web Developer Resume v2.pdf" target='_blank'>Download or view my resume.</a></p>
        <p>Send me an email, connect with me on LinkedIn or view my Github.</p>
        <section class='icon_container'>
          <a href="https://www.linkedin.com/in/matt-b-williamson/" target='_blank'><section class='icon'><img height="32" width="32" src="./images/linkedin.svg" /></section></a>
          <a href="https://github.com/mathewbwilliamson" target='_blank'><section class='icon'><img height="32" width="32" src="./images/github-circle.svg" /></section></a>
          <a href="mailto:mathewbwilliamson@gmail.com"><section class='icon'><img height="32" width="32" src="./images/email.svg" /></section></a>
          <a href="./documents/Williamson - Web Developer Resume v2.pdf" target='_blank'><section class='icon'><img height="32" width="32" src="./images/file-pdf-box.svg" /></section></a>
        </section>
      </section>
  </div>
)

export default WorkWithMe
