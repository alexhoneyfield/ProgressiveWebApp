import React from 'react';

import './ScrollView.css'

class ScrollView extends React.Component {
    render() {

        return (
            <div className={this.props.className + ' ScrollView'}>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollView;