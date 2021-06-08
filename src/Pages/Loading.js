import React from 'react';

import './Loading.css'

import View from '../Components/View'
import Title from '../Components/Title'

class Loading extends React.Component {
    render() {
        return (
            <View className="Loading">
                <div className="Spinner"></div>
                <Title className='LoadingText'>{this.props.text}</Title>
            </View>
        );
    }
}

export default Loading;