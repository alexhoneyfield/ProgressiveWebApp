import React from 'react';

import './Header.css';
import Title from './Title'

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <Title>{this.props.text}</Title>
            </div>
        );
    }
}

export default Header;