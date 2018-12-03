import React from 'react';
import './main.css';
// import './projectitem.css';
import Img from 'gatsby-image';
import Button from './Button';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";


// https://aliahmad-code.github.io/

const ProjectItem = ({data, projectData}) => {
  console.log('Project Object is ', projectData)
  
  return (<div className='card'>
    <div className='cardTitle'>
      <h2>{projectData.title}</h2>
    </div>
    <div className='cardImage'>
      <Img fluid={projectData.screenshot} className="portfolio-item-image" />
    </div>

    <p className='cardNotes'>{projectData.notes}</p>
    <p className='cardBuiltIn'>{projectData.buildNotes}</p>
    
    <Button buttonLink={projectData.demoLink} buttonText='Try It Out'/>
    
    {projectData.demoUsername ? (
      <React.Fragment>
        <p className='cardUsername'>Username: <span className='italics'>{projectData.demoUsername}</span></p>
        <p className='cardPassword'>Password: <span className='italics'>{projectData.demoPassword}</span></p>
      </React.Fragment>
    ) : (
      null
    )}
    
    <section className='github'>
      <a href={projectData.clientGithub} target='_blank'>
        <section className='icon'>
          <IconContext.Provider value={{ color: 'grey', size: '1em' }}>
            <div className='iconSection'>
              <FaGithub />
              <p>Client</p>
            </div>
          </IconContext.Provider>
        </section>
      </a>
      
      {projectData.serverGithub ? (
        <a href={projectData.serverGithub} target='_blank'>
        <section className='icon'>
          <IconContext.Provider value={{ color: 'grey', size: '1em' }}>
            <div className='iconSection'>
            < FaGithub />
              <p>Server</p>
            </div>
          </IconContext.Provider>
        </section>
      </a>
      ) : (
        null
      )}
      
    </section>
        
  </div>)
}

export default ProjectItem
