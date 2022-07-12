import React from 'react';
import './feature.css';

const Feature = ({ title, text, img }) => {
  return (
    <div className='portfolio__features-container__feature'>
        <div className='portfolio__features-container__feature-title'>
          <div />
          <h1>{title}</h1>
        </div>
        <div className='portfolio__features-container_feature-image'>
          <img src={img} />
        </div>
        <div className='portfolio__features-container__feature-text'>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature