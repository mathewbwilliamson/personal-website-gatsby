import React from 'react'
import './main.css'
import './projectitem.css'

const ProjectItem = (projObject) => (
  
  <div class='card'>
    <div class='cardTitle'>
      <h2>Title Goes Here</h2>
    </div>
    <div class='cardImage'>
      <img src='' />
    </div>

    <p class='cardNotes'>This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while text messages will be handled by Twillio.</p>
    <p class='cardBuiltIn'>Built in October 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Node.js, Express, MongoDB</p>
    <a href='' class='cardTryIt'>Try It Out</a>
    <p class='cardUsername'>Username</p>
    <p class='cardPassword'>Password</p>
    <a href='' class='cardGithub'>Look at the code on Github</a>
      
  </div>
  
)

export default ProjectItem
