import React from 'react';

import './ZoomView.css'

class ZoomView extends React.Component {

    render() {

        const style = {
            width: this.props.width * this.props.scale,
            height: this.props.height * this.props.scale
        }

        return (
            <div className={this.props.className + ' zoom-view__zoom-view'}>
                <div className='zoom-view__container' style={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ZoomView;