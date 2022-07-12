import React from 'react';
import logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className='portfolio__footer section__padding' id="footer">
      <div className='portfolio__footer_logo'>
        <img src={logo} alt="logo" />
      </div>
      <a href = "mailto: luke@lukewells.dev"><p>You can contact me at my email: luke@lukewells.dev</p></a>
    </div>
  )
}

export default Footer