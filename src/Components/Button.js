import React from 'react';

import './Button.css';

class Button extends React.Component {
    render() {

        return (
            <div className={this.props.className}>
                <button className='Button' onClick={this.props.onClick}><p className='Text'>{this.props.children}</p></button>
            </div>
        );
    }
}

export default Button;