import React from 'react';

import './Title.css'

import View from './View'

class Title extends React.Component {
    render() {
        return (
            <View className={this.props.className}>
                <p className='title__title'>{this.props.children}</p>
            </View>
        );
    }
}

export default Title;