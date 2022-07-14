import React from 'react';
import { ProjectSmall } from '../../components';
import { ReactImg } from './imports';
import './header.css';

const Header = () => {
  return (
    <div className='portfolio__header section__padding' id ="home">
        <div className='portfolio__header-content'>
          <h1 className='gradient__text'>
            Luke's Portfolio
          </h1>
          <p>
            Hello! Welcome to my portfolio.
          </p>
          <p>
          This website will host some of my projects, and also my work experience and education.
          </p>
        </div>
        <div className='portfolio__header-image'>
        <ProjectSmall title="Portfolio Website" text="I built this portfolio website using React" img={ReactImg} />
        </div>
    </div>
  )
}

export default Header