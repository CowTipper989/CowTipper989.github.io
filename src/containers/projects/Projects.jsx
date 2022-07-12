import React from 'react';
import { ProjectSmall } from '../../components';
import './projects.css';

const Projects = () => {
  return (
    <div className='portfolio__projects' id="projects">
        <div className='portfolio__about-heading' >
          <h1 className='gradient__text'>
            Projects
          </h1>
        </div>
        <div className='portfolio__projects-container'>
          <ProjectSmall />
        </div>
    </div>
  )
}

export default Projects