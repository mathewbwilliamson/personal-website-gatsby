import React from 'react'
import './main.css'
import ProjectItem from './ProjectItem'

const Projects = ({data}) => {
  console.log('data is ', data)

  const projectsObj = [
    // {
    //   title: 'German Language Learning',
    //   screenshot: data.leadlifecycle.childImageSharp.fluid,
    //   notes: 'This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while text messages will be handled by Twillio.',
    //   buildNotes: 'Built in October 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Node.js, Express, MongoDB',
    //   demoLink: 'https://mathew-lead-lifecycle-client.netlify.com/',
    //   demoUsername: 'demousername',
    //   demoPassword: 'demopassword',
    //   clientGithub: 'https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-client',
    //   serverGithub: 'https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-server',
    // },
    {
      title: 'This Personal Portfolio',
      screenshot: data.portfolio.childImageSharp.fluid, //TODO: Get an image of this
      notes: 'This website is built to showcase my skills and my projects. It was built in order to learn Gatsby.js, GraphQL, and other assorted technologies.',
      buildNotes: 'Built in November 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Gatsby.js, and GraphQL',
      demoLink: 'https://',
      demoUsername: null,
      demoPassword: null,
      clientGithub: 'https://github.com/mathewbwilliamson/personal-website-gatsby',
      serverGithub: null,
    },
    {
      title: 'Lead Lifecycle Designer',
      screenshot: data.leadlifecycle.childImageSharp.fluid,
      notes: 'This web-based app is designed to track leads for a service-oriented business. When a lead is entered, the app will automatically add upcoming "events" to the lead. These events will be automated emails, automated text messages, and reminders to call the lead. The emails will be eventually handled by Send Grid while text messages will be handled by Twillio.',
      buildNotes: 'Built in October 2018 with HTML, CSS, CSS Grid, CSS Flexbox, React, Redux, Node.js, Express, MongoDB',
      demoLink: 'https://mathew-lead-lifecycle-client.netlify.com/',
      demoUsername: 'demousername',
      demoPassword: 'demopassword',
      clientGithub: 'https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-client',
      serverGithub: 'https://github.com/thinkful-ei24/mathew-lead-lifecycle-design-server',
    },
    {
      title: 'Note Storage App',
      screenshot: data.noteful.childImageSharp.fluid,
      notes: 'This web-based app was built in order to learn a RESTful back-end, along with a jQuery front end. It allows a user to store notes and information using tags and folders.',
      buildNotes: 'Built in September 2018 with HTML, CSS, jQuery, Node.js, Express, MongoDB',
      demoLink: 'https://matt-noteful-app-v3.herokuapp.com/',
      demoUsername: null,
      demoPassword: null,
      clientGithub: 'https://github.com/mathewbwilliamson/mathew-noteful-app-v3',
      serverGithub: null,
    }
  ];

  return <div className="projects center">
    <div className='paralax-background'></div>
    <h1>Recent Projects</h1>
    <ul>
      {projectsObj && projectsObj.map(project => {
        return <ProjectItem data={data} projectData={project}/>
      })}
    </ul>
    {/* Add a minor ProjectItem later */}
  </div>
}

export default Projects
