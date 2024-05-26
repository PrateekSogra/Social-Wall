import React from 'react'
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
          <h1>Social Media Wall</h1>
        </div>
        <div className='header__right'>
            <Avatar/>
            <NotificationsIcon fontSize='large'/>
        </div>
    </div>
  )
}

export default Header