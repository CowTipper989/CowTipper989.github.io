import React from 'react';
import { GitHub, LinkedIn } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='portfolio__brand section__padding'>
        <div>
          <a href="https://github.com/CowTipper989"><img className='portfolio__brand-GitHub' src={GitHub} alt="GitHub" /> </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/luke-w-775514188"><img className='portfolio__brand-LinkedIn' src={LinkedIn} alt="GitHub" /> </a>
        </div>
    </div>
  )
}

export default Brand