import React from 'react';

import './Button.css';
import Text from './Text'

class Button extends React.Component {
    render() {

        return (
            <div className={this.props.className}>
                <button className='Button' onClick={this.props.onClick}><Text>{this.props.children}</Text></button>
            </div>
        );
    }
}

export default Button;