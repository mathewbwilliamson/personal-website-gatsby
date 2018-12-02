import React from 'react'
import './main.css'
import ProjectItem from './ProjectItem'

const Projects = ({data}) => {
  console.log(data)

  const projectsObj = [
    {
      title: 'Lead Lifecycle Designer',
      screenshot: '',
      notes: 'This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while text messages will be handled by Twillio.',
      buildNotes: 'Built in October 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Node.js, Express, MongoDB',
      demoLink: '',
      demoUsername: 'demousername',
      demoPassword: 'demopassword',
      clientGithub: '',
      serverGithub: '',
    }  
  ];

  return <div className="projects center">
    <div className='paralax-background'></div>
    <h1>Recent Projects</h1>
    <ul>
      <ProjectItem data={data} projectData={projectsObj[0]}/>
      <ProjectItem data={data} projectData={projectsObj[0]}/>
    </ul>
    {/* Add a minor ProjectItem later */}
  </div>
}

export default Projects
