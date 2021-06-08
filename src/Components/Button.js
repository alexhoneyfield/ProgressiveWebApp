import React from 'react';

import './Button.css';
import Text from './Text'

class Button extends React.Component {
    render() {

        return (
            <button className={this.props.className + ' button__button'} onClick={this.props.onClick}><Text className='button__text'>{this.props.children}</Text></button>
        );
    }
}

export default Button;