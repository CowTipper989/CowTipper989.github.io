import React from 'react';
import { Feature } from '../../components';
import { UTD, OIT, DD } from './imports';
import './about.css';

const About = () => {
  return (
    <div className='portfolio__about' id="about">
        <div className='portfolio__about-heading' >
          <h1 className='gradient__text'>
            About Me
          </h1>
        </div>
        <div className='portfolio__about-container' >
          <Feature title="Education" text="I am a student currently studying Computer Science at the University of Texas at Dallas." img={UTD} />
          <Feature title="Work Experience - UT Dallas OIT" text="I currently work for The Office of Information Technology at UT Dallas." img={OIT} />
          <Feature title="Work Experience - Doordash" text="I currently work as an independent contractor for Doordash performing food delivery." img={DD} />
        </div>
    </div>
  )
}

export default About