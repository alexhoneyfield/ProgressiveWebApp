import React from 'react';

import './Loading.css'

import View from '../Components/View'
import Title from '../Components/Title'

class Loading extends React.Component {
    render() {
        return (
            <View className="loading__container">
                <div className="loading__spinner"></div>
                <Title className='loading__text'>{this.props.text}</Title>
            </View>
        );
    }
}

export default Loading;