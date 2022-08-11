import React from 'react';

import './Logo.scss';
import logo from './assets/img/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
