import React from 'react'
import './main.css'
import ProjectItem from './ProjectItem'

const Projects = ({data}) => {
  console.log(data)
  return <div className="projects center">
    <div className='paralax-background'></div>
    <h1>Recent Projects</h1>
    <ul>
      <ProjectItem data={data}/>
      <ProjectItem data={data}/>
    </ul>
    {/* Add a minor ProjectItem later */}
  </div>
}

export default Projects
