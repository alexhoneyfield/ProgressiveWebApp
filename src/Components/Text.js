import React from 'react';

import './Text.css'

import View from './View'

class Text extends React.Component {
    render() {
        return (
            <View className={this.props.className === undefined ? '' : this.props.className}>
                <p className='text__text'>{this.props.children}</p>
            </View>
        );
    }
}

export default Text;