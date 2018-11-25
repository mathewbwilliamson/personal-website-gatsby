import React from 'react'
import './main.css'
import ProjectItem from './ProjectItem'

const Projects = () => (
  
  <div class="projects center">
    <div class='paralax-background'></div>
    <h1>Recent Projects</h1>
    <ul>
      <ProjectItem />
      <ProjectItem />
    </ul>
    {/* Add a minor ProjectItem later */}
  </div>

)

export default Projects
