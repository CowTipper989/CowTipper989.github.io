import React from 'react';
import './projectSmall.css';

const CTA = ({ title, text, img }) => { 
  return (
    <div className='portfolio__projectSmall'>
        <div className='portfolio__projectSmall-title gradient__text'>
          <h1>{title}</h1>
          <div />
        </div>
        <div className='portfolio__projectSmall-text'>
          <p>{text}</p>
        </div>
        <div className='portfolio__projectSmall-tags'>
          <img src={img} />
        </div>
    </div>
  )
}


export default CTA