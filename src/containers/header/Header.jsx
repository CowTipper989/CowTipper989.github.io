import React from 'react';
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
    </div>
  )
}

export default Header