import MainLogo from '@assets/svg/mainLogo.svg';
import React from 'react';

import "../../../App.css";

const Header: React.FC = () => {
  return (
    <header className='top_header'>
      <div className='top_header_page'>
        <MainLogo />
      </div>
    </header>
  );
}

export default Header;
