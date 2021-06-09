import React from 'react';

import './Label.css'

class Label extends React.Component {
    render() {
        return (
            <p className={this.props.className + ' label__label'}>{this.props.children}</p>
        );
    }
}

export default Label;