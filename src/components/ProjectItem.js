import React from 'react';
import './main.css';
import './projectitem.css';
import Img from 'gatsby-image';

const ProjectItem = ({projObject}) => {
  console.log(projObject)
  return (<div className='card'>
    <div className='cardTitle'>
      <h2>Title Goes Here</h2>
    </div>
    <div className='cardImage'>
    {/* <Img fluid={projObject.leadlifecycle.childImageSharp} className="portfolio-item-image" /> */}
    </div>

    <p className='cardNotes'>This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while text messages will be handled by Twillio.</p>
    <p className='cardBuiltIn'>Built in October 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Node.js, Express, MongoDB</p>
    <a href='' className='cardTryIt'>Try It Out</a>
    <p className='cardUsername'>Username</p>
    <p className='cardPassword'>Password</p>
    <a href='' className='cardGithub'>Look at the code on Github</a>
      
  </div>)
}

export default ProjectItem
