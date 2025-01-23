import React from 'react';
import logo from '../../img/logo.png';
import '../../style/Title.css';

function Title() {
  return (
    <div className='logo-contenedor'>
      <img
        className='frecode-logo'
        src={logo}
        alt='logo-contador'
      />
    </div>
  );
}

export default Title;