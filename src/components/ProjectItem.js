import React from 'react';
import './main.css';
// import './projectitem.css';
import Img from 'gatsby-image';

// https://aliahmad-code.github.io/

const ProjectItem = ({data, projectData}) => {
  console.log('Project Object is ', projectData)
  return (<div className='card'>
    <div className='cardTitle'>
      <h2>{projectData.title}</h2>
    </div>
    <div className='cardImage'>Image goes here
      {/* <Img fluid={projObject.leadlifecycle.childImageSharp} className="portfolio-item-image" /> */}
    </div>

    <p className='cardNotes'>{projectData.notes}</p>
    <p className='cardBuiltIn'>{projectData.buildNotes}</p>
    <a href={projectData.demoLink} className='cardTryIt'>Try It Out</a> 
    {/* Make these into buttons */}
    <p className='cardUsername'>Username: <span className='italics'>{projectData.demoUsername}</span></p>
    <p className='cardPassword'>Password: <span className='italics'>{projectData.demoPassword}</span></p>
    <a href='' className='cardGithub'>Look at the code on Github</a>
      
  </div>)
}

export default ProjectItem
