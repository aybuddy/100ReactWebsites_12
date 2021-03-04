import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header__icon' fontSize='large' />
      </IconButton>
      <img
        className='header__logo'
        src='https://www.bestdesigns.co/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png'
        alt='tinder logo'
      />
      <IconButton>
        <ForumIcon className='header__icon' fontSize='large' />
      </IconButton>
    </div>
  );
}

export default Header;