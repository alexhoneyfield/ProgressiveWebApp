import React from 'react';

import './ZoomView.css'

class ZoomView extends React.Component {
    render() {

        return (
            <div className={this.props.className + ' zoom-view__zoom-view'}>
                {this.props.children}
            </div>
        );
    }
}

export default ZoomView;