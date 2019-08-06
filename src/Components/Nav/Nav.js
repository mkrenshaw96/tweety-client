import React from 'react';
import Home from './Assets/home.svg';
import Bell from './Assets/ring.svg';
import Profile from './Assets/user.svg';
import Messages from './Assets/envelope.svg';
import Dove from './Assets/dove.svg';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <Link to='/home'>
                <img src={Home} alt='Home' className='nav-icon' />
            </Link>
            <img src={Bell} alt='Bell' className='nav-icon' />
            <Link to='/compose'>
                <div id='new-icon'>
                    <img src={Dove} alt="dove" className='dove' />
                </div>
            </Link>
            <Link to='/profile'>
                <img src={Profile} alt='Profile' className='nav-icon' />
            </Link>
            <img src={Messages} alt='Messages' className='nav-icon' />
        </nav>
    )
}

export default Nav;