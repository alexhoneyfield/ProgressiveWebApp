import React from 'react';

import './NavBar.css';

import HomeIcon from '../Resources/home-icon.png'
import MenuIcon from '../Resources/menu-icon.png'

class NavBar extends React.Component {
    render() {
        return (
            <div className='nav-bar__nav-bar'>
                <button onClick={() => this.props.navigate(2)} className='nav-bar__icon'><img src={HomeIcon} alt='' width='30' height='30' /></button>
                <button onClick={() => this.props.navigate(3)} className='nav-bar__icon'><img src={MenuIcon} alt='' width='30' height='30' /></button>
            </div>
        );
    }
}

export default NavBar;