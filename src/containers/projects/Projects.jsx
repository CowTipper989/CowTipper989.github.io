import React from 'react';
import { ProjectSmall } from '../../components';
import { ReactImg } from './imports';
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
          <ProjectSmall title="Portfolio Website" text="I built this portfolio website using React" img={ReactImg} />
        </div>
    </div>
  )
}

export default Projects