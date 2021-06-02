import React from 'react';

import './Header.css';
import Text from './Text'

class Header extends React.Component {
    render() {
        return (
            <div className='Header'>
                <Text className='Title'>{this.props.text}</Text>
            </div>
        );
    }
}

export default Header;