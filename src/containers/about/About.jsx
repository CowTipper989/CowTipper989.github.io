import React from 'react';
import { Feature } from '../../components';
import { UTD } from './imports';
import './about.css';

const About = () => {
  return (
    <div className='portfolio__about section__margin' id="about">
        <div className='portfolio__about-heading' >
          <h1 className='gradient__text'>
            About Me
          </h1>
        </div>
        <div className='portfolio__about-container' >
          <Feature title="Education" text="I am a student currently studying Computer Science at the University of Texas at Dallas." img={UTD} />
          <Feature title="Education" text="I am a student currently studying Computer Science at the University of Texas at Dallas." img={UTD} />
          <Feature title="Education" text="I am a student currently studying Computer Science at the University of Texas at Dallas." img={UTD} />
        </div>
    </div>
  )
}

export default About