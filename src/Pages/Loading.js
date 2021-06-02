import React from 'react';

import './Loading.css'

import View from '../Components/View'

class Loading extends React.Component {
    render() {
        return (
            <View className="Loading">
                <div className="Spinner"></div>
            </View>
        );
    }
}

export default Loading;