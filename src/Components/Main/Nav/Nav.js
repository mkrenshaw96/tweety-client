import React from 'react';
import Home from './Assets/home.svg';
import Bell from './Assets/ring.svg';
import Profile from './Assets/user.svg';
import Messages from './Assets/envelope.svg';
import Dove from './Assets/dove.svg';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <img src={Home} alt='Home' className='nav-icon' />
            <img src={Bell} alt='Bell' className='nav-icon' />
            <div id='new-icon'>
                <img src={Dove} alt="dove" className='dove' />
            </div>
            <img src={Profile} alt='Profile' className='nav-icon' />
            <img src={Messages} alt='Messages' className='nav-icon' />
        </nav>
    )
}

export default Nav;