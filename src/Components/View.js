import React from 'react';

import './View.css'

class View extends React.Component {
    render() {

        return (
            <div className={this.props.className + ' View'}>
                {this.props.children}
            </div>
        );
    }
}

export default View;